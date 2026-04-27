/* ==========================================================================
FIXTINTAS — admin.js
Módulo: Autenticação, Usuários, Painel Admin, Persistência, Segurança
Versão: 2.0 | Arquitetura escalável para backend futuro
========================================================================== */
'use strict';
/* --------------------------------------------------------------------------
1. CONSTANTES E CHAVES DE ARMAZENAMENTO
-------------------------------------------------------------------------- */
const DB = {
USERS : 'fixtintas_users',
SESSION : 'fixtintas_sessao',
PRODUCTS : 'fixtintas_products_override', // overrides de estoque/promo
ORDERS : 'fixtintas_orders',
INTEGRITY: 'fixtintas_integrity',
};
/* --------------------------------------------------------------------------
2. INTEGRIDADE — Detecta alteração manual do localStorage
-------------------------------------------------------------------------- */
/** Gera checksum simples do banco de usuários */
function _checksum(data) {
const str = JSON.stringify(data);
let hash = 5381;
for (let i = 0; i < str.length; i++) {
hash = ((hash << 5) + hash) + str.charCodeAt(i);
hash |= 0;
}
return Math.abs(hash).toString(36);
}
/** Salva checksum após qualquer escrita no banco de usuários */
function _saveIntegrity(users) {
localStorage.setItem(DB.INTEGRITY, _checksum(users));
}
/** Valida a integridade do banco. Retorna true se íntegro */
function _verificarIntegridade() {
const users = _getRawUsers();
const salvo = localStorage.getItem(DB.INTEGRITY);
if (!salvo && users.length === 0) return true; // banco vazio, sem problema
return _checksum(users) === salvo;
}
/** Retorna o banco bruto sem validação */
function _getRawUsers() {
try { return JSON.parse(localStorage.getItem(DB.USERS)) || []; }
catch { return []; }
}
/* --------------------------------------------------------------------------
3. BANCO DE USUÁRIOS
-------------------------------------------------------------------------- */
function _getUsers() {
if (!_verificarIntegridade()) {
console.warn('[FixTintas] Integridade do banco de usuários comprometida.');
showToast(' Dados de usuário corrompidos. Faça login novamente.', 'danger');
_encerrarSessao();
return [];
}
return _getRawUsers();
}
function _saveUsers(users) {
localStorage.setItem(DB.USERS, JSON.stringify(users));
_saveIntegrity(users);
}
/* --------------------------------------------------------------------------
4. HASH DE SENHA
Proteção local — para produção use bcrypt via backend
-------------------------------------------------------------------------- */
function _hashSenha(senha) {
const salt = 'fixtintas_salt_2026';
const str = senha + salt;
let hash = 0;
for (let i = 0; i < str.length; i++) {
const ch = str.charCodeAt(i);
hash = ((hash << 5) - hash) + ch;
hash |= 0;
}
return Math.abs(hash).toString(36) + str.length.toString(36);
}
/* --------------------------------------------------------------------------
5. CRUD DE USUÁRIOS
-------------------------------------------------------------------------- */
function _findUserByEmail(email) {
return _getUsers().find(u => u.email.toLowerCase() === email.toLowerCase());
}
function _criarUsuario({ nome, email, senha }) {
const users = _getUsers();
if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
return { ok: false, erro: 'Este e-mail já está cadastrado.' };
}
const usuario = {
id: Date.now().toString(36) + Math.random().toString(36).slice(2),
nome,
email,
senhaHash: _hashSenha(senha),
foto: null,
isAdmin: users.length === 0, // primeiro usuário é admin
createdAt: new Date().toISOString(),
endereco: null,
};
users.push(usuario);
_saveUsers(users);
return { ok: true, usuario };
}
function _autenticarUsuario(email, senha) {
const usuario = _findUserByEmail(email);
if (!usuario) return { ok: false, erro: 'E-mail não encon
if (usuario.senhaHash !== _hashSenha(senha)) return { ok: false, erro: 'Senha incorreta.
return { ok: true, usuario };
}
function _atualizarUsuario(campos) {
const sessao = _getSessaoRaw();
if (!sessao?.userId) return false;
const users = _getUsers();
const idx = users.findIndex(u => u.id === sessao.userId);
if (idx === -1) return false;
Object.assign(users[idx], campos);
_saveUsers(users);
if (campos.nome) localStorage.setItem('usuario_nome', campos.nome);
if (campos.email) localStorage.setItem('usuario_email', campos.email);
return true;
}
/* --------------------------------------------------------------------------
6. SESSÃO
-------------------------------------------------------------------------- */
function _getSessaoRaw() {
try {
return JSON.parse(localStorage.getItem(DB.SESSION))
|| JSON.parse(sessionStorage.getItem(DB.SESSION));
} catch { return null; }
}
function _getUsuarioSessao() {
const sessao = _getSessaoRaw();
if (!sessao?.userId) return null;
// Lê do banco com validação de integridade
const users = _getRawUsers(); // leitura direta para não fazer loop em _getUsers
return users.find(u => u.id === sessao.userId) || null;
}
function _iniciarSessao(usuario, lembrar = true) {
const sessao = { userId: usuario.id, email: usuario.email };
const storage = lembrar ? localStorage : sessionStorage;
storage.setItem(DB.SESSION, JSON.stringify(sessao));
localStorage.setItem('usuario_nome', usuario.nome);
localStorage.setItem('usuario_email', usuario.email);
}
function _encerrarSessao() {
localStorage.removeItem(DB.SESSION);
localStorage.removeItem('usuario_nome');
localStorage.removeItem('usuario_email');
sessionStorage.removeItem(DB.SESSION);
}
/* --------------------------------------------------------------------------
7. MIGRAÇÃO DO SISTEMA LEGADO
-------------------------------------------------------------------------- */
function _migrarUsuarioLegado() {
const nomeLegado = localStorage.getItem('usuario_nome');
const emailLegado = localStorage.getItem('usuario_email');
if (!nomeLegado || !emailLegado) return;
if (localStorage.getItem(DB.SESSION)) return;
let usuario = _findUserByEmail(emailLegado);
if (!usuario) {
const res = _criarUsuario({ nome: nomeLegado, email: emailLegado, senha: '_legado_' +
if (res.ok) usuario = res.usuario;
}
if (usuario) _iniciarSessao(usuario, true);
}
/* --------------------------------------------------------------------------
8. PERSISTÊNCIA DE PRODUTOS (estoque + promo)
Salva apenas os campos mutáveis — não replica o catálogo inteiro.
Estrutura: { [productId]: { estoque, promo, oldPrice } }
-------------------------------------------------------------------------- */
function _getProductOverrides() {
try { return JSON.parse(localStorage.getItem(DB.PRODUCTS)) || {}; }
catch { return {}; }
}
function _saveProductOverrides(overrides) {
localStorage.setItem(DB.PRODUCTS, JSON.stringify(overrides));
}
/** Aplica overrides salvos (estoque, promo) ao array global de produtos */
function _aplicarOverridesProdutos() {
const overrides = _getProductOverrides();
if (!overrides || typeof products === 'undefined') return;
products.forEach(p => {
const o = overrides[p.id];
if (!o) return;
if (o.estoque !== undefined) p.estoque = o.estoque;
if (o.promo !== undefined) p.promo = o.promo;
if (o.oldPrice !== undefined) p.oldPrice = o.oldPrice;
});
}
/** Persiste o estado atual de um produto (estoque + promo) */
function _persistirProduto(productId) {
const p = (typeof products !== 'undefined') && products.find(p => p.id === productId);
if (!p) return;
const overrides = _getProductOverrides();
overrides[p.id] = { estoque: p.estoque ?? 0, promo: !!p.promo, oldPrice: p.oldPrice ??
_saveProductOverrides(overrides);
}
/** Persiste todos os produtos de uma vez */
function _persistirTodosProdutos() {
if (typeof products === 'undefined') return;
const overrides = {};
products.forEach(p => {
overrides[p.id] = { estoque: p.estoque ?? 0, promo: !!p.promo, oldPrice: p.oldPrice ?
});
_saveProductOverrides(overrides);
}
/* --------------------------------------------------------------------------
9. CONTROLE DE ESTOQUE
-------------------------------------------------------------------------- */
function getEstoque(productId) {
const p = (typeof products !== 'undefined') && products.find(p => p.id === productId);
return p ? (p.estoque ?? 0) : 0;
}
function decrementarEstoque(itens) {
itens.forEach(item => {
const p = (typeof products !== 'undefined') && products.find(p => p.id === item.produ
if (p) p.estoque = Math.max(0, (p.estoque ?? 0) - item.quantity);
});
_persistirTodosProdutos();
}
function validarEstoqueCarrinho() {
if (typeof cart === 'undefined') return [];
return cart.filter(item => {
const est = getEstoque(item.productId);
return item.quantity > est;
}).map(item => ({
nome: item.name, solicitado: item.quantity, disponivel: getEstoque(item.productId)
}));
}
/** Verifica se pode adicionar N unidades ao carrinho */
function podeAdicionarAoCarrinho(productId, qtdSolicitada = 1) {
const p = (typeof products !== 'undefined') && products.find(p => p.id === productI
if (!p) return { ok: false, erro: 'Produto não encontrado.' };
const estoque = p.estoque ?? 0;
if (estoque <= 0) return { ok: false, erro: 'Produto sem estoque.' };
// Quantidade já no carrinho
const noCarrinho = (typeof cart !== 'undefined')
? cart.filter(i => i.productId === productId).reduce((s, i) => s + i.quantity, : 0;
0)
if (noCarrinho + qtdSolicitada > estoque) {
return { ok: false, erro: `Estoque insuficiente. Disponível: ${estoque - noCarrinho}
}
return { ok: true };
}
/* --------------------------------------------------------------------------
10. PAINEL ADMIN — RENDERIZAÇÃO
-------------------------------------------------------------------------- */
function abrirPainelAdmin() {
const usuario = _getUsuarioSessao();
if (!usuario?.isAdmin) {
showToast(' return;
Acesso restrito a administradores.', 'danger');
}
// Fecha modal de perfil se estiver aberto
const perfilEl = document.getElementById('minhaContaModal');
const perfilInst = perfilEl && bootstrap.Modal.getInstance(perfilEl);
if (perfilInst) perfilInst.hide();
const adminEl = document.getElementById('adminModal');
if (!adminEl) return;
const url = new URL(window.location);
url.searchParams.set('painel', 'admin');
window.history.pushState({ painel: 'admin' }, '', url);
renderAdminAba('produtos');
const adminModal = bootstrap.Modal.getOrCreateInstance(adminEl);
adminEl.addEventListener('hidden.bs.modal', () => {
const clean = new URL(window.location);
clean.searchParams.delete('painel');
window.history.pushState({}, '', clean);
}, { once: true });
perfilInst
? perfilEl.addEventListener('hidden.bs.modal', () => adminModal.show(), { once: true
: adminModal.show();
}
function renderAdminAba(aba) {
document.querySelectorAll('.admin-tab-btn').forEach(btn => {
btn.classList.toggle('ativa', btn.dataset.aba === aba);
});
const body = document.getElementById('adminTabContent');
if (!body) return;
const map = {
produtos : _renderAdminProdutos,
usuarios : _renderAdminUsuarios,
pedidos : _renderAdminPedidos,
adicionar: _renderAdminAdicionarProduto,
exportar : _renderAdminExportar,
};
body.innerHTML = map[aba] ? map[aba]() : '';
}
/* Aba Produtos */
function _renderAdminProdutos() {
const rows = (typeof products !== 'undefined' ? products : []).map(p => {
const est = p.estoque ?? 0;
const cls = est === 0 ? 'text-danger' : est <= 5 ? 'text-warning' : 'text-success';
const icon = est === 0 ? ' ' : est <= 5 ? ' ' : ' ';
return `
<tr>
<td><img src="${p.img}" width="36" height="36" class="rounded" style="object-fit:
<td style="font-size:0.77rem;max-width:140px;">
<div class="fw-bold text-truncate">${p.name}</div>
<small class="text-muted">${p.category} › ${p.sub}</small>
</td>
<td><span class="badge bg-secondary" style="font-size:0.58rem;">${p.brand.toUpper
<td style="font-size:0.78rem;white-space:nowrap;">R$&nbsp;${p.price.toFixed(2)}</
<td>
<div class="d-flex align-items-center gap-1">
<span class="${cls}" style="font-size:0.7rem;">${icon}</span>
<input type="number" min="0" value="${est}"
class="form-control form-control-sm p-0 text-center admin-estoque-
style="width:48px;font-size:0.73rem;"
onchange="adminAtualizarEstoque(${p.id}, this.value)">
</div>
</td>
<td>
<button class="badge border-0 ${p.promo ? 'bg-danger' : 'bg-secondary bg-opac
style="cursor:pointer;font-size:0.63rem;"
onclick="adminAlternarPromo(${p.id})"
title="${p.promo ? 'Remover promoção' : 'Promover'}">
${p.promo ? ' Promo' : 'Normal'}
</button>
</td>
<td>
<button class="btn btn-sm btn-outline-danger py-0 px-1" onclick="adminRemover
<i class="fas fa-trash" style="font-size:0.65rem;"></i>
</button>
</td>
</tr>`;
}).join('');
return `
<div class="admin-section-header">
<h6 class="mb-0"><i class="fas fa-box me-2"></i>Catálogo (${(typeof products !==
<button class="btn btn-sm btn-warning" onclick="renderAdminAba('adicionar')">
<i class="fas fa-plus me-1"></i> Novo
</button>
</div>
<div class="table-responsive" style="max-height:400px;overflow-y:auto;">
<table class="table table-sm table-hover align-middle mb-0">
<thead class="table-light sticky-top">
<tr>
<th style="width:44px;"></th>
<th>Produto</th>
<th>Marca</th>
<th>Preço</th>
<th>Estoque</th>
<th>Status</th>
<th style="width:34px;"></th>
</tr>
</thead>
<tbody>${rows || '<tr><td colspan="7" class="text-center text-muted py-3">Nen
</table>
</div>`;
}
/* Aba Usuários */
function _renderAdminUsuarios() {
const users = _getUsers();
if (!users.length) return `<div class="text-center text-muted py-4"><i class="fas fa-user
const rows = users.map(u => {
const av = _gerarDadosAvatar(u.nome);
return `
<tr>
<td><div class="usuario-avatar-mini" style="background:${av.cor};">${av.iniciais}
<td>
<div class="fw-bold" style="font-size:0.79rem;">${u.nome}</div>
<div class="text-muted" style="font-size:0.68rem;">${u.email}</div>
</td>
<td style="font-size:0.7rem;">${new Date(u.createdAt).toLocaleDateString('pt-BR')
<td>${u.isAdmin
? '<span class="badge bg-warning text-dark" style="font-size:0.62rem;">Admin<
: '<span class="badge bg-light text-muted border" style="font-size:0.62rem;">
<td>
<div class="d-flex gap-1">
<button class="btn btn-sm btn-outline-primary py-0 px-1" onclick="_render
<i class="fas fa-chart-line" style="font-size:0.65rem;"></i>
</button>
<button class="btn btn-sm btn-outline-${u.isAdmin ? 'secondary' : 'warnin
onclick="adminAlternarAdmin('${u.id}')"
title="${u.isAdmin ? 'Remover admin' : 'Tornar admin'}">
<i class="fas fa-${u.isAdmin ? 'user-minus' : 'user-shield'}" style="
</button>
</div>
</td>
</tr>`;
}).join('');
return `
<div class="admin-section-header">
<h6 class="mb-0"><i class="fas fa-users me-2"></i>Usuários (${users.length})</h6>
</div>
<div class="table-responsive">
<table class="table table-sm table-hover align-middle mb-0">
<thead class="table-light sticky-top">
<tr><th></th><th>Usuário</th><th>Cadastro</th><th>Perfil</th><th></th></t
</thead>
<tbody>${rows}</tbody>
</table>
</div>`;
}
/* Relatório detalhado de usuário */
function _renderAdminDetalheUsuario(userId) {
const u = _getUsers().find(u => u.id === userId);
if (!u) return;
const todos = JSON.parse(localStorage.getItem(DB.ORDERS) || '[]');
const pedidos = todos.filter(p => p.email === u.email || p.userId === u.id);
const totalGasto const pagamentos = {};
const produtosFreq = {};
= pedidos.reduce((s, p) => s + (p.total || 0), 0);
pedidos.forEach(ped => {
const pag = ped.pagamento || 'Não informado';
pagamentos[pag] = (pagamentos[pag] || 0) + 1;
(ped.itens || []).forEach(item => {
produtosFreq[item.name] = (produtosFreq[item.name] || 0) + item.quantity;
});
});
const av = _gerarDadosAvatar(u.nome);
const body = document.getElementById('adminTabContent');
if (!body) return;
const topPagamentos = Object.entries(pagamentos)
.sort((a, b) => b[1] - a[1])
.map(([k, v]) => `<span class="badge bg-primary me-1 mb-1">${k} (${v}x)</span>`).join
const topProdutos = Object.entries(produtosFreq)
.sort((a, b) => b[1] - a[1]).slice(0, 5)
.map(([k, v]) => `<li class="small py-1 border-bottom">${k} — <strong>${v} un.</stron
body.innerHTML = `
<div class="admin-section-header">
<h6 class="mb-0"><i class="fas fa-user me-2"></i>${u.nome}</h6>
<button class="btn btn-sm btn-outline-secondary" onclick="renderAdminAba('usuario
<i class="fas fa-arrow-left me-1"></i> Voltar
</button>
</div>
<div class="row g-3 p-2">
<div class="col-md-4">
<div class="p-3 rounded-3 border h-100">
<div class="usuario-avatar-mini mb-2" style="width:48px;height:48px;font-
<div class="fw-bold">${u.nome}</div>
<div class="text-muted small">${u.email}</div>
<div class="small mt-2"><i class="fas fa-calendar me-1 text-primary"></i>
<div class="small mt-1"><i class="fas fa-shield-alt me-1 text-warning"></
</div>
</div>
<div class="col-md-8">
<div class="row g-2 mb-3">
<div class="col-4"><div class="p-2 rounded border text-center"><div class
<div class="col-4"><div class="p-2 rounded border text-center"><div class
<div class="col-4"><div class="p-2 rounded border text-center"><div class
</div>
${topPagamentos ? `<div class="mb-2"><small class="fw-bold text-muted d-block
${topProdutos ? `<div><small class="fw-bold text-muted d-block mb-1">MAIS C
</div>
${pedidos.length > 0 ? `
<div class="col-12">
<small class="fw-bold text-muted">HISTÓRICO:</small>
<div class="table-responsive mt-1" style="max-height:180px;overflow-y:auto;">
<table class="table table-sm table-hover align-middle mb-0">
<thead class="table-light sticky-top"><tr><th>#</th><th>Data</th><th>
<tbody>
${pedidos.map(p => `
<tr>
<td class="text-primary fw-bold">#${p.id}</td>
<td>${p.data}</td>
<td>${(p.itens||[]).length}</td>
<td>R$&nbsp;${(p.total||0).toFixed(2)}</td>
<td>${p.pagamento||'—'}</td>
<td><button class="btn btn-sm btn-outline-primary py-0 </tr>`).join('')}
px-1"
</tbody>
</table>
</div>
</div>` : ''}
</div>`;
}
/* Aba Pedidos */
function _renderAdminPedidos() {
let todos = [];
try { todos = JSON.parse(localStorage.getItem(DB.ORDERS)) || []; } catch {}
if (!todos.length) return `<div class="text-center text-muted py-4"><i class="fas fa-rece
const receita = todos.reduce((s, p) => s + (p.total || 0), 0);
const rows = todos.map(p => `
<tr>
<td class="fw-bold text-primary" style="font-size:0.78rem;">#${p.id}</td>
<td style="font-size:0.73rem;">${p.data}</td>
<td style="font-size:0.73rem;">${(p.itens||[]).length} item(ns)</td>
<td class="fw-bold" style="font-size:0.78rem;">R$&nbsp;${(p.total||0).toFixed(2)}
<td><span class="badge bg-success" style="font-size:0.62rem;">Concluído</span></t
<td>
<button class="btn btn-sm btn-outline-primary py-0 px-1"
onclick="abrirModalComprovante(${JSON.stringify(p).replace(/"/g,'&quo
title="Ver comprovante">
<i class="fas fa-receipt" style="font-size:0.65rem;"></i>
</button>
</td>
</tr>`).join('');
return `
<div class="admin-section-header">
<h6 class="mb-0"><i class="fas fa-receipt me-2"></i>Pedidos (${todos.length})</h6
<span class="badge bg-success">Receita: R$&nbsp;${receita.toFixed(2)}</span>
</div>
<div class="table-responsive" style="max-height:400px;overflow-y:auto;">
<table class="table table-sm table-hover align-middle mb-0">
<thead class="table-light sticky-top">
<tr><th>#</th><th>Data</th><th>Itens</th><th>Total</th><th>Status</th><th
</thead>
<tbody>${rows}</tbody>
</table>
</div>`;
}
/* Aba Exportar/Importar */
function _renderAdminExportar() {
return `
<div class="admin-section-header">
<h6 class="mb-0"><i class="fas fa-database me-2"></i>Backup e Restauração</h6>
</div>
<div class="p-3">
<div class="row g-3">
<div class="col-md-6">
<div class="p-3 border rounded-3">
<h6 class="fw-bold mb-1"><i class="fas fa-download me-2 text-success"
<p class="small text-muted mb-3">Gera um arquivo JSON com todos os da
<div class="d-flex flex-column gap-2">
<button class="btn btn-sm btn-outline-success" onclick="adminExpo
<button class="btn btn-sm btn-outline-secondary" onclick="adminEx
<button class="btn btn-sm btn-outline-secondary" onclick="adminEx
<button class="btn btn-sm btn-outline-secondary" onclick="adminEx
</div>
</div>
</div>
<div class="col-md-6">
<div class="p-3 border rounded-3">
<h6 class="fw-bold mb-1"><i class="fas fa-upload me-2 text-warning"><
<p class="small text-muted mb-2">Selecione um JSON exportado anterior
<div class="alert alert-warning py-2 px-3 mb-3" style="font-size:0.75
<i class="fas fa-exclamation-triangle me-1"></i>
Esta ação é irreversível. Faça um backup antes.
</div>
<input type="file" id="importFileInput" accept=".json" class="form-co
<div id="importStatus" class="small"></div>
</div>
</div>
</div>
</div>`;
}
/* Aba Novo Produto */
function _renderAdminAdicionarProduto() {
return `
<div class="admin-section-header">
<h6 class="mb-0"><i class="fas fa-plus me-2"></i>Novo Produto</h6>
<button class="btn btn-sm btn-outline-secondary" onclick="renderAdminAba('produto
<i class="fas fa-arrow-left me-1"></i> Voltar
</button>
</div>
<div class="p-2">
<div class="row g-2">
<div class="col-12">
<label class="form-label small fw-bold mb-1">Nome *</label>
<input type="text" id="adminNomeProd" class="form-control form-control-sm
</div>
<div class="col-6">
<label class="form-label small fw-bold mb-1">Marca *</label>
<select id="adminMarcaProd" class="form-select form-select-sm">
<option value="suvinil">Suvinil</option>
<option value="coral">Coral</option>
<option value="sherwin">Sherwin-Williams</option>
<option value="atlas">Atlas</option>
<option value="tigre">Tigre</option>
<option value="norton">Norton</option>
<option value="3m">3M</option>
</select>
</div>
<div class="col-6">
<label class="form-label small fw-bold mb-1">Preço (R$) *</label>
<input type="number" id="adminPrecoProd" class="form-control form-control
</div>
<div class="col-6">
<label class="form-label small fw-bold mb-1">Categoria *</label>
<select id="adminCategoriaProd" class="form-select form-select-sm" <option value="interior">Interior</option>
<option value="exterior">Exterior</option>
<option value="moveis">Móveis</option>
<option value="especial">Especial</option>
<option value="ferramentas">Ferramentas</option>
<option value="acessorios">Acessórios</option>
</select>
</div>
<div class="col-6">
<label class="form-label small fw-bold mb-1">Sub-categoria *</label>
<select id="adminSubProd" class="form-select form-select-sm">
<option value="acrilica">Tinta Acrílica</option>
<option value="latex">Tinta Látex</option>
<option value="fosca">Tinta Fosca</option>
</select>
</div>
<div class="col-12">
<label class="form-label small fw-bold mb-1">Descrição *</label>
<textarea id="adminDescProd" class="form-control form-control-sm" rows="2
</div>
<div class="col-7">
<label class="form-label small fw-bold mb-1">URL da Imagem</label>
onchan
<input type="url" id="adminImgProd" class="form-control form-control-sm"
form-c
</div>
<div class="col-5">
<label class="form-label small fw-bold mb-1">Preço Antigo (R$)</label>
<input type="number" id="adminPrecoAntigoProd" class="form-control </div>
<div class="col-6">
<label class="form-label small fw-bold mb-1">Estoque inicial</label>
<input type="number" id="adminEstoqueProd" class="form-control form-contr
</div>
<div class="col-6 d-flex align-items-end pb-1">
<div class="form-check mb-0">
<input class="form-check-input" type="checkbox" id="adminPromoProd">
<label class="form-check-label small" for="adminPromoProd">Em promoçã
</div>
</div>
<div class="col-12">
<div id="adminErroNovoProd" class="text-danger small mb-1"></div>
<button class="btn btn-warning w-100" onclick="adminSalvarNovoProduto()">
<i class="fas fa-save me-2"></i>Salvar Produto
</button>
</div>
</div>
</div>`;
}
/* --------------------------------------------------------------------------
11. AÇÕES DO ADMIN
-------------------------------------------------------------------------- */
const _adminSubcategorias = {
interior : [['acrilica','Tinta Acrílica'],['latex','Tinta Látex'],['fosca','Tinta Fosc
exterior : [['acrilica-ext','Acrílica Externa'],['impermeavel','Impermeável'],['exteri
moveis : [['esmalte','Esmalte'],['verniz','Verniz']],
especial : [['epoxi','Epóxi'],['termica','Térmica']],
ferramentas : [['rolos','Rolos'],['pinceis','Pincéis'],['bandejas','Bandejas'],['extensor
acessorios : [['lixas','Lixas'],['fitas','Fitas'],['acessorios','Geral']],
};
function adminAtualizarSubcategoria() {
const cat = document.getElementById('adminCategoriaProd')?.value;
const subEl = document.getElementById('adminSubProd');
if (!subEl || !cat) return;
const opts = _adminSubcategorias[cat] || [];
subEl.innerHTML = opts.map(([v, l]) => `<option value="${v}">${l}</option>`).join('');
}
function adminSalvarNovoProduto() {
const nome = document.getElementById('adminNomeProd')?.value.trim();
const marca = document.getElementById('adminMarcaProd')?.value;
const preco = parseFloat(document.getElementById('adminPrecoProd')?.value);
const precoAnt = parseFloat(document.getElementById('adminPrecoAntigoProd')?.value) || n
const categoria = document.getElementById('adminCategoriaProd')?.value;
const sub = document.getElementById('adminSubProd')?.value;
const desc = document.getElementById('adminDescProd')?.value.trim();
const img = document.getElementById('adminImgProd')?.value.trim();
const promo = document.getElementById('adminPromoProd')?.checked;
const estoque = parseInt(document.getElementById('adminEstoqueProd')?.value) || 0;
const erroEl = document.getElementById('adminErroNovoProd');
const setErro = msg => { if (erroEl) erroEl.textContent = msg; };
setErro('');
if (!nome || !marca || isNaN(preco) || preco < 0 || !desc) { setErro('Preencha os campos
if (promo && (!precoAnt || precoAnt <= preco)) { setErro('Preço antigo deve ser maior que
if (typeof products === 'undefined') { setErro('Array de produtos não disponível.'); retu
const novoId = Math.max(...products.map(p => p.id), 100) + 1;
const novo = {
id: novoId, name: nome, brand: marca, category: categoria, sub,
price: preco, oldPrice: promo && precoAnt ? precoAnt : null,
promo, estoque, desc,
img: img || `https://placehold.co/400x400/005eff/fff?text=${encodeURIComponent(nome)}
sugestoes: [],
};
products.push(novo);
_persistirProduto(novoId);
if (typeof renderProducts === 'function') renderProducts(products);
showToast(`Produto "${nome}" criado!`, 'success');
renderAdminAba('produtos');
}
function adminRemoverProduto(id) {
if (typeof products === 'undefined') return;
const idx = products.findIndex(p => p.id === id);
if (idx === -1) return;
const nome = products[idx].name;
products.splice(idx, 1);
// Remove override do produto excluído
const overrides = _getProductOverrides();
delete overrides[id];
_saveProductOverrides(overrides);
if (typeof renderProducts === 'function') renderProducts(products);
showToast(`"${nome}" removido.`, 'warning');
renderAdminAba('produtos');
}
function adminAlternarPromo(id) {
const produto = (typeof products !== 'undefined') && products.find(p => p.id === id);
if (!produto) return;
produto.promo = !produto.promo;
_persistirProduto(id);
if (typeof renderProducts === 'function') renderProducts(products);
showToast(produto.promo ? `"${produto.name}" em promoção! ` : `"${produto.name}" renderAdminAba('produtos');
saiu d
}
function adminAtualizarEstoque(id, novoValor) {
const produto = (typeof products !== 'undefined') && products.find(p => p.id === id);
if (!produto) return;
produto.estoque = Math.max(0, parseInt(novoValor) || 0);
_persistirProduto(id);
if (typeof renderProducts === 'function') renderProducts(products);
showToast(`Estoque de "${produto.name}": ${produto.estoque} un.`, 'success');
}
function adminAlternarAdmin(userId) {
const sessaoAtual = _getUsuarioSessao();
if (sessaoAtual?.id === userId) {
showToast(' Você não pode alterar sua própria permissão.', 'warning');
return;
}
const users = _getUsers();
const idx = users.findIndex(u => u.id === userId);
if (idx === -1) return;
users[idx].isAdmin = !users[idx].isAdmin;
_saveUsers(users);
showToast(`${users[idx].nome}: ${users[idx].isAdmin ? 'promovido a Admin ' : 'revertido
renderAdminAba('usuarios');
}
/* --------------------------------------------------------------------------
12. EXPORTAR / IMPORTAR
-------------------------------------------------------------------------- */
function adminExportar(tipo) {
let dados = {};
const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 16);
if (tipo === 'tudo' || tipo === 'usuarios') {
dados.usuarios = _getUsers().map(u => { const c = {...u}; delete c.senhaHash; return
}
if (tipo === 'tudo' || tipo === 'produtos') {
dados.produtos = typeof products !== 'undefined' ? products : [];
dados.produtoConfig = _getProductOverrides();
}
if (tipo === 'tudo' || tipo === 'pedidos') {
dados.pedidos = JSON.parse(localStorage.getItem(DB.ORDERS) || '[]');
}
dados._meta = { exportadoEm: new Date().toISOString(), versao: '2.0', tipo };
const blob = new Blob([JSON.stringify(dados, null, 2)], { type: 'application/json' const a = document.createElement('a');
a.href = URL.createObjectURL(blob);
a.download = `fixtintas_backup_${tipo}_${ts}.json`;
a.click();
URL.revokeObjectURL(a.href);
showToast(`Backup "${tipo}" exportado!`, 'success');
});
}
function adminImportar(inputEl) {
const file = inputEl?.files?.[0];
if (!file) return;
const statusEl = document.getElementById('importStatus');
if (statusEl) statusEl.innerHTML = '<span class="text-muted">Lendo arquivo...</span>';
const reader = new FileReader();
reader.onload = (e) => {
try {
const dados = JSON.parse(e.target.result);
// Validação básica da estrutura
if (!dados._meta) throw new Error('Arquivo inválido: sem metadados.');
if (!['2.0'].includes(dados._meta.versao)) throw new Error('Versão incompatível.'
let msg = [];
if (dados.usuarios) {
// Não sobrescreve senhas — mantém as atuais se o e-mail existir
const atuais = _getUsers();
const merged = dados.usuarios.map(importado => {
const existente = atuais.find(a => a.email === importado.email);
return existente ? { ...importado, senhaHash: existente.senhaHash } : imp
});
_saveUsers(merged);
msg.push(`${merged.length} usuários`);
}
if (dados.produtoConfig) {
_saveProductOverrides(dados.produtoConfig);
_aplicarOverridesProdutos();
if (typeof renderProducts === 'function') renderProducts(products);
msg.push('configurações de produtos');
}
if (dados.pedidos) {
localStorage.setItem(DB.ORDERS, JSON.stringify(dados.pedidos));
msg.push(`${dados.pedidos.length} pedidos`);
}
if (statusEl) statusEl.innerHTML = `<span class="text-success fw-bold"> showToast('Importação concluída!', 'success');
Importa
} catch (err) {
if (statusEl) statusEl.innerHTML = `<span class="text-danger"> showToast('Erro na importação: ' + err.message, 'danger');
Erro: ${err.mess
}
};
reader.readAsText(file);
// Limpa o input para permitir reimportar o mesmo arquivo
inputEl.value = '';
}
/* --------------------------------------------------------------------------
13. MODAL DE COMPROVANTE (pós-compra e histórico de pedidos)
-------------------------------------------------------------------------- */
function abrirModalComprovante(pedido) {
// Normaliza: aceita objeto ou string JSON
if (typeof pedido === 'string') {
try { pedido = JSON.parse(pedido); } catch { return; }
}
const isDark = document.body.classList.contains('dark-mode');
const bgCard = isDark ? '#1e2240' : '#f8f9fa';
const textColor = isDark ? '#e2e8f0' : '#333';
const borderCol = isDark ? '#2d2d4e' : '#dee2e6';
const subtotal = (pedido.itens || []).reduce((s, i) => s + i.price * i.quantity, const freteVal = pedido.frete?.valor ?? 0;
const freteNome = pedido.frete?.nome ?? 'Padrão';
const fretePrazo = pedido.frete?.prazo ?? '';
0);
const itensHtml = (pedido.itens || []).map(item => `
<div class="d-flex align-items-center gap-2 py-2 border-bottom" style="border-color:$
<img src="${item.img || 'https://placehold.co/40x40/ccc/fff?text=?'}"
width="40" height="40" class="rounded" style="object-fit:cover;flex-shrink:0
<div class="flex-grow-1 overflow-hidden">
<div class="fw-bold text-truncate" style="font-size:0.82rem;">${item.name}</d
<div class="text-muted" style="font-size:0.72rem;">
${item.quantity}x R$&nbsp;${item.price.toFixed(2)}
${item.opcoes?.cor ? ` · ${item.opcoes.cor}` : ''}
</div>
</div>
<div class="fw-bold text-primary" style="font-size:0.85rem;white-space:nowrap;">
R$&nbsp;${(item.price * item.quantity).toFixed(2)}
</div>
</div>`).join('');
// Reutiliza ou cria o modal
let modalEl = document.getElementById('comprovanteModal');
if (!modalEl) {
modalEl = document.createElement('div');
modalEl.id = 'comprovanteModal';
modalEl.className = 'modal fade';
modalEl.tabIndex = -1;
document.body.appendChild(modalEl);
}
modalEl.innerHTML = `
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" style="max-wi
<div class="modal-content border-0 shadow-lg" style="background:${isDark ? <div class="modal-header border-0" style="background:linear-gradient(135deg,#
<div>
'#1a1a
<h6 class="modal-title fw-bold mb-0">
<i class="fas fa-receipt me-2"></i>Comprovante #${pedido.id}
</h6>
<small style="opacity:0.75;">${pedido.data} · ${pedido.pagamento || '
</div>
<button type="button" class="btn-close btn-close-white" data-bs-dismiss="
</div>
<div class="modal-body p-3">
<div style="max-height:280px;overflow-y:auto;margin-bottom:12px;">
${itensHtml}
</div>
<div class="p-3 rounded-3" style="background:${bgCard};border:1px solid $
<div class="d-flex justify-content-between mb-1" style="font-size:0.8
<span class="text-muted">Subtotal</span>
<span>R$&nbsp;${subtotal.toFixed(2)}</span>
</div>
' · '
<div class="d-flex justify-content-between mb-2" style="font-size:0.8
<span class="text-muted">Frete (${freteNome}${fretePrazo ? <span class="${freteVal === 0 ? 'text-success fw-bold' : ''}">${f
</div>
<div class="d-flex justify-content-between fw-bold pt-2" style="borde
<span>Total</span>
<span class="text-primary">R$&nbsp;${pedido.total.toFixed(2)}</sp
</div>
</div>
${pedido.endereco ? `<div class="mt-2 small text-muted"><i class="fas fa-
</div>
<div class="modal-footer border-0 pt-0">
<button class="btn btn-outline-secondary btn-sm" data-bs-dismiss="modal">
<button class="btn btn-primary btn-sm" onclick="gerarComprovantePDF(${JSO
<i class="fas fa-download me-1"></i>Baixar PDF
</button>
</div>
</div>
</div>`;
bootstrap.Modal.getOrCreateInstance(modalEl).show();
}
/* --------------------------------------------------------------------------
14. COMPROVANTE PDF — gerado via botão no modal
-------------------------------------------------------------------------- */
function gerarComprovantePDF(pedido) {
if (typeof pedido === 'string') { try { pedido = JSON.parse(pedido); } catch { return; }
if (!window.jspdf) { showToast('PDF não disponível. Tente novamente.', 'danger'); return;
const { jsPDF } = window.jspdf;
const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
const W = 210, ML = 15, MR = 195;
const AZUL = [0, 94, 255], ESCURO = [30, 30, 50], CINZA = [120, 130, 150], LARANJA let y = 0;
= [255
// Cabeçalho
doc.setFillColor(...AZUL);
doc.rect(0, 0, W, 36, 'F');
doc.setFont('helvetica', 'bold'); doc.setFontSize(20); doc.setTextColor(255, 255, 255);
doc.text('FixTintas', ML, 15);
doc.setFontSize(8); doc.setFont('helvetica', 'normal'); doc.setTextColor(200, 220, doc.text('Comprovante de Pedido', ML, 22);
doc.setTextColor(255, 193, 7); doc.setFont('helvetica', 'bold'); doc.setFontSize(11);
doc.text(`#${pedido.id}`, MR, 15, { align: 'right' });
doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.setTextColor(200, 220, 255);
255);
doc.text(pedido.data, MR, 22, { align: 'right' });
y = 44;
// Cliente
const usuario = _getUsuarioSessao();
if (usuario) {
doc.setFont('helvetica', 'bold'); doc.setFontSize(7.5); doc.setTextColor(...CINZA);
doc.text('CLIENTE', ML, y); y += 5;
doc.setFont('helvetica', 'normal'); doc.setTextColor(...ESCURO);
doc.text(usuario.nome, ML, y); y += 4;
doc.text(usuario.email, ML, y); y += 4;
if (pedido.endereco) { doc.text(pedido.endereco, ML, y); y += 4; }
y += 3;
}
doc.setDrawColor(220, 220, 235); doc.line(ML, y, MR, y); y += 6;
// Cabeçalho da tabela de itens
doc.setFont('helvetica', 'bold'); doc.setFontSize(7.5); doc.setTextColor(...CINZA);
doc.text('ITENS', ML, y); y += 4;
doc.setFillColor(240, 242, 255);
doc.roundedRect(ML, y, MR - ML, 7, 1, 1, 'F');
doc.setTextColor(...ESCURO);
doc.text('Produto', ML + 2, y + 4.5);
doc.text('Qtd', MR - 42, y + 4.5, { align: 'right' });
doc.text('Unit.', MR - 22, y + 4.5, { align: 'right' });
doc.text('Total', MR, y + 4.5, { align: 'right' });
y += 9;
(pedido.itens || []).forEach((item, i) => {
if (y > 255) { doc.addPage(); y = 20; }
if (i % 2 === 0) { doc.setFillColor(250, 251, 255); doc.rect(ML, y - 1, MR - ML, 7, '
doc.setFont('helvetica', 'normal'); doc.setFontSize(7.5); doc.setTextColor(...ESCURO)
const nm = item.name.length > 40 ? item.name.slice(0, 38) + '…' : item.name;
doc.text(nm, ML + 2, y + 4.5);
doc.text(String(item.quantity), MR - 42, y + 4.5, { align: 'right'
doc.text(`R$ ${item.price.toFixed(2)}`, MR - 22, y + 4.5, { align: 'right'
doc.text(`R$ ${(item.price * item.quantity).toFixed(2)}`, MR, y + 4.5, { align: 'righ
y += 7;
});
y += 4; doc.setDrawColor(220, 220, 235); doc.line(ML, y, MR, y); y += 5;
const subtotal = (pedido.itens || []).reduce((s, i) => s + i.price * i.quantity, 0);
const freteVal = pedido.frete?.valor ?? 0;
const freteNome = pedido.frete?.nome ?? '';
const fretePrz = pedido.frete?.prazo ?? '';
const _linha = (label, valor, destaque = false) => {
if (destaque) {
doc.setFillColor(...ESCURO); doc.roundedRect(ML, y, MR - ML, 10, 1.5, 1.5, doc.setTextColor(255, 255, 255);
} else { doc.setTextColor(...CINZA); }
doc.setFont('helvetica', destaque ? 'bold' : 'normal');
doc.setFontSize(destaque ? 9 : 8);
doc.text(label, ML + 2, y + (destaque ? 6.5 : 5.5));
if (destaque) doc.setTextColor(...LARANJA);
doc.text(valor, MR, y + (destaque ? 6.5 : 5.5), { align: 'right' });
y += destaque ? 12 : 8;
'F');
};
_linha('Subtotal', `R$ ${subtotal.toFixed(2)}`);
_linha(`Frete${freteNome ? ': ' + freteNome : ''}${fretePrz ? ' — ' + fretePrz : ''}`,
freteVal === 0 ? 'GRÁTIS' : `R$ ${freteVal.toFixed(2)}`);
_linha('TOTAL GERAL', `R$ ${pedido.total.toFixed(2)}`, true);
y += 3;
doc.setFont('helvetica', 'italic'); doc.setFontSize(7); doc.setTextColor(...CINZA);
doc.text(`Pagamento: ${pedido.pagamento || 'Não informado'}`, ML, y);
y += 10;
doc.setFont('helvetica', 'bold'); doc.setFontSize(9); doc.setTextColor(...AZUL);
doc.text('Obrigado por comprar na FixTintas! ', W / 2, y, { align: 'center' });
doc.save(`FixTintas_${pedido.id}.pdf`);
}
/* --------------------------------------------------------------------------
15. EXPORTAR GLOBALMENTE (chamadas do HTML/script.js)
-------------------------------------------------------------------------- */
window.abrirPainelAdmin = abrirPainelAdmin;
window.renderAdminAba = renderAdminAba;
window.adminSalvarNovoProduto = adminSalvarNovoProduto;
window.adminRemoverProduto = adminRemoverProduto;
window.adminAlternarPromo = adminAlternarPromo;
window.adminAtualizarEstoque = adminAtualizarEstoque;
window.adminAlternarAdmin = adminAlternarAdmin;
window.adminAtualizarSubcategoria = adminAtualizarSubcategoria;
window.adminExportar = adminExportar;
window.adminImportar = adminImportar;
window.abrirModalComprovante = abrirModalComprovante;
window.gerarComprovantePDF = gerarComprovantePDF;
window._renderAdminDetalheUsuario = _renderAdminDetalheUsuario;
window._getUsuarioSessao = _getUsuarioSessao;
window._getUsers = _getUsers;
window._saveUsers = _saveUsers;
window._criarUsuario = _criarUsuario;
window._autenticarUsuario = _autenticarUsuario;
window._atualizarUsuario = _atualizarUsuario;
window._iniciarSessao = _iniciarSessao;
window._encerrarSessao = _encerrarSessao;
window._hashSenha = _hashSenha;
window._findUserByEmail = _findUserByEmail;
window._migrarUsuarioLegado = _migrarUsuarioLegado;
window._aplicarOverridesProdutos = _aplicarOverridesProdutos;
window._persistirProduto = _persistirProduto;
window._persistirTodosProdutos = _persistirTodosProdutos;
window.getEstoque = getEstoque;
window.decrementarEstoque = decrementarEstoque;
window.validarEstoqueCarrinho = validarEstoqueCarrinho;
window.podeAdicionarAoCarrinho = podeAdicionarAoCarrinho;