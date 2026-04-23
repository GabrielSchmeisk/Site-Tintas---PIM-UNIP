/* ==========================================================================
   1. BANCO DE DADOS E VARIÁVEIS GLOBAIS
   ========================================================================== */
const products = [
    // --- TINTAS INTERIOR ---
    { id: 1, name: "Tinta Premium Acrílica", category: "interior", sub: "acrilica", brand: "suvinil", price: 50.0, oldPrice: 70.0, promo: true, desc: "Alta cobertura, lavável e rendimento superior.", img: "https://placehold.co/400x400/005eff/fff?text=Suvinil+Premium", sugestoes: [11, 14, 19] },
    { id: 2, name: "Tinta Acrílica Fosca", category: "interior", sub: "acrilica", brand: "coral", price: 65.0, promo: false, desc: "Ideal para disfarçar imperfeições em salas e quartos.", img: "https://placehold.co/400x400/005eff/fff?text=Coral+Fosca", sugestoes: [11, 13, 20] },
    { id: 3, name: "Látex Standard", category: "interior", sub: "latex", brand: "suvinil", price: 42.0, promo: false, desc: "Excelente custo-benefício para tetos e áreas secas.", img: "https://placehold.co/400x400/005eff/fff?text=Latex+Standard", sugestoes: [11, 16, 29] },
    { id: 4, name: "Tinta Toque de Seda", category: "interior", sub: "fosca", brand: "sherwin", price: 58.0, promo: false, desc: "Acabamento acetinado com toque aveludado fino.", img: "https://placehold.co/400x400/005eff/fff?text=Toque+Seda", sugestoes: [12, 14, 15] },
    { id: 23, name: "Tinta Direto no Gesso", category: "interior", sub: "latex", brand: "coral", price: 48.0, promo: false, desc: "Não precisa de fundo, fixa direto na placa de gesso.", img: "https://placehold.co/400x400/005eff/fff?text=Gesso+Coral", sugestoes: [11, 21, 15] },

    // --- TINTAS EXTERIOR ---
    { id: 5, name: "Tinta Acrílica Emborrachada", category: "exterior", sub: "acrilica-ext", brand: "coral", price: 80.0, promo: false, desc: "Acompanha a dilatação da parede, evitando microfissuras.", img: "https://placehold.co/400x400/005eff/fff?text=Emborrachada", sugestoes: [11, 27, 16] },
    { id: 6, name: "Impermeabilizante Fachada", category: "exterior", sub: "impermeavel", brand: "sherwin", price: 120.0, oldPrice: 150.0, promo: true, desc: "Proteção máxima contra infiltrações e batida de chuva.", img: "https://placehold.co/400x400/005eff/fff?text=Impermeavel", sugestoes: [11, 13, 16] },
    { id: 17, name: "Textura Rústica", category: "exterior", sub: "acrilica-ext", brand: "suvinil", price: 85.0, promo: false, desc: "Efeito riscado decorativo de alta resistência.", img: "https://placehold.co/400x400/005eff/fff?text=Textura+Rustica", sugestoes: [28, 21, 14] },
    { id: 24, name: "Tinta para Pisos", category: "exterior", sub: "acrilica-ext", brand: "suvinil", price: 72.0, promo: false, desc: "Alta resistência a tráfego de pessoas e carros.", img: "https://placehold.co/400x400/005eff/fff?text=Piso+Resistente", sugestoes: [11, 22, 13] },

    // --- MÓVEIS E MADEIRAS ---
    { id: 7, name: "Esmalte Sintético Premium", category: "moveis", sub: "esmalte", brand: "suvinil", price: 45.0, promo: false, desc: "Máxima durabilidade para madeiras, portas e metais.", img: "https://placehold.co/400x400/005eff/fff?text=Esmalte+Luxo", sugestoes: [12, 22, 15] },
    { id: 8, name: "Verniz Marítimo", category: "moveis", sub: "verniz", brand: "coral", price: 70.0, oldPrice: 95.0, promo: true, desc: "Proteção UV e contra maresia para ambientes externos.", img: "https://placehold.co/400x400/005eff/fff?text=Verniz+Maritimo", sugestoes: [12, 15, 22] },
    { id: 18, name: "Stain Impregnante", category: "moveis", sub: "verniz", brand: "sherwin", price: 78.0, promo: false, desc: "Não descasca, protege a madeira de dentro para fora.", img: "https://placehold.co/400x400/005eff/fff?text=Stain+Madeira", sugestoes: [12, 15, 30] },
    { id: 25, name: "Tinta Spray Multiuso", category: "moveis", sub: "esmalte", brand: "sherwin", price: 25.0, promo: false, desc: "Secagem rápida para pequenos reparos e artesanato.", img: "https://placehold.co/400x400/005eff/fff?text=Spray+Sherwin", sugestoes: [14, 15, 30] },

    // --- ESPECIAIS ---
    { id: 9, name: "Tinta Epóxi Base Água", category: "especial", sub: "epoxi", brand: "suvinil", price: 155.0, promo: false, desc: "Resistência extrema para pisos, banheiros e cozinhas.", img: "https://placehold.co/400x400/005eff/fff?text=Epoxi+Agua", sugestoes: [11, 13, 22] },
    { id: 10, name: "Tinta Térmica Refletiva", category: "especial", sub: "termica", brand: "sherwin", price: 210.0, promo: false, desc: "Reduz a temperatura interna e economiza energia.", img: "https://placehold.co/400x400/005eff/fff?text=Tinta+Termica", sugestoes: [11, 16, 13] },
    { id: 26, name: "Esmalte Vitrificado", category: "especial", sub: "epoxi", brand: "coral", price: 180.0, promo: false, desc: "Acabamento de alto brilho que parece vidro.", img: "https://placehold.co/400x400/005eff/fff?text=Vitrificar", sugestoes: [12, 22, 14] },

    // --- PREPARAÇÃO (MASSAS E SELADORES) ---
    { id: 19, name: "Massa Corrida", category: "interior", sub: "acrilica", brand: "suvinil", price: 35.0, promo: false, desc: "Fácil de lixar, ideal para nivelar paredes internas.", img: "https://placehold.co/400x400/005eff/fff?text=Massa+Corrida", sugestoes: [21, 15, 30] },
    { id: 20, name: "Selador Acrílico", category: "interior", sub: "acrilica", brand: "coral", price: 38.0, promo: false, desc: "Uniformiza a absorção da parede, economizando tinta.", img: "https://placehold.co/400x400/005eff/fff?text=Selador", sugestoes: [11, 13, 1] },
    { id: 27, name: "Massa Acrílica (Externa)", category: "exterior", sub: "acrilica-ext", brand: "suvinil", price: 45.0, promo: false, desc: "Resistente à umidade, perfeita para fachadas.", img: "https://placehold.co/400x400/005eff/fff?text=Massa+Acrilica", sugestoes: [21, 28, 30] },

    // --- FERRAMENTAS ---
    { id: 11, name: "Rolo de Lã Antirespingo", category: "ferramentas", sub: "rolos", brand: "atlas", price: 28.0, promo: false, desc: "Pintura limpa e uniforme para superfícies lisas.", img: "https://placehold.co/400x400/005eff/fff?text=Rolo+Atlas", sugestoes: [13, 16, 14] },
    { id: 12, name: "Trincha Pro de Cerdas", category: "ferramentas", sub: "pinceis", brand: "tigre", price: 12.5, promo: false, desc: "Cerdas sintéticas para acabamentos e recortes.", img: "https://placehold.co/400x400/005eff/fff?text=Pincel+Tigre", sugestoes: [14, 22, 15] },
    { id: 13, name: "Bandeja para Pintura G", category: "ferramentas", sub: "bandejas", brand: "atlas", price: 15.0, promo: false, desc: "Capacidade para 2 litros, bico escorredor.", img: "https://placehold.co/400x400/005eff/fff?text=Bandeja+G", sugestoes: [11, 12, 29] },
    { id: 21, name: "Espátula de Aço Inox", category: "ferramentas", sub: "pinceis", brand: "tigre", price: 18.0, promo: false, desc: "Para aplicação de massas e remoção de resíduos.", img: "https://placehold.co/400x400/005eff/fff?text=Espatula+Inox", sugestoes: [19, 27, 15] },
    { id: 28, name: "Desempenadeira de Aço", category: "ferramentas", sub: "bandejas", brand: "atlas", price: 32.0, promo: false, desc: "Ideal para aplicar massa corrida e texturas.", img: "https://placehold.co/400x400/005eff/fff?text=Desempenadeira", sugestoes: [27, 21, 30] },

    // --- ACESSÓRIOS E PROTEÇÃO ---
    { id: 14, name: "Fita Crepe Azul UV", category: "acessorios", sub: "fitas", brand: "3m", price: 15.9, promo: false, desc: "Resistente ao sol, não deixa cola por até 14 dias.", img: "https://placehold.co/400x400/005eff/fff?text=Fita+Azul+3M", sugestoes: [29, 11, 1] },
    { id: 15, name: "Kit Lixas Grão Variado", category: "acessorios", sub: "lixas", brand: "norton", price: 8.5, promo: false, desc: "Pack com 5 unidades para diversos acabamentos.", img: "https://placehold.co/400x400/005eff/fff?text=Kit+Lixas", sugestoes: [19, 21, 30] },
    { id: 16, name: "Extensor Telescópico", category: "acessorios", sub: "extensores", brand: "atlas", price: 35.0, promo: false, desc: "Estrutura leve de alumínio reforçado.", img: "https://placehold.co/400x400/005eff/fff?text=Extensor", sugestoes: [11, 13, 6] },
    { id: 22, name: "Aguarrás Mineral 900ml", category: "acessorios", sub: "fitas", brand: "suvinil", price: 22.0, promo: false, desc: "Solvente ideal para diluir esmaltes e limpar ferramentas.", img: "https://placehold.co/400x400/005eff/fff?text=Aguarras", sugestoes: [7, 8, 12] },
    { id: 29, name: "Lona Plástica 4x4m", category: "acessorios", sub: "fitas", brand: "3m", price: 12.0, promo: false, desc: "Proteção de móveis e pisos contra respingos.", img: "https://placehold.co/400x400/005eff/fff?text=Lona+Protecao", sugestoes: [14, 11, 30] },
    { id: 30, name: "Máscara Respiratória PFF2", category: "acessorios", sub: "extensores", brand: "norton", price: 7.5, promo: false, desc: "Proteção contra poeira de lixamento e odores.", img: "https://placehold.co/400x400/005eff/fff?text=Mascara+EPI", sugestoes: [15, 19, 27] }
];


