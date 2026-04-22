// Banco de dados (Mantido original)
const products = [
    { id: 1, name: "Tinta Premium Branca", category: "interior", sub: "acrilica", brand: "suvinil", price: 50.0, desc: "Alta cobertura e rendimento.", img: "https://placehold.co/400x400/005eff/fff?text=Suvinil+Premium" },
    { id: 2, name: "Tinta Acrílica Azul", category: "interior", sub: "acrilica", brand: "coral", price: 65.0, desc: "Ideal para salas e quartos.", img: "https://placehold.co/400x400/005eff/fff?text=Coral+Azul" },
    { id: 3, name: "Látex Standard Gelo", category: "interior", sub: "latex", brand: "suvinil", price: 42.0, desc: "Econômica e de fácil aplicação.", img: "https://placehold.co/400x400/005eff/fff?text=Latex+Gelo" },
    { id: 4, name: "Tinta Fosca Algodão", category: "interior", sub: "fosca", brand: "sherwin", price: 58.0, desc: "Toque aveludado impecável.", img: "https://placehold.co/400x400/005eff/fff?text=Fosca+Algodao" },
    { id: 5, name: "Externa Resistente", category: "exterior", sub: "acrilica-ext", brand: "coral", price: 80.0, desc: "Proteção contra sol e chuva.", img: "https://placehold.co/400x400/005eff/fff?text=Externa+Coral" },
    { id: 6, name: "Impermeabilizante 18L", category: "exterior", sub: "impermeavel", brand: "sherwin", price: 120.0, desc: "Zero infiltrações na fachada.", img: "https://placehold.co/400x400/005eff/fff?text=Impermeavel" },
    { id: 7, name: "Esmalte Sintético Branco", category: "moveis", sub: "esmalte", brand: "suvinil", price: 45.0, desc: "Para madeiras e metais.", img: "https://placehold.co/400x400/005eff/fff?text=Esmalte+Branco" },
    { id: 8, name: "Verniz Brilhante 3.6L", category: "moveis", sub: "verniz", brand: "coral", price: 70.0, desc: "Proteção UV para decks e móveis.", img: "https://placehold.co/400x400/005eff/fff?text=Verniz+Movel" },
    { id: 9, name: "Tinta Epóxi Banheiro", category: "especial", sub: "epoxi", brand: "suvinil", price: 155.0, desc: "Direto no azulejo, alta aderência.", img: "https://placehold.co/400x400/005eff/fff?text=Epoxi+Tinta" },
    { id: 10, name: "Tinta Térmica Teto", category: "especial", sub: "termica", brand: "sherwin", price: 210.0, desc: "Reduz calor em até 5 graus.", img: "https://placehold.co/400x400/005eff/fff?text=Termica+Sherwin" },
    { id: 11, name: "Rolo Lã Antirespingo", category: "ferramentas", sub: "rolos", brand: "atlas", price: 28.0, desc: "23cm, pintura profissional.", img: "https://placehold.co/400x400/005eff/fff?text=Rolo+Atlas" },
    { id: 12, name: "Pincel Cerdas Macias", category: "ferramentas", sub: "pinceis", brand: "tigre", price: 12.5, desc: "Para recortes perfeitos.", img: "https://placehold.co/400x400/005eff/fff?text=Pincel+Tigre" },
    { id: 13, name: "Bandeja Pintura G", category: "ferramentas", sub: "bandejas", brand: "atlas", price: 15.0, desc: "Reforçada e fácil de limpar.", img: "https://placehold.co/400x400/005eff/fff?text=Bandeja+Pintura" },
    { id: 14, name: "Fita Crepe 50m", category: "acessorios", sub: "fitas", brand: "3m", price: 9.9, desc: "Não solta cola na parede.", img: "https://placehold.co/400x400/005eff/fff?text=Fita+3M" },
    { id: 15, name: "Lixas Grão 120 (5un)", category: "acessorios", sub: "lixas", brand: "norton", price: 5.5, desc: "Para massa corrida e madeira.", img: "https://placehold.co/400x400/005eff/fff?text=Lixa+Norton" },
    { id: 16, name: "Extensor de Alumínio", category: "acessorios", sub: "extensores", brand: "atlas", price: 35.0, desc: "Ajustável até 2 metros.", img: "https://placehold.co/400x400/005eff/fff?text=Extensor+Atlas" },
    { id: 17, name: "Coral Renova Teto", category: "interior", sub: "acrilica", brand: "coral", price: 92.0, desc: "Cobre sujeira em uma demão.", img: "https://placehold.co/400x400/005eff/fff?text=Renova+Teto" },
    { id: 18, name: "Sherwin Metalatex 18L", category: "exterior", sub: "acrilica-ext", brand: "sherwin", price: 380.0, desc: "A mais durável do mercado.", img: "https://placehold.co/400x400/005eff/fff?text=Metalatex+G" },
    { id: 19, name: "Verniz Deck Sparlack", category: "moveis", sub: "verniz", brand: "coral", price: 110.0, desc: "Resistência extrema ao sol.", img: "https://placehold.co/400x400/005eff/fff?text=Sparlack+Deck" },
    { id: 20, name: "Esmalte Base Água Gelo", category: "moveis", sub: "esmalte", brand: "suvinil", price: 54.0, desc: "Sem cheiro e secagem ultra rápida.", img: "https://placehold.co/400x400/005eff/fff?text=Esmalte+Base+Agua" }
];

