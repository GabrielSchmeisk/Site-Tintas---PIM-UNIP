/* ==========================================================================

1. BANCO DE DADOS DE PRODUTOS
   ========================================================================== */
   // Array principal de produtos da loja
   const products = [
   // — TINTAS INTERIOR —
   { id: 1,  name: “Tinta Premium Acrílica”,       category: “interior”,    sub: “acrilica”,     brand: “suvinil”, price: 50.0,  oldPrice: 83.0,   promo: true,  estoque: 30, desc: “Alta cobertura, lavável e rendimento superior.”,                        img: “https://placehold.co/400x400/005eff/fff?text=Suvinil+Premium”, sugestoes: [11, 14, 19] },
   { id: 2,  name: “Tinta Acrílica Fosca”,         category: “interior”,    sub: “acrilica”,     brand: “coral”,   price: 65.0,  oldPrice: 108.0,  promo: true,  estoque: 25, desc: “Ideal para disfarçar imperfeições em salas e quartos.”,                  img: “https://placehold.co/400x400/005eff/fff?text=Coral+Fosca”,     sugestoes: [11, 13, 20] },
   { id: 3,  name: “Látex Standard”,               category: “interior”,    sub: “latex”,        brand: “suvinil”, price: 42.0,  oldPrice: 70.0,   promo: true,  estoque: 40, desc: “Excelente custo-benefício para tetos e áreas secas.”,                   img: “https://placehold.co/400x400/005eff/fff?text=Latex+Standard”,  sugestoes: [11, 16, 29] },
   { id: 4,  name: “Tinta Toque de Seda”,          category: “interior”,    sub: “fosca”,        brand: “sherwin”, price: 58.0,  oldPrice: 97.0,   promo: true,  estoque: 18, desc: “Acabamento acetinado com toque aveludado fino.”,                        img: “https://placehold.co/400x400/005eff/fff?text=Toque+Seda”,      sugestoes: [12, 14, 15] },
   { id: 23, name: “Tinta Direto no Gesso”,        category: “interior”,    sub: “latex”,        brand: “coral”,   price: 48.0,  oldPrice: 80.0,   promo: true,  estoque: 22, desc: “Não precisa de fundo, fixa direto na placa de gesso.”,                  img: “https://placehold.co/400x400/005eff/fff?text=Gesso+Coral”,     sugestoes: [11, 21, 15] },
   // — TINTAS EXTERIOR —
   { id: 5,  name: “Tinta Acrílica Emborrachada”,  category: “exterior”,    sub: “acrilica-ext”, brand: “coral”,   price: 80.0,  oldPrice: 133.0,  promo: true,  estoque: 15, desc: “Acompanha a dilatação da parede, evitando microfissuras.”,              img: “https://placehold.co/400x400/005eff/fff?text=Emborrachada”,    sugestoes: [11, 27, 16] },
   { id: 6,  name: “Impermeabilizante Fachada”,    category: “exterior”,    sub: “impermeavel”,  brand: “sherwin”, price: 120.0, oldPrice: 200.0,  promo: true,  estoque: 12, desc: “Proteção máxima contra infiltrações e batida de chuva.”,                img: “https://placehold.co/400x400/005eff/fff?text=Impermeavel”,     sugestoes: [11, 13, 16] },
   { id: 17, name: “Textura Rústica”,              category: “exterior”,    sub: “acrilica-ext”, brand: “suvinil”, price: 85.0,  oldPrice: 142.0,  promo: true,  estoque: 20, desc: “Efeito riscado decorativo de alta resistência.”,                        img: “https://placehold.co/400x400/005eff/fff?text=Textura+Rustica”, sugestoes: [28, 21, 14] },
   { id: 24, name: “Tinta para Pisos”,             category: “exterior”,    sub: “acrilica-ext”, brand: “suvinil”, price: 72.0,  oldPrice: 120.0,  promo: true,  estoque: 17, desc: “Alta resistência a tráfego de pessoas e carros.”,                       img: “https://placehold.co/400x400/005eff/fff?text=Piso+Resistente”, sugestoes: [11, 22, 13] },
   // — MÓVEIS E MADEIRAS —
   { id: 7,  name: “Esmalte Sintético Premium”,    category: “moveis”,      sub: “esmalte”,      brand: “suvinil”, price: 45.0,  oldPrice: 75.0,   promo: true,  estoque: 28, desc: “Máxima durabilidade para madeiras, portas e metais.”,                   img: “https://placehold.co/400x400/005eff/fff?text=Esmalte+Luxo”,    sugestoes: [12, 22, 15] },
   { id: 8,  name: “Verniz Marítimo”,              category: “moveis”,      sub: “verniz”,       brand: “coral”,   price: 70.0,  oldPrice: 117.0,  promo: true,  estoque: 14, desc: “Proteção UV e contra maresia para ambientes externos.”,                 img: “https://placehold.co/400x400/005eff/fff?text=Verniz+Maritimo”, sugestoes: [12, 15, 22] },
   { id: 18, name: “Stain Impregnante”,            category: “moveis”,      sub: “verniz”,       brand: “sherwin”, price: 78.0,  oldPrice: 130.0,  promo: true,  estoque: 10, desc: “Não descasca, protege a madeira de dentro para fora.”,                  img: “https://placehold.co/400x400/005eff/fff?text=Stain+Madeira”,   sugestoes: [12, 15, 30] },
   { id: 25, name: “Tinta Spray Multiuso”,         category: “moveis”,      sub: “esmalte”,      brand: “sherwin”, price: 25.0,  oldPrice: 42.0,   promo: true,  estoque: 50, desc: “Secagem rápida para pequenos reparos e artesanato.”,                    img: “https://placehold.co/400x400/005eff/fff?text=Spray+Sherwin”,   sugestoes: [14, 15, 30] },
   // — ESPECIAIS —
   { id: 9,  name: “Tinta Epóxi Base Água”,        category: “especial”,    sub: “epoxi”,        brand: “suvinil”, price: 155.0, oldPrice: 258.0,  promo: true,  estoque: 8,  desc: “Resistência extrema para pisos, banheiros e cozinhas.”,                 img: “https://placehold.co/400x400/005eff/fff?text=Epoxi+Agua”,      sugestoes: [11, 13, 22] },
   { id: 10, name: “Tinta Térmica Refletiva”,      category: “especial”,    sub: “termica”,      brand: “sherwin”, price: 210.0, oldPrice: 350.0,  promo: true,  estoque: 5,  desc: “Reduz a temperatura interna e economiza energia.”,                      img: “https://placehold.co/400x400/005eff/fff?text=Tinta+Termica”,   sugestoes: [11, 16, 13] },
   { id: 26, name: “Esmalte Vitrificado”,          category: “especial”,    sub: “epoxi”,        brand: “coral”,   price: 180.0, oldPrice: 300.0,  promo: true,  estoque: 6,  desc: “Acabamento de alto brilho que parece vidro.”,                           img: “https://placehold.co/400x400/005eff/fff?text=Vitrificar”,      sugestoes: [12, 22, 14] },
   // — PREPARAÇÃO —
   { id: 19, name: “Massa Corrida”,               category: “interior”,    sub: “acrilica”,     brand: “suvinil”, price: 35.0,  oldPrice: 58.0,   promo: true,  estoque: 35, desc: “Fácil de lixar, ideal para nivelar paredes internas.”,                  img: “https://placehold.co/400x400/005eff/fff?text=Massa+Corrida”,   sugestoes: [21, 15, 30] },
   { id: 20, name: “Selador Acrílico”,            category: “interior”,    sub: “acrilica”,     brand: “coral”,   price: 38.0,  oldPrice: 63.0,   promo: true,  estoque: 30, desc: “Uniformiza a absorção da parede, economizando tinta.”,                  img: “https://placehold.co/400x400/005eff/fff?text=Selador”,         sugestoes: [11, 13, 1]  },
   { id: 27, name: “Massa Acrílica (Externa)”,    category: “exterior”,    sub: “acrilica-ext”, brand: “suvinil”, price: 45.0,  oldPrice: 75.0,   promo: true,  estoque: 20, desc: “Resistente à umidade, perfeita para fachadas.”,                         img: “https://placehold.co/400x400/005eff/fff?text=Massa+Acrilica”,  sugestoes: [21, 28, 30] },
   // — FERRAMENTAS —
   { id: 11, name: “Rolo de Lã Antirespingo”,     category: “ferramentas”, sub: “rolos”,        brand: “atlas”,   price: 28.0,  oldPrice: 47.0,   promo: true,  estoque: 60, desc: “Pintura limpa e uniforme para superfícies lisas.”,                      img: “https://placehold.co/400x400/005eff/fff?text=Rolo+Atlas”,      sugestoes: [13, 16, 14] },
   { id: 12, name: “Trincha Pro de Cerdas”,       category: “ferramentas”, sub: “pinceis”,      brand: “tigre”,   price: 12.5,  oldPrice: 21.0,   promo: true,  estoque: 45, desc: “Cerdas sintéticas para acabamentos e recortes.”,                        img: “https://placehold.co/400x400/005eff/fff?text=Pincel+Tigre”,    sugestoes: [14, 22, 15] },
   { id: 13, name: “Bandeja para Pintura G”,      category: “ferramentas”, sub: “bandejas”,     brand: “atlas”,   price: 15.0,  oldPrice: 25.0,   promo: true,  estoque: 38, desc: “Capacidade para 2 litros, bico escorredor.”,                            img: “https://placehold.co/400x400/005eff/fff?text=Bandeja+G”,       sugestoes: [11, 12, 29] },
   { id: 21, name: “Espátula de Aço Inox”,        category: “ferramentas”, sub: “pinceis”,      brand: “tigre”,   price: 18.0,  oldPrice: 30.0,   promo: true,  estoque: 25, desc: “Para aplicação de massas e remoção de resíduos.”,                       img: “https://placehold.co/400x400/005eff/fff?text=Espatula+Inox”,   sugestoes: [19, 27, 15] },
   { id: 28, name: “Desempenadeira de Aço”,       category: “ferramentas”, sub: “bandejas”,     brand: “atlas”,   price: 32.0,  oldPrice: 53.0,   promo: true,  estoque: 18, desc: “Ideal para aplicar massa corrida e texturas.”,                          img: “https://placehold.co/400x400/005eff/fff?text=Desempenadeira”,  sugestoes: [27, 21, 30] },
   // — ACESSÓRIOS E PROTEÇÃO —
   { id: 14, name: “Fita Crepe Azul UV”,          category: “acessorios”,  sub: “fitas”,        brand: “3m”,      price: 15.9,  oldPrice: 26.5,   promo: true,  estoque: 80, desc: “Resistente ao sol, não deixa cola por até 14 dias.”,                    img: “https://placehold.co/400x400/005eff/fff?text=Fita+Azul+3M”,   sugestoes: [29, 11, 1]  },
   { id: 15, name: “Kit Lixas Grão Variado”,      category: “acessorios”,  sub: “lixas”,        brand: “norton”,  price: 8.5,   oldPrice: 14.0,   promo: true,  estoque: 70, desc: “Pack com 5 unidades para diversos acabamentos.”,                        img: “https://placehold.co/400x400/005eff/fff?text=Kit+Lixas”,       sugestoes: [19, 21, 30] },
   { id: 16, name: “Extensor Telescópico”,        category: “acessorios”,  sub: “extensores”,   brand: “atlas”,   price: 35.0,  oldPrice: 58.0,   promo: true,  estoque: 22, desc: “Estrutura leve de alumínio reforçado.”,                                 img: “https://placehold.co/400x400/005eff/fff?text=Extensor”,        sugestoes: [11, 13, 6]  },
   { id: 22, name: “Aguarrás Mineral 900ml”,      category: “acessorios”,  sub: “fitas”,        brand: “suvinil”, price: 22.0,  oldPrice: 37.0,   promo: true,  estoque: 33, desc: “Solvente ideal para diluir esmaltes e limpar ferramentas.”,              img: “https://placehold.co/400x400/005eff/fff?text=Aguarras”,        sugestoes: [7, 8, 12]   },
   { id: 29, name: “Lona Plástica 4x4m”,          category: “acessorios”,  sub: “fitas”,        brand: “3m”,      price: 12.0,  oldPrice: 20.0,   promo: true,  estoque: 42, desc: “Proteção de móveis e pisos contra respingos.”,                          img: “https://placehold.co/400x400/005eff/fff?text=Lona+Protecao”,   sugestoes: [14, 11, 30] },
   { id: 30, name: “Máscara Respiratória PFF2”,   category: “acessorios”,  sub: “extensores”,   brand: “norton”,  price: 7.5,   oldPrice: 12.5,   promo: true,  estoque: 55, desc: “Proteção contra poeira de lixamento e odores.”,                         img: “https://placehold.co/400x400/005eff/fff?text=Mascara+EPI”,     sugestoes: [15, 19, 27] }
   ];

/* ==========================================================================
2. VARIÁVEIS GLOBAIS
========================================================================== */

let cart             = JSON.parse(localStorage.getItem(‘fixtintas_cart’)) || [];
let tempProduct      = null;
let currentWallIndex = 0;
let flashlightAnimFrame = null;
let flashlightAngle  = 0;
let userWallImage    = null;
let lastScrollY      = window.scrollY;

/* ==========================================================================
3. CONFIGURAÇÕES — TIPOS DE PAREDE
========================================================================== */
// Configurações visuais de cada tipo de parede do simulador
const wallTypes = [
{
name: ‘Parede Lisa’,
apply: (box) => {
box.style.backgroundImage = “none”;
}
},
{
name: ‘Grafiato’,
apply: (box) => {
box.style.backgroundImage = `repeating-linear-gradient(88deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 1.5px, transparent 1.5px, transparent 5px ), repeating-linear-gradient(92deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 8px ), linear-gradient(to bottom, rgba(255,255,255,0.1), transparent), radial-gradient(circle at 50% 50%, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.05) 100%)`;
box.style.backgroundSize = “auto”;
box.style.filter         = “contrast(1.1) brightness(0.98)”;
}
},
{
name: ‘Tijolinho’,
apply: (box) => {
box.style.backgroundImage = `linear-gradient(335deg, rgba(0,0,0,0.1) 23px, transparent 23px), linear-gradient(155deg, rgba(0,0,0,0.1) 23px, transparent 23px), linear-gradient(335deg, rgba(0,0,0,0.1) 23px, transparent 23px), linear-gradient(155deg, rgba(0,0,0,0.1) 23px, transparent 23px)`;
box.style.backgroundSize     = “58px 58px”;
box.style.backgroundPosition = “0 0, 4px 35px, 29px 31px, 34px 6px”;
}
},
{
name: ‘Marmorato’,
apply: (box) => {
box.style.backgroundImage = `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(0,0,0,0.08) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(255,255,255,0.1) 0%, transparent 40%)`;
box.style.backgroundSize = “auto”;
}
},
{
name: ‘Sua Parede’,
isPhotoWall: true, // flag usada por updatePreview e changeWall
apply: (box) => {
if (userWallImage) {
box.style.backgroundImage    = `url('${userWallImage}')`;
box.style.backgroundSize     = ‘cover’;
box.style.backgroundPosition = ‘center’;
box.classList.remove(‘aguardando-foto’);


            // Remove hint de upload se existir
            document.getElementById('preview-upload-hint')?.remove();
        } else {
            // Sem foto: exibe estado visual de "aguardando"
            box.style.backgroundImage = 'none';
            box.classList.add('aguardando-foto');

            // Insere hint se ainda não existir
            if (!document.getElementById('preview-upload-hint')) {
                const hint = document.createElement('div');
                hint.id = 'preview-upload-hint';
                hint.innerHTML = `
                    <i class="fas fa-image"></i>
                    <span>ENVIE UMA FOTO DA SUA PAREDE</span>
                `;
                box.appendChild(hint);
            }
        }
    }
}


];

// Aplica overrides persistidos (estoque, promo) definidos no painel admin
// Executa imediatamente — admin.js deve ser carregado antes de script.js
if (typeof _aplicarOverridesProdutos === ‘function’) _aplicarOverridesProdutos();

/* ==========================================================================
4. FUNÇÕES UTILITÁRIAS
========================================================================== */

// Normaliza texto para comparações (remove acentos e converte para minúsculo)
function normalizarTexto(texto) {
if (!texto) return “”;
return texto
.toLowerCase()
.normalize(“NFD”)
.replace(/[\u0300-\u036f]/g, “”);
}

// Verifica se um produto é da categoria de acessórios ou ferramentas
function isProdutoAcessorio(product) {
if (!product) return false;


const nomes = [
    "pincel", "rolo", "fita", "lixa", "bandeja", "espatula",
    "desempenadeira", "extensor", "lona", "mascara", "aguarras",
    "solvente", "trincha"
];

const categoria = normalizarTexto(product.category);
const nome      = normalizarTexto(product.name);

return (
    categoria === 'ferramentas' ||
    categoria === 'acessorios'  ||
    nomes.some(t => nome.includes(t))
);


}

/**

- Gera uma chave determinística para um item do carrinho.
- Mesma combinação productId + opcoes → sempre a mesma chave.
- Permite agrupar itens idênticos sem depender de timestamps.
  */
  function gerarCartKey(productId, opcoes = {}, prefixo = ‘’) {
  const cor        = opcoes.cor        || ‘N/A’;
  const acabamento = opcoes.acabamento || ‘N/A’;
  const tamanho    = opcoes.tamanho    || ‘N/A’;
  const demaos     = opcoes.demaos     || ‘N/A’;
  const base = `${productId}|${cor}|${acabamento}|${tamanho}|${demaos}`;
  return prefixo ? `${prefixo}|${base}` : base;
  }

// Exibe uma notificação toast na tela
function showToast(message, type = ‘success’, isFixed = false) {
const toastEl   = document.getElementById(‘globalToast’);
const messageEl = document.getElementById(‘globalToastMessage’);


if (!toastEl || !messageEl) return;

toastEl.classList.remove('bg-success', 'bg-danger', 'bg-warning', 'bg-primary');
toastEl.classList.add(`bg-${type}`);

messageEl.innerHTML = message;

const toast = new bootstrap.Toast(toastEl, {
    autohide: !isFixed,
    delay: 3000
});

toast.show();


}

// Fecha submenus e menu mobile (navbar collapse ou offcanvas)
function fecharMenuMobile() {
document.querySelectorAll(’.dropdown-side.active’)
.forEach(el => el.classList.remove(‘active’));


const navbarCollapse = document.querySelector('.navbar-collapse.show');
if (navbarCollapse) {
    new bootstrap.Collapse(navbarCollapse).hide();
}

const offcanvasEl = document.querySelector('.offcanvas.show');
if (offcanvasEl) {
    const instance = bootstrap.Offcanvas.getInstance(offcanvasEl);
    if (instance) instance.hide();
}


}

// Remove backdrops travados e restaura scroll do body
function limparBackdropsTravados() {
const backdrops = document.querySelectorAll(’.modal-backdrop’);
backdrops.forEach(b => b.remove());


document.body.classList.remove('modal-open');
document.body.style.overflow     = '';
document.body.style.paddingRight = '';
document.body.classList.remove('modal-open');


}

/* ==========================================================================
5. FUNÇÕES DE RENDERIZAÇÃO (UI)
========================================================================== */

// Renderiza a grade de produtos na tela principal
function renderProducts(items) {
const container = document.getElementById(‘product-list’);
if (!container) return;


const favorites = JSON.parse(localStorage.getItem('fixtintas_favorites')) || [];

// Promove produtos em promoção para o topo da lista
const sortedItems = [...items].sort((a, b) => (b.promo === true) - (a.promo === true));

container.innerHTML = sortedItems.map(p => {
    const isFav = favorites.includes(p.id);

    // Badge de promoção no canto superior esquerdo
    const promoBadge = p.promo
        ? `<span class="badge bg-danger position-absolute top-0 start-0 m-2 shadow-sm" style="z-index: 3;">
            <i class="fas fa-fire me-1"></i>OFERTA
           </span>`
        : '';

    // Bloco de preço com ou sem tachado
    const priceHTML = p.promo && p.oldPrice
        ? `<div class="d-flex flex-column">
            <span class="text-muted small text-decoration-line-through" style="font-size: 0.75rem;">R$ ${p.oldPrice.toFixed(2)}</span>
            <h5 class="text-primary fw-bold mb-0">R$ ${p.price.toFixed(2)}</h5>
           </div>`
        : `<h5 class="text-primary fw-bold mb-0">R$ ${p.price.toFixed(2)}</h5>`;

    return `
    <div class="col-12 col-sm-6 col-lg-4 mb-4">
        <div class="card product-card h-100 shadow-sm border-0" onclick="showProductDetails(${p.id})" style="cursor: pointer;">
            <div class="position-relative">
                <img src="${p.img}"
                     class="card-img-top img-fluid"
                     alt="${p.name}"
                     style="height: 250px; object-fit: cover;">

                ${promoBadge}

                <div class="position-absolute top-0 end-0 m-2 d-flex align-items-center gap-2" style="z-index: 3;">
                    <span class="badge bg-warning text-dark text-uppercase">
                        ${p.brand}
                    </span>
                    <button onclick="toggleFavorite(${p.id}, event); event.stopPropagation();"
                            class="btn-favorite"
                            style="position: static; margin: 0;">
                        <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                </div>
            </div>

            <div class="card-body d-flex flex-column p-3">
                <h5 class="fw-bold mb-1 h6 text-truncate">${p.name}</h5>
                <p class="text-muted small mb-3" style="height: 40px; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
                    ${p.desc}
                </p>
                <div class="mt-auto d-flex align-items-center justify-content-between">
                    ${priceHTML}
                    <button class="btn-ver-mais">
                        VER MAIS <i class="fas fa-arrow-right ms-1" style="font-size: 0.75rem;"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>`;
}).join('');


}

/**

- Gera o bloco HTML de preço para o modal de detalhes do produto.
- Exibe destaque completo de promoção quando product.promo === true.
  */
  function _gerarBlocoPrecoModal(product) {
  if (!product.promo) {
  return `<div class="price-normal-block"> <h3>R$ ${product.price.toFixed(2)}</h3> </div>`;
  }
  
  const temOldPrice = product.oldPrice && product.oldPrice > product.price;
  const economia    = temOldPrice ? (product.oldPrice - product.price) : null;
  const desconto    = temOldPrice
  ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
  : null;
  
  const precoAntigoHtml = temOldPrice
  ? `<span class="promo-price-old">De R$ ${product.oldPrice.toFixed(2)}</span>`
  : ‘’;
  
  const economiaHtml = economia
  ? `<span class="promo-price-economia"> <i class="fas fa-check-circle me-1"></i> Você economiza R$ ${economia.toFixed(2)} </span>`
  : ‘’;
  
  const badgeDescontoHtml = desconto
  ? `<span class="promo-badge-modal"> <i class="fas fa-tag me-1"></i>-${desconto}% </span>`
  : ‘’;
  
  return `
  <div class="promo-seal">
  <i class="fas fa-fire"></i>
  EM PROMOÇÃO
  </div>
  
  
   <div class="promo-price-block">
       ${precoAntigoHtml}
       <span class="promo-price-current">
           R$ ${product.price.toFixed(2)}
       </span>
       ${economiaHtml}
   </div>
  
   <div class="promo-urgencia">
       <i class="fas fa-clock"></i>
       Oferta por tempo limitado — aproveite agora!
   </div>
  
   <div id="promo-badge-img-inject" data-desconto="${badgeDescontoHtml}</div>
  
  
  `;
  }

// Renderiza cards de sugestões de produtos complementares dentro de um modal
function renderizarSugestoes(produtoAtual, containerId) {
const container = document.getElementById(containerId);
if (!container) return;


container.innerHTML = '';

if (!produtoAtual.sugestoes || produtoAtual.sugestoes.length === 0) {
    container.innerHTML = '<p class="text-muted small ms-2">Adicione acessórios ao seu projeto.</p>';
    return;
}

const itensSugeridos = products.filter(p => produtoAtual.sugestoes.includes(p.id));

let htmlGerado = '';
itensSugeridos.forEach(item => {
    htmlGerado += `
        <div class="col-4 text-center">
            <div class="card h-100 border-0 bg-light p-2 shadow-sm" style="border-radius: 10px;">
                <img src="${item.img}" class="img-fluid rounded mb-2" style="max-height: 45px; object-fit: contain;">
                <p class="fw-bold mb-1" style="font-size: 0.6rem; line-height: 1.1; height: 25px; overflow: hidden;">${item.name}</p>
                <p class="text-primary fw-bold mb-2" style="font-size: 0.7rem;">R$ ${item.price.toFixed(2)}</p>
                <a href="?produto=${item.id}"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="btn btn-sm btn-warning w-100 py-1"
                   style="font-size: 0.55rem; border-radius: 5px; font-weight: bold;">
                    VER ITEM
                </a>
            </div>
        </div>
    `;
});

container.innerHTML = htmlGerado;


}

// Renderiza os favoritos no painel “Minha Conta”
function renderFavoritesProfile() {
const favContainer = document.getElementById(‘favorites-list’);
if (!favContainer) return;


const favorites     = JSON.parse(localStorage.getItem('fixtintas_favorites')) || [];
const favoriteItems = products.filter(p => favorites.includes(p.id));

if (favoriteItems.length === 0) {
    favContainer.innerHTML = '<p class="text-muted small text-center py-2 mb-0">Lista vazia.</p>';
    return;
}

favContainer.innerHTML = favoriteItems.map(p => `
    <div class="d-flex align-items-center mb-2 bg-white p-2 rounded shadow-sm">
        <img src="${p.img}" width="40" height="40" class="rounded object-fit-cover me-2">
        <div class="flex-grow-1 overflow-hidden">
            <div class="fw-bold text-truncate" style="font-size: 0.75rem;">${p.name}</div>
            <div class="text-primary fw-bold" style="font-size: 0.75rem;">R$ ${p.price.toFixed(2)}</div>
        </div>
        <button class="btn btn-sm text-danger" onclick="toggleFavorite(${p.id}, event)">
            <i class="fas fa-trash-alt"></i>
        </button>
    </div>
`).join('');


}

// Renderiza o histórico de pedidos no painel “Minha Conta”
function renderOrdersProfile() {
const ordersContainer = document.getElementById(‘orders-list’);
if (!ordersContainer) return;


const pedidos = JSON.parse(localStorage.getItem('fixtintas_orders') || '[]');

if (pedidos.length === 0) {
    ordersContainer.innerHTML = '<p class="text-muted small text-center py-2 mb-0">Você ainda não fez pedidos.</p>';
    return;
}

ordersContainer.innerHTML = pedidos.map(p => `
    <div class="pedido-card p-2 rounded mb-2 border-start border-primary border-4">
        <div class="d-flex justify-content-between align-items-start gap-2">
            <div class="flex-grow-1 overflow-hidden">
                <div class="d-flex justify-content-between">
                    <span class="fw-bold" style="font-size:0.75rem;">Pedido #${p.id}</span>
                    <span class="text-muted" style="font-size:0.65rem;">${p.data}</span>
                </div>
                <div class="text-muted my-1" style="font-size:0.7rem;line-height:1.3;">
                    ${(p.itens || []).slice(0, 3).map(i => `${i.quantity}x ${i.name}`).join(' · ')}
                    ${(p.itens || []).length > 3 ? ` <em>+${(p.itens.length - 3)} mais</em>` : ''}
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <span class="fw-bold text-primary" style="font-size:0.8rem;">R$&nbsp;${p.total.toFixed(2)}</span>
                    <button class="btn btn-outline-primary btn-sm py-0 px-2"
                            style="font-size:0.68rem;"
                            onclick="abrirModalComprovante(${JSON.stringify(p).replace(/"/g,'&quot;')})">
                        <i class="fas fa-receipt me-1"></i>Comprovante
                    </button>
                </div>
            </div>
        </div>
    </div>
`).join('');


}

// Renderiza as cores disponíveis dentro do modal de configuração de spray
function renderCoresNoModalSpray() {
const container = document.getElementById(‘sprayColorPicker’);
if (!container) return;


const cores = [
    { id: 'white',    name: 'Branco',         hex: '#ffffff', price: 0  },
    { id: 'offwhite', name: 'Pérola',          hex: '#fdf5e6', price: 5  },
    { id: 'gray',     name: 'Cinza Platina',   hex: '#bdc3c7', price: 10 },
    { id: 'black',    name: 'Preto Absoluto',  hex: '#2c3e50', price: 25 },
    { id: 'blue',     name: 'Azul Naval',      hex: '#005eff', price: 15 },
    { id: 'green',    name: 'Verde Floresta',  hex: '#27ae60', price: 15 },
    { id: 'yellow',   name: 'Amarelo Sol',     hex: '#f1c40f', price: 20 },
    { id: 'red',      name: 'Vermelho Rubi',   hex: '#e74c3c', price: 30 },
    { id: 'terracota',name: 'Terracota',       hex: '#e67e22', price: 18 }
];

container.innerHTML = cores.map(cor => `
    <div class="text-center">
        <input type="radio" class="btn-check" name="color"
            id="spray-${cor.id}"
            value="${cor.name}"
            data-hex="${cor.hex}"
            data-price-color="${cor.price}"
            onchange="updateSprayPreview()">
        <label class="btn btn-outline-secondary p-0 rounded-circle shadow-sm color-dot"
            for="spray-${cor.id}"
            style="background: ${cor.hex}; width: 35px; height: 35px; border-width: 2px;">
        </label>
        <div class="small mt-1 text-muted" style="font-size: 0.65rem;">
            ${cor.price === 0 ? cor.name : '+ R$ ' + cor.price}
        </div>
    </div>
`).join('');

renderizarSugestoes(tempProduct, 'sugestoes-spray');
updateSprayPreview();


}

/* ==========================================================================
6. FUNÇÕES DE FILTRAGEM E BUSCA
========================================================================== */

// Filtra produtos por categoria, subcategoria ou marca
function filterProducts(tag, event) {
if (event && event.preventDefault) { event.preventDefault(); }


const list          = document.getElementById('product-list');
const categoryTitle = document.getElementById('category-title');
if (!list) return;

// TAREFA 3 — Atualiza a URL sem recarregar a página
const url = new URL(window.location);
if (!tag || tag === 'all' || tag === '') {
    url.searchParams.delete('categoria');
} else {
    url.searchParams.set('categoria', tag.toLowerCase().trim());
}
window.history.pushState({ categoria: tag }, '', url);

list.style.opacity = '0';

setTimeout(() => {
    let filtered;
    const searchTag = tag.toLowerCase().trim();

    if (searchTag === 'all' || searchTag === '') {
        filtered = products;
        if (categoryTitle) categoryTitle.innerText = "Produtos em Oferta";
    } else {
        filtered = products.filter(p =>
            p.category.toLowerCase() === searchTag ||
            p.sub.toLowerCase()      === searchTag ||
            p.brand.toLowerCase()    === searchTag
        );

        // Marca item ativo na sidebar
        document.querySelectorAll('.custom-menu .list-group-item')
            .forEach(el => el.classList.remove('active-filter'));

        if (searchTag !== 'all' && searchTag !== '') {
            document.querySelectorAll('.submenu li').forEach(li => {
                const onclickAttr = li.getAttribute('onclick') || '';
                if (onclickAttr.includes(`'${searchTag}'`)) {
                    li.closest('.list-group-item')?.classList.add('active-filter');
                }
            });
        }

        // Atualiza o título da categoria
        if (categoryTitle) {
            const mapa = {
                interior: 'Tintas de Interior', exterior: 'Tintas de Exterior',
                acrilica: 'Tinta Acrílica', latex: 'Tinta Látex', fosca: 'Tinta Fosca',
                impermeavel: 'Tinta Impermeável', 'acrilica-ext': 'Acrílica Externa',
                esmalte: 'Esmalte', verniz: 'Verniz', epoxi: 'Tinta Epóxi',
                termica: 'Tinta Térmica', suvinil: 'Suvinil', coral: 'Coral',
                sherwin: 'Sherwin-Williams', rolos: 'Rolos', pinceis: 'Pincéis',
                bandejas: 'Bandejas', lixas: 'Lixas', fitas: 'Fitas',
                extensores: 'Extensores', ferramentas: 'Ferramentas', acessorios: 'Acessórios',
                moveis: 'Tintas para Móveis', especial: 'Tintas Especiais'
            };
            categoryTitle.innerText = mapa[searchTag] || `Categoria: ${searchTag}`;
        }
    }

    renderProducts(filtered);
    list.style.opacity = '1';

    const offcanvasEl = document.getElementById('offcanvasCategories');
    if (offcanvasEl) {
        const instance = bootstrap.Offcanvas.getInstance(offcanvasEl) || new bootstrap.Offcanvas(offcanvasEl);
        instance.hide();
    }

    if (window.innerWidth < 992) {
        window.scrollTo({ top: list.offsetTop - 100, behavior: 'smooth' });
    }
}, 300);


}

// Filtra produtos por faixa de preço
function filterByPrice(value) {
const list          = document.getElementById(‘product-list’);
const categoryTitle = document.getElementById(‘category-title’);
if (!list) return;


let filtered;

if (value === 'all') {
    filtered = [...products];
    if (categoryTitle) categoryTitle.innerText = "Produtos em Oferta";
} else {
    const [min, max] = value.split('-').map(Number);
    filtered = products.filter(p => p.price >= min && p.price <= max);

    if (categoryTitle) {
        categoryTitle.innerText = max > 1000
            ? `Acima de R$ ${min}`
            : `Preço: R$ ${min} - R$ ${max}`;
    }
}

filtered.sort((a, b) => a.price - b.price);

list.style.opacity = '0';
setTimeout(() => {
    renderProducts(filtered);
    list.style.opacity = '1';
}, 200);


}

// Limpa o campo de busca e restaura todos os produtos
function limparBusca() {
const inputBusca = document.getElementById(‘inputBusca’);
const btnLimpar  = document.getElementById(‘btnLimparBusca’);
const contadorEl = document.getElementById(‘busca-contador’);


if (inputBusca) inputBusca.value = '';
if (btnLimpar)  btnLimpar.classList.remove('visivel');
if (contadorEl) contadorEl.classList.remove('visivel');

renderProducts(products);


}

/* ==========================================================================
7. FUNÇÕES DE MODAIS — PRODUTO
========================================================================== */

// Abre o modal de detalhes completo do produto
function showProductDetails(id) {
const product = products.find(p => p.id === id);
if (!product) return;


// Atualiza a URL com o ID do produto
const novaUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?produto=' + id;
window.history.pushState({ path: novaUrl }, '', novaUrl);

// Gera nota e avaliações baseadas no ID do produto
const seed       = (product.id * 133) % 11;
const rating     = (4 + (seed / 10)).toFixed(1);
const numReviews = ((product.id * 7) % 31) + 10;

let starHtml = '';
for (let i = 1; i <= 5; i++) {
    if (rating >= i)         starHtml += '<i class="fas fa-star"></i>';
    else if (rating >= i - 0.9) starHtml += '<i class="fas fa-star-half-alt"></i>';
    else                     starHtml += '<i class="far fa-star"></i>';
}

// Seleciona produto sugerido a partir do array de sugestões
let produtoSugerido;
let fraseDica = "Quem comprou este item também levou:";

if (product.sugestoes && product.sugestoes.length > 0) {
    const indexSugerido = (product.id) % product.sugestoes.length;
    const idSugerido    = product.sugestoes[indexSugerido];
    produtoSugerido     = products.find(p => p.id === idSugerido);
}

if (!produtoSugerido) {
    produtoSugerido = products[product.id % products.length];
}

const favorites     = JSON.parse(localStorage.getItem('fixtintas_favorites')) || [];
const isFav         = favorites.includes(product.id);

const enderecoSalvo = JSON.parse(localStorage.getItem('usuario_endereco_obj') || 'null');
const cepSalvo      = enderecoSalvo?.cep || '';
const cepFormatado  = cepSalvo.length === 8
    ? cepSalvo.substring(0, 5) + '-' + cepSalvo.substring(5)
    : '';
const temCepSalvo   = cepSalvo.length === 8;

const modalContent = document.getElementById('modal-content-details');
modalContent.innerHTML = `
    <div class="modal-header border-0 pb-0">
        <div class="d-flex align-items-center ms-auto">
            <button onclick="shareProduct(${product.id}, '${product.name}')"
                    class="btn btn-outline-secondary border-0 rounded-circle me-1 shadow-none">
                <i class="fas fa-share-alt fa-lg"></i>
            </button>
            <button onclick="handleModalFavorite(${product.id}, event)" id="btn-fav-modal"
                    class="btn btn-outline-danger border-0 rounded-circle me-2 shadow-none">
                <i class="${isFav ? 'fas' : 'far'} fa-heart fa-lg"></i>
            </button>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
    </div>
    <div class="modal-body p-4 pt-0">
        <div class="row">
            <div class="col-md-6 mb-4 mb-md-0">
                <div class="position-relative">
                    <img src="${product.img}"
                         class="img-fluid rounded shadow-sm"
                         style="width: 100%; height: 280px; object-fit: cover;">
                    ${product.promo && product.oldPrice
                        ? `<span class="promo-badge-modal">
                               <i class="fas fa-tag me-1"></i>
                               -${Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                           </span>`
                        : ''
                    }
                </div>

                <!-- TAREFA 6: Conteúdo enriquecido abaixo da imagem -->
                <div class="modal-extra-content mt-3">

                    <!-- Informações de aplicação -->
                    <div class="modal-info-card mb-3">
                        <div class="modal-info-card-header">
                            <i class="fas fa-info-circle"></i>
                            <span>Como usar</span>
                        </div>
                        <div class="modal-info-card-body">
                            ${_gerarComoUsarProduto(product)}
                        </div>
                    </div>

                    <!-- Características técnicas -->
                    <div class="modal-info-card mb-3">
                        <div class="modal-info-card-header">
                            <i class="fas fa-list-ul"></i>
                            <span>Características</span>
                        </div>
                        <div class="modal-info-card-body">
                            ${_gerarCaracteristicasProduto(product)}
                        </div>
                    </div>

                    <!-- Avaliações resumidas -->
                    <div class="modal-avaliacoes-resumo">
                        <div class="modal-aval-nota">${rating}</div>
                        <div class="flex-grow-1">
                            <div class="modal-aval-estrelas text-warning">${starHtml}</div>
                            <div class="text-muted" style="font-size:0.7rem;">${numReviews} avaliações</div>
                        </div>
                        <div class="modal-aval-badge">
                            <i class="fas fa-thumbs-up me-1"></i>
                            ${Math.round((rating / 5) * 100)}% recomendam
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-md-6 d-flex flex-column">
                <div class="flex-grow-1">
                    <span class="badge bg-primary mb-2 text-uppercase">${product.brand}</span>
                    <h2 class="fw-bold h3 mb-1">${product.name}</h2>
                    <div class="mb-3">
                        <div class="text-warning d-inline">${starHtml}</div>
                        <small class="text-muted ms-2">(${rating}/5 - ${numReviews} avaliações)</small>
                    </div>
                    ${_gerarBlocoPrecoModal(product)}
                    <p class="text-muted border-top pt-3 mb-3">${product.desc}</p>

                    <div class="frete-container">
                        <div class="frete-titulo">
                            <i class="fas fa-truck"></i>
                            Calcular Frete
                        </div>

                        ${temCepSalvo ? `
                            <div class="frete-cep-salvo">
                                <div class="frete-cep-salvo-info">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span>Entrega para <strong>${enderecoSalvo.cidade || 'seu endereço'}</strong></span>
                                </div>
                                <button class="frete-cep-salvo-alterar"
                                        onclick="_trocarCepFrete('frete-cep-${product.id}', 'frete-resultado-${product.id}')">
                                    Alterar
                                </button>
                            </div>
                        ` : ''}

                        <div class="frete-input-group"
                             id="frete-input-wrap-${product.id}"
                             ${temCepSalvo ? 'style="display:none;"' : ''}>
                            <input type="text"
                                   id="frete-cep-${product.id}"
                                   class="frete-input"
                                   placeholder="00000-000"
                                   maxlength="9"
                                   inputmode="numeric"
                                   value="${cepFormatado}"
                                   data-resultado-id="frete-resultado-${product.id}"
                                   data-preco="${product.price}"
                                   aria-label="CEP para cálculo de frete">
                            <button class="frete-btn"
                                    onclick="calcularFrete('frete-cep-${product.id}', 'frete-resultado-${product.id}', ${product.price})">
                                Calcular
                            </button>
                        </div>

                        <a href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                           target="_blank"
                           rel="noopener noreferrer"
                           class="frete-link-cep"
                           ${temCepSalvo ? 'style="display:none;"' : ''}>
                            <i class="fas fa-search me-1"></i>Não sei meu CEP
                        </a>

                        <div id="frete-resultado-${product.id}" class="frete-resultado"></div>
                    </div>

                    <div class="row align-items-center mb-4">
                        <div class="col-6">
                            <label class="form-label small fw-bold text-muted text-uppercase">Quantidade</label>
                            <div class="input-group" style="width: 130px;">
                                <button class="btn btn-outline-secondary" onclick="updateModalQty(-1, ${product.price})" style="width: 40px;">-</button>
                                <input type="number" id="modal-qty" class="form-control text-center border-secondary fw-bold" value="1" readonly style="height: 38px;">
                                <button class="btn btn-outline-secondary" onclick="updateModalQty(1, ${product.price})" style="width: 40px;">+</button>
                            </div>
                        </div>
                        <div class="col-6 text-end">
                            <label class="form-label small fw-bold text-muted text-uppercase">Subtotal</label>
                            <h4 class="fw-bold" id="modal-subtotal">R$ ${product.price.toFixed(2)}</h4>
                        </div>
                    </div>

                    <div class="bg-light p-3 rounded mb-4 border-start border-warning border-4">
                        <h6 class="small fw-bold mb-2 text-dark">
                            <i class="fas fa-lightbulb me-1 text-warning"></i> Dica do Especialista
                        </h6>
                        <p class="small text-muted mb-2">${fraseDica}</p>
                        <a href="./index.html?produto=${produtoSugerido.id}" target="_blank"
                           class="d-flex align-items-center bg-white p-2 rounded border shadow-sm text-decoration-none shadow-sm-hover">
                            <img src="${produtoSugerido.img}" style="width: 45px; height: 45px; object-fit: cover;" class="rounded me-2">
                            <div class="overflow-hidden">
                                <p class="mb-0 fw-bold small text-dark text-truncate">${produtoSugerido.name}</p>
                                <p class="mb-0 small text-primary">R$ ${produtoSugerido.price.toFixed(2)}</p>
                            </div>
                            <i class="fas fa-external-link-alt ms-auto text-muted" style="font-size: 0.7rem;"></i>
                        </a>
                    </div>
                </div>
                <div class="mt-2 mb-2">
                    ${(() => {
                        const est = product.estoque ?? 0;
                        if (est === 0) return `
                            <div class="alert alert-danger py-2 px-3 mb-0 d-flex align-items-center gap-2" style="font-size:0.82rem;">
                                <i class="fas fa-times-circle"></i>
                                <strong>Produto fora de estoque</strong>
                            </div>`;
                        if (est <= 5) return `
                            <div class="alert alert-warning py-2 px-3 mb-0 d-flex align-items-center gap-2" style="font-size:0.82rem;">
                                <i class="fas fa-exclamation-triangle"></i>
                                <span>⚡ Últimas <strong>${est}</strong> unidade${est > 1 ? 's' : ''} em estoque!</span>
                            </div>`;
                        return `
                            <div class="text-muted d-flex align-items-center gap-1" style="font-size:0.78rem;">
                                <i class="fas fa-check-circle text-success"></i>
                                <span>${est} unidades disponíveis</span>
                            </div>`;
                    })()}
                </div>
                <button class="btn btn-warning w-100 fw-bold p-3 shadow-sm mt-auto"
                        onclick="addToCartFromModal(${product.id})"
                        ${(product.estoque ?? 0) === 0 ? 'disabled' : ''}>
                    ${(product.estoque ?? 0) === 0
                        ? '<i class="fas fa-ban me-2"></i> SEM ESTOQUE'
                        : '<i class="fas fa-cart-plus me-2"></i> ADICIONAR AO CARRINHO'}
                </button>
            </div>
        </div>
    </div>
`;

const modalElement = document.getElementById('productModal');
const myModal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
myModal.show();

// Auto-calcula frete se houver CEP salvo
const _endSalvo = JSON.parse(localStorage.getItem('usuario_endereco_obj') || 'null');
if (_endSalvo?.cep?.length === 8) {
    setTimeout(() => {
        calcularFrete(
            `frete-cep-${product.id}`,
            `frete-resultado-${product.id}`,
            product.price
        );
    }, 400);
}

// Restaura URL ao fechar o modal
modalElement.addEventListener('hidden.bs.modal', () => {
    const urlOriginal = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.history.pushState({ path: urlOriginal }, '', urlOriginal);
}, { once: true });


}

/**

- TAREFA 6 — Gera conteúdo de “Como Usar” baseado na categoria/sub do produto.
  */
  function _gerarComoUsarProduto(product) {
  const sub  = (product.sub  || ‘’).toLowerCase();
  const cat  = (product.category || ‘’).toLowerCase();
  const nome = (product.name || ‘’).toLowerCase();
  
  const guias = {
  acrilica:     [‘Prepare a superfície (lixe e limpe)’, ‘Aplique massa corrida se necessário’, ‘Dê 2 demãos com rolo de lã’, ‘Aguarde 2h entre cada demão’],
  latex:        [‘Limpe a superfície de pó e gordura’, ‘Aplique selador acrílico antes’, ‘Use rolo de espuma para tetos’, ‘Aguarde secagem de 1h’],
  fosca:        [‘Lixe superfícies brilhosas antes’, ‘Aplique em ambientes internos secos’, ‘Use pincel para cantos e rolo para áreas planas’],
  ‘acrilica-ext’: [‘Limpe toda a fachada com água’, ‘Aplique fundo nivelador’, ‘Use rolo de lã para paredes externas’, ‘Evite aplicar sob sol forte’],
  impermeavel:  [‘Sele todas as fissuras com massa’, ‘Aplique 2 demãos cruzadas’, ‘Aguarde cura completa de 24h antes de molhar’],
  esmalte:      [‘Lixe a peça com lixa fina’, ‘Aplique fundo zarcão em metais’, ‘Use pincel de cerdas finas’, ‘Aguarde 4h entre demãos’],
  verniz:       [‘Lixe a madeira no sentido das fibras’, ‘Limpe toda a poeira’, ‘Aplique 3 demãos finas’, ‘Lixe levemente entre as demãos’],
  epoxi:        [‘Limpe com solvente antes’, ‘Misture os componentes A e B’, ‘Aplique em temperatura acima de 10°C’, ‘Tempo de pot life: 30 minutos’],
  rolos:        [‘Molhe o rolo levemente antes de usar’, ‘Retire o excesso na bandeja’, ‘Passe em “W” para melhor cobertura’],
  pinceis:      [‘Mergulhe apenas 1/3 das cerdas’, ‘Passe em movimentos contínuos’, ‘Lave com água (base água) ou solvente’],
  lixas:        [‘Use lixa mais grossa primeiro’, ‘Finalize com lixa fina’, ‘Lixe sempre no mesmo sentido’]
  };
  
  const passos = guias[sub] || guias[cat] || [‘Siga as instruções da embalagem.’, ‘Consulte um especialista FixTintas se necessário.’];
  
  return passos.map(p => `<div class="modal-info-passo"> <i class="fas fa-check-circle text-success me-2" style="font-size:0.75rem;"></i> <span>${p}</span> </div>`).join(’’);
  }

/**

- TAREFA 6 — Gera características técnicas do produto baseado nos dados disponíveis.
  */
  function _gerarCaracteristicasProduto(product) {
  const sub = (product.sub || ‘’).toLowerCase();
  const cat = (product.category || ‘’).toLowerCase();
  
  const mapaCaract = {
  acrilica:     { base: ‘Água’, acabamento: ‘Fosco/Acetinado’, diluicao: ‘Água (5-10%)’ },
  latex:        { base: ‘Água’, acabamento: ‘Fosco’, diluicao: ‘Água (10%)’ },
  fosca:        { base: ‘Água’, acabamento: ‘Fosco’, diluicao: ‘Água (5%)’ },
  ‘acrilica-ext’: { base: ‘Água’, acabamento: ‘Fosco’, diluicao: ‘Água (10%)’, resistencia: ‘Intempéries’ },
  impermeavel:  { base: ‘Água’, aplicacao: ‘Externo’, diluicao: ‘Não diluir’, resistencia: ‘Impermeável’ },
  esmalte:      { base: ‘Solvente’, acabamento: ‘Brilhante’, diluicao: ‘Aguarrás (10%)’ },
  verniz:       { base: ‘Solvente’, acabamento: ‘Brilhante’, diluicao: ‘Aguarrás (10%)’, uv: ‘Proteção UV’ },
  epoxi:        { base: ‘Bicomponente’, acabamento: ‘Alto brilho’, secagem: ‘24h (cura)’ },
  termica:      { base: ‘Água’, acabamento: ‘Fosco’, especial: ‘Refletivo’ }
  };
  
  const caracts = mapaCaract[sub] || mapaCaract[cat] || {};
  
  const linhas = [
  { label: ‘Marca’,       valor: product.brand?.toUpperCase() },
  { label: ‘Base’,        valor: caracts.base },
  { label: ‘Acabamento’,  valor: caracts.acabamento },
  { label: ‘Diluição’,    valor: caracts.diluicao },
  { label: ‘Resistência’, valor: caracts.resistencia },
  { label: ‘Especial’,    valor: caracts.especial || caracts.uv }
  ].filter(l => l.valor);
  
  if (linhas.length === 0) {
  return ‘<span style="font-size:0.78rem;color:#999;">Consulte a embalagem para detalhes técnicos.</span>’;
  }
  
  return linhas.map(l => `<div class="modal-caract-linha"> <span class="modal-caract-label">${l.label}</span> <span class="modal-caract-valor">${l.valor}</span> </div>`).join(’’);
  }

// Atualiza a quantidade e o subtotal visualmente no modal de detalhes
function updateModalQty(delta, price) {
const qtyInput     = document.getElementById(‘modal-qty’);
const subtotalText = document.getElementById(‘modal-subtotal’);
let currentQty     = parseInt(qtyInput.value);


currentQty += delta;
if (currentQty < 1) currentQty = 1;

qtyInput.value     = currentQty;
subtotalText.innerText = `R$ ${(currentQty * price).toFixed(2)}`;


}

// Dispara a adição ao carrinho a partir do modal de detalhes do produto
function addToCartFromModal(id) {
const product = products.find(p => p.id === id);
if (!product) return;


const qtyInput    = document.getElementById('modal-qty');
const quantity    = qtyInput ? parseInt(qtyInput.value) : 1;
const isAcessorio = isProdutoAcessorio(product);

// Validação de estoque antes de qualquer ação
const check = podeAdicionarAoCarrinho(product.id, quantity);
if (!check.ok) {
    showToast(`⚠️ ${check.erro}`, 'warning');
    return;
}

// Fecha o modal de detalhes antes de prosseguir
const modalDetailsEl = document.getElementById('productModal');
const modalDetails   = bootstrap.Modal.getInstance(modalDetailsEl);
if (modalDetails) modalDetails.hide();

if (isAcessorio) {
    addToCartSimple(id, quantity);

    const cartOffcanvasEl = document.getElementById('cartOffcanvas');
    if (cartOffcanvasEl) {
        const cartOffcanvas = new bootstrap.Offcanvas(cartOffcanvasEl);
        cartOffcanvas.show();
    }

    limparBackdropsTravados();
} else {
    // Configura fila de configuração para tintas e sprays
    sessionStorage.setItem('pending_configs', quantity);
    sessionStorage.setItem('total_to_configure', quantity);

    modalDetailsEl.addEventListener('hidden.bs.modal', function handler() {
        openConfigModal(id);
        modalDetailsEl.removeEventListener('hidden.bs.modal', handler);
    }, { once: true });
}


}

// Atualiza o ícone de favorito dentro do modal de detalhes
function handleModalFavorite(id, event) {
toggleFavorite(id, event);


const btn       = document.getElementById('btn-fav-modal');
const icon      = btn.querySelector('i');
const favorites = JSON.parse(localStorage.getItem('fixtintas_favorites')) || [];
const isFav     = favorites.includes(id);

if (isFav) {
    icon.classList.replace('far', 'fas');
    btn.title = "Remover dos favoritos";
} else {
    icon.classList.replace('fas', 'far');
    btn.title = "Adicionar aos favoritos";
}

renderFavoritesProfile();


}

// Compartilha o produto via Web Share API ou copia o link para a área de transferência
function shareProduct(id, name) {
const url  = `${window.location.origin}${window.location.pathname}?produto=${id}`;
const text = `Confira este produto: ${name}`;


if (navigator.share) {
    navigator.share({ title: name, text: text, url: url })
        .then(() => console.log('Compartilhado com sucesso!'))
        .catch((error) => console.log('Erro ao compartilhar', error));
} else {
    navigator.clipboard.writeText(url).then(() => {
        alert('Link copiado para a área de transferência!');
    });
}


}

/* ==========================================================================
8. FUNÇÕES DE CONFIGURAÇÃO DE PRODUTO (MODAL CONFIG)
========================================================================== */

// Direciona para o modal correto conforme o tipo de produto
function openConfigModal(id) {
const product = products.find(p => p.id == id);
if (!product) return;


tempProduct = product;
const nameLower   = product.name.toLowerCase();
const isAcessorio = isProdutoAcessorio(product);

const apenasTamanho =
    nameLower.includes("massa")      ||
    nameLower.includes("selador")    ||
    nameLower.includes("verniz")     ||
    nameLower.includes("impregnante")||
    nameLower.includes("stain")      ||
    nameLower.includes("fundo")      ||
    nameLower.includes("zarcao")     ||
    nameLower.includes("cupinicida") ||
    nameLower.includes("seladora");

const isSpray = product.id === 25 || nameLower.includes("spray");

// 1. Acessórios: adicionados direto ao carrinho
if (isAcessorio) {
    addToCartSimple(product.id);
    return;
}

// 2. Massa, Verniz, etc.: modal apenas de tamanho
if (apenasTamanho) {
    modalTamanhos(product);
    return;
}

// 3. Spray: modal específico de spray
if (isSpray) {
    const sprayModalEl = document.getElementById('sprayConfigModal');
    if (sprayModalEl) {
        renderCoresNoModalSpray();
        const sprayModal = new bootstrap.Modal(sprayModalEl);

        let pending = parseInt(sessionStorage.getItem('pending_configs')) || 1;
        let total   = parseInt(sessionStorage.getItem('total_to_configure')) || 1;
        const atual = (total - pending) + 1;

        const labelEl = document.getElementById('sprayModalLabel');
        if (labelEl) {
            labelEl.innerHTML = `${product.name} <span class="badge bg-warning text-dark ms-2 rounded-pill" style="font-size: 0.7rem;">Item ${atual} de ${total}</span>`;
        }

        sprayModalEl.addEventListener('shown.bs.modal', () => {
            updateSprayPreview();
            atualizarSubtotalModal();
        }, { once: true });

        sprayModal.show();
    }
    return;
}

// 4. Tintas padrão: modal com cor e textura
const configModalEl = document.getElementById('productConfigModal');
if (configModalEl) {
    let pending = parseInt(sessionStorage.getItem('pending_configs')) || 1;
    let total   = parseInt(sessionStorage.getItem('total_to_configure')) || 1;
    const atual = (total - pending) + 1;

    const btnApplyAll = document.getElementById('btnApplyToAll');
    if (btnApplyAll) {
        btnApplyAll.style.display = total > 1 ? 'block' : 'none';
    }

    const labelEl = document.getElementById('productConfigModalLabel');
    if (labelEl) {
        labelEl.innerHTML = `${product.name} <span class="badge bg-warning text-dark ms-2 rounded-pill" style="font-size: 0.7rem;">Item ${atual} de ${total}</span>`;
    }

    const configModal      = new bootstrap.Modal(configModalEl);
    const subsComParede    = ['acrilica', 'latex', 'fosca', 'acrilica-ext', 'impermeavel', 'termica', 'emborrachada'];
    const previewContainer = document.getElementById('preview-container');

    if (previewContainer) {
        previewContainer.style.display = subsComParede.includes(product.sub) ? 'block' : 'none';
    }

    configModal.show();
    atualizarBotaoUploadParede();
    renderizarSugestoes(product, 'sugestoes-container');

    configModalEl.addEventListener('shown.bs.modal', () => {
        updatePreview();
        atualizarSubtotalModal();
    }, { once: true });
}


}

// Abre o modal de seleção de tamanho (massa, verniz, etc.)
function modalTamanhos(product) {
const sizeModalEl = document.getElementById(‘modalTamanhos’);
if (!sizeModalEl) return;


let pending = parseInt(sessionStorage.getItem('pending_configs')) || 1;
let total   = parseInt(sessionStorage.getItem('total_to_configure')) || 1;
const atual = (total - pending) + 1;

const labelEl = document.getElementById('modalTamanhosLabel');
if (labelEl) {
    labelEl.innerHTML = `${product.name} <span class="badge bg-warning text-dark ms-2 rounded-pill" style="font-size: 0.7rem;">Item ${atual} de ${total}</span>`;
}

const imgEl = document.getElementById('modalTamanhosImg');
if (imgEl) imgEl.src = product.img;

const sizeModal = new bootstrap.Modal(sizeModalEl);
sizeModal.show();

sizeModalEl.addEventListener('shown.bs.modal', () => atualizarSubtotalModal(), { once: true });
renderizarSugestoes(tempProduct, 'sugestoes-config');


}

// Atualiza o subtotal exibido nos modais conforme as opções selecionadas
function atualizarSubtotalModal() {
if (!tempProduct) return;


const modalVisivel = document.querySelector('.modal.show');
if (!modalVisivel) return;

const selectSize = modalVisivel.querySelector('#selectSize, #selectSizeOnly');
const display    = modalVisivel.querySelector('#modalSubtotal, #modalProductPriceOnly');

if (!selectSize || !display) return;

let precoBase = parseFloat(tempProduct.price) || 0;

const selectedOption = selectSize.options[selectSize.selectedIndex];
const ajusteTamanho  = Number(selectedOption.getAttribute('data-price-add')) || 0;

let ajusteExtras = 0;

const radioCor = modalVisivel.querySelector('input[name="color"]:checked');
if (radioCor) {
    ajusteExtras += Number(radioCor.getAttribute('data-price-color')) || 0;
}

const selectTex = modalVisivel.querySelector('#selectTexture');
if (selectTex) {
    ajusteExtras += Number(selectTex.options[selectTex.selectedIndex].getAttribute('data-price-texture')) || 0;
}

const valorFinal = precoBase + ajusteTamanho + ajusteExtras;

display.textContent = valorFinal.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

console.log(`Cálculo: Base(${precoBase}) + Tam(${ajusteTamanho}) + Extras(${ajusteExtras}) = ${valorFinal}`);


}

/* ==========================================================================
9. FUNÇÕES DE PREVIEW DO SIMULADOR DE TINTA
========================================================================== */

// Atualiza o preview visual do simulador de cor e textura
function updatePreview() {
const selectedColorInput = document.querySelector(‘input[name=“color”]:checked’);
const textureSelect      = document.getElementById(‘selectTexture’);
const sizeSelect         = document.getElementById(‘selectSize’);
const previewBox         = document.getElementById(‘product-preview’);
const previewText        = document.getElementById(‘preview-text’);
const wallLabel          = document.getElementById(‘wall-type-label’);
const photoOverlay       = document.getElementById(‘photo-color-overlay’);
const modalPriceElement  = document.getElementById(‘modalProductPrice’);


if (!selectedColorInput || !previewBox || !textureSelect || !tempProduct) return;

// 1. Captura dos valores selecionados
const colorHex  = selectedColorInput.nextElementSibling.style.backgroundColor
               || selectedColorInput.nextElementSibling.style.background;
const colorName = selectedColorInput.value;
const texture   = textureSelect.value;

// 2. Identifica o tipo de parede atual
const currentWall = wallTypes[currentWallIndex];
const isPhotoWall = currentWall.isPhotoWall === true;
const temFoto     = isPhotoWall && !!userWallImage;

if (wallLabel) wallLabel.innerText = currentWall.name;

// 3. Reset do estado visual e limpeza do estado de foto
previewBox.style.filter             = "none";
previewBox.style.backgroundSize     = "auto";
previewBox.style.backgroundPosition = "0 0";
previewBox.style.animation          = "none";

if (!isPhotoWall) {
    previewBox.classList.remove('aguardando-foto');
    document.getElementById('preview-upload-hint')?.remove();

    if (photoOverlay) {
        photoOverlay.style.display = 'none';
    }
}

// 4. Aplica cor via backgroundColor (paredes normais) ou overlay (foto)
if (temFoto) {
    previewBox.style.backgroundColor = 'transparent';
    previewBox.style.boxShadow       = 'none';

    if (photoOverlay) {
        photoOverlay.style.display         = 'block';
        photoOverlay.style.backgroundColor = colorHex;
    }
} else {
    previewBox.style.backgroundColor = isPhotoWall ? '#e8e8e8' : colorHex;
    previewBox.style.boxShadow       = "inset 0 0 50px rgba(0,0,0,0.1)";
    if (photoOverlay) photoOverlay.style.display = 'none';
}

// 5. Aplica o padrão de textura da parede
currentWall.apply(previewBox);

const baseWallTexture = previewBox.style.backgroundImage;

// 6. Efeitos de acabamento (aplicados sobre qualquer parede, incluindo foto)
switch (texture) {
    case "Fosco":
        previewBox.style.filter = "saturate(0.9) brightness(0.95)";
        break;
    case "Acetinado":
        if (!temFoto) {
            previewBox.style.boxShadow =
                "inset 0 0 40px rgba(255,255,255,0.15), inset -20px -20px 40px rgba(0,0,0,0.05)";
        }
        break;
    case "Semibrilho":
        if (!temFoto) {
            previewBox.style.boxShadow =
                "inset 20px 20px 60px rgba(255,255,255,0.35), inset -10px -10px 20px rgba(0,0,0,0.1)";
        }
        previewBox.style.filter = "brightness(1.05)";
        break;
    case "Cimento Queimado": {
        const cimento = `radial-gradient(circle at 20% 30%, rgba(0,0,0,0.15) 0%, transparent 40%),
                         radial-gradient(circle at 80% 70%, rgba(0,0,0,0.1) 0%, transparent 50%)`;
        if (!temFoto) {
            previewBox.style.backgroundImage =
                (baseWallTexture && baseWallTexture !== "none")
                    ? `${cimento}, ${baseWallTexture}` : cimento;
        }
        previewBox.style.filter = "contrast(1.2) grayscale(0.1)";
        break;
    }
    case "Metalizado": {
        const metal = `linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)`;
        if (!temFoto) {
            previewBox.style.backgroundImage =
                (baseWallTexture && baseWallTexture !== "none")
                    ? `${metal}, ${baseWallTexture}` : metal;
        }
        previewBox.style.filter = "contrast(1.1) brightness(1.1) saturate(1.2)";
        break;
    }
}

// 7. Texto do preview
if (temFoto) {
    previewText.innerText = `${colorName} — ${texture} (sua parede)`;
} else if (isPhotoWall) {
    previewText.innerText = 'Envie uma foto';
} else {
    previewText.innerText = `${colorName} - ${texture}`;
}

// 8. Cálculo de preço agregado
const basePrice     = Number(tempProduct.price) || 0;
const colorExtra    = Number(selectedColorInput.getAttribute('data-price-color')) || 0;
const textureOption = textureSelect.options[textureSelect.selectedIndex];
const textureExtra  = Number(textureOption.getAttribute('data-price-texture')) || 0;
let sizeExtra = 0;
if (sizeSelect) {
    const sizeOption = sizeSelect.options[sizeSelect.selectedIndex];
    sizeExtra = Number(sizeOption.getAttribute('data-price-add')) || 0;
}
const totalPrice = basePrice + colorExtra + textureExtra + sizeExtra;

if (modalPriceElement) {
    modalPriceElement.innerText = `R$ ${totalPrice.toFixed(2)}`;
}

tempProduct.currentCalculatedPrice = totalPrice;
tempProduct.selectedColorName      = colorName;
tempProduct.selectedTextureName    = texture;
tempProduct.selectedSizeName       = sizeSelect ? sizeSelect.value : "Padrão";


}

// Atualiza o preview do modal de spray com base nas opções selecionadas
function updateSprayPreview() {
const modal              = document.getElementById(‘sprayConfigModal’);
if (!modal) return;


const selectedColorInput = modal.querySelector('input[name="color"]:checked');
const demaos             = parseInt(document.getElementById('spray-demaos')?.value) || 1;
const previewBox         = document.getElementById('product-preview-spray');
const displayPreco       = document.getElementById('modalSprayPrice');

if (!previewBox) return;

// Atualização do preço (subtotal)
if (tempProduct && displayPreco) {
    let precoBase = parseFloat(tempProduct.price) || 0;
    let extraCor  = 0;
    if (selectedColorInput) {
        extraCor = parseFloat(selectedColorInput.getAttribute('data-price-color')) || 0;
    }
    const precoFinal = precoBase + extraCor;
    displayPreco.innerText = precoFinal.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

// Configurações base da parede
previewBox.style.backgroundColor = "#d1d1d1";
previewBox.style.backgroundImage = "none";
previewBox.style.filter          = "none";

if (selectedColorInput) {
    const colorHex = selectedColorInput.getAttribute('data-hex');

    let centroSolido, opacidadeCentro;

    if (demaos === 1) {
        centroSolido    = "25%";
        opacidadeCentro = "bb";
    } else if (demaos === 2) {
        centroSolido    = "50%";
        opacidadeCentro = "ee";
    } else {
        centroSolido    = "300%";
        opacidadeCentro = "ff";
    }

    const camadaTinta = `radial-gradient(circle at center,
        ${colorHex}${opacidadeCentro} 0%,
        ${colorHex}${opacidadeCentro} ${centroSolido},
        ${colorHex}66 85%,
        transparent 95%)`;

    let camadas = [];
    for (let i = 0; i < demaos; i++) {
        camadas.push(camadaTinta);
    }
    previewBox.style.backgroundImage = camadas.join(', ');

    const noiseSvg = `"data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 -1 0 0 0 1'/%3E%3C/filter%3E%3Crect width='1000' height='1000' filter='url(%23noise)'/%3E%3C/svg%3E"`;
    const mask     = `radial-gradient(circle at center, black 0%, black 70%, transparent 95%), url(${noiseSvg})`;

    previewBox.style.maskImage          = mask;
    previewBox.style.webkitMaskImage    = mask;
    previewBox.style.maskComposite      = 'source-in';
    previewBox.style.webkitMaskComposite = 'source-in';
} else {
    previewBox.style.maskImage       = "none";
    previewBox.style.webkitMaskImage = "none";
}

previewBox.style.backgroundSize     = "contain";
previewBox.style.backgroundRepeat   = "no-repeat";
previewBox.style.backgroundPosition = "center";


}

/**

- Controla a visibilidade do container de upload de foto.
- Exibe o botão APENAS quando “Sua Parede” está ativa no modal de tinta.
  */
  function atualizarBotaoUploadParede() {
  const isPhotoWall     = wallTypes[currentWallIndex]?.isPhotoWall === true;
  const containerUpload = document.getElementById(‘foto-parede-container’);
  if (!containerUpload) return;
  
  if (isPhotoWall) {
  containerUpload.classList.remove(‘d-none’);
  } else {
  containerUpload.classList.add(‘d-none’);
  }
  }

// Avança ou recua entre os tipos de parede do simulador
function changeWall(direction) {
currentWallIndex += direction;
if (currentWallIndex >= wallTypes.length) currentWallIndex = 0;
if (currentWallIndex < 0) currentWallIndex = wallTypes.length - 1;


const sprayModal = document.getElementById('sprayConfigModal');
if (sprayModal && sprayModal.classList.contains('show')) {
    updateSprayPreview();
} else {
    updatePreview();
    atualizarBotaoUploadParede();
}


}

// Aplica a foto da parede enviada pelo usuário ao simulador
function aplicarFotoParede(input) {
const file = input.files[0];
if (!file) return;


if (file.size > 10 * 1024 * 1024) {
    showToast('Foto muito grande. Use uma imagem menor que 10MB.', 'danger');
    return;
}

const reader = new FileReader();
reader.onload = (e) => {
    userWallImage = e.target.result;

    const indexFotoParede = wallTypes.findIndex(w => w.isPhotoWall === true);
    if (indexFotoParede !== -1) {
        currentWallIndex = indexFotoParede;
    }

    atualizarBotaoUploadParede();
    updatePreview();

    document.getElementById('btnRemoverFoto')?.classList.remove('d-none');
    showToast('Foto aplicada! Selecione uma cor para ver a simulação.', 'success');
};
reader.readAsDataURL(file);


}

// Remove a foto da parede e restaura o estado padrão do simulador
function removerFotoParede() {
userWallImage    = null;
currentWallIndex = 0;


const previewBox   = document.getElementById('product-preview');
const photoOverlay = document.getElementById('photo-color-overlay');

if (previewBox) {
    previewBox.classList.remove('aguardando-foto');
    previewBox.style.backgroundImage = 'none';
}
if (photoOverlay) {
    photoOverlay.style.display = 'none';
}

document.getElementById('preview-upload-hint')?.remove();
document.getElementById('btnRemoverFoto')?.classList.add('d-none');

const inputUpload = document.getElementById('uploadWall');
if (inputUpload) inputUpload.value = '';

atualizarBotaoUploadParede();
updatePreview();


}

/* ==========================================================================
10. FUNÇÕES DA LANTERNA (FLASHLIGHT)
========================================================================== */

// Anima a lanterna automaticamente em dispositivos touch
function animateFlashlight(overlayId) {
const overlay = document.getElementById(overlayId);
if (!overlay || !overlay.classList.contains(‘flashlight-active’)) return;


if (overlay.dataset.touching === 'true') {
    flashlightAnimFrame = requestAnimationFrame(() => animateFlashlight(overlayId));
    return;
}

const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
if (!isTouchDevice) {
    return; // No desktop, o mousemove global cuida da posição
}

const parent = overlay.parentElement;
const cx     = parent.offsetWidth  / 2;
const cy     = parent.offsetHeight / 2;
const radius = Math.min(cx, cy) * 0.6;

flashlightAngle += 0.012;
const x = cx + Math.cos(flashlightAngle) * radius;
const y = cy + Math.sin(flashlightAngle * 0.7) * radius;

overlay.style.setProperty('--x', `${x}px`);
overlay.style.setProperty('--y', `${y}px`);

flashlightAnimFrame = requestAnimationFrame(() => animateFlashlight(overlayId));


}

// Alterna o efeito de lanterna no preview de tinta
function toggleFlashlight(type) {
const id      = type === ‘spray’ ? ‘flashlight-spray’ : ‘flashlight-normal’;
const overlay = document.getElementById(id);
if (!overlay) return;


overlay.classList.toggle('flashlight-active');
const isActive      = overlay.classList.contains('flashlight-active');
const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

if (isActive) {
    if (isTouchDevice) {
        overlay.parentElement.addEventListener('touchstart', () => {
            overlay.dataset.touching = 'true';
        }, { passive: true });

        overlay.parentElement.addEventListener('touchmove', (e) => {
            const touch = e.touches[0];
            const rect  = overlay.parentElement.getBoundingClientRect();
            overlay.style.setProperty('--x', `${touch.clientX - rect.left}px`);
            overlay.style.setProperty('--y', `${touch.clientY - rect.top}px`);
        }, { passive: true });

        overlay.parentElement.addEventListener('touchend', () => {
            overlay.dataset.touching = 'false';
        }, { passive: true });

        animateFlashlight(id);
    }
} else {
    cancelAnimationFrame(flashlightAnimFrame);
}


}

/* ==========================================================================
11. FUNÇÕES DO CARRINHO
========================================================================== */

/**

- Adiciona um item ao carrinho ou incrementa a quantidade
- se já existir um item com o mesmo ID (cartKey).
  */
  function adicionarOuAgrupar(novoItem) {
  const existente = cart.find(i => i.id === novoItem.id);
  if (existente) {
  existente.quantity += novoItem.quantity; // incrementa se idêntico
  } else {
  cart.push(novoItem); // combinação nova — adiciona separado
  }
  }

// Adiciona um produto simples (acessório) ao carrinho sem configurações
function addToCartSimple(id, quantity = 1) {
const product = products.find(p => p.id === id);
if (!product) return;


// Validação de estoque
const check = podeAdicionarAoCarrinho(product.id, quantity);
if (!check.ok) {
    showToast(`⚠️ ${check.erro}`, 'warning');
    return;
}

const opcoes  = { cor: null, acabamento: null, tamanho: null, demaos: null };
const cartKey = gerarCartKey(product.id, opcoes);

const itemCarrinho = {
    id:          cartKey,
    productId:   product.id,
    name:        product.name,
    displayName: product.name,
    quantity,
    price:       Number(product.price),
    opcoes,
    category:    product.category,
    img:         product.img
};

adicionarOuAgrupar(itemCarrinho);

if (typeof save === 'function') save();
if (typeof updateCartUI === 'function') updateCartUI();
_resetarTimerAbandonado();

const toastEl = document.getElementById('itemAddedToast');
if (toastEl) {
    const nameEl = document.getElementById('toast-item-name');
    const infoEl = document.getElementById('toast-item-info');
    if (nameEl) nameEl.textContent = product.name;
    if (infoEl) infoEl.textContent = 'Adicionado ao carrinho!';
    new bootstrap.Toast(toastEl).show();
}


}

// Confirma a adição de uma tinta configurada ao carrinho
function confirmAddToCart(isBulk = false) {
const selectedColorInput = document.querySelector(‘input[name=“color”]:checked’);
const textureSelect      = document.getElementById(‘selectTexture’);
const sizeSelect         = document.getElementById(‘selectSize’);
if (!selectedColorInput || !tempProduct) return;


const color    = selectedColorInput.value;
const texture  = textureSelect ? textureSelect.value : 'Fosco';
const sizeName = sizeSelect    ? sizeSelect.value    : 'Padrão';

const colorPrice   = Number(selectedColorInput.getAttribute('data-price-color')) || 0;
const texturePrice = textureSelect
    ? Number(textureSelect.options[textureSelect.selectedIndex].getAttribute('data-price-texture')) || 0
    : 0;
const sizePrice = sizeSelect
    ? Number(sizeSelect.options[sizeSelect.selectedIndex].getAttribute('data-price-add')) || 0
    : 0;
const finalPrice = Number(tempProduct.price) + colorPrice + texturePrice + sizePrice;

const opcoes = {
    cor:        color,
    acabamento: texture,
    tamanho:    sizeName,
    demaos:     null
};

const cartKey = gerarCartKey(tempProduct.id, opcoes);

const configuredProduct = {
    id:          cartKey,
    productId:   tempProduct.id,
    name:        tempProduct.name,
    displayName: `${tempProduct.name} (${color} - ${texture} - ${sizeName})`,
    price:       finalPrice,
    quantity:    1,
    opcoes,
    category:    tempProduct.category,
    img:         tempProduct.img
};

adicionarOuAgrupar(configuredProduct);
save();

if (!isBulk) {
    showConfirmation(configuredProduct);

    const modalEl       = document.getElementById('productConfigModal');
    const modalInstance = bootstrap.Modal.getInstance(modalEl);
    if (modalInstance) modalInstance.hide();

    let pending = parseInt(sessionStorage.getItem('pending_configs')) || 1;
    pending--;

    if (pending > 0) {
        sessionStorage.setItem('pending_configs', pending);
        modalEl.addEventListener('hidden.bs.modal', () => {
            openConfigModal(tempProduct.id);
        }, { once: true });
    } else {
        sessionStorage.removeItem('pending_configs');
        sessionStorage.removeItem('total_to_configure');
        limparBackdropsTravados();
    }
}


}

// Confirma a adição de um spray configurado ao carrinho
function confirmSprayToCart() {
const modalEl            = document.getElementById(‘sprayConfigModal’);
const selectedColorInput = modalEl.querySelector(‘input[name=“color”]:checked’);


if (!selectedColorInput) {
    showToast("⚠️ Por favor, selecione uma cor antes de confirmar!", "danger");
    const preview = document.getElementById('product-preview-spray');
    if (preview) {
        preview.style.boxShadow = "0 0 20px rgba(220, 53, 69, 0.5)";
        setTimeout(() => preview.style.boxShadow = "15px 10px 25px rgba(0,0,0,0.2)", 1500);
    }
    return;
}

if (!tempProduct) return;

const color      = selectedColorInput.value;
const extraPrice = parseFloat(selectedColorInput.getAttribute('data-price-color')) || 0;
const numDemaos  = parseInt(document.getElementById('spray-demaos')?.value) || 1;

const opcoes = {
    cor:        color,
    acabamento: null,
    tamanho:    null,
    demaos:     numDemaos
};

const cartKey = gerarCartKey(tempProduct.id, opcoes, 'spray');

const item = {
    id:          cartKey,
    productId:   tempProduct.id,
    name:        tempProduct.name,
    displayName: `${tempProduct.name} - ${color}`,
    price:       tempProduct.price + extraPrice,
    quantity:    1,
    opcoes,
    category:    tempProduct.category,
    img:         tempProduct.img
};

adicionarOuAgrupar(item);
if (typeof save === "function") save();
if (typeof updateCartUI === "function") updateCartUI();

processarFilaConfiguracao(modalEl);

const textLabel  = document.getElementById('preview-text-spray');
const priceLabel = document.getElementById('preview-price-spray');
if (textLabel)  textLabel.innerText      = "Selecione uma cor";
if (priceLabel) priceLabel.style.display = 'none';


}

// Confirma o tamanho e adiciona produto ao carrinho (massa, verniz, etc.)
function confirmAddToCartSizeOnly() {
if (!tempProduct) return;


const sizeSelect     = document.getElementById('selectSizeOnly');
const selectedOption = sizeSelect.options[sizeSelect.selectedIndex];
const addPrice       = parseFloat(selectedOption.getAttribute('data-price-add')) || 0;
const finalPrice     = Number(tempProduct.price) + addPrice;
const tamanho        = selectedOption.value;

const opcoes  = { cor: null, acabamento: null, tamanho, demaos: null };
const cartKey = gerarCartKey(tempProduct.id, opcoes);

const item = {
    id:          cartKey,
    productId:   tempProduct.id,
    name:        tempProduct.name,
    displayName: `${tempProduct.name} (${tamanho})`,
    price:       finalPrice,
    quantity:    1,
    opcoes,
    category:    tempProduct.category,
    img:         tempProduct.img
};

adicionarOuAgrupar(item);
save();
updateCartUI();

const modalEl  = document.getElementById('modalTamanhos');
const instance = bootstrap.Modal.getInstance(modalEl);
if (instance) instance.hide();

let pending = parseInt(sessionStorage.getItem('pending_configs')) || 1;
pending--;

if (pending > 0) {
    sessionStorage.setItem('pending_configs', pending);
    modalEl.addEventListener('hidden.bs.modal', () => {
        openConfigModal(tempProduct.id);
    }, { once: true });
} else {
    sessionStorage.removeItem('pending_configs');
    sessionStorage.removeItem('total_to_configure');
    showConfirmation(item);
    if (typeof limparBackdropsTravados === "function") limparBackdropsTravados();
}


}

// Aplica a configuração atual a todas as latas da fila pendente
function applyConfigToAll() {
const pending = parseInt(sessionStorage.getItem(‘pending_configs’)) || 0;


for (let i = 0; i <= pending; i++) {
    confirmAddToCart(true);
}

sessionStorage.removeItem('pending_configs');
sessionStorage.removeItem('total_to_configure');

const configModal = bootstrap.Modal.getInstance(document.getElementById('productConfigModal'));
if (configModal) configModal.hide();

showToast("Todas as latas foram configuradas!", "success");


}

// Processa a fila de configuração após confirmar uma cor de spray
function processarFilaConfiguracao(modalEl) {
let pending = parseInt(sessionStorage.getItem(‘pending_configs’)) || 1;
pending–;
sessionStorage.setItem(‘pending_configs’, pending);


const modalInstance = bootstrap.Modal.getInstance(modalEl);
if (modalInstance) modalInstance.hide();

modalEl.addEventListener('hidden.bs.modal', function handler() {
    modalEl.removeEventListener('hidden.bs.modal', handler);

    if (pending > 0) {
        openConfigModal(tempProduct.id);
    } else {
        sessionStorage.removeItem('pending_configs');
        sessionStorage.removeItem('total_to_configure');

        const btnApplyAll = document.getElementById('btnApplyToAll');
        if (btnApplyAll) btnApplyAll.style.display = 'none';

        document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
        document.body.classList.remove('modal-open');
        document.body.style.overflow = '';

        const toastEl = document.getElementById('itemAddedToast');
        if (toastEl) {
            const nameEl    = document.getElementById('toast-item-name');
            const toastBody = toastEl.querySelector('.toast-body');

            if (nameEl) nameEl.textContent = tempProduct.name || "Produto";

            toastBody.innerHTML = `
                <i class="fas fa-check-circle me-2"></i>
                <strong id="toast-item-name">${tempProduct.name || "Produto"}</strong>
                adicionado ao carrinho!
            `;

            const bsToast = new bootstrap.Toast(toastEl);
            bsToast.show();
        }
    }
}, { once: true });


}

// Atualiza toda a interface do carrinho (contador, itens, total)
function updateCartUI() {
const cartCount       = document.getElementById(‘cart-count’);
const cartCountMobile = document.getElementById(‘cart-count-mobile’);
const container    = document.getElementById(‘cart-items-container’);
const btnLimpar    = document.getElementById(‘btnLimparCarrinho’);
const totalElement = document.getElementById(‘cart-total’);


const totalUnidades = cart.reduce((acc, i) => acc + i.quantity, 0);

if (cartCount)       cartCount.innerText       = totalUnidades;
if (cartCountMobile) cartCountMobile.innerText = totalUnidades;

// Botão "Esvaziar" só aparece com mais de 5 unidades no total
if (btnLimpar) {
    btnLimpar.style.display = totalUnidades > 5 ? 'block' : 'none';
}

if (!container) return;

if (cart.length === 0) {
    container.innerHTML = `
        <div class="text-center p-5">
            <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
                 alt="Carrinho Vazio"
                 style="width: 120px; opacity: 0.6;"
                 class="mb-4">
            <h6 class="fw-bold">Seu carrinho está vazio</h6>
            <p class="text-muted small">Que tal adicionar algumas cores à sua vida?</p>
            <button class="btn btn-sm btn-outline-primary mt-3 px-4"
                    data-bs-dismiss="modal">
                Continuar Comprando
            </button>
        </div>`;
    if (totalElement) totalElement.innerText = 'R$ 0,00';
    return;
}

let total = 0;
container.innerHTML = '';

cart.forEach(item => {
    total += item.price * item.quantity;

    // Monta linhas de detalhe — exibe apenas campos preenchidos
    const linhas = [];
    if (item.opcoes?.cor       && item.opcoes.cor       !== 'N/A') linhas.push(`Cor: ${item.opcoes.cor}`);
    if (item.opcoes?.acabamento && item.opcoes.acabamento !== 'N/A') linhas.push(`Acabamento: ${item.opcoes.acabamento}`);
    if (item.opcoes?.tamanho   && item.opcoes.tamanho   !== 'N/A') linhas.push(`Tamanho: ${item.opcoes.tamanho}`);

    const detalhesHtml = linhas.length > 0
        ? `<div class="cart-item-detalhes mt-1">
               ${linhas.map(l => `<span class="badge-detalhe-carrinho">${l}</span>`).join('')}
           </div>`
        : '';

    const imgHtml = item.img
        ? `<img src="${item.img}"
                alt="${item.name}"
                class="cart-item-img me-3"
                loading="lazy"
                onerror="this.style.display='none'">`
        : '';

    container.innerHTML += `
        <div class="cart-item d-flex align-items-center mb-3 pb-3 border-bottom px-2">
            ${imgHtml}
            <div class="flex-grow-1 overflow-hidden" style="cursor:pointer;" onclick="irParaProdutoNoCarrinho(${item.productId})" title="Ver produto">
                <h6 class="mb-0 fw-bold text-truncate cart-item-nome">${item.name} <i class="fas fa-external-link-alt ms-1 text-muted" style="font-size:0.6rem;opacity:0.6;"></i></h6>
                ${detalhesHtml}
                <small class="text-primary fw-bold mt-1 d-block">
                    R$ ${(item.price * item.quantity).toFixed(2)}
                </small>
            </div>
            <div class="d-flex align-items-center ms-2 cart-item-qty">
                <button class="btn btn-sm btn-outline-secondary"
                        onclick="changeQty('${item.id}', -1)">−</button>
                <span class="mx-2 fw-bold">${item.quantity}</span>
                <button class="btn btn-sm btn-outline-secondary"
                        onclick="changeQty('${item.id}', 1)">+</button>
            </div>
        </div>`;
});

if (totalElement) totalElement.innerText = `R$ ${total.toFixed(2)}`;


}

// Exibe o toast de confirmação após adicionar produto ao carrinho
function showConfirmation(product) {
const toastElement = document.getElementById(‘itemAddedToast’);


if (toastElement) {
    document.getElementById('toast-item-name').innerText = product.name;

    const precoFormatado = product.price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    document.getElementById('toast-item-info').innerText = precoFormatado;

    const toast = new bootstrap.Toast(toastElement, { delay: 3000 });
    toast.show();
}


}

// Persiste o carrinho no localStorage e anima o ícone de carrinho
function save() {
localStorage.setItem(‘fixtintas_cart’, JSON.stringify(cart));


const cartCount = document.getElementById('cart-count');
if (cartCount) {
    cartCount.innerText = cart.reduce((acc, i) => acc + i.quantity, 0);
}

// Feedback visual no ícone do carrinho (bounce)
const cartIcon = document.querySelector('[onclick="showCart()"] i');
if (cartIcon) {
    cartIcon.classList.remove('cart-added');
    void cartIcon.offsetWidth; // força reflow para reiniciar a animação
    cartIcon.classList.add('cart-added');
    setTimeout(() => cartIcon.classList.remove('cart-added'), 420);
}


}

// Altera a quantidade de um item no carrinho
function changeQty(id, delta) {
const item = cart.find(i => i.id == id);
if (item) {
item.quantity += delta;
if (item.quantity <= 0) {
cart = cart.filter(i => i.id != id);
}
save();
updateCartUI();
}
}

// Esvazia todo o carrinho após confirmação do usuário
async function clearCart() {
if (cart.length === 0) return;


const isDark  = document.body.classList.contains('dark-mode');
const bgModal = isDark ? '#1e2240' : '#fff';
const bgBody  = isDark ? 'rgba(0,0,0,0.75)' : 'rgba(0,0,0,0.5)';
const txtColor = isDark ? '#e2e8f0' : '#333';
const borderColor = isDark ? '#2d2d4e' : '#ccc';

const userConfirmed = await new Promise((resolve) => {
    const overlay = document.createElement('div');
    Object.assign(overlay.style, {
        position: 'fixed', top: '0', left: '0', width: '100vw', height: '100vh',
        backgroundColor: bgBody, display: 'flex',
        alignItems: 'center', justifyContent: 'center', zIndex: '99999'
    });

    const modal = document.createElement('div');
    Object.assign(modal.style, {
        backgroundColor: bgModal, padding: '28px 24px', borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)', textAlign: 'center',
        fontFamily: 'Inter, sans-serif', minWidth: '300px', maxWidth: '90vw',
        color: txtColor, border: `1px solid ${borderColor}`
    });

    const icon = document.createElement('div');
    icon.innerHTML = '<i class="fas fa-trash-alt" style="font-size:2rem;color:#e74c3c;margin-bottom:12px;display:block;"></i>';

    const title = document.createElement('p');
    title.style.cssText = `margin:0 0 6px 0;font-size:1rem;font-weight:700;color:${txtColor}`;
    title.textContent = 'Esvaziar carrinho?';

    const message = document.createElement('p');
    message.style.cssText = `margin:0 0 20px 0;font-size:0.85rem;color:${isDark ? '#94a3b8' : '#666'}`;
    message.textContent = 'Todos os itens serão removidos permanentemente.';

    const btnContainer = document.createElement('div');
    btnContainer.style.cssText = 'display:flex;justify-content:center;gap:12px;';

    const btnCancel = document.createElement('button');
    btnCancel.textContent = 'Cancelar';
    Object.assign(btnCancel.style, {
        padding: '9px 20px', border: `1px solid ${borderColor}`, borderRadius: '8px',
        backgroundColor: isDark ? '#12122a' : '#f8f9fa',
        color: txtColor, cursor: 'pointer', fontWeight: '600', fontSize: '0.85rem'
    });
    btnCancel.onclick = () => { document.body.removeChild(overlay); resolve(false); };

    const btnConfirm = document.createElement('button');
    btnConfirm.textContent = 'Sim, esvaziar';
    Object.assign(btnConfirm.style, {
        padding: '9px 20px', border: 'none', borderRadius: '8px',
        backgroundColor: '#e74c3c', color: '#fff',
        cursor: 'pointer', fontWeight: '700', fontSize: '0.85rem'
    });
    btnConfirm.onclick = () => { document.body.removeChild(overlay); resolve(true); };

    btnContainer.append(btnCancel, btnConfirm);
    modal.append(icon, title, message, btnContainer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
});

if (userConfirmed) {
    cart = [];
    save();
    updateCartUI();
    showToast('Carrinho esvaziado.', 'warning');
}


}

// Remove do carrinho todos os itens de um tipo específico
function removeItemsByType(tipo) {
const cartInicial = cart.length;


cart = cart.filter(item => {
    const nomeItem     = item.name.toLowerCase();
    const categoriaItem = (item.category || "").toLowerCase();
    const subItem       = (item.sub || "").toLowerCase();

    return !nomeItem.includes(tipo.toLowerCase()) &&
           !categoriaItem.includes(tipo.toLowerCase()) &&
           !subItem.includes(tipo.toLowerCase());
});

if (cart.length < cartInicial) {
    save();
    updateCartUI();
    console.log(`Todos os itens do tipo "${tipo}" foram removidos.`);
}


}

// Abre o modal do carrinho e atualiza a URL
function showCart() {
const url = new URL(window.location);
url.searchParams.set(‘aba’, ‘carrinho’);
window.history.pushState({}, ‘’, url);


updateCartUI();

const cartModalEl = document.getElementById('cartModal');
const cartModal   = bootstrap.Modal.getOrCreateInstance(cartModalEl);
cartModal.show();

// Limpa a URL ao fechar o modal
cartModalEl.addEventListener('hidden.bs.modal', () => {
    const cleanUrl = new URL(window.location);
    cleanUrl.searchParams.delete('aba');
    window.history.pushState({}, '', cleanUrl);
}, { once: true });


}

/**

- TAREFA 2 — Navega do carrinho até o produto na loja.
- Fecha o modal do carrinho, reutiliza showProductDetails existente
- e faz scroll suave até a seção de produtos.
  */
  function irParaProdutoNoCarrinho(productId) {
  const produto = products.find(p => p.id === productId);
  if (!produto) return;
  
  // Fecha o carrinho
  const cartModalEl = document.getElementById(‘cartModal’);
  const cartModal   = bootstrap.Modal.getInstance(cartModalEl);
  if (cartModal) cartModal.hide();
  
  // Espera o carrinho fechar, depois abre o modal do produto
  cartModalEl.addEventListener(‘hidden.bs.modal’, () => {
  // Scroll suave até a seção de produtos
  const secaoProdutos = document.getElementById(‘produtos’);
  if (secaoProdutos) {
  secaoProdutos.scrollIntoView({ behavior: ‘smooth’, block: ‘start’ });
  }
  
  
   // Pequeno delay para o scroll terminar antes de abrir o modal
   setTimeout(() => {
       if (typeof showProductDetails === 'function') {
           showProductDetails(productId);
       }
   }, 400);
  
  
  }, { once: true });
  }

/* ==========================================================================
12. FUNÇÕES DE CHECKOUT
========================================================================== */

// Inicia o processo de finalização de compra
function checkout() {
if (cart.length === 0) {
showToast(“O seu carrinho está vazio!”, “danger”);
return;
}


const nomeSalvo = localStorage.getItem('usuario_nome');
let enderecoObj = null;
try {
    enderecoObj = JSON.parse(localStorage.getItem('usuario_endereco_obj'));
} catch (e) {
    enderecoObj = null;
}

if (!nomeSalvo) {
    showToast("Você precisa fazer login para finalizar.", "warning");
    const loginModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('loginModal'));
    loginModal.show();
    return;
}

if (!enderecoObj || !enderecoObj.rua) {
    showToast("É necessário cadastrar um endereço no perfil.", "warning");
    const contaModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('minhaContaModal'));
    contaModal.show();
    return;
}

const enderecoCompleto = `${enderecoObj.rua}, ${enderecoObj.num} ${enderecoObj.comp ? '- ' + enderecoObj.comp : ''} | ${enderecoObj.bairro}, ${enderecoObj.cidade}`;
localStorage.setItem('usuario_endereco_formatado', enderecoCompleto);

const displayEndereco = document.getElementById('displayConfirmEndereco');
if (displayEndereco) displayEndereco.innerText = enderecoCompleto;

const cartModalEl = document.getElementById('cartModal');
if (cartModalEl) bootstrap.Modal.getOrCreateInstance(cartModalEl).hide();

const confirmModalEl = document.getElementById('confirmAddressModal');
if (confirmModalEl) {
    const confirmModal = bootstrap.Modal.getOrCreateInstance(confirmModalEl);
    confirmModal.show();

    preencherDadosCartao();
    setTimeout(() => { togglePaymentDetails(); }, 200);
    setTimeout(() => { _renderizarFreteCheckout(); }, 350);
}


}

// Alterna a exibição das opções de pagamento conforme o método selecionado
function togglePaymentDetails() {
const select = document.getElementById(‘metodoPagamento’);
if (!select) return;


const metodo = select.value;

document.querySelectorAll('.payment-method-detail').forEach(div => {
    div.classList.add('d-none');
});

const area = document.getElementById(`detalhe-${metodo}`);
if (area) area.classList.remove('d-none');


}

// Preenche automaticamente o nome do titular do cartão com o nome cadastrado
function preencherDadosCartao() {
const nomeSalvo = localStorage.getItem(‘usuario_nome’);
const inputNome = document.getElementById(‘cardName’);
if (inputNome && nomeSalvo) {
inputNome.value = nomeSalvo.toUpperCase();
}
}

// Processa e finaliza o pedido
function processarCompraFinal() {
const enderecoCompleto = localStorage.getItem(‘usuario_endereco_formatado’) || “Endereço não definido”;
const selectPgto       = document.getElementById(‘metodoPagamento’);
const metodoPagamento  = selectPgto ? selectPgto.value : “Não informado”;


if (cart.length === 0) {
    showToast("O carrinho está vazio!", "danger");
    return;
}

// Validação dos campos de cartão
if (metodoPagamento === 'Cartão') {
    const cardNum  = document.getElementById('cardNum').value.trim();
    const cardName = document.getElementById('cardName').value.trim();
    const cardCPF  = document.getElementById('cardCPF').value.trim();
    const cardCVV  = document.getElementById('cardCVV').value.trim();

    if (cardNum.length < 19 || cardName === "" || cardCPF.length < 14 || cardCVV.length < 3) {
        showToast("⚠️ Por favor, preencha todos os dados do cartão corretamente.", "danger");
        if (cardNum.length < 19)  document.getElementById('cardNum').classList.add('is-invalid');
        if (cardName === "")      document.getElementById('cardName').classList.add('is-invalid');
        if (cardCPF.length < 14)  document.getElementById('cardCPF').classList.add('is-invalid');
        if (cardCVV.length < 3)   document.getElementById('cardCVV').classList.add('is-invalid');
        return;
    }
}

const freteSalvo = JSON.parse(sessionStorage.getItem('frete_selecionado') || 'null');
const freteValor = freteSalvo?.valor       || 0;
const freteNome  = freteSalvo?.nome        || 'Não selecionado';
const fretePrazo = freteSalvo?.prazo       || '';
const freteLabel = freteSalvo?.valorLabel  || 'GRÁTIS';

const totalItens = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
const totalFinal = totalItens + freteValor;

const novoPedido = {
    id:       Math.floor(Math.random() * 9000) + 1000,
    data:     new Date().toLocaleDateString('pt-BR'),
    itens:    [...cart],
    total:    totalFinal,
    frete:    { nome: freteNome, prazo: fretePrazo, valor: freteValor, label: freteLabel },
    endereco:  enderecoCompleto,
    pagamento: metodoPagamento
};

let historico = JSON.parse(localStorage.getItem('fixtintas_orders')) || [];
historico.unshift(novoPedido);
localStorage.setItem('fixtintas_orders', JSON.stringify(historico));

// Decrementa estoque dos itens comprados
decrementarEstoque(cart);

// Abre o modal de comprovante (usuário baixa o PDF se quiser)
setTimeout(() => abrirModalComprovante(novoPedido), 600);

const resumoItensHtml = cart.map(item => `- ${item.name} (x${item.quantity})`).join('<br>');
const totalFormatado  = totalFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const freteFormatado  = freteValor === 0
    ? '<span class="text-success fw-bold">GRÁTIS</span>'
    : freteValor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const mensagemSucesso = `
    <strong>✅ PEDIDO REALIZADO COM SUCESSO!</strong><br><br>
    <strong>Número:</strong> #${novoPedido.id}<br>
    <strong>Pagamento:</strong> ${metodoPagamento}<br>
    <strong>Itens:</strong><br>${resumoItensHtml}<br>
    <strong>Frete:</strong> ${freteNome} — ${freteFormatado}<br>
    <strong>Prazo:</strong> ${fretePrazo}<br>
    <strong>Total:</strong> ${totalFormatado}<br><br>
    <strong>Entrega em:</strong><br>${enderecoCompleto}
`;

const modalConfirm = document.getElementById('confirmAddressModal');
if (modalConfirm) {
    const instancia = bootstrap.Modal.getInstance(modalConfirm);
    if (instancia) instancia.hide();
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) backdrop.remove();
    document.body.classList.remove('modal-open');
    document.body.style.paddingRight = '';
}

try {
    const url = new URL(window.location);
    url.searchParams.delete('aba');
    window.history.pushState({}, '', url);
} catch (e) {}

showToast(mensagemSucesso, "success", true);

cart = [];
localStorage.setItem('fixtintas_cart', JSON.stringify(cart));
sessionStorage.removeItem('frete_selecionado');

if (typeof updateCartUI === "function") updateCartUI();
if (typeof renderOrdersProfile === "function") renderOrdersProfile();


}

/* ==========================================================================
13. FUNÇÕES DE FAVORITOS
========================================================================== */

// Alterna o estado de favorito de um produto
function toggleFavorite(id, event) {
if (event) event.stopPropagation();


let favorites = JSON.parse(localStorage.getItem('fixtintas_favorites')) || [];
const index   = favorites.indexOf(id);

if (index > -1) {
    favorites.splice(index, 1);
} else {
    favorites.push(id);
}

localStorage.setItem('fixtintas_favorites', JSON.stringify(favorites));
renderProducts(products);
renderFavoritesProfile();
renderOrdersProfile();


}

// Alterna entre os painéis “entrar” e “cadastro” no modal de login
function alternarAbaLogin(painel) {
document.querySelectorAll(’.login-tab’).forEach(tab => {
tab.classList.toggle(‘ativa’, tab.id === `tab-${painel}`);
});


document.querySelectorAll('.login-painel').forEach(p => {
    p.classList.toggle('d-none', p.dataset.painel !== painel);
});

// Limpa erros ao trocar de aba
document.querySelectorAll('.login-erro').forEach(el => el.textContent = '');
document.querySelectorAll('.login-input').forEach(el => {
    el.classList.remove('invalido', 'valido');
});


}

// Alterna visibilidade da senha em um campo de input
function toggleSenhaVisivel(inputId, btn) {
const input = document.getElementById(inputId);
if (!input) return;
const visible = input.type === ‘text’;
input.type    = visible ? ‘password’ : ‘text’;
btn.querySelector(‘i’).className = visible ? ‘fas fa-eye’ : ‘fas fa-eye-slash’;
}

// Atualiza a barra de força da senha em tempo real
function atualizarForcaSenha(valor) {
const wrap  = document.getElementById(‘senha-forca-wrap’);
const fill  = document.getElementById(‘senha-forca-fill’);
const label = document.getElementById(‘senha-forca-label’);
if (!wrap || !fill || !label) return;


if (!valor) {
    wrap.classList.remove('visivel');
    return;
}
wrap.classList.add('visivel');

let forca = 0;
if (valor.length >= 6)               forca++;
if (valor.length >= 10)              forca++;
if (/[A-Z]/.test(valor))             forca++;
if (/[0-9]/.test(valor))             forca++;
if (/[^A-Za-z0-9]/.test(valor))      forca++;

const niveis = [
    { pct: '20%',  cor: '#e74c3c', txt: 'Muito fraca'  },
    { pct: '40%',  cor: '#e67e22', txt: 'Fraca'        },
    { pct: '60%',  cor: '#f1c40f', txt: 'Média'        },
    { pct: '80%',  cor: '#27ae60', txt: 'Forte'        },
    { pct: '100%', cor: '#1e8449', txt: 'Muito forte'  }
];

const nivel           = niveis[Math.min(forca, 4)];
fill.style.width      = nivel.pct;
fill.style.background = nivel.cor;
label.style.color     = nivel.cor;
label.textContent     = nivel.txt;


}

/**

- Valida um campo de formulário e exibe erro se necessário.
- Retorna true se válido.
  */
  function _validarCampo(inputId, erroId, validarFn) {
  const input = document.getElementById(inputId);
  const erro  = document.getElementById(erroId);
  if (!input) return true;
  
  const resultado = validarFn(input.value.trim());
  if (resultado === true) {
  input.classList.remove(‘invalido’);
  input.classList.add(‘valido’);
  if (erro) erro.textContent = ‘’;
  return true;
  } else {
  input.classList.add(‘invalido’);
  input.classList.remove(‘valido’);
  if (erro) erro.textContent = resultado;
  return false;
  }
  }

/* ==========================================================================
16. FUNÇÕES DE ENDEREÇO E PERFIL
========================================================================== */

// Salva o endereço de entrega no localStorage
function saveAddress() {
const cep    = document.getElementById(‘addrCEP’)?.value.trim();
const rua    = document.getElementById(‘addrRua’).value.trim();
const num    = document.getElementById(‘addrNum’).value.trim();
const comp   = document.getElementById(‘addrComp’).value.trim();
const bairro = document.getElementById(‘addrBairro’).value.trim();
const cidade = document.getElementById(‘addrCidade’).value.trim();


if (!rua || !num || !bairro || !cidade) {
    showToast("⚠️ Preencha todos os campos obrigatórios.", "danger");
    return;
}

const cepLimpo = cep ? cep.replace(/\D/g, '') : '';
if (cep && cepLimpo.length !== 8) {
    showToast("⚠️ CEP inválido. Digite os 8 dígitos.", "danger");
    return;
}

const dadosEndereco = { cep: cepLimpo, rua, num, comp, bairro, cidade };
localStorage.setItem('usuario_endereco_obj', JSON.stringify(dadosEndereco));
localStorage.setItem('usuario_endereco', `${rua}, ${num}`);

showToast("Endereço salvo com sucesso!", "success");
fecharMenuMobile();

const modalConta = document.getElementById('minhaContaModal');
if (modalConta) {
    bootstrap.Modal.getInstance(modalConta)?.hide();
}


}

// Preenche os campos de endereço com os dados salvos no localStorage
function loadAddressFields() {
const salvo = JSON.parse(localStorage.getItem(‘usuario_endereco_obj’));
if (!salvo) return;


const cepInput = document.getElementById('addrCEP');
if (cepInput && salvo.cep) {
    const cepStr   = String(salvo.cep);
    cepInput.value = cepStr.length === 8
        ? cepStr.substring(0, 5) + '-' + cepStr.substring(5)
        : cepStr;
}

if (document.getElementById('addrRua'))    document.getElementById('addrRua').value    = salvo.rua    || '';
if (document.getElementById('addrNum'))    document.getElementById('addrNum').value    = salvo.num    || '';
if (document.getElementById('addrComp'))   document.getElementById('addrComp').value   = salvo.comp   || '';
if (document.getElementById('addrBairro')) document.getElementById('addrBairro').value = salvo.bairro || '';
if (document.getElementById('addrCidade')) document.getElementById('addrCidade').value = salvo.cidade || '';


}

/**

- Consulta a API ViaCEP e preenche os campos do formulário automaticamente.
- Integração real com API — não é simulação.
  */
  function buscarCEP() {
  const cepInput = document.getElementById(‘addrCEP’);
  if (!cepInput) return;
  
  const cepLimpo = cepInput.value.replace(/\D/g, ‘’);
  
  if (cepLimpo.length !== 8) {
  showToast(“⚠️ Digite um CEP válido com 8 dígitos.”, “danger”);
  return;
  }
  
  cepInput.disabled = true;
  showToast(“Buscando endereço…”, “primary”);
  
  fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
  .then(res => res.json())
  .then(data => {
  cepInput.disabled = false;
  
  
       if (data.erro) {
           showToast("CEP não encontrado. Preencha o endereço manualmente.", "warning");
           return;
       }
  
       const rua    = document.getElementById('addrRua');
       const bairro = document.getElementById('addrBairro');
       const cidade = document.getElementById('addrCidade');
  
       if (rua)    rua.value    = data.logradouro || '';
       if (bairro) bairro.value = data.bairro     || '';
       if (cidade) cidade.value = data.localidade  || '';
  
       document.getElementById('addrNum')?.focus();
       showToast("Endereço encontrado!", "success");
   })
   .catch(() => {
       cepInput.disabled = false;
       showToast("Erro ao buscar CEP. Verifique sua conexão.", "danger");
   });
  

}

/* ==========================================================================
17. FUNÇÕES DE CÁLCULO DE FRETE
========================================================================== */

/**

- Lógica isolada de simulação de frete por região.
- Para integração real com API (ViaCEP + Correios / Melhor Envio),
- substitua apenas esta função.
  */
  function _simularFrete(cep, preco = 0) {
  if (!cep || cep.length !== 8 || !/^\d{8}$/.test(cep)) {
  return {
  valido: false,
  opcoes: [],
  erro: ‘CEP inválido. Digite os 8 dígitos corretamente.’
  };
  }
  
  const prefixo    = parseInt(cep.substring(0, 2));
  const ehSP       = prefixo >= 1  && prefixo <= 19;
  const ehSulSE    = prefixo >= 20 && prefixo <= 39;
  const ehNordeste = prefixo >= 40 && prefixo <= 64;
  const ehNorte    = prefixo >= 65 && prefixo <= 79;
  
  const freteGratis = preco >= 150; // frete grátis acima de R$ 150
  
  let opcoes;
  
  if (ehSP) {
  opcoes = [
  { icone: ‘⚡’, nome: ‘Entrega Expressa’,  prazo: ‘Receba amanhã’,         valor: freteGratis ? 0 : 18.90, gratis: freteGratis },
  { icone: ‘🚚’, nome: ‘Entrega Padrão’,    prazo: ‘Em até 3 dias úteis’,   valor: 0,                       gratis: true        }
  ];
  } else if (ehSulSE) {
  opcoes = [
  { icone: ‘⚡’, nome: ‘Entrega Expressa’,  prazo: ‘Em até 2 dias úteis’,   valor: freteGratis ? 0 : 24.90, gratis: freteGratis },
  { icone: ‘🚚’, nome: ‘Entrega Padrão’,    prazo: ‘Em até 5 dias úteis’,   valor: freteGratis ? 0 : 12.90, gratis: freteGratis }
  ];
  } else if (ehNordeste) {
  opcoes = [
  { icone: ‘🚚’, nome: ‘Entrega Padrão’,    prazo: ‘Em até 7 dias úteis’,   valor: freteGratis ? 0 : 19.90, gratis: freteGratis },
  { icone: ‘📦’, nome: ‘Entrega Econômica’, prazo: ‘Em até 10 dias úteis’,  valor: freteGratis ? 0 : 9.90,  gratis: freteGratis }
  ];
  } else if (ehNorte) {
  opcoes = [
  { icone: ‘🚚’, nome: ‘Entrega Padrão’,    prazo: ‘Em até 10 dias úteis’,  valor: freteGratis ? 0 : 34.90, gratis: freteGratis },
  { icone: ‘📦’, nome: ‘Entrega Econômica’, prazo: ‘Em até 15 dias úteis’,  valor: freteGratis ? 0 : 19.90, gratis: freteGratis }
  ];
  } else {
  // Centro-Oeste e demais regiões
  opcoes = [
  { icone: ‘🚚’, nome: ‘Entrega Padrão’,    prazo: ‘Em até 6 dias úteis’,   valor: freteGratis ? 0 : 22.90, gratis: freteGratis },
  { icone: ‘📦’, nome: ‘Entrega Econômica’, prazo: ‘Em até 8 dias úteis’,   valor: freteGratis ? 0 : 14.90, gratis: freteGratis }
  ];
  }
  
  return { valido: true, opcoes, erro: null };
  }

/**

- Calcula e exibe as opções de frete no modal de produto.
- Exibe skeleton durante o “carregamento” simulado.
  */
  function calcularFrete(inputId, resultadoId, preco) {
  const inputEl     = document.getElementById(inputId);
  const resultadoEl = document.getElementById(resultadoId);
  const btnEl       = inputEl?.nextElementSibling;
  
  if (!inputEl || !resultadoEl) return;
  
  const cepLimpo = inputEl.value.replace(/\D/g, ‘’);
  
  resultadoEl.style.display = ‘block’;
  resultadoEl.innerHTML = `<div class="frete-skeleton"> <div class="frete-skeleton-linha"></div> <div class="frete-skeleton-linha"></div> </div>`;
  
  if (btnEl) btnEl.disabled = true;
  
  // Simula latência de API (800ms) — remover ao integrar API real
  setTimeout(() => {
  const resultado = _simularFrete(cepLimpo, preco);
  
  
   if (!resultado.valido) {
       resultadoEl.innerHTML = `
           <div class="frete-erro">
               <i class="fas fa-exclamation-circle"></i>
               ${resultado.erro}
           </div>
       `;
   } else {
       const opcoesHtml = resultado.opcoes.map(op => `
           <div class="frete-opcao">
               <span class="frete-opcao-icon">${op.icone}</span>
               <div class="frete-opcao-info">
                   <div class="frete-opcao-nome">${op.nome}</div>
                   <div class="frete-opcao-prazo">${op.prazo}</div>
               </div>
               <span class="frete-opcao-valor ${op.gratis ? 'gratis' : ''}">
                   ${op.gratis ? 'GRÁTIS' : 'R$ ' + op.valor.toFixed(2)}
               </span>
           </div>
       `).join('');
  
       resultadoEl.innerHTML = `
           ${opcoesHtml}
           <p class="frete-nota">
               <i class="fas fa-info-circle"></i>
               Prazo estimado a partir da confirmação do pagamento.
           </p>
       `;
   }
  
   if (btnEl) btnEl.disabled = false;
  
  
  }, 800);
  }

// Exibe o input de CEP quando o usuário clica em “Alterar” no componente de frete
function _trocarCepFrete(inputId, resultadoId) {
const input    = document.getElementById(inputId);
const wrap     = input?.closest(’[id^=“frete-input-wrap”]’);
const badge    = wrap?.previousElementSibling;
const linkCep  = wrap?.nextElementSibling?.nextElementSibling;


if (wrap)    wrap.style.display    = '';
if (badge)   badge.style.display   = 'none';
if (linkCep) linkCep.style.display = '';

const resultado = document.getElementById(resultadoId);
if (resultado) resultado.style.display = 'none';
input?.focus();
input?.select();


}

// Renderiza as opções de frete no modal de finalização do pedido
function _renderizarFreteCheckout() {
const container = document.getElementById(‘checkout-frete-resultado’);
if (!container) return;


const enderecoSalvo = JSON.parse(localStorage.getItem('usuario_endereco_obj') || 'null');
const cepSalvo      = enderecoSalvo?.cep || '';

if (cepSalvo.length !== 8) {
    container.innerHTML = `
        <div class="frete-erro">
            <i class="fas fa-exclamation-circle"></i>
            CEP não cadastrado.
            <a href="#"
               data-bs-toggle="modal"
               data-bs-target="#minhaContaModal"
               class="ms-1 fw-bold text-danger">
               Adicionar CEP
            </a>
        </div>
    `;
    sessionStorage.removeItem('frete_selecionado');
    return;
}

const totalCarrinho = cart.reduce((acc, i) => acc + i.price * i.quantity, 0);
const resultado     = _simularFrete(cepSalvo, totalCarrinho);

if (!resultado.valido) {
    container.innerHTML = `
        <div class="frete-erro">
            <i class="fas fa-exclamation-circle"></i>
            ${resultado.erro}
        </div>
    `;
    sessionStorage.removeItem('frete_selecionado');
    return;
}

const cepFormatado = cepSalvo.substring(0, 5) + '-' + cepSalvo.substring(5);

const opcoesHtml = resultado.opcoes.map((op, index) => {
    const radioId    = `frete-opcao-${index}`;
    const valorLabel = op.gratis ? 'GRÁTIS' : `R$ ${op.valor.toFixed(2)}`;
    const valorData  = op.gratis ? 0 : op.valor;

    return `
        <label class="frete-opcao frete-opcao-selecionavel"
               for="${radioId}"
               style="cursor:pointer;">
            <input type="radio"
                   id="${radioId}"
                   name="frete_checkout"
                   class="d-none"
                   value="${valorData}"
                   data-nome="${op.nome}"
                   data-prazo="${op.prazo}"
                   data-valor-label="${valorLabel}"
                   onchange="selecionarFreteCheckout(this)"
                   ${index === 0 ? 'checked' : ''}>
            <span class="frete-opcao-icon">${op.icone}</span>
            <div class="frete-opcao-info">
                <div class="frete-opcao-nome">${op.nome}</div>
                <div class="frete-opcao-prazo">${op.prazo}</div>
            </div>
            <span class="frete-opcao-valor ${op.gratis ? 'gratis' : ''}">
                ${valorLabel}
            </span>
        </label>
    `;
}).join('');

container.innerHTML = `
    ${opcoesHtml}
    <p class="frete-nota mt-2">
        <i class="fas fa-map-marker-alt me-1"></i>
        CEP <strong>${cepFormatado}</strong> ·
        Prazo a partir da confirmação do pagamento.
    </p>
`;

// Seleciona automaticamente a primeira opção
const primeiroRadio = container.querySelector('input[name="frete_checkout"]');
if (primeiroRadio) selecionarFreteCheckout(primeiroRadio);


}

/**

- Registra o frete selecionado no sessionStorage
- e aplica destaque visual na opção escolhida.
  */
  function selecionarFreteCheckout(radio) {
  const freteObj = {
  nome:       radio.dataset.nome,
  prazo:      radio.dataset.prazo,
  valor:      parseFloat(radio.value) || 0,
  valorLabel: radio.dataset.valorLabel
  };
  sessionStorage.setItem(‘frete_selecionado’, JSON.stringify(freteObj));
  
  // Remove destaque de todos e aplica no selecionado
  document.querySelectorAll(’.frete-opcao-selecionavel’).forEach(el => {
  el.style.borderColor = ‘’;
  el.style.background  = ‘’;
  el.style.boxShadow   = ‘’;
  });
  
  const label = radio.closest(’.frete-opcao-selecionavel’);
  if (label) {
  label.style.borderColor = ‘var(–primary-blue)’;
  label.style.background  = ‘#f0f5ff’;
  label.style.boxShadow   = ‘0 2px 8px rgba(0,94,255,0.12)’;
  }
  }

/* ==========================================================================
18. CALCULADORA DE TINTA
========================================================================== */

// Calcula a quantidade de tinta necessária com base nas dimensões da parede
function calcularTinta() {
const largura       = parseFloat(document.getElementById(‘calcLargura’).value);
const altura        = parseFloat(document.getElementById(‘calcAltura’).value);
const resultadoDiv  = document.getElementById(‘resultadoCalc’);
const textoResultado = document.getElementById(‘textoResultado’);


if (!largura || !altura || largura <= 0 || altura <= 0) {
    showToast(`Por favor, insira valores válidos para largura e altura.`, 'danger');
    return;
}

const area            = largura * altura;
const areaTotalDemao  = area * 2;                   // considera 2 demãos
const litrosNecessarios = areaTotalDemao / 10;      // rendimento médio: 10m²/L por demão

let recomendacao = "";

if (litrosNecessarios <= 0.8) {
    recomendacao = "Você precisa de 1 Quarto de 800ml.";
} else if (litrosNecessarios <= 3.6) {
    recomendacao = "Você precisa de 1 Galão de 3,6L.";
} else if (litrosNecessarios <= 7.2) {
    recomendacao = "Você precisa de 2 Galões de 3,6L.";
} else if (litrosNecessarios <= 10) {
    recomendacao = "Você precisa de 1 Balde de 10L.";
} else {
    const latas18 = Math.ceil(litrosNecessarios / 18);
    recomendacao  = `Você precisa de aproximadamente ${latas18} Lata(s) de 18L.`;
}

textoResultado.innerHTML = `Sua parede tem <strong>${area.toFixed(2)}m²</strong>.<br>${recomendacao}`;
resultadoDiv.classList.remove('d-none');


}

/* ==========================================================================
19. LISTA DE MATERIAIS E EXPORTAÇÃO PDF
========================================================================== */

// Exibe o modal com a lista de materiais do carrinho agrupada por categoria
function gerarListaMateriais() {
if (cart.length === 0) {
showToast(“Seu carrinho está vazio!”, “danger”);
return;
}


const grupos = {
    'Tintas e Acabamentos':  [],
    'Ferramentas':           [],
    'Acessórios e Proteção': [],
    'Outros':                []
};

cart.forEach(item => {
    const cat = (item.category || '').toLowerCase();
    if (['interior', 'exterior', 'especial', 'moveis'].includes(cat)) {
        grupos['Tintas e Acabamentos'].push(item);
    } else if (cat === 'ferramentas') {
        grupos['Ferramentas'].push(item);
    } else if (cat === 'acessorios') {
        grupos['Acessórios e Proteção'].push(item);
    } else {
        grupos['Outros'].push(item);
    }
});

const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
const data  = new Date().toLocaleDateString('pt-BR');

let corpoHtml = '';
Object.entries(grupos).forEach(([grupo, itens]) => {
    if (itens.length === 0) return;
    corpoHtml += `
        <div class="mb-3">
            <div class="fw-bold text-primary border-bottom pb-1 mb-2"
                 style="font-size:0.8rem; text-transform:uppercase; letter-spacing:0.05em;">
                ${grupo}
            </div>
            ${itens.map(i => `
                <div class="d-flex justify-content-between align-items-center py-1"
                     style="font-size:0.82rem;">
                    <div class="d-flex align-items-center gap-2">
                        <span class="badge bg-warning text-dark rounded-pill"
                              style="font-size:0.7rem; min-width:22px;">
                            ${i.quantity}x
                        </span>
                        <span>${i.displayName || i.name}</span>
                    </div>
                    <span class="fw-bold text-nowrap ms-2">
                        R$ ${(i.price * i.quantity).toFixed(2)}
                    </span>
                </div>
            `).join('')}
        </div>
    `;
});

const modalHtml = `
    <div class="modal fade" id="modalListaMateriais" tabindex="-1">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <div>
                        <h5 class="modal-title mb-0">
                            <i class="fas fa-clipboard-list me-2"></i>Lista de Materiais
                        </h5>
                        <small style="opacity:0.8;">Gerada em ${data}</small>
                    </div>
                    <button type="button" class="btn-close btn-close-white"
                            data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body px-4 py-3">
                    ${corpoHtml}
                    <div class="d-flex justify-content-between align-items-center
                                border-top pt-3 mt-2">
                        <span class="fw-bold">Total estimado</span>
                        <span class="fw-bold text-primary fs-5">
                            R$ ${total.toFixed(2)}
                        </span>
                    </div>
                </div>
                <div class="modal-footer gap-2">
                    <button class="btn btn-outline-secondary btn-sm"
                            onclick="copiarLista()">
                        <i class="fas fa-copy me-1"></i>Copiar
                    </button>
                    <button class="btn btn-success btn-sm"
                            onclick="compartilharLista()">
                        <i class="fas fa-share-alt me-1"></i>Compartilhar
                    </button>
                    <button class="btn btn-primary btn-sm"
                            data-bs-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>
`;

document.getElementById('modalListaMateriais')?.remove();
document.body.insertAdjacentHTML('beforeend', modalHtml);
new bootstrap.Modal(document.getElementById('modalListaMateriais')).show();


}

// Gera o texto simples da lista de materiais para copiar ou compartilhar
function gerarTextoLista() {
const data  = new Date().toLocaleDateString(‘pt-BR’);
let texto   = `📋 LISTA DE MATERIAIS - FixTintas\n📅 ${data}\n${'─'.repeat(32)}\n`;


cart.forEach(i => {
    texto += `\n• ${i.quantity}x ${i.displayName || i.name}\n  R$ ${(i.price * i.quantity).toFixed(2)}`;
});

const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
texto += `\n\n${'─'.repeat(32)}\nTOTAL: R$ ${total.toFixed(2)}\n\nGerado pelo app FixTintas`;
return texto;


}

// Copia a lista de materiais para a área de transferência
function copiarLista() {
navigator.clipboard.writeText(gerarTextoLista())
.then(() => showToast(“Lista copiada!”, “success”));
}

// Compartilha a lista de materiais via Web Share API
function compartilharLista() {
const texto = gerarTextoLista();
if (navigator.share) {
navigator.share({ title: ‘Lista de Materiais - FixTintas’, text: texto });
} else {
copiarLista();
}
}

// Gera e faz download do PDF de requisição de compras
function gerarPDF() {
if (cart.length === 0) {
showToast(“Seu carrinho está vazio!”, “danger”);
return;
}


if (typeof window.jspdf === 'undefined') {
    showToast("Biblioteca de PDF não carregada. Verifique sua conexão.", "danger");
    return;
}

const { jsPDF } = window.jspdf;
const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

// Constantes de layout e cores
const MARGIN_LEFT  = 15;
const MARGIN_RIGHT = 195;
const PAGE_WIDTH   = 210;
const COR_PRIMARIA = [0, 94, 255];
const COR_LARANJA  = [255, 122, 0];
const COR_ESCURO   = [15, 23, 42];
const COR_CINZA    = [100, 116, 139];
const COR_CINZA_BG = [241, 245, 249];
const COR_LINHA    = [226, 232, 240];

const dataAtual     = new Date();
const dataFormatada = dataAtual.toLocaleDateString('pt-BR');
const horaFormatada = dataAtual.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
const numRef        = `FT-${Math.floor(Math.random() * 90000) + 10000}`;
const nomeSalvo     = localStorage.getItem('usuario_nome') || 'Não identificado';
const enderecoObj   = JSON.parse(localStorage.getItem('usuario_endereco_obj') || 'null');
const enderecoStr   = enderecoObj
    ? `${enderecoObj.rua}, ${enderecoObj.num}${enderecoObj.comp ? ' - ' + enderecoObj.comp : ''} | ${enderecoObj.bairro}, ${enderecoObj.cidade}`
    : 'Endereço não cadastrado';

let y = 0;

// ── Header ──────────────────────────────────────────────────────────────
doc.setFillColor(...COR_PRIMARIA);
doc.rect(0, 0, PAGE_WIDTH, 38, 'F');

doc.setFillColor(...COR_LARANJA);
doc.rect(0, 38, PAGE_WIDTH, 3, 'F');

doc.setFont('helvetica', 'bold');
doc.setFontSize(22);
doc.setTextColor(255, 255, 255);
doc.text('Fix', MARGIN_LEFT, 22);

const larguraFix = doc.getTextWidth('Fix');
doc.setTextColor(...COR_LARANJA);
doc.text('Tintas', MARGIN_LEFT + larguraFix + 1, 22);

doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(200, 220, 255);
doc.text('Quem entende de tintas, Vem aqui!', MARGIN_LEFT, 30);

doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(255, 255, 255);
doc.text('REQUISIÇÃO DE COMPRAS', MARGIN_RIGHT, 18, { align: 'right' });

doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(200, 220, 255);
doc.text(`Ref.: ${numRef}`, MARGIN_RIGHT, 25, { align: 'right' });
doc.text(`Emitido em: ${dataFormatada} às ${horaFormatada}`, MARGIN_RIGHT, 31, { align: 'right' });

y = 52;

// ── Dados do cliente ────────────────────────────────────────────────────
doc.setFillColor(...COR_CINZA_BG);
doc.roundedRect(MARGIN_LEFT, y, PAGE_WIDTH - 30, 26, 3, 3, 'F');

doc.setFont('helvetica', 'bold');
doc.setFontSize(7.5);
doc.setTextColor(...COR_PRIMARIA);
doc.text('DADOS DO CLIENTE', MARGIN_LEFT + 5, y + 7);

doc.setDrawColor(...COR_PRIMARIA);
doc.setLineWidth(0.3);
doc.line(MARGIN_LEFT + 5, y + 9, MARGIN_LEFT + 45, y + 9);

doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.setTextColor(...COR_ESCURO);
doc.text('Cliente:', MARGIN_LEFT + 5, y + 16);
doc.setFont('helvetica', 'normal');
doc.text(nomeSalvo, MARGIN_LEFT + 22, y + 16);

doc.setFont('helvetica', 'bold');
doc.text('Entrega:', MARGIN_LEFT + 5, y + 23);
doc.setFont('helvetica', 'normal');
doc.setFontSize(7.5);
const enderecoLinhas = doc.splitTextToSize(enderecoStr, PAGE_WIDTH - 65);
doc.text(enderecoLinhas, MARGIN_LEFT + 22, y + 23);

y += 35;

// ── Tabela de itens ─────────────────────────────────────────────────────
const grupos = {
    'Tintas e Acabamentos':  [],
    'Ferramentas':           [],
    'Acessórios e Proteção': [],
    'Outros':                []
};
cart.forEach(item => {
    const cat = (item.category || '').toLowerCase();
    if (['interior', 'exterior', 'especial', 'moveis'].includes(cat)) {
        grupos['Tintas e Acabamentos'].push(item);
    } else if (cat === 'ferramentas') {
        grupos['Ferramentas'].push(item);
    } else if (cat === 'acessorios') {
        grupos['Acessórios e Proteção'].push(item);
    } else {
        grupos['Outros'].push(item);
    }
});

const COL = { item: MARGIN_LEFT, qtd: 130, unit: 152, total: 178 };

doc.setFillColor(...COR_ESCURO);
doc.rect(MARGIN_LEFT, y, PAGE_WIDTH - 30, 8, 'F');

doc.setFont('helvetica', 'bold');
doc.setFontSize(7.5);
doc.setTextColor(255, 255, 255);
doc.text('ITEM / ESPECIFICAÇÃO', COL.item  + 3, y + 5.5);
doc.text('QTD.',                 COL.qtd   + 3, y + 5.5);
doc.text('UNIT.',                COL.unit  + 3, y + 5.5);
doc.text('TOTAL',                COL.total + 3, y + 5.5);
y += 8;

let totalGeral    = 0;
let linhaAlternada = false;

Object.entries(grupos).forEach(([nomeGrupo, itens]) => {
    if (itens.length === 0) return;

    if (y > 255) { doc.addPage(); y = 20; }

    doc.setFillColor(235, 242, 255);
    doc.rect(MARGIN_LEFT, y, PAGE_WIDTH - 30, 6.5, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(...COR_PRIMARIA);
    doc.text(nomeGrupo.toUpperCase(), COL.item + 3, y + 4.5);
    y += 6.5;

    itens.forEach(item => {
        if (y > 265) { doc.addPage(); y = 20; linhaAlternada = false; }

        const subtotalItem = item.price * item.quantity;
        totalGeral += subtotalItem;

        if (linhaAlternada) {
            doc.setFillColor(248, 250, 252);
            doc.rect(MARGIN_LEFT, y, PAGE_WIDTH - 30, 7.5, 'F');
        }
        linhaAlternada = !linhaAlternada;

        const nomeItem    = doc.splitTextToSize(item.name, 108);
        const alturaLinha = Math.max(7.5, nomeItem.length * 4.5);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.5);
        doc.setTextColor(...COR_ESCURO);
        doc.text(nomeItem, COL.item + 3, y + 5);
        doc.text(String(item.quantity),            COL.qtd   + 3, y + 5);
        doc.text(`R$ ${item.price.toFixed(2)}`,    COL.unit  + 3, y + 5);

        doc.setFont('helvetica', 'bold');
        doc.text(`R$ ${subtotalItem.toFixed(2)}`,  COL.total + 3, y + 5);

        doc.setDrawColor(...COR_LINHA);
        doc.setLineWidth(0.2);
        doc.line(MARGIN_LEFT, y + alturaLinha, MARGIN_RIGHT, y + alturaLinha);

        y += alturaLinha;
    });
});

y += 4;

// ── Totalizador ─────────────────────────────────────────────────────────
if (y > 255) { doc.addPage(); y = 20; }

const totalItens = cart.reduce((acc, i) => acc + i.quantity, 0);

// Busca frete selecionado (sessionStorage) e endereço cadastrado
const freteSessao  = JSON.parse(sessionStorage.getItem('frete_selecionado') || 'null');
const freteValorPdf = freteSessao?.valor  || 0;
const freteNomePdf  = freteSessao?.nome   || null;
const fretePrazoPdf = freteSessao?.prazo  || '';
const totalFinalPdf = totalGeral + freteValorPdf;

// Linha de subtotal de itens
doc.setFillColor(235, 242, 255);
doc.roundedRect(MARGIN_LEFT, y, PAGE_WIDTH - 30, 9, 2, 2, 'F');
doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(...COR_ESCURO);
doc.text(`Subtotal (${totalItens} ${totalItens === 1 ? 'item' : 'itens'})`, COL.item + 3, y + 6);
doc.setFont('helvetica', 'bold');
doc.text(`R$ ${totalGeral.toFixed(2)}`, MARGIN_RIGHT, y + 6, { align: 'right' });
y += 10;

// Linha de frete
if (freteNomePdf) {
    doc.setFillColor(240, 255, 244);
    doc.roundedRect(MARGIN_LEFT, y, PAGE_WIDTH - 30, 9, 2, 2, 'F');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...COR_CINZA);
    doc.text(`Frete: ${freteNomePdf}${fretePrazoPdf ? ' — ' + fretePrazoPdf : ''}`, COL.item + 3, y + 6);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(freteValorPdf === 0 ? [22, 163, 74] : COR_ESCURO);
    doc.text(freteValorPdf === 0 ? 'GRÁTIS' : `R$ ${freteValorPdf.toFixed(2)}`, MARGIN_RIGHT, y + 6, { align: 'right' });
    y += 10;
}

// Linha de total final
doc.setFillColor(...COR_ESCURO);
doc.roundedRect(MARGIN_LEFT, y, PAGE_WIDTH - 30, 12, 2, 2, 'F');

doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(255, 255, 255);
doc.text('TOTAL GERAL', COL.item + 3, y + 7.5);

doc.setFontSize(11);
doc.setTextColor(...COR_LARANJA);
doc.text(`R$ ${totalFinalPdf.toFixed(2)}`, MARGIN_RIGHT, y + 7.5, { align: 'right' });

y += 20;

// ── Observações ─────────────────────────────────────────────────────────
if (y > 250) { doc.addPage(); y = 20; }

doc.setFillColor(255, 243, 205);
doc.roundedRect(MARGIN_LEFT, y, PAGE_WIDTH - 30, 14, 2, 2, 'F');

doc.setDrawColor(255, 193, 7);
doc.setLineWidth(0.3);
doc.line(MARGIN_LEFT + 4, y + 2, MARGIN_LEFT + 4, y + 12);

doc.setFont('helvetica', 'bold');
doc.setFontSize(7);
doc.setTextColor(133, 100, 4);
doc.text('OBSERVAÇÃO:', MARGIN_LEFT + 8, y + 6);

doc.setFont('helvetica', 'normal');
doc.setTextColor(101, 77, 4);
doc.text(
    'Este documento é uma requisição de compras gerada automaticamente. Preços sujeitos a alteração sem aviso prévio.',
    MARGIN_LEFT + 8, y + 11
);

// ── Rodapé em todas as páginas ───────────────────────────────────────────
const totalPaginas = doc.internal.getNumberOfPages();
for (let i = 1; i <= totalPaginas; i++) {
    doc.setPage(i);

    doc.setFillColor(...COR_ESCURO);
    doc.rect(0, 282, PAGE_WIDTH, 15, 'F');

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(148, 163, 184);

    doc.text('(16) 0000-0000  |  sac@fixtintas.com.br  |  Av. Carlos Consoni, 10 - RP', MARGIN_LEFT, 289);
    doc.text('CNPJ: 12.345.678/0001-90  |  FixTintas Comércio de Tintas LTDA.', PAGE_WIDTH / 2, 289, { align: 'center' });
    doc.text(`Pág. ${i} / ${totalPaginas}`, MARGIN_RIGHT, 289, { align: 'right' });
}

const nomeArquivo = `FixTintas_Requisicao_${numRef}_${dataAtual.toLocaleDateString('pt-BR').replace(/\//g, '-')}.pdf`;
doc.save(nomeArquivo);
showToast(`PDF gerado com sucesso! <br><small>${nomeArquivo}</small>`, 'success');


}

/* ==========================================================================
20. MODO ESCURO
========================================================================== */

// Alterna entre modo claro e modo escuro
function toggleDarkMode() {
const body = document.body;
const icon = document.getElementById(‘dark-mode-icon’);


body.classList.toggle('dark-mode');

if (body.classList.contains('dark-mode')) {
    icon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
} else {
    icon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
}


}

// Aplica preferência de tema salva ao carregar a página
if (localStorage.getItem(‘theme’) === ‘dark’) {
document.body.classList.add(‘dark-mode’);
document.getElementById(‘dark-mode-icon’)?.classList.replace(‘fa-moon’, ‘fa-sun’);
}

/* ==========================================================================
21. POPUP DE PROMOÇÕES
========================================================================== */

/**

- Inicializa e exibe o popup de promoções.
- Não exibe se já foi fechado nesta sessão ou se não há produtos em oferta.
  */
  function inicializarPopupPromocoes() {
  if (sessionStorage.getItem(‘popup_promo_fechado’) === ‘true’) return;
  
  const emOferta = products.filter(p => p.promo === true);
  if (emOferta.length === 0) return;
  
  _renderizarItensPopup(emOferta);
  
  const badge = document.getElementById(‘popup-promo-badge’);
  if (badge) badge.textContent = emOferta.length;
  
  const popup = document.getElementById(‘popup-promocoes’);
  if (popup) popup.classList.remove(‘d-none’);
  }

// Renderiza os cards de produto dentro do popup de promoções
function _renderizarItensPopup(itens) {
const lista = document.getElementById(‘popup-promo-lista’);
if (!lista) return;


lista.innerHTML = itens.map(p => {
    const temDesconto  = p.oldPrice && p.oldPrice > p.price;
    const desconto     = temDesconto
        ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100)
        : null;

    const precoAntigoHtml = temDesconto
        ? `<span class="popup-promo-preco-antigo">R$ ${p.oldPrice.toFixed(2)}</span>`
        : '';

    const badgeHtml = desconto
        ? `<span class="popup-promo-desconto">-${desconto}%</span>`
        : '';

    return `
        <div class="popup-promo-item"
             onclick="fecharPopupPromo(); showProductDetails(${p.id});"
             role="button"
             title="Ver ${p.name}">
            <img src="${p.img}"
                 alt="${p.name}"
                 class="popup-promo-item-img"
                 loading="lazy">
            <div class="popup-promo-item-info">
                <div class="popup-promo-item-nome">${p.name}</div>
                <div class="popup-promo-item-precos">
                    ${precoAntigoHtml}
                    <span class="popup-promo-preco-atual">
                        R$ ${p.price.toFixed(2)}
                    </span>
                    ${badgeHtml}
                </div>
            </div>
        </div>
    `;
}).join('');


}

// Minimiza o popup — oculta o card e exibe a aba lateral
function minimizarPopupPromo() {
const card = document.getElementById(‘popup-promo-card’);
const aba  = document.getElementById(‘popup-promo-aba’);
if (!card || !aba) return;


card.classList.add('saindo');
setTimeout(() => {
    card.classList.add('d-none');
    card.classList.remove('saindo');
    aba.classList.remove('d-none');
}, 310);


}

// Expande o popup a partir da aba minimizada
function expandirPopupPromo() {
const card = document.getElementById(‘popup-promo-card’);
const aba  = document.getElementById(‘popup-promo-aba’);
if (!card || !aba) return;


aba.classList.add('d-none');
card.classList.remove('d-none');


}

// Fecha o popup definitivamente nesta sessão
function fecharPopupPromo() {
const popup = document.getElementById(‘popup-promocoes’);
const card  = document.getElementById(‘popup-promo-card’);
if (!popup || !card) return;


card.classList.add('saindo');
setTimeout(() => {
    popup.classList.add('d-none');
    card.classList.remove('saindo');
    sessionStorage.setItem('popup_promo_fechado', 'true');
}, 310);


}

/* ==========================================================================
22. BANNER DE OFERTAS NOS FAVORITOS
========================================================================== */

// Verifica favoritos em promoção e exibe banner de notificação
function verificarOfertasFavoritos() {
const favorites = JSON.parse(localStorage.getItem(‘fixtintas_favorites’)) || [];
if (favorites.length === 0) return;


const ofertasNovas = products.filter(p =>
    favorites.includes(p.id) && p.promo === true
);
if (ofertasNovas.length === 0) return;

// Evita repetição no mesmo dia
const ultimaNotif = localStorage.getItem('fixtintas_ultima_notif');
const hoje        = new Date().toDateString();
if (ultimaNotif === hoje) return;
localStorage.setItem('fixtintas_ultima_notif', hoje);

const produtosHtml = ofertasNovas.map(p => {
    const temDesconto = p.oldPrice && p.oldPrice > p.price;
    const desconto    = temDesconto
        ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100)
        : null;

    const precoAntigoHtml = temDesconto
        ? `<span class="banner-preco-antigo">R$ ${p.oldPrice.toFixed(2)}</span>`
        : '';

    const badgeHtml = desconto
        ? `<span class="banner-badge-desconto">-${desconto}%</span>`
        : '';

    return `
        <div class="banner-produto-item"
             onclick="showProductDetails(${p.id}); fecharBannerOferta();"
             role="button"
             title="Ver ${p.name}">
            <img src="${p.img}"
                 alt="${p.name}"
                 class="banner-produto-img"
                 loading="lazy">
            <div class="banner-produto-info">
                <div class="banner-produto-nome">${p.name}</div>
                <div class="banner-produto-precos">
                    ${precoAntigoHtml}
                    <span class="banner-preco-atual">R$ ${p.price.toFixed(2)}</span>
                </div>
            </div>
            ${badgeHtml}
        </div>
    `;
}).join('');

const quantidadeTexto = ofertasNovas.length === 1
    ? '1 favorito em oferta'
    : `${ofertasNovas.length} favoritos em oferta`;

const wrapper = document.createElement('div');
wrapper.id = 'banner-oferta-wrapper';
wrapper.innerHTML = `
    <div class="banner-oferta-card">
        <div class="banner-oferta-header">
            <div class="banner-oferta-header-left">
                <img src="https://i.imgur.com/PmT6Skb.png"
                     alt="FixTintas"
                     class="banner-oferta-logo">
                <div>
                    <div class="banner-oferta-titulo">
                        🔥 Oferta nos seus favoritos!
                    </div>
                    <div class="banner-oferta-subtitulo">${quantidadeTexto}</div>
                </div>
            </div>
            <button class="banner-oferta-fechar"
                    onclick="fecharBannerOferta()"
                    aria-label="Fechar notificação">
                <i class="fas fa-times"></i>
            </button>
        </div>

        <div class="banner-oferta-body">
            ${produtosHtml}
        </div>

        <div class="banner-oferta-timer">
            <div class="banner-oferta-timer-bar"></div>
        </div>
    </div>
`;

document.getElementById('banner-oferta-wrapper')?.remove();
document.body.appendChild(wrapper);

setTimeout(fecharBannerOferta, 8000); // fecha automaticamente após 8s


}

// Remove o banner de ofertas com animação de saída
function fecharBannerOferta() {
const wrapper = document.getElementById(‘banner-oferta-wrapper’);
if (!wrapper) return;


wrapper.classList.add('saindo');
setTimeout(() => wrapper.remove(), 360);


}

/* ==========================================================================
23. EVENTOS GLOBAIS
========================================================================== */

// Rastreia o mouse para o efeito de lanterna quando ativo
document.addEventListener(‘mousemove’, (e) => {
const overlays = [‘flashlight-normal’, ‘flashlight-spray’];


overlays.forEach(id => {
    const overlay = document.getElementById(id);
    if (overlay && overlay.classList.contains('flashlight-active')) {
        const parent = overlay.parentElement;
        const rect   = parent.getBoundingClientRect();
        const x      = e.clientX - rect.left;
        const y      = e.clientY - rect.top;

        overlay.style.setProperty('--x', `${x}px`);
        overlay.style.setProperty('--y', `${y}px`);
    }
});


});

// Suporte a Enter no input de frete (funciona mesmo com modal dinâmico)
document.addEventListener(‘keydown’, (e) => {
if (e.key === ‘Enter’ && e.target.classList.contains(‘frete-input’)) {
e.preventDefault();
const inputId     = e.target.id;
const resultadoId = e.target.dataset.resultadoId;
const preco       = parseFloat(e.target.dataset.preco) || 0;
if (resultadoId) calcularFrete(inputId, resultadoId, preco);
}
});

// Aplica máscaras em campos de formulário durante a digitação
document.addEventListener(‘input’, (e) => {
// Máscara do número do cartão
if (e.target.id === ‘cardNum’) {
let v = e.target.value.replace(/\D/g, ‘’);
v = v.replace(/(\d{4})(?=\d)/g, ’$1 ’);
e.target.value = v;
}


// Máscara do CPF
if (e.target.id === 'cardCPF') {
    let v = e.target.value.replace(/\D/g, '');
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    e.target.value = v;
}

// Apenas números no CVV
if (e.target.id === 'cardCVV') {
    e.target.value = e.target.value.replace(/\D/g, '');
}

// Máscara de CEP no formulário de endereço com busca automática
if (e.target.id === 'addrCEP') {
    let v = e.target.value.replace(/\D/g, '');
    if (v.length > 5) v = v.substring(0, 5) + '-' + v.substring(5, 8);
    e.target.value = v;

    if (v.replace(/\D/g, '').length === 8) {
        buscarCEP();
    }
}

// Máscara de CEP no componente de frete
if (e.target.classList.contains('frete-input')) {
    let v = e.target.value.replace(/\D/g, '');
    if (v.length > 5) v = v.substring(0, 5) + '-' + v.substring(5, 8);
    e.target.value = v;

    if (v.replace(/\D/g, '').length === 8) {
        e.target.dataset.ready = 'true';
    }
}


});

// Oculta ou exibe a navbar conforme a direção do scroll
window.addEventListener(‘scroll’, () => {
const navbar = document.querySelector(’.navbar’);
if (!navbar) return;
if (document.body.classList.contains(‘modal-open’)) return;


const currentScrollY = window.scrollY;

if (currentScrollY > lastScrollY && currentScrollY > 60) {
    navbar.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    navbar.style.transform  = 'translateY(-100%)';
} else {
    navbar.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    navbar.style.transform  = 'translateY(0)';
}

// Controla visibilidade do botão "Voltar ao topo"
const btnTopo = document.getElementById('btn-voltar-topo');
if (btnTopo) {
    btnTopo.classList.toggle('visivel', currentScrollY > 400);
}

lastScrollY = currentScrollY;


}, { passive: true });

// Formulário de login — evento de submit com banco local
document.getElementById(‘loginForm’)?.addEventListener(‘submit’, function(e) {
e.preventDefault();


const emailValido = _validarCampo('loginEmail', 'erro-loginEmail', v =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Digite um e-mail válido.'
);
const senhaValida = _validarCampo('loginSenha', 'erro-loginSenha', v =>
    v.length >= 1 || 'Digite sua senha.'
);
if (!emailValido || !senhaValida) return;

const email  = document.getElementById('loginEmail').value.trim();
const senha  = document.getElementById('loginSenha').value;
const lembrar = document.getElementById('loginLembrar')?.checked !== false;

const resultado = _autenticarUsuario(email, senha);

if (!resultado.ok) {
    const campoErr = resultado.erro.includes('E-mail') ? 'loginEmail' : 'loginSenha';
    const erroId   = `erro-${campoErr}`;
    document.getElementById(campoErr)?.classList.add('invalido');
    const erroEl = document.getElementById(erroId);
    if (erroEl) erroEl.textContent = resultado.erro;

    // Se conta não existe → redirecionar para cadastro
    if (resultado.erro.includes('não encontrado')) {
        setTimeout(() => alternarAbaLogin('cadastro'), 1200);
    }
    return;
}

_iniciarSessao(resultado.usuario, lembrar);
checkLoginPersistence();
bootstrap.Modal.getInstance(document.getElementById('loginModal'))?.hide();
showToast(`Bem-vindo de volta, ${resultado.usuario.nome.split(' ')[0]}! 👋`, 'success');


});

// Formulário de cadastro — evento de submit com banco local
document.getElementById(‘cadastroForm’)?.addEventListener(‘submit’, function(e) {
e.preventDefault();


const nomeValido  = _validarCampo('cadNome',  'erro-cadNome',  v => v.length >= 2 ? true : 'Digite seu nome completo.');
const emailValido = _validarCampo('cadEmail', 'erro-cadEmail', v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? true : 'Digite um e-mail válido.');
const senhaValida = _validarCampo('cadSenha', 'erro-cadSenha', v => v.length >= 6 ? true : 'A senha deve ter pelo menos 6 caracteres.');

const senha     = document.getElementById('cadSenha').value;
const confValida = _validarCampo('cadSenhaConf', 'erro-cadSenhaConf', v =>
    v === senha ? true : 'As senhas não coincidem.'
);

if (!nomeValido || !emailValido || !senhaValida || !confValida) return;

const nome  = document.getElementById('cadNome').value.trim();
const email = document.getElementById('cadEmail').value.trim();

const resultado = _criarUsuario({ nome, email, senha });

if (!resultado.ok) {
    const erroEl = document.getElementById('erro-cadEmail');
    document.getElementById('cadEmail').classList.add('invalido');
    if (erroEl) erroEl.textContent = resultado.erro;
    return;
}

_iniciarSessao(resultado.usuario, true);
checkLoginPersistence();
bootstrap.Modal.getInstance(document.getElementById('loginModal'))?.hide();
showToast(`Conta criada! Bem-vindo, ${nome.split(' ')[0]}! 🎉`, 'success');


});

/* ==========================================================================
MÓDULO: CARRINHO ABANDONADO
Detecta inatividade de 3 minutos com itens no carrinho e exibe alerta.
========================================================================== */

let _timerAbandonado  = null;
let _alertaMostrado   = false;
const TEMPO_ABANDONO  = 3 * 60 * 1000; // 3 minutos

function _resetarTimerAbandonado() {
clearTimeout(_timerAbandonado);
_alertaMostrado = false;


if (cart.length === 0) return;

_timerAbandonado = setTimeout(() => {
    if (cart.length > 0 && !_alertaMostrado) {
        _alertaMostrado = true;
        _exibirAlertaAbandonado();
    }
}, TEMPO_ABANDONO);


}

function _exibirAlertaAbandonado() {
// Remove alerta anterior se existir
document.getElementById(‘alertaCarrinhoAbandonado’)?.remove();


const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
const isDark = document.body.classList.contains('dark-mode');

const el = document.createElement('div');
el.id = 'alertaCarrinhoAbandonado';
el.style.cssText = `
    position: fixed; bottom: 24px; left: 24px; z-index: 99997;
    max-width: 340px; width: calc(100vw - 48px);
    background: ${isDark ? '#1e2240' : '#fff'};
    border: 2px solid #005eff; border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0,94,255,0.18);
    padding: 18px 20px; animation: slideUpBanner 0.4s ease both;
    font-family: Inter, sans-serif; color: ${isDark ? '#e2e8f0' : '#333'};
`;
el.innerHTML = `
    <button onclick="document.getElementById('alertaCarrinhoAbandonado').remove()"
            style="position:absolute;top:10px;right:12px;background:none;border:none;
                   font-size:1.1rem;cursor:pointer;color:${isDark ? '#94a3b8' : '#999'};">✕</button>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
        <span style="font-size:1.6rem;">🛒</span>
        <div>
            <div style="font-weight:700;font-size:0.92rem;">Seu carrinho está esperando!</div>
            <div style="font-size:0.78rem;color:${isDark ? '#94a3b8' : '#666'};">
                ${cart.length} ${cart.length === 1 ? 'item' : 'itens'} — 
                R$ ${total.toFixed(2).replace('.', ',')}
            </div>
        </div>
    </div>
    <button onclick="showCart(); document.getElementById('alertaCarrinhoAbandonado').remove();"
            style="width:100%;padding:9px;border:none;border-radius:10px;
                   background:linear-gradient(135deg,#005eff,#0040cc);
                   color:#fff;font-weight:700;font-size:0.85rem;cursor:pointer;">
        Ver carrinho e finalizar
    </button>
`;
document.body.appendChild(el);

// Remove automaticamente após 20 segundos
setTimeout(() => el.remove(), 20000);


}

document.addEventListener(‘DOMContentLoaded’, () => {


// Migra usuários do sistema legado (executa uma única vez)
if (typeof _migrarUsuarioLegado === 'function') _migrarUsuarioLegado();

// Renderizações iniciais
if (typeof renderProducts          === 'function') renderProducts(products);
if (typeof updateCartUI            === 'function') updateCartUI();
if (typeof renderFavoritesProfile  === 'function') renderFavoritesProfile();
if (typeof renderOrdersProfile     === 'function') renderOrdersProfile();
if (typeof checkLoginPersistence   === 'function') checkLoginPersistence();
if (typeof loadAddressFields       === 'function') loadAddressFields();

// Inicializa timer de carrinho abandonado — reseta ao interagir com a página
['click', 'keydown', 'scroll', 'touchstart'].forEach(evt =>
    document.addEventListener(evt, _resetarTimerAbandonado, { passive: true })
);
// Dispara uma verificação inicial se já houver itens no carrinho
if (cart.length > 0) _resetarTimerAbandonado();

// Lógica de busca em tempo real
const inputBusca = document.getElementById('inputBusca');

if (inputBusca) {
    inputBusca.addEventListener('input', (e) => {
        const termo      = normalizarTexto(e.target.value.trim());
        const btnLimpar  = document.getElementById('btnLimparBusca');
        const contadorEl = document.getElementById('busca-contador');

        if (btnLimpar) {
            btnLimpar.classList.toggle('visivel', e.target.value.length > 0);
        }

        if (!termo) {
            renderProducts(products);
            if (contadorEl) contadorEl.classList.remove('visivel');
            return;
        }

        const filtrados = products.filter(p => {
            const nomeProd  = normalizarTexto(p.name);
            const marcaProd = normalizarTexto(p.brand);
            const descProd  = normalizarTexto(p.desc);
            return nomeProd.includes(termo) || marcaProd.includes(termo) || descProd.includes(termo);
        });

        if (contadorEl) {
            if (filtrados.length === 0) {
                contadorEl.innerHTML = `Nenhum resultado para <strong>"${e.target.value}"</strong>`;
            } else {
                contadorEl.innerHTML = `<strong>${filtrados.length}</strong> ${
                    filtrados.length === 1 ? 'resultado' : 'resultados'
                } para <strong>"${e.target.value}"</strong>`;
            }
            contadorEl.classList.add('visivel');
        }

        const container = document.getElementById('product-list');
        if (filtrados.length === 0 && container) {
            container.innerHTML = `
                <div class="col-12 text-center my-5 py-4">
                    <i class="fas fa-search fa-3x text-muted mb-3 d-block" style="opacity:0.3;"></i>
                    <h5 class="fw-bold text-muted">Nenhum produto encontrado</h5>
                    <p class="text-muted small">Tente buscar por outro nome ou marca.</p>
                    <button class="btn btn-sm btn-outline-primary mt-2"
                            onclick="limparBusca()">
                        Ver todos os produtos
                    </button>
                </div>`;
        } else {
            renderProducts(filtrados);
        }
    });
}

// Fecha o menu mobile ao interagir com elementos de navegação
const seletoresMenu = [
    '[data-bs-target="#cartModal"]',
    '[data-bs-target="#offcanvasCart"]',
    '#btnLoginHeader',
    '.nav-link[onclick*="calcular"]',
    '[data-bs-target="#modalCalculadora"]',
    'a[href*="calc"]'
];

seletoresMenu.forEach(seletor => {
    const el = document.querySelector(seletor);
    if (el && typeof fecharMenuMobile === 'function') {
        el.addEventListener('click', fecharMenuMobile);
    }
});

// Atualiza o preview ao alterar cor ou textura no modal de configuração
const configModalEl = document.getElementById('productConfigModal');
if (configModalEl) {
    configModalEl.addEventListener('change', (e) => {
        if ((e.target.name === 'color' || e.target.id === 'selectTexture') && typeof updatePreview === 'function') {
            updatePreview();
        }
        atualizarSubtotalModal();
    });
}

// Ativa/desativa submenus laterais de categoria
const menuItems = document.querySelectorAll('.dropdown-side');
menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
        // Clicou num item filho (li do submenu) → fecha tudo e filtra
        if (e.target.tagName === 'LI' && !e.target.classList.contains('dropdown-side')) {
            menuItems.forEach(el => el.classList.remove('active'));
            return;
        }
        e.stopPropagation();
        const isActive = this.classList.contains('active');
        menuItems.forEach(el => el.classList.remove('active'));
        if (!isActive) this.classList.add('active');
    });
});

// Fecha submenu ao clicar em qualquer outro lugar da página
document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown-side')) {
        menuItems.forEach(el => el.classList.remove('active'));
    }
});

// Fecha submenu ao pressionar Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        menuItems.forEach(el => el.classList.remove('active'));
    }
});

// Exibe banner de ofertas em favoritos após 2s
setTimeout(verificarOfertasFavoritos, 2000);

// Suporte ao botão Voltar/Avançar do navegador
window.addEventListener('popstate', (e) => {
    const p = new URLSearchParams(window.location.search);
    const cat = p.get('categoria');
    if (cat) {
        filterProducts(cat);
    } else {
        renderProducts(products);
        const categoryTitle = document.getElementById('category-title');
        if (categoryTitle) categoryTitle.innerText = 'Todos os produtos';
        document.querySelectorAll('.custom-menu .list-group-item')
            .forEach(el => el.classList.remove('active-filter'));
    }
});

// Lida com parâmetros de URL (produto, aba e categoria) — leitura única
const urlParams    = new URLSearchParams(window.location.search);
const produtoId    = urlParams.get('produto');
const aba          = urlParams.get('aba');
const categoriaUrl = urlParams.get('categoria');

// TAREFA 3 — Aplica filtro de categoria da URL ao carregar
if (categoriaUrl) {
    const list          = document.getElementById('product-list');
    const categoryTitle = document.getElementById('category-title');
    if (list) {
        const searchTag = categoriaUrl.toLowerCase().trim();
        const filtered  = products.filter(p =>
            p.category.toLowerCase() === searchTag ||
            p.sub.toLowerCase()      === searchTag ||
            p.brand.toLowerCase()    === searchTag
        );
        const mapa = {
            interior: 'Tintas de Interior', exterior: 'Tintas de Exterior',
            acrilica: 'Tinta Acrílica', latex: 'Tinta Látex', fosca: 'Tinta Fosca',
            impermeavel: 'Tinta Impermeável', 'acrilica-ext': 'Acrílica Externa',
            esmalte: 'Esmalte', verniz: 'Verniz', epoxi: 'Tinta Epóxi',
            termica: 'Tinta Térmica', suvinil: 'Suvinil', coral: 'Coral',
            sherwin: 'Sherwin-Williams', rolos: 'Rolos', pinceis: 'Pincéis',
            bandejas: 'Bandejas', lixas: 'Lixas', fitas: 'Fitas',
            extensores: 'Extensores', ferramentas: 'Ferramentas', acessorios: 'Acessórios',
            moveis: 'Tintas para Móveis', especial: 'Tintas Especiais'
        };
        if (categoryTitle) categoryTitle.innerText = mapa[searchTag] || `Categoria: ${searchTag}`;
        renderProducts(filtered);
        document.querySelectorAll('.submenu li').forEach(li => {
            const attr = li.getAttribute('onclick') || '';
            if (attr.includes(`'${searchTag}'`)) {
                li.closest('.list-group-item')?.classList.add('active-filter');
            }
        });
    }
}

if (produtoId || aba) {
    setTimeout(() => {
        if (produtoId && typeof showProductDetails === 'function') showProductDetails(Number(produtoId));
        if (aba === 'carrinho' && typeof showCart         === 'function') showCart();
        if (aba === 'perfil'   && typeof handleProfileClick === 'function') handleProfileClick();
    }, 500);
}

// Lê ?painel=admin da URL ao carregar a página
const painelUrl = urlParams.get('painel');
if (painelUrl === 'admin') {
    setTimeout(() => {
        if (typeof abrirPainelAdmin === 'function') abrirPainelAdmin();
    }, 600);
}


});