let cart = JSON.parse(localStorage.getItem('fixtintas_cart')) || [];
let tempProduct = null;
let currentWallIndex = 0;
let spraySelecionado = null; // Começa como null para forçar a seleção


const wallTypes = [
    { 
        name: 'Parede Lisa', 
        apply: (box) => {
            box.style.backgroundImage = "none";
        }
    },
	{ 
		name: 'Grafiato', 
		apply: (box) => {
			// Camada 1: Ranhuras principais levemente inclinadas (88deg)
			// Camada 2: Ranhuras secundárias para dar profundidade e irregularidade (92deg)
			// Camada 3: Textura de fundo para tirar a cor chapada
			box.style.backgroundImage = `
				repeating-linear-gradient(88deg, 
					rgba(0,0,0,0.08) 0px, 
					rgba(0,0,0,0.08) 1.5px, 
					transparent 1.5px, 
					transparent 5px
				),
				repeating-linear-gradient(92deg, 
					rgba(0,0,0,0.04) 0px, 
					rgba(0,0,0,0.04) 1px, 
					transparent 1px, 
					transparent 8px
				),
				linear-gradient(to bottom, rgba(255,255,255,0.1), transparent),
				radial-gradient(circle at 50% 50%, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.05) 100%)
			`;
			box.style.backgroundSize = "auto";
			// O segredo do realismo: um leve contraste para destacar as ranhuras
			box.style.filter = "contrast(1.1) brightness(0.98)";
		}
	},
    { 
        name: 'Tijolinho', 
        apply: (box) => {
            box.style.backgroundImage = `
                linear-gradient(335deg, rgba(0,0,0,0.1) 23px, transparent 23px),
                linear-gradient(155deg, rgba(0,0,0,0.1) 23px, transparent 23px),
                linear-gradient(335deg, rgba(0,0,0,0.1) 23px, transparent 23px),
                linear-gradient(155deg, rgba(0,0,0,0.1) 23px, transparent 23px)
            `;
            box.style.backgroundSize = "58px 58px";
            box.style.backgroundPosition = "0 0, 4px 35px, 29px 31px, 34px 6px";
        }
    },
    { 
        name: 'Marmorato', 
        apply: (box) => {
            box.style.backgroundImage = `
                radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 50%),
                radial-gradient(circle at 70% 60%, rgba(0,0,0,0.08) 0%, transparent 50%),
                radial-gradient(circle at 10% 80%, rgba(255,255,255,0.1) 0%, transparent 40%)
            `;
            box.style.backgroundSize = "auto";
        }
    }
];

// utils.js
function isProdutoAcessorio(product) {
    if (!product) return false;

    const nomes = [
        "pincel","rolo","fita","lixa","bandeja","espatula",
        "desempenadeira","extensor","lona","mascara","aguarras",
        "solvente","trincha"
    ];

    const categoria = normalizarTexto(product.category);
    const nome = normalizarTexto(product.name);

    return (
        categoria === 'ferramentas' ||
        categoria === 'acessorios' ||
        nomes.some(t => nome.includes(t))
    );
}

/* ==========================================================================
   2. INICIALIZAÇÃO (DOMContentLoaded)
   ========================================================================== */
// --- 1. FUNÇÕES GLOBAIS (Devem vir antes de tudo para serem reconhecidas) ---

function normalizarTexto(texto) {
    if (!texto) return "";
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}


// --- 2. INICIALIZAÇÃO DO DOM ---

document.addEventListener('DOMContentLoaded', () => {
    // Renderizações Iniciais
    if (typeof renderProducts === 'function') renderProducts(products);
    if (typeof updateCartUI === 'function') updateCartUI();
    if (typeof renderFavoritesProfile === 'function') renderFavoritesProfile();
    if (typeof renderOrdersProfile === 'function') renderOrdersProfile();
    if (typeof checkLoginPersistence === 'function') checkLoginPersistence(); 
    if (typeof loadAddressFields === 'function') loadAddressFields();

    // Lógica de Busca
    const inputBusca = document.getElementById('inputBusca');
    const formBusca = document.getElementById('formBusca');

    if (inputBusca) {
        inputBusca.addEventListener('input', (e) => {
            const termo = normalizarTexto(e.target.value);
            const filtrados = products.filter(p => {
                const nomeProd = normalizarTexto(p.name);
                const marcaProd = normalizarTexto(p.brand);
                return nomeProd.includes(termo) || marcaProd.includes(termo);
            });

            if (typeof renderProducts === 'function') renderProducts(filtrados);

            const container = document.getElementById('product-list');
            if (filtrados.length === 0 && container) {
                container.innerHTML = `
                    <div class="col-12 text-center my-5">
                        <p class="text-muted">Nenhum produto encontrado para "${e.target.value}"</p>
                    </div>`;
            }
        });
    }
    if (formBusca) formBusca.addEventListener('submit', (e) => e.preventDefault());

    // Eventos de Interface (Fechar Menu Mobile)
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

    // Modal de Configuração
    const configModalEl = document.getElementById('productConfigModal');
    if (configModalEl) {
        configModalEl.addEventListener('change', (e) => {
            if ((e.target.name === 'color' || e.target.id === 'selectTexture') && typeof updatePreview === 'function') {
                updatePreview();
            }
		atualizarSubtotalModal();
        });
    }

    // Submenus Laterais
    const menuItems = document.querySelectorAll('.dropdown-side');
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (e.target.tagName === 'LI' && !e.target.classList.contains('dropdown-side')) return;
            e.stopPropagation();
            const isActive = this.classList.contains('active');
            menuItems.forEach(el => el.classList.remove('active'));
            if (!isActive) this.classList.add('active');
        });
    });

    // Parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search);
    const produtoId = urlParams.get('produto');
    const aba = urlParams.get('aba');

    if (produtoId || aba) {
        setTimeout(() => {
            if (produtoId && typeof showProductDetails === 'function') showProductDetails(Number(produtoId));
            if (aba === 'carrinho' && typeof showCart === 'function') showCart();
            if (aba === 'perfil' && typeof handleProfileClick === 'function') handleProfileClick();
        }, 500);
    }
});
/* ==========================================================================
   3. SISTEMA DE USUÁRIO (LOGIN, LOGOUT, PERSISTÊNCIA)
   ========================================================================== */
function checkLoginPersistence() {
    const nomeCompleto = localStorage.getItem('usuario_nome');
    const loginBtn = document.getElementById('btnLoginHeader');
    const btnText = loginBtn?.querySelector('span');

    if (nomeCompleto) {
        const primeiroNome = nomeCompleto.split(' ')[0];
        if (loginBtn) {
            loginBtn.classList.remove('btn-outline-light');
            loginBtn.classList.add('btn-warning', 'text-dark');
            if (btnText) btnText.innerText = `Olá, ${primeiroNome}`;
            loginBtn.setAttribute('data-bs-target', '#minhaContaModal');
        }
        if (document.getElementById('userDisplayName')) {
            document.getElementById('userDisplayName').innerText = `Olá, ${nomeCompleto}!`;
        }
        document.getElementById('btnSair')?.classList.remove('d-none');
        document.getElementById('btnIrLogin')?.classList.add('d-none');
    } else {
        if (loginBtn) {
            loginBtn.classList.remove('btn-warning', 'text-dark');
            loginBtn.classList.add('btn-outline-light');
            if (btnText) btnText.innerText = "Entrar";
            loginBtn.setAttribute('data-bs-target', '#loginModal');
        }
        document.getElementById('btnSair')?.classList.add('d-none');
        document.getElementById('btnIrLogin')?.classList.remove('d-none');
    }
}

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const nomeCompleto = document.getElementById('loginNome').value;
    const email = document.getElementById('loginEmail').value;
    localStorage.setItem('usuario_nome', nomeCompleto);
    localStorage.setItem('usuario_email', email);
    checkLoginPersistence();
    const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    modal.hide();
    showToast(`Bem-vindo, ${nomeCompleto.split(' ')[0]}!`, 'success');
});

function logout() {
    localStorage.removeItem('usuario_nome');
    localStorage.removeItem('usuario_email');
    localStorage.removeItem('usuario_endereco');
    checkLoginPersistence();
    showToast("Você saiu da conta.", 'warning');
}

function saveAddress() {
    // 1. Captura os valores dos campos
    const rua = document.getElementById('addrRua').value.trim();
    const num = document.getElementById('addrNum').value.trim();
    const comp = document.getElementById('addrComp').value.trim();
    const bairro = document.getElementById('addrBairro').value.trim();
    const cidade = document.getElementById('addrCidade').value.trim();

    // 2. Validação de campos obrigatórios
    if (!rua || !num || !bairro || !cidade) {
        showToast("⚠️ Preencha todos os campos obrigatórios.", "danger");
        return; 
    }

    // 3. Salva os dados no LocalStorage
    const dadosEndereco = { rua, num, comp, bairro, cidade };
    localStorage.setItem('usuario_endereco_obj', JSON.stringify(dadosEndereco));
    localStorage.setItem('usuario_endereco', `${rua}, ${num}`);
    
    // 4. Mostra o aviso de sucesso
    showToast("Endereço salvo com sucesso!", "success");

    // 5. FECHA O MENU AUTOMATICAMENTE (Ação solicitada)
    fecharMenuMobile();

    // Opcional: Se o formulário estiver dentro de um Modal, você pode fechá-lo também:
    const modalConta = document.getElementById('minhaContaModal');
    if (modalConta) {
        bootstrap.Modal.getInstance(modalConta)?.hide();
    }
}