let cart = JSON.parse(localStorage.getItem('fixtintas_cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    updateCartUI();
});

// Filtros com Scroll Automático para Mobile
function filterProducts(tag) {
    const list = document.getElementById('product-list');
    if(!list) return;

    list.style.opacity = '0';
    setTimeout(() => {
        const filtered = tag === 'all' 
            ? products 
            : products.filter(p => p.category === tag || p.sub === tag || p.brand === tag);
        
        renderProducts(filtered);
        list.style.opacity = '1';
        document.getElementById('category-title').innerText = tag === 'all' ? "Produtos em Oferta" : `Filtrado por: ${tag.toUpperCase()}`;
        
        // Melhoria Responsiva: Rola para os produtos após filtrar no celular
        if(window.innerWidth < 768) {
            list.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 300);
}

function renderProducts(items) {
    const container = document.getElementById('product-list');
    if (!container) return;

    if (items.length === 0) {
        container.innerHTML = '<div class="col-12 text-center py-5"><p class="text-muted">Nenhum produto encontrado.</p></div>';
        return;
    }

    container.innerHTML = items.map(p => `
        <div class="col-12 col-sm-6 col-lg-4 mb-4">
            <div class="card product-card h-100 shadow-sm border-0">
                <div class="position-relative">
                    <img src="${p.img}" class="card-img-top img-fluid" alt="${p.name}">
                    <span class="badge bg-warning text-dark position-absolute top-0 end-0 m-2 text-uppercase" style="font-size: 0.7rem">${p.brand}</span>
                </div>
                <div class="card-body d-flex flex-column p-3">
                    <h5 class="fw-bold mb-1 h6 text-truncate">${p.name}</h5>
                    <p class="text-muted small mb-3" style="font-size: 0.8rem; height: 40px; overflow: hidden;">${p.desc}</p>
                    <div class="mt-auto d-flex align-items-center justify-content-between">
                        <h5 class="text-primary fw-bold mb-0">R$ ${p.price.toFixed(2)}</h5>
                        <button onclick="openConfigModal(${p.id})" class="btn btn-primary btn-sm px-3 fw-bold">
                           <i class="fas fa-plus me-1"></i> ADICIONAR
                        </button>
                    </div>
                </div>
            </div>
        </div>`).join('');
}

// Carrinho (Mantido e otimizado para salvar estado)
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const itemInCart = cart.find(i => i.id === id);
    if (itemInCart) {
        itemInCart.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    save();
    showConfirmation(product);

}

let tempProduct = null; // Guarda o produto que está sendo configurado

// Altere a função que renderiza o botão no HTML (no renderProducts) para:
// <button onclick="openConfigModal(${p.id})" class="btn btn-primary...">ADICIONAR</button>

function openConfigModal(id) {
    tempProduct = products.find(p => p.id === id);
    if (!tempProduct) return;

    document.getElementById('modalProductName').innerText = tempProduct.name;
    
    // Abre o modal manualmente
    const myModal = new bootstrap.Modal(document.getElementById('productConfigModal'));
    myModal.show();
}

function confirmAddToCart() {
    const color = document.querySelector('input[name="color"]:checked').value;
    const texture = document.getElementById('selectTexture').value;
    const size = document.getElementById('selectSize').value;
    
    // Adiciona o preço extra se for lata de 18L
    const priceAdd = parseFloat(document.getElementById('selectSize').selectedOptions[0].getAttribute('data-price-add'));
    
    const configuredProduct = {
        ...tempProduct,
        id: `${tempProduct.id}-${color}-${texture}-${size}`, // ID único para variações
        name: `${tempProduct.name} (${color} - ${texture} - ${size})`,
        price: tempProduct.price + priceAdd,
        quantity: 1
    };

    // Lógica de adicionar ao carrinho
    const itemInCart = cart.find(i => i.id === configuredProduct.id);
    if (itemInCart) {
        itemInCart.quantity++;
    } else {
        cart.push(configuredProduct);
    }

    save();
    showConfirmation(configuredProduct);
    
    // Fecha o modal
    bootstrap.Modal.getInstance(document.getElementById('productConfigModal')).hide();
}

function showConfirmation(product) {
    const toastElement = document.getElementById('itemAddedToast');
    if (toastElement) {
        document.getElementById('toast-item-name').innerText = product.name;
        document.getElementById('toast-item-info').innerText = `R$ ${product.price.toFixed(2).replace('.', ',')}`;
        const toast = bootstrap.Toast.getOrCreateInstance(toastElement);
        toast.show();
    }
}

function changeQty(id, delta) {
    // Usamos == em vez de === para comparar string com número se necessário
    const item = cart.find(i => i.id == id); 
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) cart = cart.filter(i => i.id != id);
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
    container.innerHTML = cart.length === 0 ? '<div class="text-center p-4"><i class="fas fa-shopping-basket fa-3x mb-3 opacity-25"></i><p class="text-muted">Carrinho vazio</p></div>' : '';
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        container.innerHTML += `
            <div class="d-flex align-items-center mb-3 pb-3 border-bottom px-2">
                <div class="flex-grow-1 overflow-hidden">
                    <h6 class="mb-0 fw-bold text-truncate">${item.name}</h6>
                    <small class="text-muted">Unit: R$ ${item.price.toFixed(2)}</small>
                </div>
                <div class="d-flex align-items-center ms-2">
                    <button class="btn btn-xs btn-outline-secondary" onclick="changeQty(${item.id}, -1)">-</button>
                    <span class="mx-2 fw-bold" style="min-width: 20px; text-align:center;">${item.quantity}</span>
                    <button class="btn btn-xs btn-outline-secondary" onclick="changeQty(${item.id}, 1)">+</button>
                </div>
            </div>`;
    });

    if(totalElement) totalElement.innerText = `R$ ${total.toFixed(2)}`;
}

