/* ==========================================================================
   1. BANCO DE DADOS E VARIÁVEIS GLOBAIS
   ========================================================================== */
const products = [
    // --- TINTAS INTERIOR ---
    { id: 1, name: "Tinta Premium Acrílica", category: "interior", sub: "acrilica", brand: "suvinil", price: 50.0, desc: "Alta cobertura, lavável e rendimento superior.", img: "https://placehold.co/400x400/005eff/fff?text=Suvinil+Premium" },
    { id: 2, name: "Tinta Acrílica Fosca", category: "interior", sub: "acrilica", brand: "coral", price: 65.0, desc: "Ideal para disfarçar imperfeições em salas e quartos.", img: "https://placehold.co/400x400/005eff/fff?text=Coral+Fosca" },
    { id: 3, name: "Látex Standard", category: "interior", sub: "latex", brand: "suvinil", price: 42.0, desc: "Excelente custo-benefício para tetos e áreas secas.", img: "https://placehold.co/400x400/005eff/fff?text=Latex+Standard" },
    { id: 4, name: "Tinta Toque de Seda", category: "interior", sub: "fosca", brand: "sherwin", price: 58.0, desc: "Acabamento acetinado com toque aveludado fino.", img: "https://placehold.co/400x400/005eff/fff?text=Toque+Seda" },
    { id: 23, name: "Tinta Direto no Gesso", category: "interior", sub: "latex", brand: "coral", price: 48.0, desc: "Não precisa de fundo, fixa direto na placa de gesso.", img: "https://placehold.co/400x400/005eff/fff?text=Gesso+Coral" },

    // --- TINTAS EXTERIOR ---
    { id: 5, name: "Tinta Acrílica Emborrachada", category: "exterior", sub: "acrilica-ext", brand: "coral", price: 80.0, desc: "Acompanha a dilatação da parede, evitando microfissuras.", img: "https://placehold.co/400x400/005eff/fff?text=Emborrachada" },
    { id: 6, name: "Impermeabilizante Fachada", category: "exterior", sub: "impermeavel", brand: "sherwin", price: 120.0, desc: "Proteção máxima contra infiltrações e batida de chuva.", img: "https://placehold.co/400x400/005eff/fff?text=Impermeavel" },
    { id: 17, name: "Textura Rústica", category: "exterior", sub: "acrilica-ext", brand: "suvinil", price: 85.0, desc: "Efeito riscado decorativo de alta resistência.", img: "https://placehold.co/400x400/005eff/fff?text=Textura+Rustica" },
    { id: 24, name: "Tinta para Pisos", category: "exterior", sub: "acrilica-ext", brand: "suvinil", price: 72.0, desc: "Alta resistência a tráfego de pessoas e carros.", img: "https://placehold.co/400x400/005eff/fff?text=Piso+Resistente" },

    // --- MÓVEIS E MADEIRAS ---
    { id: 7, name: "Esmalte Sintético Premium", category: "moveis", sub: "esmalte", brand: "suvinil", price: 45.0, desc: "Máxima durabilidade para madeiras, portas e metais.", img: "https://placehold.co/400x400/005eff/fff?text=Esmalte+Luxo" },
    { id: 8, name: "Verniz Marítimo", category: "moveis", sub: "verniz", brand: "coral", price: 70.0, desc: "Proteção UV e contra maresia para ambientes externos.", img: "https://placehold.co/400x400/005eff/fff?text=Verniz+Maritimo" },
    { id: 18, name: "Stain Impregnante", category: "moveis", sub: "verniz", brand: "sherwin", price: 78.0, desc: "Não descasca, protege a madeira de dentro para fora.", img: "https://placehold.co/400x400/005eff/fff?text=Stain+Madeira" },
    { id: 25, name: "Tinta Spray Multiuso", category: "moveis", sub: "esmalte", brand: "sherwin", price: 25.0, desc: "Secagem rápida para pequenos reparos e artesanato.", img: "https://placehold.co/400x400/005eff/fff?text=Spray+Sherwin" },

    // --- ESPECIAIS ---
    { id: 9, name: "Tinta Epóxi Base Água", category: "especial", sub: "epoxi", brand: "suvinil", price: 155.0, desc: "Resistência extrema para pisos, banheiros e cozinhas.", img: "https://placehold.co/400x400/005eff/fff?text=Epoxi+Agua" },
    { id: 10, name: "Tinta Térmica Refletiva", category: "especial", sub: "termica", brand: "sherwin", price: 210.0, desc: "Reduz a temperatura interna e economiza energia.", img: "https://placehold.co/400x400/005eff/fff?text=Tinta+Termica" },
    { id: 26, name: "Esmalte Vitrificado", category: "especial", sub: "epoxi", brand: "coral", price: 180.0, desc: "Acabamento de alto brilho que parece vidro.", img: "https://placehold.co/400x400/005eff/fff?text=Vitrificar" },

    // --- PREPARAÇÃO (MASSAS E SELADORES) ---
    { id: 19, name: "Massa Corrida", category: "interior", sub: "acrilica", brand: "suvinil", price: 35.0, desc: "Fácil de lixar, ideal para nivelar paredes internas.", img: "https://placehold.co/400x400/005eff/fff?text=Massa+Corrida" },
    { id: 20, name: "Selador Acrílico", category: "interior", sub: "acrilica", brand: "coral", price: 38.0, desc: "Uniformiza a absorção da parede, economizando tinta.", img: "https://placehold.co/400x400/005eff/fff?text=Selador" },
    { id: 27, name: "Massa Acrílica (Externa)", category: "exterior", sub: "acrilica-ext", brand: "suvinil", price: 45.0, desc: "Resistente à umidade, perfeita para fachadas.", img: "https://placehold.co/400x400/005eff/fff?text=Massa+Acrilica" },

    // --- FERRAMENTAS ---
    { id: 11, name: "Rolo de Lã Antirespingo", category: "ferramentas", sub: "rolos", brand: "atlas", price: 28.0, desc: "Pintura limpa e uniforme para superfícies lisas.", img: "https://placehold.co/400x400/005eff/fff?text=Rolo+Atlas" },
    { id: 12, name: "Trincha Pro de Cerdas", category: "ferramentas", sub: "pinceis", brand: "tigre", price: 12.5, desc: "Cerdas sintéticas para acabamentos e recortes.", img: "https://placehold.co/400x400/005eff/fff?text=Pincel+Tigre" },
    { id: 13, name: "Bandeja para Pintura G", category: "ferramentas", sub: "bandejas", brand: "atlas", price: 15.0, desc: "Capacidade para 2 litros, bico escorredor.", img: "https://placehold.co/400x400/005eff/fff?text=Bandeja+G" },
    { id: 21, name: "Espátula de Aço Inox", category: "ferramentas", sub: "pinceis", brand: "tigre", price: 18.0, desc: "Para aplicação de massas e remoção de resíduos.", img: "https://placehold.co/400x400/005eff/fff?text=Espatula+Inox" },
    { id: 28, name: "Desempenadeira de Aço", category: "ferramentas", sub: "bandejas", brand: "atlas", price: 32.0, desc: "Ideal para aplicar massa corrida e texturas.", img: "https://placehold.co/400x400/005eff/fff?text=Desempenadeira" },

    // --- ACESSÓRIOS E PROTEÇÃO ---
    { id: 14, name: "Fita Crepe Azul UV", category: "acessorios", sub: "fitas", brand: "3m", price: 15.9, desc: "Resistente ao sol, não deixa cola por até 14 dias.", img: "https://placehold.co/400x400/005eff/fff?text=Fita+Azul+3M" },
    { id: 15, name: "Kit Lixas Grão Variado", category: "acessorios", sub: "lixas", brand: "norton", price: 8.5, desc: "Pack com 5 unidades para diversos acabamentos.", img: "https://placehold.co/400x400/005eff/fff?text=Kit+Lixas" },
    { id: 16, name: "Extensor Telescópico", category: "acessorios", sub: "extensores", brand: "atlas", price: 35.0, desc: "Estrutura leve de alumínio reforçado.", img: "https://placehold.co/400x400/005eff/fff?text=Extensor" },
    { id: 22, name: "Aguarrás Mineral 900ml", category: "acessorios", sub: "fitas", brand: "suvinil", price: 22.0, desc: "Solvente ideal para diluir esmaltes e limpar ferramentas.", img: "https://placehold.co/400x400/005eff/fff?text=Aguarras" },
    { id: 29, name: "Lona Plástica 4x4m", category: "acessorios", sub: "fitas", brand: "3m", price: 12.0, desc: "Proteção de móveis e pisos contra respingos.", img: "https://placehold.co/400x400/005eff/fff?text=Lona+Protecao" },
    { id: 30, name: "Máscara Respiratória PFF2", category: "acessorios", sub: "extensores", brand: "norton", price: 7.5, desc: "Proteção contra poeira de lixamento e odores.", img: "https://placehold.co/400x400/005eff/fff?text=Mascara+EPI" }
];