function loadAddressFields() {
    const salvo = JSON.parse(localStorage.getItem('usuario_endereco_obj'));
    if (salvo) {
        document.getElementById('addrRua').value = salvo.rua;
        document.getElementById('addrNum').value = salvo.num;
        document.getElementById('addrComp').value = salvo.comp;
        document.getElementById('addrBairro').value = salvo.bairro;
        document.getElementById('addrCidade').value = salvo.cidade;
    }
}

/* ==========================================================================
   4. VITRINE E FILTRAGEM DE PRODUTOS
   ========================================================================== */
function renderProducts(items) {
    const container = document.getElementById('product-list');
    if (!container) return;

    // Recupera favoritos do LocalStorage
    const favorites = JSON.parse(localStorage.getItem('fixtintas_favorites')) || [];

    // 1. ORDENAÇÃO: Coloca quem tem promo: true no topo da lista
    const sortedItems = [...items].sort((a, b) => (b.promo === true) - (a.promo === true));

    // 2. MAPEAMENTO: Gera o HTML para cada produto
    container.innerHTML = sortedItems.map(p => {
        const isFav = favorites.includes(p.id);
        
        // Etiqueta de Promoção (CANTO SUPERIOR ESQUERDO)
        const promoBadge = p.promo 
            ? `<span class="badge bg-danger position-absolute top-0 start-0 m-2 shadow-sm" style="z-index: 3;">
                <i class="fas fa-fire me-1"></i>OFERTA
               </span>` 
            : '';
        
        // HTML do Preço
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
                        <button class="btn btn-outline-primary btn-sm px-3 fw-bold rounded-pill">
                            VER MAIS <i class="fas fa-arrow-right ms-1" style="font-size: 0.8rem;"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>`;
    }).join('');
}

function filterProducts(tag, event) {
    if (event && event.preventDefault) { event.preventDefault(); }
    const list = document.getElementById('product-list');
    const categoryTitle = document.getElementById('category-title');
    if (!list) return;

    list.style.opacity = '0';
    setTimeout(() => {
        let filtered;
        const searchTag = tag.toLowerCase().trim();
        if (searchTag === 'all' || searchTag === '') {
            filtered = products;
            if(categoryTitle) categoryTitle.innerText = "Produtos em Oferta";
        } else {
            filtered = products.filter(p => 
                p.category.toLowerCase() === searchTag || 
                p.sub.toLowerCase() === searchTag || 
                p.brand.toLowerCase() === searchTag
            );
            if(categoryTitle) categoryTitle.innerText = `Filtrado por: ${tag.toUpperCase()}`;
        }
        renderProducts(filtered);
        list.style.opacity = '1';
        
        const offcanvasEl = document.getElementById('offcanvasCategories');
        if (offcanvasEl) {
            const instance = bootstrap.Offcanvas.getInstance(offcanvasEl) || new bootstrap.Offcanvas(offcanvasEl);
            instance.hide();
        }
        if(window.innerWidth < 992) {
            window.scrollTo({ top: list.offsetTop - 100, behavior: 'smooth' });
        }
    }, 300);
}

function showProductDetails(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
	
   // Isso muda o link para: seusite.com/index.html?produto=ID
    const novaUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?produto=' + id;
    window.history.pushState({ path: novaUrl }, '', novaUrl)

    // --- LÓGICA DE NOTA E AVALIAÇÕES ---
    const seed = (product.id * 133) % 11; 
    const rating = (4 + (seed / 10)).toFixed(1); 
    const numReviews = ((product.id * 7) % 31) + 10; 

    let starHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) starHtml += '<i class="fas fa-star"></i>';
        else if (rating >= i - 0.9) starHtml += '<i class="fas fa-star-half-alt"></i>';
        else starHtml += '<i class="far fa-star"></i>';
    }

    // --- LÓGICA DE PRODUTO COMPLEMENTAR VIA ARRAY 'SUGESTOES' ---
    let produtoSugerido;
    let fraseDica = "Quem comprou este item também levou:";

    if (product.sugestoes && product.sugestoes.length > 0) {
        // Escolhe um ID do array de sugestões de forma alternada usando o tempo ou ID
        // Aqui usamos o ID do produto para que a sugestão mude conforme o item, mas seja fixa
        const indexSugerido = (product.id) % product.sugestoes.length;
        const idSugerido = product.sugestoes[indexSugerido];
        produtoSugerido = products.find(p => p.id === idSugerido);
    }

    // Caso o produto não tenha sugestões definidas, pega um aleatório como segurança
    if (!produtoSugerido) {
        produtoSugerido = products[product.id % products.length];
    }

    const favorites = JSON.parse(localStorage.getItem('fixtintas_favorites')) || [];
    const isFav = favorites.includes(product.id);

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
                    <img src="${product.img}" class="img-fluid rounded shadow-sm" style="width: 100%; height: 350px; object-fit: cover;">
                </div>
                <div class="col-md-6 d-flex flex-column">
                    <div class="flex-grow-1">
                        <span class="badge bg-primary mb-2 text-uppercase">${product.brand}</span>
                        <h2 class="fw-bold h3 mb-1">${product.name}</h2>
                        <div class="mb-3">
                            <div class="text-warning d-inline">${starHtml}</div>
                            <small class="text-muted ms-2">(${rating}/5 - ${numReviews} avaliações)</small>
                        </div>
                        <div class="d-flex align-items-center mb-3">
                            <h3 class="text-primary fw-bold mb-0">R$ ${product.price.toFixed(2)}</h3>
                        </div>
                        <p class="text-muted border-top pt-3 mb-4">${product.desc}</p>
                        
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
                    <button class="btn btn-warning w-100 fw-bold p-3 shadow-sm mt-auto" onclick="addToCartFromModal(${product.id})">
                        <i class="fas fa-cart-plus me-2"></i> ADICIONAR AO CARRINHO
                    </button>
                </div>
            </div>
        </div>
    `;

    const modalElement = document.getElementById('productModal');
    const myModal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
    myModal.show();
	
    if (typeof renderizarSugestoes === "function") renderizarSugestoes(product); 

	modalElement.addEventListener('hidden.bs.modal', () => {
        const urlOriginal = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.history.pushState({ path: urlOriginal }, '', urlOriginal);
    }, { once: true }); // O 'once: true' garante que o evento não se acumule

}
// Botão compartilhar

function shareProduct(id, name) {
    // Cria o link personalizado (ajuste o domínio quando publicar seu site)
    const url = `${window.location.origin}${window.location.pathname}?produto=${id}`;
    const text = `Confira este produto: ${name}`;

    if (navigator.share) {
        // Se for celular ou navegador compatível
        navigator.share({
            title: name,
            text: text,
            url: url,
        })
        .then(() => console.log('Compartilhado com sucesso!'))
        .catch((error) => console.log('Erro ao compartilhar', error));
    } else {
        // Se for PC desktop (Plano B: Copiar link)
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copiado para a área de transferência!');
        });
    }
}

/**
 * Função auxiliar para tratar o clique no favorito dentro da modal
 * sem precisar recarregar a modal inteira (melhora a performance)
 */
function handleModalFavorite(id, event) {
    // 1. Chama sua função global de toggle (que já deve salvar no localStorage e atualizar a vitrine)
    toggleFavorite(id, event);

    // 2. Atualiza apenas o ícone dentro da modal para dar feedback instantâneo
    const btn = document.getElementById('btn-fav-modal');
    const icon = btn.querySelector('i');
    const favorites = JSON.parse(localStorage.getItem('fixtintas_favorites')) || [];
    const isFav = favorites.includes(id);

    if (isFav) {
        icon.classList.replace('far', 'fas');
        btn.title = "Remover dos favoritos";
    } else {
        icon.classList.replace('fas', 'far');
        btn.title = "Adicionar aos favoritos";
    }
    
    // Atualiza também a seção de perfil/favoritos se estiver aberta
    renderFavoritesProfile();
}

/** * FUNÇÕES AUXILIARES PARA A MODAL 
 */

// Atualiza a quantidade e o subtotal visualmente na modal
function updateModalQty(delta, price) {
    const qtyInput = document.getElementById('modal-qty');
    const subtotalText = document.getElementById('modal-subtotal');
    let currentQty = parseInt(qtyInput.value);
    
    currentQty += delta;
    if (currentQty < 1) currentQty = 1;
    
    qtyInput.value = currentQty;
    subtotalText.innerText = `R$ ${(currentQty * price).toFixed(2)}`;
}