function checkout() {
    if (cart.length === 0) return alert("Seu carrinho está vazio!");
	const listaItens = cart.map(item => `- ${item.name} (Qtd: ${item.quantity || 1})`).join('\n');
	const total = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
    alert(`Pedido Realizado com sucesso!\n\nProdutos adquiridos: \n${listaItens}\nTotal: R$ ${total.toFixed(2).replace('.', ',')}\n\nEnviaremos a confirmação por e-mail.`);
    cart = [];
    save();
}

// Menu Lateral Responsivo: Fecha ao clicar em um link (mobile)
document.querySelectorAll('.dropdown-side').forEach(item => {
    item.addEventListener('click', function(e) {
        e.stopPropagation();
        const isActive = this.classList.contains('active');
        document.querySelectorAll('.dropdown-side').forEach(el => el.classList.remove('active'));
        if (!isActive) this.classList.add('active');
    });
});

// Fecha dropdowns se clicar fora ou rolar
document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-side').forEach(el => el.classList.remove('active'));
});

window.addEventListener('scroll', () => {
    if(window.innerWidth < 992) {
        document.querySelectorAll('.dropdown-side').forEach(el => el.classList.remove('active'));
    }
}, { passive: true });

function scrollToBrands() {
    const section = document.getElementById('nossas-marcas');
    if (section) {
        // Pega a distância do topo da seção em relação à página
        const yOffset = -100; // Ajuste para compensar sua header fixa
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    }
}