let cart = JSON.parse(localStorage.getItem('fixtintas_cart')) || [];
let tempProduct = null;

/* ==========================================================================
   2. INICIALIZAÇÃO (DOMContentLoaded)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    updateCartUI();
    renderFavoritesProfile();
    renderOrdersProfile();
    checkLoginPersistence(); 
	loadAddressFields();

    // Listener do Modal de Configuração
    const configModalEl = document.getElementById('productConfigModal');
    if (configModalEl) {
        configModalEl.addEventListener('change', (e) => {
            if (e.target.name === 'color' || e.target.id === 'selectTexture') {
                updatePreview();
            }
        });
    }

    // Lógica do Menu Lateral (Submenus)
    const menuItems = document.querySelectorAll('.dropdown-side');
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (e.target.tagName === 'LI' && !e.target.classList.contains('dropdown-side')) {
                return;
            }
            e.stopPropagation();
            const isActive = this.classList.contains('active');
            menuItems.forEach(el => el.classList.remove('active'));
            if (!isActive) {
                this.classList.add('active');
            }
        });
    });
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
    const favorites = JSON.parse(localStorage.getItem('fixtintas_favorites')) || [];

    container.innerHTML = items.map(p => {
        const isFav = favorites.includes(p.id);
        return `
        <div class="col-12 col-sm-6 col-lg-4 mb-4">
            <div class="card product-card h-100 shadow-sm border-0">
                <div class="position-relative">
                    <img src="${p.img}" class="card-img-top img-fluid" alt="${p.name}">
                    <span class="badge bg-warning text-dark position-absolute top-0 end-0 m-2 text-uppercase">${p.brand}</span>
                    <button onclick="toggleFavorite(${p.id}, event)" class="btn-favorite" title="Favoritar">
                        <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                </div>
                <div class="card-body d-flex flex-column p-3">
                    <h5 class="fw-bold mb-1 h6 text-truncate">${p.name}</h5>
                    <p class="text-muted small mb-3" style="height: 40px; overflow: hidden;">${p.desc}</p>
                    <div class="mt-auto d-flex align-items-center justify-content-between">
                        <h5 class="text-primary fw-bold mb-0">R$ ${p.price.toFixed(2)}</h5>
                        <button onclick="openConfigModal(${p.id})" class="btn btn-primary btn-sm px-3 fw-bold">
                           <i class="fas fa-plus me-1"></i> ADICIONAR
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

/* ==========================================================================
   5. CONFIGURAÇÃO DE PRODUTO E PREVIEW
   ========================================================================== */