// Ponte para sua função addToCart existente, mas pegando a quantidade da modal
function addToCartFromModal(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    // 1. Pega a quantidade que o usuário digitou no modal de detalhes
    const qtyInput = document.getElementById('modal-qty');
    const quantity = qtyInput ? parseInt(qtyInput.value) : 1;

    const nameLower = product.name.toLowerCase();
    
    // 2. Mesma lógica de filtro que você usa na Home
    const isAcessorio = isProdutoAcessorio(product);

    // 3. Fecha o modal de detalhes antes de prosseguir
    const modalDetailsEl = document.getElementById('productModal');
    const modalDetails = bootstrap.Modal.getInstance(modalDetailsEl);
    if (modalDetails) modalDetails.hide();

    if (isAcessorio) {
        // USA SUA FUNÇÃO EXISTENTE: Adiciona direto e já chama o save()
        addToCartSimple(id, quantity);
        
        // Abre o offcanvas/modal do carrinho para mostrar que funcionou
        const cartOffcanvasEl = document.getElementById('cartOffcanvas');
        if (cartOffcanvasEl) {
            const cartOffcanvas = new bootstrap.Offcanvas(cartOffcanvasEl);
            cartOffcanvas.show();
        }
        
        // Garante que a tela não fique travada/escura
        limparBackdropsTravados();
    } else {
        // Fluxo de tintas/sprays: Configura a fila e abre o modal de cores
        sessionStorage.setItem('pending_configs', quantity);
        sessionStorage.setItem('total_to_configure', quantity);
        
        // Espera o modal de detalhes fechar para não bugar o backdrop
        modalDetailsEl.addEventListener('hidden.bs.modal', function handler() {
            openConfigModal(id);
            modalDetailsEl.removeEventListener('hidden.bs.modal', handler);
        }, { once: true });
    }
}


function filterByPrice(value) {
    const list = document.getElementById('product-list');
    const categoryTitle = document.getElementById('category-title');
    if (!list) return;

    let filtered;

    if (value === 'all') {
        filtered = [...products];
        if (categoryTitle) categoryTitle.innerText = "Produtos em Oferta";
    } else {
        // Divide a string "51-100" em min=51 e max=100
        const [min, max] = value.split('-').map(Number);
        
        filtered = products.filter(p => p.price >= min && p.price <= max);
        
        if (categoryTitle) {
            categoryTitle.innerText = max > 1000 ? `Acima de R$ ${min}` : `Preço: R$ ${min} - R$ ${max}`;
        }
    }

    // Ordenação do menor para o maior preço
    filtered.sort((a, b) => a.price - b.price);

    // Efeito visual de transição
    list.style.opacity = '0';
    setTimeout(() => {
        renderProducts(filtered);
        list.style.opacity = '1';
    }, 200);
}


/* ==========================================================================
   5. CONFIGURAÇÃO DE PRODUTO E PREVIEW
   ========================================================================== */
function openConfigModal(id) {
    const product = products.find(p => p.id == id);
    if (!product) return;
    
    tempProduct = product;
    const nameLower = product.name.toLowerCase();

    // --- DEFINIÇÕES DAS VARIÁVEIS (Onde estava o erro) ---
    const isAcessorio = isProdutoAcessorio(product);

    const apenasTamanho =
        nameLower.includes("massa") || 
        nameLower.includes("selador") || 
        nameLower.includes("verniz") || 
        nameLower.includes("impregnante") || 
        nameLower.includes("stain") || 
        nameLower.includes("fundo") || 
        nameLower.includes("zarcao") ||
        nameLower.includes("cupinicida") ||
        nameLower.includes("seladora");

    // Definição do isSpray (estava faltando ou mal posicionada)
    const isSpray = product.id === 25 || nameLower.includes("spray");

    // --- LÓGICA DE DIRECIONAMENTO ---

    // 1. ACESSÓRIOS (Direto pro carrinho)
    if (isAcessorio) {
        addToCartSimple(product.id);
        return; 
    }

    // 2. APENAS TAMANHO (Massa, Verniz, etc)
    if (apenasTamanho) {
        modalTamanhos(product); // Chama a função que criamos
        return; 
    }

// 3. SPRAY
if (isSpray) {
    const sprayModalEl = document.getElementById('sprayConfigModal');
    if (sprayModalEl) {
        renderCoresNoModalSpray(); 
        const sprayModal = new bootstrap.Modal(sprayModalEl);
        
        let pending = parseInt(sessionStorage.getItem('pending_configs')) || 1;
        let total = parseInt(sessionStorage.getItem('total_to_configure')) || 1;
        const atual = (total - pending) + 1;
        
        const labelEl = document.getElementById('sprayModalLabel');
        if(labelEl) {
            labelEl.innerHTML = `${product.name} <span class="badge bg-warning text-dark ms-2 rounded-pill" style="font-size: 0.7rem;">Item ${atual} de ${total}</span>`;
        }

        sprayModalEl.addEventListener('shown.bs.modal', () => {
            updateSprayPreview();
            atualizarSubtotalModal();
        }, { once: true });

        sprayModal.show(); // ← ESTAVA FALTANDO
    }
    return; 
}

    // 4. TINTAS PADRÃO (Com cor e textura)
    const configModalEl = document.getElementById('productConfigModal');
    if (configModalEl) {
        let pending = parseInt(sessionStorage.getItem('pending_configs')) || 1;
        let total = parseInt(sessionStorage.getItem('total_to_configure')) || 1;
        const atual = (total - pending) + 1;

        const labelEl = document.getElementById('productConfigModalLabel');
        if (labelEl) {
            labelEl.innerHTML = `${product.name} <span class="badge bg-warning text-dark ms-2 rounded-pill" style="font-size: 0.7rem;">Item ${atual} de ${total}</span>`;
        }

        const configModal = new bootstrap.Modal(configModalEl);
        const subsComParede = ['acrilica', 'latex', 'fosca', 'acrilica-ext', 'impermeavel', 'termica', 'emborrachada'];
        const previewContainer = document.getElementById('preview-container');
        
        if (previewContainer) {
            previewContainer.style.display = subsComParede.includes(product.sub) ? 'block' : 'none';
        }

        configModal.show();
        renderizarSugestoes(product);
        
        configModalEl.addEventListener('shown.bs.modal', () => {
            updatePreview();
            atualizarSubtotalModal();
        }, { once: true });

    }
}

function modalTamanhos(product) {
    const sizeModalEl = document.getElementById('modalTamanhos');
    if (!sizeModalEl) return;

    // --- LÓGICA DO CONTADOR (IGUAL AOS OUTROS MODAIS) ---
    let pending = parseInt(sessionStorage.getItem('pending_configs')) || 1;
    let total = parseInt(sessionStorage.getItem('total_to_configure')) || 1;
    const atual = (total - pending) + 1;

    const labelEl = document.getElementById('modalTamanhosLabel');
    if (labelEl) {
        // Injeta o nome do produto e o badge do contador
        labelEl.innerHTML = `${product.name} <span class="badge bg-warning text-dark ms-2 rounded-pill" style="font-size: 0.7rem;">Item ${atual} de ${total}</span>`;
    }

    const imgEl = document.getElementById('modalTamanhosImg');
    if (imgEl) imgEl.src = product.img;

    // Abre o modal
    const sizeModal = new bootstrap.Modal(sizeModalEl);
    sizeModal.show();

    // Atualiza o subtotal inicial baseado no data-extra do primeiro item
    sizeModalEl.addEventListener('shown.bs.modal', () => atualizarSubtotalModal(), { once: true });
	
	renderizarSugestoes(tempProduct, 'sugestoes-config');
}

