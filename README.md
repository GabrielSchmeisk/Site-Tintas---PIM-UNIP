# 🎨 FixTintas — E-commerce de Tintas e Materiais para Pintura

> Plataforma front-end completa de e-commerce especializada em tintas, ferramentas e acessórios para pintura. Construída com HTML5, CSS3 (Bootstrap 5) e JavaScript puro — sem frameworks, sem build tools, pronta para uso.

---

## 📋 Índice

1. [Visão Geral](#-visão-geral)
2. [Demonstração](#-demonstração)
3. [Funcionalidades](#-funcionalidades)
4. [Estrutura de Arquivos](#-estrutura-de-arquivos)
5. [Esquema de Cores](#-esquema-de-cores)
6. [Arquitetura Técnica](#-arquitetura-técnica)
7. [Módulos JavaScript](#-módulos-javascript)
8. [Persistência de Dados](#-persistência-de-dados)
9. [Painel Administrativo](#-painel-administrativo)
10. [Sistema de Autenticação](#-sistema-de-autenticação)
11. [Como Usar](#-como-usar)
12. [Roadmap Backend](#-roadmap-backend)
13. [Tecnologias](#-tecnologias)

---

## 🧭 Visão Geral

O **FixTintas** é um sistema de e-commerce front-end completo, desenvolvido como uma Single Page Application (SPA) sem dependências de frameworks modernos. O projeto simula um banco de dados real utilizando `localStorage`, com arquitetura preparada para integração futura com APIs REST.

### Destaques

- ✅ 30 produtos cadastrados com estoque, preços e categorias
- ✅ Carrinho persistente com agrupamento inteligente de itens
- ✅ Sistema de autenticação com hash de senha e integridade de dados
- ✅ Painel administrativo completo (CRUD de produtos, usuários, pedidos)
- ✅ Modo escuro completo (Dark Mode)
- ✅ Totalmente responsivo (mobile, tablet, desktop)
- ✅ Geração de PDF (comprovante de pedido e relatório de materiais)
- ✅ Calculadora de tinta integrada
- ✅ URLs dinâmicas por categoria (History API)

---

## 🖥️ Demonstração

> Abra o arquivo `index.html` diretamente no navegador — nenhum servidor é necessário.

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/fixtintas.git
cd fixtintas

# Abrir no navegador (macOS)
open index.html

# Abrir no navegador (Linux)
xdg-open index.html

# Abrir no navegador (Windows)
start index.html
```

---

## ⚙️ Funcionalidades

### 🛒 Loja / Catálogo

| Funcionalidade | Descrição |
|---|---|
| **Catálogo de Produtos** | 30 produtos em 6 categorias com imagem, preço, descrição e badge de promoção |
| **Filtro por Categoria** | Menu lateral com submenus expansíveis; sidebar para desktop, offcanvas para mobile |
| **Filtro por Preço** | Slider interativo para definir faixa de preço máximo |
| **Busca em Tempo Real** | Campo de busca com normalização de texto (ignora acentos, case-insensitive) |
| **URLs Dinâmicas** | `?categoria=acrilica` — compartilhável, com suporte a botão Voltar do navegador |
| **Modal de Produto** | Preview completo: imagem, preço, "Como Usar", características técnicas e avaliações |
| **Sugestões de Produto** | Produtos relacionados exibidos ao abrir o modal |
| **Favoritos** | Adicionar/remover produtos da lista de desejos (persistido em `localStorage`) |
| **Compartilhamento** | Compartilhar link do produto via Web Share API ou copiar URL |

### 🎨 Configuração de Produto (Tintas)

| Funcionalidade | Descrição |
|---|---|
| **Modal de Configuração** | Seleção de cor, acabamento, tamanho da lata e número de demãos |
| **Configuração em Lote** | Comprar N unidades com configurações diferentes em sequência |
| **Preview de Cor na Parede** | Simula a cor selecionada em foto de parede (sua foto ou exemplos) |
| **Modo Lanterna** | Destaque circular para simular iluminação do ambiente |
| **Configuração de Spray** | Fluxo separado para sprays com seleção de cor e acabamento |

### 🛍️ Carrinho

| Funcionalidade | Descrição |
|---|---|
| **Carrinho Persistente** | Dados salvos em `localStorage` — mantidos ao fechar o navegador |
| **Agrupamento Inteligente** | Itens 100% iguais (id + cor + acabamento + tamanho + demãos) são agrupados |
| **Ajuste de Quantidade** | Botões +/− com validação contra estoque disponível |
| **Navegar ao Produto** | Clicar em item do carrinho → scroll até o produto + abre modal |
| **Esvaziar Carrinho** | Confirmação com modal contextual (respeita dark mode) |
| **Frete Dinâmico** | Cálculo por CEP via ViaCEP + simulação de opções de frete |
| **Carrinho Abandonado** | Alerta animado após 3 minutos de inatividade com itens no carrinho |

### 💳 Checkout

| Funcionalidade | Descrição |
|---|---|
| **Múltiplos Pagamentos** | PIX (com QR Code simulado), Cartão de crédito, Boleto |
| **Formulário de Cartão** | Formatação automática de número, validade e CVV |
| **Validação de Estoque** | Verificação final antes de confirmar o pedido |
| **Comprovante** | Modal pós-compra com resumo completo + botão de download em PDF |

### 👤 Área do Usuário

| Funcionalidade | Descrição |
|---|---|
| **Cadastro** | Nome, e-mail e senha (mín. 6 caracteres) com validação inline |
| **Login** | Autenticação com verificação de hash de senha |
| **Lembrar-me** | Sessão persistente em `localStorage` ou temporária em `sessionStorage` |
| **Foto de Perfil** | Upload via FileReader → Base64 → exibida no header e no modal |
| **Edição de Nome** | Clique no nome para editar inline (Enter para salvar, Esc para cancelar) |
| **Alterar Senha** | Verificação da senha atual + nova senha com confirmação |
| **Endereço de Entrega** | Formulário completo com busca automática por CEP (ViaCEP) |
| **Histórico de Pedidos** | Lista de pedidos com botão de comprovante individual |
| **Favoritos** | Acesso à lista de desejos dentro do painel do usuário |

### 🌙 Dark Mode

- Toggle persistido em `localStorage`
- Ícone alterna entre 🌙 e ☀️
- Cobertura total: navbar, modais, admin, cards, formulários, toasts, alertas
- Sem flash de tema ao carregar (aplicado antes do DOMContentLoaded)

### 📐 Calculadora de Tinta

- Entrada: dimensões do ambiente (largura, comprimento, altura, número de demãos)
- Cálculo automático de área líquida (descontando portas e janelas padrão)
- Resultado: litros necessários, latas recomendadas por tamanho (3,6L / 18L)
- Geração de lista de materiais completa
- Compartilhamento e cópia da lista
- Exportação da lista em PDF

### 📄 PDF

| Documento | Conteúdo |
|---|---|
| **Comprovante de Pedido** | Dados do cliente, itens (nome, qtd, valor unitário, subtotal), frete, total, pagamento |
| **Lista de Materiais** | Itens da calculadora com quantidades, marcas sugeridas e valores estimados |
| **Requisição de Compra** | Relatório formal de itens do carrinho com totalizador e frete |

---

## 📁 Estrutura de Arquivos

```
fixtintas/
│
├── index.html          # Estrutura principal — todos os modais e HTML
├── style.css           # Estilos globais, componentes e dark mode
├── script.js           # Lógica principal: carrinho, produtos, UI, checkout
├── admin.js            # Módulo de autenticação, admin, persistência e PDF
└── README.md           # Este arquivo
```

### Por que dois arquivos JS?

| Arquivo | Responsabilidade |
|---|---|
| `script.js` | Renderização de produtos, carrinho, modais de produto, frete, calculadora, busca, dark mode, UI geral |
| `admin.js` | Autenticação, banco de usuários, painel admin, controle de estoque, persistência de produtos, exportar/importar, comprovante PDF |

> **Ordem de carregamento obrigatória:** `Bootstrap → admin.js → script.js → jsPDF`

---

## 🎨 Esquema de Cores

### Paleta Principal

| Nome | Hex | Uso |
|---|---|---|
| **Primary Blue** | `#005eff` | Navbar, botões primários, links, bordas de destaque |
| **Primary Orange** | `#ff7a00` | Acentos, destaques de preço no PDF, hover de marca |
| **Warning / Promo** | `#ffc107` | Badges de promoção, botão "Aproveitar", ícone logado |
| **Success** | `#22c55e` | Frete grátis, estoque OK, toasts de sucesso |
| **Danger** | `#dc2626` | Sem estoque, erros de formulário, remover item |
| **Dark BG** | `#1a1a2e` | Fundo principal no dark mode |
| **Dark Surface** | `#1e2240` | Cards e modais no dark mode |
| **Dark Border** | `#2d2d4e` | Bordas no dark mode |
| **Dark Text** | `#e2e8f0` | Texto principal no dark mode |
| **Dark Muted** | `#64748b` | Texto secundário no dark mode |

### Variáveis CSS (`:root`)

```css
:root {
    --primary-blue:   #005eff;
    --primary-orange: #ff7a00;
    --text-main:      #333;
}
```

### Gradientes Usados

```css
/* Navbar / Header */
background: linear-gradient(135deg, #003ab5 0%, #005eff 60%, #0066cc 100%);

/* Header do modal de perfil */
background: linear-gradient(135deg, #003ab5 0%, #005eff 60%, #0080ff 100%);

/* Faixa de frete grátis */
background: linear-gradient(90deg, #003ab5 0%, #005eff 60%, #0066cc 100%);

/* Painel admin header */
background: #1a1a2e; /* dark slate */

/* Badge admin */
background: linear-gradient(135deg, #ffc107, #ff8c00);
```

### Tipografia

| Propriedade | Valor |
|---|---|
| **Fonte principal** | `Inter` (Google Fonts) |
| **Fallback** | `system-ui, -apple-system, sans-serif` |
| **Tamanho base** | `16px` (evita zoom no iOS) |
| **Peso headings** | `700` / `800` |

---

## 🏗️ Arquitetura Técnica

### Padrão de Dados

O sistema simula um banco de dados relacional usando `localStorage`:

```
localStorage
├── fixtintas_users              → Array<UserRecord>
├── fixtintas_sessao             → { userId, email }
├── fixtintas_products_override  → { [productId]: { estoque, promo, oldPrice } }
├── fixtintas_orders             → Array<OrderRecord>
├── fixtintas_integrity          → checksum hash do banco de usuários
├── fixtintas_cart               → Array<CartItem>
├── fixtintas_favorites          → Array<productId>
├── usuario_nome                 → string (compatibilidade legada)
└── usuario_email                → string (compatibilidade legada)
```

### Estrutura de um Produto

```javascript
{
    id:        1,
    name:      "Tinta Premium Acrílica",
    category:  "interior",        // interior | exterior | moveis | especial | ferramentas | acessorios
    sub:       "acrilica",        // subcategoria (gerenciável pelo admin)
    brand:     "suvinil",         // suvinil | coral | sherwin | atlas | tigre | norton | 3m
    price:     50.0,              // preço atual
    oldPrice:  83.0,              // preço riscado (necessário para promo: true)
    promo:     true,              // aparece com badge de desconto
    estoque:   30,                // unidades disponíveis
    desc:      "Alta cobertura…", // descrição curta
    img:       "https://…",       // URL da imagem
    sugestoes: [11, 14, 19]       // IDs de produtos relacionados
}
```

### Estrutura de um Pedido

```javascript
{
    id:        "lx3k8m",          // ID único gerado por timestamp+random
    data:      "27/04/2026",      // data formatada pt-BR
    itens:     [...CartItem],     // snapshot dos itens no momento da compra
    total:     189.50,            // total com frete
    pagamento: "PIX",             // PIX | Cartão | Boleto
    frete: {
        nome:  "PAC",
        valor: 0,
        prazo: "3-5 dias úteis"
    },
    endereco:  "Rua das Flores, 123 — SP",
    userId:    "abc123",          // ID do usuário
    email:     "user@email.com"
}
```

### Estrutura de um Item do Carrinho

```javascript
{
    id:          "1|Branco|Fosco|3.6L|2",  // chave única gerada por gerarCartKey()
    productId:   1,
    name:        "Tinta Premium Acrílica",
    displayName: "Tinta Premium Acrílica — Branco Fosco 3,6L",
    quantity:    2,
    price:       50.0,
    opcoes: {
        cor:       "Branco",
        acabamento:"Fosco",
        tamanho:   "3.6L",
        demaos:    "2"
    },
    category:    "interior",
    img:         "https://…"
}
```

---

## 📦 Módulos JavaScript

### `script.js` — Funções Principais

#### Renderização

| Função | Descrição |
|---|---|
| `renderProducts(items)` | Renderiza o grid de produtos; aceita array filtrado |
| `showProductDetails(id)` | Abre o modal de produto com todos os detalhes |
| `renderizarSugestoes(produto, containerId)` | Renderiza produtos sugeridos no modal |
| `renderFavoritesProfile()` | Renderiza favoritos no painel do usuário |
| `renderOrdersProfile()` | Renderiza histórico de pedidos com botão de comprovante |
| `_gerarComoUsarProduto(product)` | Gera passos de aplicação por subcategoria |
| `_gerarCaracteristicasProduto(product)` | Gera tabela de características técnicas |
| `_gerarBlocoPrecoModal(product)` | Gera HTML de preço com badge de desconto |

#### Filtros e Busca

| Função | Descrição |
|---|---|
| `filterProducts(tag, event)` | Filtra por categoria; atualiza URL com `?categoria=` |
| `filterByPrice(value)` | Filtra por preço máximo via slider |
| `limparBusca()` | Reseta busca e restaura todos os produtos |
| `normalizarTexto(texto)` | Remove acentos e normaliza para comparação |

#### Carrinho

| Função | Descrição |
|---|---|
| `addToCartFromModal(id)` | Adiciona ao carrinho a partir do modal de produto |
| `addToCartSimple(id, qty)` | Adiciona acessórios sem configuração |
| `adicionarOuAgrupar(item)` | Agrupa itens idênticos ou adiciona novo |
| `gerarCartKey(id, opcoes)` | Gera chave única determinística para o item |
| `updateCartUI()` | Atualiza contador, lista e total do carrinho |
| `changeQty(itemId, delta)` | Incrementa ou decrementa quantidade |
| `removeItemsByType(id)` | Remove todos os itens de um mesmo produto |
| `showCart()` | Abre o modal do carrinho |
| `clearCart()` | Esvazia carrinho com confirmação (dark mode aware) |
| `irParaProdutoNoCarrinho(id)` | Fecha carrinho → scroll → abre modal do produto |
| `save()` | Persiste carrinho no `localStorage` |

#### Configuração de Tinta

| Função | Descrição |
|---|---|
| `openConfigModal(id)` | Abre modal de configuração para tintas |
| `confirmAddToCart(id)` | Confirma configuração e adiciona ao carrinho |
| `confirmSprayToCart(id)` | Confirma configuração de spray e adiciona |
| `applyConfigToAll()` | Aplica mesma configuração para múltiplas unidades |
| `processarFilaConfiguracao(id)` | Gerencia fila de configurações em lote |
| `atualizarSubtotalModal()` | Atualiza subtotal ao alterar quantidade/tamanho |
| `updatePreview()` | Atualiza preview de cor na foto de parede |
| `changeWall(index)` | Troca a imagem de exemplo de parede |
| `aplicarFotoParede(input)` | Carrega foto da câmera/galeria do usuário |
| `animateFlashlight()` | Anima o efeito de lanterna no preview |

#### Checkout e Frete

| Função | Descrição |
|---|---|
| `checkout()` | Inicia o fluxo de checkout com validação de login e estoque |
| `processarCompraFinal()` | Finaliza a compra, salva pedido, decrementa estoque |
| `calcularFrete()` | Busca CEP via ViaCEP e calcula opções de frete |
| `selecionarFreteCheckout(valor, nome, prazo)` | Seleciona opção de frete |
| `togglePaymentDetails(metodo)` | Mostra/oculta formulário de pagamento |
| `preencherDadosCartao()` | Formata campos do cartão automaticamente |
| `buscarCEP()` | Busca endereço por CEP no perfil do usuário |

#### UI / UX

| Função | Descrição |
|---|---|
| `showToast(msg, type)` | Exibe notificação flutuante (success/warning/danger/info) |
| `toggleDarkMode()` | Alterna dark mode e persiste preferência |
| `inicializarPopupPromocoes()` | Exibe popup de ofertas com base nos favoritos |
| `_resetarTimerAbandonado()` | Reinicia o timer de carrinho abandonado |
| `_exibirAlertaAbandonado()` | Mostra alerta animado de carrinho abandonado |
| `fecharMenuMobile()` | Fecha o menu hamburger mobile |
| `limparBackdropsTravados()` | Remove overlays Bootstrap travados |

#### Calculadora e PDF

| Função | Descrição |
|---|---|
| `calcularTinta()` | Calcula litros e latas necessários para o ambiente |
| `gerarListaMateriais()` | Gera lista completa de materiais da calculadora |
| `gerarPDF()` | Gera PDF da lista de materiais ou requisição de compra |
| `gerarTextoLista()` | Converte lista em texto simples para compartilhamento |
| `copiarLista()` | Copia lista para área de transferência |
| `compartilharLista()` | Compartilha via Web Share API |

#### Login / Perfil (no script.js)

| Função | Descrição |
|---|---|
| `checkLoginPersistence()` | Aplica estado de login na UI (ambos os botões mobile+desktop) |
| `handleProfileClick()` | Abre modal de perfil ou de login conforme estado |
| `logout()` | Encerra sessão sem apagar o banco |
| `atualizarAvatarPerfil()` | Atualiza avatar com foto ou iniciais |
| `uploadFotoPerfil()` | Upload de foto via FileReader → Base64 |
| `editarNomePerfil()` | Ativa edição inline do nome |
| `salvarNomePerfil()` | Salva novo nome no banco |
| `alterarSenha()` | Altera senha com verificação da atual |
| `saveAddress()` | Salva endereço de entrega no perfil |
| `alternarAbaLogin(painel)` | Alterna entre abas "Entrar" e "Cadastrar" |

---

### `admin.js` — Funções Principais

#### Segurança e Integridade

| Função | Descrição |
|---|---|
| `_checksum(data)` | Hash determinístico do banco de usuários |
| `_saveIntegrity(users)` | Salva checksum junto ao banco |
| `_verificarIntegridade()` | Valida banco antes de qualquer leitura |

#### Banco de Usuários

| Função | Descrição |
|---|---|
| `_getUsers()` | Lê banco com validação de integridade |
| `_saveUsers(users)` | Salva banco e atualiza checksum |
| `_criarUsuario({nome, email, senha})` | Cria usuário; primeiro usuário é admin automaticamente |
| `_autenticarUsuario(email, senha)` | Autentica verificando hash da senha |
| `_atualizarUsuario(campos)` | Atualiza dados do usuário da sessão ativa |
| `_findUserByEmail(email)` | Busca usuário por e-mail (case-insensitive) |
| `_hashSenha(senha)` | Hash determinístico com salt fixo |
| `_migrarUsuarioLegado()` | Migra usuários do sistema anterior automaticamente |

#### Sessão

| Função | Descrição |
|---|---|
| `_getUsuarioSessao()` | Retorna o usuário logado ou `null` |
| `_iniciarSessao(usuario, lembrar)` | Inicia sessão (`localStorage` ou `sessionStorage`) |
| `_encerrarSessao()` | Remove sessão de ambos os storages |

#### Persistência de Produtos

| Função | Descrição |
|---|---|
| `_aplicarOverridesProdutos()` | Aplica estoque/promo salvos ao array global |
| `_persistirProduto(id)` | Salva override de um produto específico |
| `_persistirTodosProdutos()` | Salva todos os overrides de uma vez |
| `getEstoque(productId)` | Retorna estoque disponível |
| `decrementarEstoque(itens)` | Decrementa estoque após compra |
| `validarEstoqueCarrinho()` | Retorna itens com estoque insuficiente |
| `podeAdicionarAoCarrinho(id, qty)` | Verifica se é possível adicionar N itens |

#### Painel Admin

| Função | Descrição |
|---|---|
| `abrirPainelAdmin()` | Abre painel (fecha modal de perfil antes); define URL `?painel=admin` |
| `renderAdminAba(aba)` | Renderiza conteúdo da aba selecionada |
| `adminSalvarNovoProduto()` | Cria produto e persiste override |
| `adminRemoverProduto(id)` | Remove produto e limpa override |
| `adminAlternarPromo(id)` | Toggle de promoção com persistência |
| `adminAtualizarEstoque(id, valor)` | Atualiza estoque inline com persistência |
| `adminAlternarAdmin(userId)` | Promove/rebaixa usuário (com proteção anti-autorremoção) |
| `adminAtualizarSubcategoria()` | Atualiza select de sub conforme categoria |

#### Exportar / Importar

| Função | Descrição |
|---|---|
| `adminExportar(tipo)` | Exporta JSON (`tudo` / `produtos` / `usuarios` / `pedidos`) |
| `adminImportar(inputEl)` | Importa JSON com validação de versão e merge inteligente |

#### Comprovante

| Função | Descrição |
|---|---|
| `abrirModalComprovante(pedido)` | Abre modal de comprovante com resumo e botão de PDF |
| `gerarComprovantePDF(pedido)` | Gera e baixa o PDF do comprovante |

---

## 💾 Persistência de Dados

### Chaves do `localStorage`

| Chave | Conteúdo | Gerenciado por |
|---|---|---|
| `fixtintas_users` | `Array<UserRecord>` | `admin.js` |
| `fixtintas_sessao` | `{ userId, email }` | `admin.js` |
| `fixtintas_products_override` | `{ [id]: { estoque, promo, oldPrice } }` | `admin.js` |
| `fixtintas_orders` | `Array<OrderRecord>` | `script.js` |
| `fixtintas_integrity` | `string` (checksum) | `admin.js` |
| `fixtintas_cart` | `Array<CartItem>` | `script.js` |
| `fixtintas_favorites` | `Array<number>` | `script.js` |
| `darkMode` | `"true"` / `"false"` | `script.js` |
| `usuario_endereco_obj` | `{ cep, rua, num, bairro, cidade }` | `script.js` |

### Chaves do `sessionStorage`

| Chave | Conteúdo | Uso |
|---|---|---|
| `fixtintas_sessao` | `{ userId, email }` | Sessão temporária (sem "lembrar-me") |
| `frete_selecionado` | `{ valor, nome, prazo }` | Frete escolhido no checkout |
| `pending_configs` | `number` | Fila de configurações de tinta |
| `total_to_configure` | `number` | Total de itens a configurar |

### Política de Inicialização

```
1. admin.js carrega
2. _aplicarOverridesProdutos() é registrado no window
3. script.js carrega o array `products` (dados padrão)
4. Imediatamente após: _aplicarOverridesProdutos() aplica os overrides salvos
5. Resultado: estoque e promoções do admin persistem entre sessões
```

---

## 🛡️ Painel Administrativo

### Acesso

- URL direta: `index.html?painel=admin`
- Via modal "Minha Conta" → botão "Painel Administrativo" (visível apenas para admins)
- O **primeiro usuário cadastrado** é automaticamente definido como admin

### Abas

| Aba | Funcionalidade |
|---|---|
| **Produtos** | Tabela com edição inline de estoque, toggle de promoção, exclusão |
| **Usuários** | Lista de usuários, promoção/rebaixamento, link para relatório |
| **Pedidos** | Histórico de pedidos com valor total e acesso ao comprovante |
| **Novo Produto** | Formulário com categoria, subcategoria dinâmica, preço, estoque |
| **Backup** | Exportar e importar JSON de usuários, produtos e pedidos |

### Relatório de Usuário

Clique em 📈 na linha do usuário para ver:
- Total de pedidos e valor gasto
- Produtos mais comprados (top 5)
- Meios de pagamento utilizados
- Histórico completo de pedidos

### Exportação de Dados

```json
{
  "_meta": {
    "exportadoEm": "2026-04-27T12:00:00.000Z",
    "versao": "2.0",
    "tipo": "tudo"
  },
  "usuarios": [...],
  "produtos": [...],
  "produtoConfig": { "1": { "estoque": 28, "promo": true } },
  "pedidos": [...]
}
```

---

## 🔐 Sistema de Autenticação

### Fluxo de Cadastro

```
1. Usuário preenche nome, e-mail e senha
2. Validação de e-mail único no banco
3. Senha convertida para hash determinístico com salt
4. Registro salvo em fixtintas_users
5. Sessão iniciada automaticamente
6. checksum atualizado para integridade
```

### Fluxo de Login

```
1. E-mail buscado no banco (case-insensitive)
2. Hash da senha comparado com o armazenado
3. Se correto: sessão iniciada (localStorage ou sessionStorage)
4. UI atualizada: botão logado, botão admin visível se isAdmin=true
```

### Segurança de Integridade

```
1. Toda escrita no banco gera novo checksum
2. Toda leitura valida o checksum antes de retornar dados
3. Se checksum inválido: sessão encerrada + aviso ao usuário
4. Protege contra edição manual do localStorage via DevTools
```

> **Nota:** O hash de senha é uma proteção local. Para produção, use bcrypt via backend.

---

## 🚀 Como Usar

### 1. Primeiro Acesso

1. Abra `index.html` no navegador
2. Clique em **Entrar** → **Criar conta**
3. Preencha nome, e-mail e senha
4. O primeiro usuário cadastrado recebe permissão de **admin** automaticamente

### 2. Como Admin

1. Faça login com sua conta
2. Clique no botão **🛡️ Painel Administrativo** no modal "Minha Conta"
   (ou acesse `index.html?painel=admin` diretamente)
3. Gerencie produtos, usuários, pedidos e backups

### 3. Testando o Sistema de Estoque

1. No painel admin → aba Produtos
2. Coloque o estoque de um produto em `0`
3. Abra o modal do produto na loja — o botão estará desativado
4. Coloque entre 1 e 5 → aparece o badge "Últimas unidades"

### 4. Backup e Restauração

1. Admin → aba Backup → **Exportar tudo**
2. Um arquivo `.json` é baixado
3. Para restaurar: **Importar** → selecione o arquivo
4. O sistema valida a estrutura antes de aplicar

---

## 🗺️ Roadmap Backend

O sistema foi arquitetado para facilitar a migração para um backend real:

| Componente atual | Equivalente backend |
|---|---|
| `fixtintas_users` em localStorage | Tabela `users` no banco |
| `fixtintas_orders` em localStorage | Tabela `orders` com FK para `users` |
| `fixtintas_products_override` | Colunas `estoque` e `promo` na tabela `products` |
| `_autenticarUsuario()` | `POST /api/auth/login` com JWT |
| `_criarUsuario()` | `POST /api/auth/register` |
| `adminExportar()` | `GET /api/admin/export` |
| `gerarComprovantePDF()` | `GET /api/orders/:id/pdf` |

### Pontos de integração recomendados

```javascript
// Substituir _getUsers() por:
const users = await fetch('/api/users').then(r => r.json());

// Substituir _autenticarUsuario() por:
const { token } = await fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, senha })
}).then(r => r.json());
```

---

## 🧰 Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| **HTML5** | — | Estrutura semântica, modais, formulários |
| **CSS3** | — | Variáveis, Grid, Flexbox, animações, dark mode |
| **Bootstrap** | 5.3.8 | Grid, modais, offcanvas, badges, utilitários |
| **JavaScript** | ES2022 | Lógica de negócio, persistência, PDF, UI |
| **Font Awesome** | 6.x | Ícones (fa-cart-plus, fa-shield-alt, etc.) |
| **Google Fonts** | — | Fonte Inter |
| **jsPDF** | 2.5.1 | Geração de comprovantes e listas em PDF |
| **ViaCEP** | API | Busca de endereço por CEP |
| **VLibras** | Plugin | Acessibilidade (intérprete de Libras) |

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo `LICENSE` para mais detalhes.

---

## 👨‍💻 Autor

**FixTintas** — Desenvolvido como projeto de e-commerce front-end completo.

> Contribuições, issues e pull requests são bem-vindos!