function openConfigModal(id) {
    const product = products.find(p => p.id == id);
    if (!product) return;
    const categoriasSimples = ['ferramentas', 'acessorios'];

    if (categoriasSimples.includes(product.category)) {
        addToCartSimple(product);
    } else {
        tempProduct = product;
        document.getElementById('modalProductName').innerText = tempProduct.name;
        const firstColor = document.querySelector('input[name="color"]');
        if(firstColor) firstColor.checked = true;
        new bootstrap.Modal(document.getElementById('productConfigModal')).show();
        setTimeout(updatePreview, 200);
    }
}

function updatePreview() {
    const selectedColorInput = document.querySelector('input[name="color"]:checked');
    const textureSelect = document.getElementById('selectTexture');
    const previewBox = document.getElementById('product-preview');
    const previewText = document.getElementById('preview-text');

    if (!selectedColorInput || !previewBox || !textureSelect) return;

    const colorHex = selectedColorInput.nextElementSibling.style.background;
    const colorName = selectedColorInput.value;
    const texture = textureSelect.value;
    
    // Reseta estilos de efeitos anteriores
    previewBox.style.backgroundColor = colorHex;
    previewBox.style.backgroundImage = "none";
    previewBox.style.boxShadow = "none";
    previewBox.style.filter = "none";

    // Aplica lógica visual baseada no acabamento
    if (texture === "Fosco") {
        previewBox.style.filter = "contrast(0.9)";
    } 
    else if (texture === "Acetinado") {
        previewBox.style.boxShadow = "inset -10px -10px 30px rgba(255,255,255,0.2)";
    } 
    else if (texture === "Semibrilho") {
        previewBox.style.boxShadow = "inset -15px -15px 40px rgba(255,255,255,0.5), 0 0 10px rgba(255,255,255,0.2)";
    } 
    else if (texture === "Cimento Queimado") {
        // Cria um efeito manchado usando gradiente radial
        previewBox.style.backgroundImage = `radial-gradient(circle, rgba(0,0,0,0.1) 10%, transparent 80%), 
                                            radial-gradient(circle, rgba(0,0,0,0.05) 30%, transparent 70%)`;
        previewBox.style.filter = "grayscale(0.2) contrast(1.1)";
    } 
    else if (texture === "Metalizado") {
        previewBox.style.backgroundImage = "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)";
        previewBox.style.boxShadow = "0 0 15px rgba(255,255,255,0.3)";
    }

    previewText.innerText = `${colorName} - ${texture}`;
}