function confirmAddToCartSizeOnly() {
    if (!tempProduct) return;

    const sizeSelect = document.getElementById('selectSizeOnly');
    const selectedOption = sizeSelect.options[sizeSelect.selectedIndex];
    
    const addPrice = parseFloat(selectedOption.getAttribute('data-price-add')) || 0;
    const finalPrice = Number(tempProduct.price) + addPrice;

    const item = {
        ...tempProduct,
        id: `${tempProduct.id}-${Math.random().toString(36).substr(2, 5)}`, 
        name: `${tempProduct.name} (${selectedOption.value})`,
        price: finalPrice,
        quantity: 1,
        opcoes: { tamanho: selectedOption.value, cor: "N/A" }
    };

    cart.push(item);
    save();
    updateCartUI();

    // Fecha o modal e gerencia a fila
    const modalEl = document.getElementById('modalTamanhos');
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

function updatePreview() {
    const selectedColorInput = document.querySelector('input[name="color"]:checked');
    const textureSelect = document.getElementById('selectTexture');
    const sizeSelect = document.getElementById('selectSize'); 
    const previewBox = document.getElementById('product-preview');
    const previewText = document.getElementById('preview-text');
    const wallLabel = document.getElementById('wall-type-label');
    const modalPriceElement = document.getElementById('modalProductPrice');

    if (!selectedColorInput || !previewBox || !textureSelect || !tempProduct) return;

    // 1. CAPTURA DOS VALORES SELECIONADOS
    const colorHex = selectedColorInput.nextElementSibling.style.backgroundColor || selectedColorInput.nextElementSibling.style.background;
    const colorName = selectedColorInput.value;
    const texture = textureSelect.value;
    
    // 2. PARTE VISUAL (TINTA E PAREDE)
    previewBox.style.backgroundColor = colorHex;
    previewBox.style.filter = "none";
    previewBox.style.backgroundSize = "auto";
    previewBox.style.backgroundPosition = "0 0";
    previewBox.style.animation = "none";
    previewBox.style.boxShadow = "inset 0 0 50px rgba(0,0,0,0.1)"; 

    const currentWall = wallTypes[currentWallIndex];
    if (wallLabel) wallLabel.innerText = currentWall.name;
    currentWall.apply(previewBox);
    
    const baseWallTexture = previewBox.style.backgroundImage;

    // Aplicação dos efeitos visuais de acabamento
    switch(texture) {
        case "Fosco":
            previewBox.style.filter = "saturate(0.9) brightness(0.95)";
            break;
        case "Acetinado":
            previewBox.style.boxShadow = "inset 0 0 40px rgba(255,255,255,0.15), inset -20px -20px 40px rgba(0,0,0,0.05)";
            break;
        case "Semibrilho":
            previewBox.style.boxShadow = "inset 20px 20px 60px rgba(255,255,255,0.35), inset -10px -10px 20px rgba(0,0,0,0.1)";
            previewBox.style.filter = "brightness(1.05)";
            break;
        case "Cimento Queimado":
            const cimento = `radial-gradient(circle at 20% 30%, rgba(0,0,0,0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.1) 0%, transparent 50%)`;
            previewBox.style.backgroundImage = (baseWallTexture !== "none") ? `${cimento}, ${baseWallTexture}` : cimento;
            previewBox.style.filter = "contrast(1.2) grayscale(0.1)";
            break;
        case "Metalizado":
            const metal = `linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)`;
            previewBox.style.backgroundImage = (baseWallTexture !== "none") ? `${metal}, ${baseWallTexture}` : metal;
            previewBox.style.filter = "contrast(1.1) brightness(1.1) saturate(1.2)";
            break;
    }

    previewText.innerText = `${colorName} - ${texture}`;

    // 3. LÓGICA DE CÁLCULO DE PREÇO AGREGADO
    
    const basePrice = Number(tempProduct.price) || 0;
    
    // Adicional da Cor (data-price-color)
    const colorExtra = Number(selectedColorInput.getAttribute('data-price-color')) || 0;

    // Adicional da Textura (data-price-texture)
    const textureOption = textureSelect.options[textureSelect.selectedIndex];
    const textureExtra = Number(textureOption.getAttribute('data-price-texture')) || 0;

    // Adicional do Tamanho/Lata (data-price-add)
    let sizeExtra = 0;
    if (sizeSelect) {
        const sizeOption = sizeSelect.options[sizeSelect.selectedIndex];
        sizeExtra = Number(sizeOption.getAttribute('data-price-add')) || 0;
    }

    // Soma Total Final
    const totalPrice = basePrice + colorExtra + textureExtra + sizeExtra;

    // 4. ATUALIZAÇÃO DA INTERFACE E OBJETO
    if (modalPriceElement) {
        modalPriceElement.innerText = `R$ ${totalPrice.toFixed(2)}`;
    }

    // Salva o preço calculado para o carrinho usar
    tempProduct.currentCalculatedPrice = totalPrice;
    
    // Salva as escolhas atuais para o carrinho
    tempProduct.selectedColorName = colorName;
    tempProduct.selectedTextureName = texture;
    tempProduct.selectedSizeName = sizeSelect ? sizeSelect.value : "Padrão";
}

function changeWall(direction) {
    // 1. Atualiza o índice global
    currentWallIndex += direction;
    if (currentWallIndex >= wallTypes.length) currentWallIndex = 0;
    if (currentWallIndex < 0) currentWallIndex = wallTypes.length - 1;

    // 2. Atualiza o preview que estiver aberto no momento
    // Se o modal de spray estiver aberto, atualiza o spray
    const sprayModal = document.getElementById('sprayConfigModal');
    if (sprayModal && sprayModal.classList.contains('show')) {
        updateSprayPreview();
    } else {
        // Senão, atualiza o preview normal
        updatePreview();
    }
}

function applyConfigToAll() {
    const pending = parseInt(sessionStorage.getItem('pending_configs')) || 0;
    
    // Adiciona a configuração atual para TODAS as latas restantes
    for (let i = 0; i <= pending; i++) {
        confirmAddToCart(true); // Passamos 'true' para indicar processamento em lote
    }
    
    sessionStorage.removeItem('pending_configs');
    sessionStorage.removeItem('total_to_configure');
    
    const configModal = bootstrap.Modal.getInstance(document.getElementById('productConfigModal'));
    if (configModal) configModal.hide();
    
    showToast("Todas as latas foram configuradas!", "success");
}

// Substitua suas funções correspondentes por estas:
function updateSprayPreview() {
    const modal = document.getElementById('sprayConfigModal');
    if (!modal) return;

    const selectedColorInput = modal.querySelector('input[name="color"]:checked');
    const demaos = parseInt(document.getElementById('spray-demaos')?.value) || 1;
    const previewBox = document.getElementById('product-preview-spray');
    const displayPreco = document.getElementById('modalSprayPrice');

    if (!previewBox) return;

    // 1. Atualização do Preço (Subtotal)
    if (tempProduct && displayPreco) {
        let precoBase = parseFloat(tempProduct.price) || 0;
        let extraCor = 0;
        if (selectedColorInput) {
            extraCor = parseFloat(selectedColorInput.getAttribute('data-price-color')) || 0;
        }
        const precoFinal = precoBase + extraCor;
        displayPreco.innerText = precoFinal.toLocaleString('pt-BR', { 
            style: 'currency', 
            currency: 'BRL' 
        });
    }

    // 1. Configurações base da parede
    previewBox.style.backgroundColor = "#d1d1d1";
    previewBox.style.backgroundImage = "none";
    previewBox.style.filter = "none";

    if (selectedColorInput) {
        const colorHex = selectedColorInput.getAttribute('data-hex');
        
        /* LÓGICA DE COBERTURA (CENTRO):
           - 1 Demão: Centro pequeno e suave (30%), bordas bem esfumaçadas.
           - 2 Demãos: Centro maior e mais forte (55%).
           - 3 Demãos: Centro totalmente fechado (80%) com 100% de opacidade.
        */
        
        let centroSolido, opacidadeCentro;

        if (demaos === 1) {
            centroSolido = "25%"; 
            opacidadeCentro = "bb"; // levemente transparente
        } else if (demaos === 2) {
            centroSolido = "50%";
            opacidadeCentro = "ee"; // quase sólido
        } else {
            centroSolido = "300%";
            opacidadeCentro = "ff"; // 100% sólido (fechado)
        }

        // Criamos o gradiente respeitando essa progressão
        const camadaTinta = `radial-gradient(circle at center, 
            ${colorHex}${opacidadeCentro} 0%, 
            ${colorHex}${opacidadeCentro} ${centroSolido}, 
            ${colorHex}66 85%, 
            transparent 95%)`;

        // Aplicamos a camada. Para a 2ª e 3ª demão, sobrepomos para reforçar a cor
        let camadas = [];
        for (let i = 0; i < demaos; i++) {
            camadas.push(camadaTinta);
        }
        previewBox.style.backgroundImage = camadas.join(', ');

        // 2. Máscara Irregular (Mantendo o tamanho anterior constante)
        const noiseSvg = `"data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 -1 0 0 0 1'/%3E%3C/filter%3E%3Crect width='1000' height='1000' filter='url(%23noise)'/%3E%3C/svg%3E"`;
        const mask = `radial-gradient(circle at center, black 0%, black 70%, transparent 95%), url(${noiseSvg})`;
        
        previewBox.style.maskImage = mask;
        previewBox.style.webkitMaskImage = mask;
        previewBox.style.maskComposite = 'source-in';
        previewBox.style.webkitMaskComposite = 'source-in';

    } else {
        previewBox.style.maskImage = "none";
        previewBox.style.webkitMaskImage = "none";
    }

    previewBox.style.backgroundSize = "contain";
    previewBox.style.backgroundRepeat = "no-repeat";
    previewBox.style.backgroundPosition = "center";
	
}

function renderCoresNoModalSpray() {
    const container = document.getElementById('sprayColorPicker');
    if (!container) return;


    const cores = [
        { id: 'white', name: 'Branco', hex: '#ffffff', price: 0 },
        { id: 'offwhite', name: 'Pérola', hex: '#fdf5e6', price: 5 },
        { id: 'gray', name: 'Cinza Platina', hex: '#bdc3c7', price: 10 },
        { id: 'black', name: 'Preto Absoluto', hex: '#2c3e50', price: 25 },
        { id: 'blue', name: 'Azul Naval', hex: '#005eff', price: 15 },
        { id: 'green', name: 'Verde Floresta', hex: '#27ae60', price: 15 },
        { id: 'yellow', name: 'Amarelo Sol', hex: '#f1c40f', price: 20 },
        { id: 'red', name: 'Vermelho Rubi', hex: '#e74c3c', price: 30 },
        { id: 'terracota', name: 'Terracota', hex: '#e67e22', price: 18 }
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
    updateSprayPreview(); // Garante que o preview carregue
	
}

function confirmSprayToCart() {
    const modalEl = document.getElementById('sprayConfigModal');
    
    // 1. Tenta encontrar o input selecionado
    const selectedColorInput = modalEl.querySelector('input[name="color"]:checked');
    
    // 2. VERIFICAÇÃO DE SEGURANÇA: Se não houver cor selecionada, avisa o usuário
    if (!selectedColorInput) {
        if (typeof showToast === "function") {
            showToast("⚠️ Por favor, selecione uma cor antes de confirmar!", "danger");
        } else {
            alert("Por favor, selecione uma cor antes de confirmar!");
        }
        
        // Efeito visual de erro na parede para chamar atenção
        const preview = document.getElementById('product-preview-spray');
        if (preview) {
            preview.style.boxShadow = "0 0 20px rgba(220, 53, 69, 0.5)";
            setTimeout(() => preview.style.boxShadow = "15px 10px 25px rgba(0,0,0,0.2)", 1500);
        }
        return; // Interrompe a execução
    }

    if (!tempProduct) return;

    // 3. Recupera os dados da cor e demãos
    const color = selectedColorInput.value;
    const extraPrice = parseFloat(selectedColorInput.getAttribute('data-price-color')) || 0;
    const numDemaos = document.getElementById('spray-demaos')?.value || 1;
	


    // 4. Cria o item para o carrinho
    const item = {
        ...tempProduct,
        id: `spray-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
        name: `${tempProduct.name} - ${color} (${numDemaos} Demãos)`,
        price: tempProduct.price + extraPrice,
        quantity: 1,
        // Guardamos as opções caso queira mostrar no histórico depois
        opcoes: {
            cor: color,
            demaos: numDemaos,
            adicional: extraPrice
        }
    };

    // 5. Adiciona ao carrinho e salva
    cart.push(item);
    if (typeof save === "function") save(); 
    if (typeof updateCartUI === "function") updateCartUI();

    // 6. LÓGICA DE FILA IGUAL PARA TODOS (Fecha o modal e limpa a fila)
    processarFilaConfiguracao(modalEl);
    
    // Limpa os campos do preview para a próxima abertura
    const textLabel = document.getElementById('preview-text-spray');
    const priceLabel = document.getElementById('preview-price-spray');
    if (textLabel) textLabel.innerText = "Selecione uma cor";
    if (priceLabel) priceLabel.style.display = 'none';
}

// Alterna a lanterna entre On/Off
function toggleFlashlight(type) {
    const id = type === 'spray' ? 'flashlight-spray' : 'flashlight-normal';
    const overlay = document.getElementById(id);
    if (overlay) {
        overlay.classList.toggle('flashlight-active');
        
        // Opcional: Feedback no console para debug
        const isActive = overlay.classList.contains('flashlight-active');
        console.log(`Lanterna ${type}: ${isActive ? 'Ativada' : 'Desativada'}`);
    }
}

// Rastreia o mouse apenas quando a lanterna está ativa
document.addEventListener('mousemove', (e) => {
    const overlays = ['flashlight-normal', 'flashlight-spray'];
    
    overlays.forEach(id => {
        const overlay = document.getElementById(id);
        if (overlay && overlay.classList.contains('flashlight-active')) {
            const parent = overlay.parentElement;
            const rect = parent.getBoundingClientRect();
            
            // Posição relativa ao container do preview
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            overlay.style.setProperty('--x', `${x}px`);
            overlay.style.setProperty('--y', `${y}px`);
        }
    });
});

/* ==========================================================================
   6. GESTÃO DO CARRINHO E CHECKOUT
   ========================================================================== */
   

function addToCartSimple(id, quantity = 1) {
    // 1. Busca o produto no array global
    const product = products.find(p => p.id === id);
    if (!product) {
        console.error("Produto não encontrado!");
        return;
    }

    // 2. Gerar um ID único para evitar bugs no carrinho
    const uniqueId = `item-${product.id}-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;

    // 3. Monta o objeto seguindo o seu padrão de chaves
    const itemCarrinho = {
        ...product,
        id: uniqueId,
        productId: product.id, 
        quantity: quantity,
        price: Number(product.price),
        color: 'N/A', 
        texture: 'N/A'
    };

    // 4. Adiciona ao array e salva
    cart.push(itemCarrinho);
    
    // Tenta salvar e atualizar a interface se as funções existirem
    if (typeof save === 'function') save();
    if (typeof updateCartUI === 'function') updateCartUI();
    
    // 5. FEEDBACK VISUAL (Usando seu Toast customizado)
    const toastEl = document.getElementById('itemAddedToast');
    if (toastEl) {
        const nameEl = document.getElementById('toast-item-name');
        const infoEl = document.getElementById('toast-item-info');

        // Define o nome do acessório
        if (nameEl) nameEl.textContent = product.name;
        
        // Define a mensagem de contexto
        if (infoEl) infoEl.textContent = "Acessório adicionado ao carrinho.";

        // Exibe o Toast via Bootstrap
        const bsToast = new bootstrap.Toast(toastEl);
        bsToast.show();
    }
}

/* ==========================================================================
   FUNÇÕES DE LIMPEZA DO CARRINHO
   ========================================================================== */

// 1. Esvaziar todo o carrinho
function clearCart() {
    if (cart.length === 0) return;

    if (confirm("Tem certeza que deseja esvaziar todo o seu carrinho?")) {
        cart = []; // Limpa o array global
        save();    // Atualiza o localStorage
        updateCartUI(); // Atualiza a interface
        
        // Opcional: Feedback visual
        console.log("Carrinho vazio");
    }
}

// 2. Remover todos os itens de um tipo específico (ex: 'massa', 'verniz', 'spray')
function removeItemsByType(tipo) {
    // Filtra o carrinho mantendo apenas o que NÃO for do tipo selecionado
    // Nota: Aqui verificamos se o nome ou a categoria contém a string do tipo
    const cartInicial = cart.length;
    
    cart = cart.filter(item => {
        const nomeItem = item.name.toLowerCase();
        const categoriaItem = (item.category || "").toLowerCase();
        const subItem = (item.sub || "").toLowerCase();
        
        return !nomeItem.includes(tipo.toLowerCase()) && 
               !categoriaItem.includes(tipo.toLowerCase()) &&
               !subItem.includes(tipo.toLowerCase());
    });

    if (cart.length < cartInicial) {
        save();
        updateCartUI();
        // Feedback opcional
        console.log(`Todos os itens do tipo "${tipo}" foram removidos.`);
    }
}


function limparBackdropsTravados() {
    // Remove qualquer elemento de backdrop que tenha sobrado
    const backdrops = document.querySelectorAll('.modal-backdrop');
    backdrops.forEach(b => b.remove());
    
    // Devolve o scroll ao corpo da página (caso tenha ficado travado)
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    document.body.classList.remove('modal-open');
}

function changeQty(id, delta) {
    // Agora o 'id' que vem aqui é algo como "1-Pérola-Lata 18L"
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

function save() {
    // 1. Salva no navegador para não perder ao dar F5
    localStorage.setItem('fixtintas_cart', JSON.stringify(cart));
    
    // 2. Atualiza o número no ícone do carrinho
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.innerText = cart.reduce((acc, i) => acc + i.quantity, 0);
    }
	
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const container = document.getElementById('cart-items-container');
	const btnLimpar = document.getElementById('btnLimparCarrinho');
    if (btnLimpar) {
        // Verifica se existem mais de 5 itens diferentes (linhas no array)
        if (cart.length > 5) {
            btnLimpar.style.display = 'block';
        } else {
            btnLimpar.style.display = 'none';
        }
    }
    const totalElement = document.getElementById('cart-total');
	
	

    if(cartCount) cartCount.innerText = cart.reduce((acc, i) => acc + i.quantity, 0);
    if(!container) return;

    let total = 0;

    // Se o carrinho estiver vazio, exibe o ícone/foto e uma mensagem amigável
		if (cart.length === 0) {
			container.innerHTML = `
				<div class="text-center p-5">
					<img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" 
						 alt="Carrinho Vazio" 
						 style="width: 120px; opacity: 0.6;" 
						 class="mb-4">
					
					<h6 class="fw-bold">Seu carrinho está vazio</h6>
					<p class="text-muted small">Que tal adicionar algumas cores à sua vida?</p>
					
					<button class="btn btn-sm btn-outline-primary mt-3 px-4" data-bs-dismiss="modal">
						Continuar Comprando
					</button>
				</div>`;
		} else {
			container.innerHTML = '';
		}

    cart.forEach(item => {
        total += item.price * item.quantity;
        container.innerHTML += `
            <div class="d-flex align-items-center mb-3 pb-3 border-bottom px-2">
                <div class="flex-grow-1 overflow-hidden">
                    <h6 class="mb-0 fw-bold text-truncate" style="font-size: 0.9rem;">${item.name}</h6>
                    <small class="text-muted">R$ ${item.price.toFixed(2)}</small>
                </div>
                <div class="d-flex align-items-center ms-2">
                    <button class="btn btn-sm btn-outline-secondary px-2" onclick="changeQty('${item.id}', -1)">-</button>
                    <span class="mx-2 fw-bold">${item.quantity}</span>
                    <button class="btn btn-sm btn-outline-secondary px-2" onclick="changeQty('${item.id}', 1)">+</button>
                </div>
            </div>`;
    });

    if(totalElement) totalElement.innerText = `R$ ${total.toFixed(2)}`;
}

function showConfirmation(product) {
    const toastElement = document.getElementById('itemAddedToast');
    
    if (toastElement) {
        // Atualiza o texto com o nome do produto que acabou de ser adicionado
        document.getElementById('toast-item-name').innerText = product.name;
        
        // Formata o preço para o padrão brasileiro
        const precoFormatado = product.price.toLocaleString('pt-BR', { 
            style: 'currency', 
            currency: 'BRL' 
        });
        
        document.getElementById('toast-item-info').innerText = precoFormatado;

        // Dispara o Toast do Bootstrap
        const toast = new bootstrap.Toast(toastElement, { delay: 3000 }); // 3 segundos de exibição
        toast.show();
    }
}

function checkout() {
    // 1. Validações Iniciais
    if (cart.length === 0) {
        showToast("O seu carrinho está vazio!", "danger");
        return;
    }

    const nomeSalvo = localStorage.getItem('usuario_nome');
    const enderecoObj = JSON.parse(localStorage.getItem('usuario_endereco_obj'));

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

    // 2. Formata o endereço
    const enderecoCompleto = `${enderecoObj.rua}, ${enderecoObj.num} ${enderecoObj.comp ? '- ' + enderecoObj.comp : ''} | ${enderecoObj.bairro}, ${enderecoObj.cidade}`;
    localStorage.setItem('usuario_endereco_formatado', enderecoCompleto);

    // 3. Atualiza os textos do modal de confirmação
    const displayEndereco = document.getElementById('displayConfirmEndereco');
    if (displayEndereco) displayEndereco.innerText = enderecoCompleto;

    // 4. Fecha Carrinho e Abre Confirmação
    const cartModalEl = document.getElementById('cartModal');
    if (cartModalEl) bootstrap.Modal.getOrCreateInstance(cartModalEl).hide();

    const confirmModalEl = document.getElementById('confirmAddressModal');
    if (confirmModalEl) {
        const confirmModal = bootstrap.Modal.getOrCreateInstance(confirmModalEl);
        confirmModal.show();
        
        // Garante que o QR Code apareça assim que o modal abrir
		preencherDadosCartao();
        setTimeout(() => {
            togglePaymentDetails();
        }, 200);
    }
}

// ESTA FUNÇÃO FAZ A MÁGICA DE ESCONDER/MOSTRAR
function togglePaymentDetails() {
    const select = document.getElementById('metodoPagamento');
    if (!select) return;

    const metodo = select.value; // Pega o valor (PIX, Cartão ou Boleto)
    
    // Esconde todos
    document.querySelectorAll('.payment-method-detail').forEach(div => {
        div.classList.add('d-none');
    });

    // Mostra o que foi clicado (ex: detalhe-Cartão)
    const area = document.getElementById(`detalhe-${metodo}`);
    if (area) area.classList.remove('d-none');
}

// Monitora a digitação para aplicar máscaras e travas
document.addEventListener('input', (e) => {
    // 1. Travas e Máscara para Número do Cartão
    if (e.target.id === 'cardNum') {
        let v = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
        v = v.replace(/(\d{4})(?=\d)/g, '$1 ');    // Coloca espaço a cada 4 dígitos
        e.target.value = v;
    }

    // 2. Máscara para CPF
    if (e.target.id === 'cardCPF') {
        let v = e.target.value.replace(/\D/g, '');
        v = v.replace(/(\d{3})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        e.target.value = v;
    }

    // 3. Apenas números no CVV
    if (e.target.id === 'cardCVV') {
        e.target.value = e.target.value.replace(/\D/g, '');
    }
});

// Função para preencher o nome automático quando o checkout for chamado
function preencherDadosCartao() {
    const nomeSalvo = localStorage.getItem('usuario_nome');
    const inputNome = document.getElementById('cardName');
    if (inputNome && nomeSalvo) {
        inputNome.value = nomeSalvo.toUpperCase();
    }
}

// Atualize sua função processarCompraFinal para validar os campos
function processarCompraFinal() {
    // 1. Recupera os dados básicos
    const enderecoCompleto = localStorage.getItem('usuario_endereco_formatado') || "Endereço não definido";
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // PEGA O MÉTODO DE PAGAMENTO SELECIONADO
    const selectPgto = document.getElementById('metodoPagamento');
    const metodoPagamento = selectPgto ? selectPgto.value : "Não informado";
    
    if (cart.length === 0) {
        showToast("O carrinho está vazio!", "danger");
        return;
    }

    // ======================================================
    // 2. VALIDAÇÃO ESPECÍFICA PARA CARTÃO DE CRÉDITO
    // ======================================================
    if (metodoPagamento === 'Cartão') {
        const cardNum = document.getElementById('cardNum').value.trim();
        const cardName = document.getElementById('cardName').value.trim();
        const cardCPF = document.getElementById('cardCPF').value.trim();
        const cardCVV = document.getElementById('cardCVV').value.trim();

        // Valida se os campos estão preenchidos e com tamanho correto
        // CardNum com espaços tem 19 caracteres, CPF com pontos tem 14, CVV tem 3
        if (cardNum.length < 19 || cardName === "" || cardCPF.length < 14 || cardCVV.length < 3) {
            showToast("⚠️ Por favor, preencha todos os dados do cartão corretamente.", "danger");
            
            // Destaca campos vazios para o usuário
            if (cardNum.length < 19) document.getElementById('cardNum').classList.add('is-invalid');
            if (cardName === "") document.getElementById('cardName').classList.add('is-invalid');
            if (cardCPF.length < 14) document.getElementById('cardCPF').classList.add('is-invalid');
            if (cardCVV.length < 3) document.getElementById('cardCVV').classList.add('is-invalid');
            
            return; // PARA A EXECUÇÃO AQUI
        }
    }

    // ======================================================
    // 3. CRIAÇÃO DO OBJETO DO PEDIDO
    // ======================================================
    const novoPedido = {
        id: Math.floor(Math.random() * 9000) + 1000,
        data: new Date().toLocaleDateString('pt-BR'),
        itens: [...cart],
        total: total,
        endereco: enderecoCompleto,
        pagamento: metodoPagamento
    };

    // 4. Salva no Histórico do LocalStorage
    let historico = JSON.parse(localStorage.getItem('fixtintas_orders')) || [];
    historico.unshift(novoPedido);
    localStorage.setItem('fixtintas_orders', JSON.stringify(historico));

    // 5. Prepara a mensagem de sucesso
    const resumoItensHtml = cart.map(item => `- ${item.name} (x${item.quantity})`).join('<br>');
    const totalFormatado = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    const mensagemSucesso = `
        <strong>✅ PEDIDO REALIZADO COM SUCESSO!</strong><br><br>
        <strong>Número:</strong> #${novoPedido.id}<br>
        <strong>Forma de Pagamento:</strong> ${metodoPagamento}<br>
        <strong>Itens:</strong><br>${resumoItensHtml}<br>
        <strong>Total:</strong> ${totalFormatado}<br><br>
        <strong>Entrega em:</strong><br>${enderecoCompleto}
    `;

    // 6. FECHAR O MODAL E LIMPAR INTERFACE
    const modalConfirm = document.getElementById('confirmAddressModal');
    if (modalConfirm) {
        const instancia = bootstrap.Modal.getInstance(modalConfirm);
        if(instancia) instancia.hide();
        
        // Remove resquícios do modal
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) backdrop.remove();
        document.body.classList.remove('modal-open');
        document.body.style.paddingRight = '';
    }

    // Limpa a URL de forma amigável
    try {
        const url = new URL(window.location);
        url.searchParams.delete('aba');
        window.history.pushState({}, '', url);
    } catch (e) { console.warn("URL não pôde ser limpa."); }

    // 7. EXIBIÇÃO FINAL E LIMPEZA
    showToast(mensagemSucesso, "success", true);

    // Limpa o carrinho global e o storage
    cart = [];
    localStorage.setItem('fixtintas_cart', JSON.stringify(cart));
    
    // Atualiza a interface (contador, lista do carrinho, etc)
    if (typeof updateCartUI === "function") updateCartUI();
    if (typeof renderOrdersProfile === "function") renderOrdersProfile();
}

function confirmAddToCart(isBulk = false) {
    const selectedColorInput = document.querySelector('input[name="color"]:checked');
    const textureSelect = document.getElementById('selectTexture');
    const sizeSelect = document.getElementById('selectSize');
    if (!selectedColorInput || !tempProduct) return;

    const color = selectedColorInput.value;
    const texture = textureSelect ? textureSelect.value : 'Fosco';

    // Calcula os adicionais de cor, textura e tamanho
    const colorPrice   = Number(selectedColorInput.getAttribute('data-price-color')) || 0;
    const texturePrice = textureSelect ? Number(textureSelect.options[textureSelect.selectedIndex].getAttribute('data-price-texture')) || 0 : 0;
    const sizePrice    = sizeSelect    ? Number(sizeSelect.options[sizeSelect.selectedIndex].getAttribute('data-price-add'))          || 0 : 0;
    const finalPrice   = Number(tempProduct.price) + colorPrice + texturePrice + sizePrice;

    const sizeName = sizeSelect ? sizeSelect.value : 'Padrão';

    // Criar ID único para esta unidade específica
    const uniqueId = `${tempProduct.id}-${color}-${texture}-${Math.random().toString(36).substr(2, 5)}`;

    const configuredProduct = {
        ...tempProduct,
        id: uniqueId,
        name: `${tempProduct.name} (${color} - ${texture} - ${sizeName})`,
        price: finalPrice,   // ← CORRIGIDO: agora soma todos os adicionais
        quantity: 1
    };

    cart.push(configuredProduct);
    save();

    if (!isBulk) {
        showConfirmation(configuredProduct);
        
        // Fecha o modal atual
        const modalEl = document.getElementById('productConfigModal');
        const modalInstance = bootstrap.Modal.getInstance(modalEl);
        if (modalInstance) modalInstance.hide();

        // Gerenciamento da Fila (O segredo está aqui)
        let pending = parseInt(sessionStorage.getItem('pending_configs')) || 1;
        pending--; // Decrementa a unidade que acabamos de salvar

        if (pending > 0) {
            // Se ainda restam itens, atualiza o storage e reabre após o fechamento do anterior
            sessionStorage.setItem('pending_configs', pending);
            modalEl.addEventListener('hidden.bs.modal', () => {
                openConfigModal(tempProduct.id);
            }, { once: true });
        } else {
            // Se chegou a zero, limpa tudo e não reabre
            sessionStorage.removeItem('pending_configs');
            sessionStorage.removeItem('total_to_configure');
            limparBackdropsTravados(); // Garante que a tela não fique escura
        }
    }
}

// Esta função é chamada apenas quando o usuário clica no botão "Confirmar" do novo modal
function processarFilaConfiguracao(modalEl) {
    // 1. Decrementa
    let pending = parseInt(sessionStorage.getItem('pending_configs')) || 1;
    pending--;
    sessionStorage.setItem('pending_configs', pending);

    // 2. Fecha o modal atual
    const modalInstance = bootstrap.Modal.getInstance(modalEl);
    if (modalInstance) modalInstance.hide();

    // 3. Verifica se continua ou para
    modalEl.addEventListener('hidden.bs.modal', function handler() {
        modalEl.removeEventListener('hidden.bs.modal', handler);

        if (pending > 0) {
            // Ainda tem itens? Abre a configuração de novo
            openConfigModal(tempProduct.id);
			} else {
						// Acabou? Limpa tudo
						sessionStorage.removeItem('pending_configs');
						sessionStorage.removeItem('total_to_configure');
						
						document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
						document.body.classList.remove('modal-open');
						document.body.style.overflow = '';
						
						// --- LÓGICA DO TOAST ---
						const toastEl = document.getElementById('itemAddedToast');
						if (toastEl) {
							const nameEl = document.getElementById('toast-item-name');
							const infoEl = document.getElementById('toast-item-info');
							const toastBody = toastEl.querySelector('.toast-body');

							// 1. Atualiza o nome no strong
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


function showCart() {
    // 1. Atualiza a URL com o parâmetro de forma limpa
    const url = new URL(window.location);
    url.searchParams.set('aba', 'carrinho');
    window.history.pushState({}, '', url);

    // 2. Chama a sua função que já existe para desenhar os itens
    updateCartUI();

    // 3. Abre o modal manualmente
    const cartModalEl = document.getElementById('cartModal');
    const cartModal = bootstrap.Modal.getOrCreateInstance(cartModalEl);
    cartModal.show();

    // 4. Limpa a URL quando o usuário fechar o modal (no X ou fora dele)
    cartModalEl.addEventListener('hidden.bs.modal', () => {
        const cleanUrl = new URL(window.location);
        cleanUrl.searchParams.delete('aba');
        window.history.pushState({}, '', cleanUrl);
    }, { once: true });
}


function calcularPrecoConfigurado() {
    if (!tempProduct) return 0;

    const selectedColorInput = document.querySelector('input[name="color"]:checked');
    const textureSelect = document.getElementById('selectTexture');
    const sizeSelect = document.getElementById('selectSize');

    // Se ainda não selecionou cor, retorna apenas o preço base
    const colorPrice = selectedColorInput ? Number(selectedColorInput.getAttribute('data-price-color')) || 0 : 0;
    
    const texturePrice = textureSelect ? Number(textureSelect.options[textureSelect.selectedIndex].getAttribute('data-price-texture')) || 0 : 0;
    
    const sizePrice = sizeSelect ? Number(sizeSelect.options[sizeSelect.selectedIndex].getAttribute('data-price-add')) || 0 : 0;

    return Number(tempProduct.price) + colorPrice + texturePrice + sizePrice;
}
function atualizarSubtotalModal() {
    if (!tempProduct) return;

    // Busca o select que está dentro do modal VISÍVEL no momento
    const modalVisivel = document.querySelector('.modal.show');
    if (!modalVisivel) return;

    const selectSize = modalVisivel.querySelector('#selectSize, #selectSizeOnly');
    const display = modalVisivel.querySelector('#modalSubtotal, #modalProductPriceOnly');

    if (!selectSize || !display) return;

    // 1. Pega o preço base (que você confirmou ser 50)
    let precoBase = parseFloat(tempProduct.price) || 0;

    // 2. Pega o ajuste do tamanho
    const selectedOption = selectSize.options[selectSize.selectedIndex];
    // IMPORTANTE: Number() ou parseFloat() aqui é vital para tratar números negativos como o -15
    const ajusteTamanho = Number(selectedOption.getAttribute('data-price-add')) || 0;

    // 3. Pega ajustes extras (Cor e Textura)
    let ajusteExtras = 0;
    
    // Cor
    const radioCor = modalVisivel.querySelector('input[name="color"]:checked');
    if (radioCor) {
        ajusteExtras += Number(radioCor.getAttribute('data-price-color')) || 0;
    }

    // Textura
    const selectTex = modalVisivel.querySelector('#selectTexture');
    if (selectTex) {
        ajusteExtras += Number(selectTex.options[selectTex.selectedIndex].getAttribute('data-price-texture')) || 0;
    }

    // 4. CÁLCULO FINAL
    const valorFinal = precoBase + ajusteTamanho + ajusteExtras;

    // 5. ATUALIZA A TELA
    display.textContent = valorFinal.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
    
console.log(`Cálculo: Base(${precoBase}) + Tam(${ajusteTamanho}) + Extras(${ajusteExtras}) = ${valorFinal}`);
} 

/* ==========================================================================
   7. FAVORITOS E HISTÓRICO DE PEDIDOS
   ========================================================================== */
function toggleFavorite(id, event) {
    if(event) event.stopPropagation();
    let favorites = JSON.parse(localStorage.getItem('fixtintas_favorites')) || [];
    const index = favorites.indexOf(id);
    if (index > -1) { favorites.splice(index, 1); } 
    else { favorites.push(id); }
    localStorage.setItem('fixtintas_favorites', JSON.stringify(favorites));
    renderProducts(products);
    renderFavoritesProfile();
    renderOrdersProfile();
}

function renderFavoritesProfile() {
    const favContainer = document.getElementById('favorites-list');
    if (!favContainer) return;
    const favorites = JSON.parse(localStorage.getItem('fixtintas_favorites')) || [];
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

function renderOrdersProfile() {
    const ordersContainer = document.getElementById('orders-list');
    if (!ordersContainer) return;
    const pedidosBrutos = localStorage.getItem('fixtintas_orders');
    const pedidos = pedidosBrutos ? JSON.parse(pedidosBrutos) : [];

    if (pedidos.length === 0) {
        ordersContainer.innerHTML = '<p class="text-muted small text-center py-2 mb-0">Você ainda não fez pedidos.</p>';
        return;
    }
    
    ordersContainer.innerHTML = pedidos.map(p => `
        <div class="bg-white p-2 rounded shadow-sm mb-2 border-start border-primary border-4 text-dark">
            <div class="d-flex justify-content-between align-items-center">
                <span class="fw-bold" style="font-size: 0.75rem;">Pedido #${p.id}</span>
                <span class="text-muted" style="font-size: 0.65rem;">${p.data}</span>
            </div>
            
            <div class="small text-muted my-1" style="font-size: 0.7rem; line-height: 1.2;">
                ${p.itens.map(i => `${i.quantity}x ${i.name}`).join('<br>')}
            </div>

            <div class="small mb-1" style="font-size: 0.7rem;">
                <i class="fas fa-credit-card me-1 text-muted"></i>
                <strong>Pagamento:</strong> ${p.pagamento || 'Não informado'}
            </div>

            <div class="fw-bold text-primary" style="font-size: 0.8rem;">Total: R$ ${p.total.toFixed(2)}</div>
        </div>
    `).join('');
}

function handleProfileClick() {
    // 1. Define a URL com o parâmetro
    const url = new URL(window.location);
    url.searchParams.set('aba', 'perfil');
    window.history.pushState({}, '', url);

    // 2. Verifica se o usuário está logado para saber qual modal abrir
    const nomeSalvo = localStorage.getItem('usuario_nome');
    let modalId = nomeSalvo ? 'minhaContaModal' : 'loginModal';
    
    // 3. Abre o modal correspondente
    const modalEl = document.getElementById(modalId);
    const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
    modalInstance.show();

    // 4. Limpa a URL quando o modal for fechado
    modalEl.addEventListener('hidden.bs.modal', () => {
        const cleanUrl = new URL(window.location);
        cleanUrl.searchParams.delete('aba');
        window.history.pushState({}, '', cleanUrl);
    }, { once: true });
}

/* ==========================================================================
   8. CALCULADORA
   ========================================================================== */

function calcularTinta() {
    const largura = parseFloat(document.getElementById('calcLargura').value);
    const altura = parseFloat(document.getElementById('calcAltura').value);
    const resultadoDiv = document.getElementById('resultadoCalc');
    const textoResultado = document.getElementById('textoResultado');

    if (!largura || !altura || largura <= 0 || altura <= 0) {
        showToast(`Por favor, insira valores válidos para largura e altura.`, 'danger');
        return;
    }

    // 1. Calcula a área total (m²)
    const area = largura * altura;
    
    // 2. Consideramos 2 demãos (multiplica a área por 2)
    const areaTotalDemao = area * 2;
    
    // 3. Rendimento médio: 1 litro pinta 10m² por demão
    const litrosNecessarios = areaTotalDemao / 10;

    let recomendacao = "";

    // 4. Lógica de recomendação de embalagem
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
        recomendacao = `Você precisa de aproximadamente ${latas18} Lata(s) de 18L.`;
    }

    // Exibe o resultado
    textoResultado.innerHTML = `Sua parede tem <strong>${area.toFixed(2)}m²</strong>.<br>${recomendacao}`;
    resultadoDiv.classList.remove('d-none');
}

/* ==========================================================================
   9. MENSAGEM EM TOAST
   ========================================================================== */

function showToast(message, type = 'success', isFixed = false) {
    const toastEl = document.getElementById('globalToast');
    const messageEl = document.getElementById('globalToastMessage');
    
    if (!toastEl || !messageEl) return;

    toastEl.classList.remove('bg-success', 'bg-danger', 'bg-warning', 'bg-primary');
    toastEl.classList.add(`bg-${type}`);
    
    messageEl.innerHTML = message;
    
    // Se isFixed for true, autohide será false. Caso contrário, dura 3 segundos.
    const toast = new bootstrap.Toast(toastEl, { 
        autohide: !isFixed, 
        delay: 3000 
    });
    
    toast.show();
}

/* ==========================================================================
   10. MENU FECHAR NO CELULAR
   ========================================================================== */

// Função auxiliar para fechar o menu mobile
function fecharMenuMobile() {
    // Para Navbar padrão (Collapse)
    const navbarCollapse = document.querySelector('.navbar-collapse.show');
    if (navbarCollapse) {
        new bootstrap.Collapse(navbarCollapse).hide();
    }

    // Para Menu Lateral (Offcanvas)
    const offcanvasEl = document.querySelector('.offcanvas.show');
    if (offcanvasEl) {
        const instance = bootstrap.Offcanvas.getInstance(offcanvasEl);
        if (instance) instance.hide();
    }
}


/* ==========================================================================
   SISTEMA DE BUSCA (PESQUISA)
   ========================================================================== */


// Função para remover acentos e transformar em minúsculas
function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""); // Remove os "pedacinhos" dos acentos
}


/* ==========================================================================
   MODO ESCURO
   ========================================================================== */

// --- 1. Lógica do Modo Escuro ---
function toggleDarkMode() {
    const body = document.body;
    const icon = document.getElementById('dark-mode-icon');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

// Verificar preferência salva ao carregar
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('dark-mode-icon')?.classList.replace('fa-moon', 'fa-sun');
}

/* ==========================================================================
   SUGESTÕES
   ========================================================================== */
function renderizarSugestoes(produtoAtual, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = ''; 

    // Se o produto não tiver sugestões, mostra mensagem amigável
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