/* ==========================================================================
   6. GESTÃO DO CARRINHO E CHECKOUT
   ========================================================================== */
function addToCartSimple(product) {
    const itemInCart = cart.find(i => i.id === product.id);
    if (itemInCart) { itemInCart.quantity++; } 
    else { cart.push({ ...product, quantity: 1 }); }
    save();
    showConfirmation(product);
}

function confirmAddToCart() {
    const selectedColorInput = document.querySelector('input[name="color"]:checked');
    const color = selectedColorInput.value;
    const colorPriceAdd = parseFloat(selectedColorInput.getAttribute('data-price-color')) || 0;
    const sizeOption = document.getElementById('selectSize').selectedOptions[0];
    const size = sizeOption.value;
    const sizePriceAdd = parseFloat(sizeOption.getAttribute('data-price-add')) || 0;
    const texture = document.getElementById('selectTexture').value;
    const finalPrice = tempProduct.price + colorPriceAdd + sizePriceAdd;

    const configuredProduct = {
        ...tempProduct,
        id: `${tempProduct.id}-${color}-${texture}-${size}`,
        name: `${tempProduct.name} (${color} - ${texture} - ${size})`,
        price: finalPrice,
        quantity: 1
    };

    const itemInCart = cart.find(i => i.id === configuredProduct.id);
    if (itemInCart) { itemInCart.quantity++; } 
    else { cart.push(configuredProduct); }

    save();
    showConfirmation(configuredProduct);
    bootstrap.Modal.getInstance(document.getElementById('productConfigModal')).hide();
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id == id); 
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) { cart = cart.filter(i => i.id != id); }
        save();
    }
}

function save() {
    localStorage.setItem('fixtintas_cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const container = document.getElementById('cart-items-container');
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
    // Pegamos o objeto completo do endereço
    const enderecoObj = JSON.parse(localStorage.getItem('usuario_endereco_obj'));

    if (!nomeSalvo) {
        showToast("Você precisa fazer login para finalizar.", "warning");
        new bootstrap.Modal(document.getElementById('loginModal')).show();
        return;
    }

    if (!enderecoObj || !enderecoObj.rua) {
        showToast("É necessário cadastrar um endereço completo.", "warning");
        new bootstrap.Modal(document.getElementById('minhaContaModal')).show();
        return;
    }

    // 2. Formata o endereço completo para exibição
    const enderecoCompleto = `${enderecoObj.rua}, ${enderecoObj.num} ${enderecoObj.comp ? '- ' + enderecoObj.comp : ''} | ${enderecoObj.bairro}, ${enderecoObj.cidade}`;
    
    // Salva essa versão formatada temporariamente para usar na finalização
    localStorage.setItem('usuario_endereco_formatado', enderecoCompleto);

    // 3. Mostra no Modal de Confirmação
    document.getElementById('displayConfirmEndereco').innerText = enderecoCompleto;
    
    // Fecha o carrinho e abre a confirmação
    const cartModalEl = document.getElementById('cartModal');
    if(cartModalEl) bootstrap.Modal.getInstance(cartModalEl)?.hide();

    const confirmModal = new bootstrap.Modal(document.getElementById('confirmAddressModal'));
    confirmModal.show();
}

// Esta função é chamada apenas quando o usuário clica no botão "Confirmar" do novo modal
function processarCompraFinal() {
    // 1. Recupera os dados
    const enderecoCompleto = localStorage.getItem('usuario_endereco_formatado');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // 2. Cria o objeto do pedido
    const novoPedido = {
        id: Math.floor(Math.random() * 9000) + 1000,
        data: new Date().toLocaleDateString('pt-BR'),
        itens: [...cart],
        total: total,
        endereco: enderecoCompleto
    };

    // 3. Salva no Histórico
    let historico = JSON.parse(localStorage.getItem('fixtintas_orders')) || [];
    historico.unshift(novoPedido);
    localStorage.setItem('fixtintas_orders', JSON.stringify(historico));

    // 4. Prepara a mensagem (HTML) para o Toast
    const resumoItensHtml = cart.map(item => `- ${item.name} (x${item.quantity})`).join('<br>');
    const totalFormatado = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    const mensagemSucesso = `
        <strong>✅ PEDIDO REALIZADO COM SUCESSO!</strong><br><br>
        <strong>Número:</strong> #${novoPedido.id}<br>
        <strong>Itens:</strong><br>${resumoItensHtml}<br>
        <strong>Total:</strong> ${totalFormatado}<br><br>
        <strong>Entrega em:</strong><br>${enderecoCompleto}
    `;

    // 5. FECHAR O MODAL (Aqui pode estar o erro, vamos forçar a busca)
    const modalConfirm = document.getElementById('confirmAddressModal');
    if (modalConfirm) {
        const instancia = bootstrap.Modal.getInstance(modalConfirm) || new bootstrap.Modal(modalConfirm);
        instancia.hide();
    }

    // 6. Mostra o Toast Fixo (verifique se sua showToast aceita o 3º parâmetro como true)
    showToast(mensagemSucesso, "success", true);

    // 7. Limpa carrinho e atualiza tudo
    cart = [];
    localStorage.setItem('fixtintas_cart', JSON.stringify(cart)); // Garante a limpeza no banco
    updateCartUI();
    renderOrdersProfile();
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
            <div class="fw-bold text-primary" style="font-size: 0.8rem;">Total: R$ ${p.total.toFixed(2)}</div>
        </div>
    `).join('');
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

// Agora aplicamos essa função aos seus botões específicos
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Ao clicar no botão do Carrinho (o ícone azul da sua imagem)
    const btnCarrinho = document.querySelector('[data-bs-target="#cartModal"], [data-bs-target="#offcanvasCart"]');
    btnCarrinho?.addEventListener('click', fecharMenuMobile);

    // 2. Ao clicar no botão de Login/Conta (o ícone amarelo)
    const btnLogin = document.getElementById('btnLoginHeader');
    btnLogin?.addEventListener('click', fecharMenuMobile);

    // 3. Ao clicar no item "Calculadora" do menu
    const btnCalc = document.querySelector('.nav-link[onclick*="calcular"], [data-bs-target="#modalCalculadora"]');
    // Se for um link simples que apenas rola a tela:
    const linkCalculadora = document.querySelector('a[href*="calc"]'); 
    
    [btnCalc, linkCalculadora].forEach(el => {
        el?.addEventListener('click', fecharMenuMobile);
    });

});

/* ==========================================================================
   SISTEMA DE BUSCA (PESQUISA)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const inputBusca = document.getElementById('inputBusca');
    const formBusca = document.getElementById('formBusca');

    if (inputBusca) {
        inputBusca.addEventListener('input', (e) => {
            // Normaliza o termo digitado pelo usuário
            const termo = normalizarTexto(e.target.value);
            
            const filtrados = products.filter(p => {
                // Normaliza o nome e a marca do produto para comparar
                const nomeProd = normalizarTexto(p.name);
                const marcaProd = normalizarTexto(p.brand);
                
                return nomeProd.includes(termo) || marcaProd.includes(termo);
            });

            renderProducts(filtrados);

            const container = document.getElementById('product-list');
            if (filtrados.length === 0 && container) {
                container.innerHTML = `
                    <div class="col-12 text-center my-5">
                        <p class="text-muted">Nenhum produto encontrado para "${e.target.value}"</p>
                    </div>`;
            }
        });
    }

    if (formBusca) {
        formBusca.addEventListener('submit', (e) => e.preventDefault());
    }
});

// Função para remover acentos e transformar em minúsculas
function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""); // Remove os "pedacinhos" dos acentos
}