
/* ---------- Dados das receitas ---------- */
const RECIPES = [
  {
    id: 'r1',
    title: 'Cupcake Lunar',
    type: 'doce',
    description: '✨ Receita Encantada: Cupcake Lunar 🌙<br><br>Deliciosos cupcakes fofinhos, com massa leve e cobertura de estrelas brilhantes, perfeitos para um lanche mágico ou uma festa celestial.<br><br>🌾 <strong>Ingredientes da massa:</strong><br>1 xícara (chá) de açúcar, 2 ovos, 1/2 xícara (chá) de manteiga em temperatura ambiente, 1 xícara (chá) de farinha de trigo, 1/2 xícara (chá) de leite, 1 colher (chá) de fermento em pó e 1 colher (chá) de essência de baunilha.<br><br>🧁 <strong>Ingredientes da cobertura:</strong><br>1 xícara (chá) de açúcar de confeiteiro, 2 colheres (sopa) de manteiga, 2 colheres (sopa) de leite, corante alimentício a gosto e confeitos em forma de estrelas.<br><br>🌔 <strong>Modo de preparo:</strong><br>1. Bata a manteiga com o açúcar até obter um creme claro e fofo.<br>2. Acrescente os ovos um a um, batendo bem a cada adição.<br>3. Misture a farinha e o fermento alternando com o leite, até formar uma massa homogênea. Adicione a baunilha.<br>4. Distribua a massa em forminhas de cupcake e asse em forno preaquecido a 180°C por 18 a 20 minutos.<br>5. Para a cobertura, bata todos os ingredientes até ficar cremoso e aplique sobre os cupcakes já frios.<br>6. Decore com confeitos em forma de estrelas para um efeito lunar.<br><br>🌙 <strong>Dica lunar:</strong><br>Para um toque extra mágico, polvilhe um pouco de glitter comestível sobre a cobertura antes de servir.',
    img: 'img/cupcake.jpg',
    views: 0,

  },
  {
    id: 'r2',
    title: 'Biscoito Estelar',
    type: 'doce',
    description: '✨ Receita Mágica: Biscoito Estelar 🌙<br><br>Deliciosos biscoitos em forma de estrela, crocantes por fora e levemente macios por dentro, perfeitos para acompanhar um chá ou café sob o brilho da lua.<br><br>🌾 <strong>Ingredientes:</strong><br>2 xícaras (chá) de farinha de trigo, 100 g de manteiga em temperatura ambiente, 3/4 xícara (chá) de açúcar, 1 ovo, 1 colher (chá) de essência de baunilha e uma pitada de sal.<br><br>🧁 <strong>Modo de preparo:</strong><br>1. Misture a manteiga com o açúcar até obter um creme leve e fofo.<br>2. Adicione o ovo e a essência de baunilha, misturando bem.<br>3. Acrescente a farinha e o sal aos poucos, até formar uma massa homogênea.<br>4. Abra a massa em uma superfície enfarinhada com cerca de 0,5 cm de espessura e corte os biscoitos com cortadores em formato de estrela.<br>5. Coloque os biscoitos em uma forma untada ou forrada com papel manteiga.<br>6. Asse em forno preaquecido a 180°C por 12 a 15 minutos, até as bordas dourarem levemente.<br><br>🌙 <strong>Dica lunar:</strong><br>Decore com glacê real ou açúcar de confeiteiro para um efeito cintilante, lembrando o céu estrelado.',
    img: 'img/biscoito.jpg',
    views: 0,
  },
  {
    id: 'r3',
    title: 'Quiche da Lua',
    type: 'salgada',
    description: '✨ Receita Mágica: Quiche da Lua 🌙<br><br>Uma criação encantada da confeitaria Delícias da Lua — crocante por fora, cremosa por dentro e com um toque de ervas finas.<br><br>🌾 <strong>Massa:</strong><br>2 xícaras (chá) de farinha de trigo, 100 g de manteiga gelada em cubos, 1 pitada de sal, 1 gema e 3 colheres (sopa) de água gelada.<br><br>🌔 <strong>Recheio:</strong><br>3 ovos, 1 caixinha de creme de leite, 100 g de queijo minas ralado, 50 g de parmesão, 1/2 cebola picada, 1 colher (sopa) de azeite, sal, noz-moscada e ervas finas a gosto.<br><br>🧁 <strong>Modo de preparo:</strong><br>1. Misture a farinha, sal e manteiga até formar uma farofa úmida.<br>2. Adicione a gema e a água gelada aos poucos, até a massa unir. Leve à geladeira por 20 minutos.<br>3. Abra a massa, forre a forma, fure com um garfo e asse por 10 minutos a 180°C.<br>4. Refogue a cebola no azeite, misture ovos, creme de leite e queijos. Tempere e despeje sobre a massa.<br>5. Asse por 30 a 35 minutos até dourar.<br><br>🌙 <strong>Dica lunar:</strong><br>Sirva com salada e flores comestíveis — perfeita para saborear sob o luar.',
    img: 'img/quiche.jpg',
    views: 0,


  },
  {
    id: 'r4',
    title: 'Pão Fofinho da Lua',
    type: 'salgada',
    description: '✨ Receita Encantada: Pão Fofinho da Lua 🌙<br><br>Um pão leve como uma nuvem e dourado como o amanhecer. Essa receita mágica da confeitaria Delícias da Lua traz aquele cheirinho irresistível de pão caseiro que envolve toda a cozinha.<br><br>🌾 <strong>Ingredientes:</strong><br>500 g de farinha de trigo, 10 g de fermento biológico seco, 2 colheres (sopa) de açúcar, 1 colher (chá) de sal, 1 ovo, 3 colheres (sopa) de manteiga, 250 ml de leite morno e 1 gema para pincelar.<br><br>🌔 <strong>Modo de preparo:</strong><br>1. Em uma tigela, misture o fermento, o açúcar e o leite morno. Deixe descansar por 5 minutos até espumar.<br>2. Adicione o ovo, a manteiga e metade da farinha. Misture bem.<br>3. Acrescente o sal e o restante da farinha aos poucos, sovando até a massa ficar lisa e elástica.<br>4. Cubra com um pano e deixe descansar por cerca de 1 hora, ou até dobrar de tamanho.<br>5. Modele os pãezinhos, coloque em uma forma untada e deixe crescer por mais 30 minutos.<br>6. Pincele com a gema e asse em forno preaquecido a 180°C por 25 a 30 minutos, até dourar.<br><br>🌙 <strong>Dica lunar:</strong><br>Para um pão ainda mais macio, adicione 1 colher (sopa) de leite em pó à massa. Sirva morno com manteiga derretendo — perfeito para começar o dia com um toque de magia.',
    img: 'img/pao.jpg',
    views: 0,

  },
  {
    id: 'r5',
    title: 'Torta Minguante',
    type: 'doce',
    description: '✨ Doce Encanto: Torta Minguante 🌙<br><br>Uma torta celestial com massa dourada e crocante, recheio cremoso e frutas frescas que lembram o brilho da lua minguante no céu. Um doce perfeito para quem busca leveza e magia em cada pedaço.<br><br>🌾 <strong>Ingredientes da massa:</strong><br>2 xícaras (chá) de farinha de trigo, 100 g de manteiga gelada em cubos, 2 colheres (sopa) de açúcar, 1 gema e 2 colheres (sopa) de água gelada.<br><br>🍓 <strong>Recheio lunar:</strong><br>1 lata de leite condensado, 1 lata de creme de leite, 2 colheres (sopa) de amido de milho, 1 xícara (chá) de leite, 1 colher (chá) de essência de baunilha e frutas a gosto (morango, mirtilo, kiwi ou pêssego).<br><br>🧁 <strong>Modo de preparo:</strong><br>1. Misture a farinha, o açúcar e a manteiga até formar uma farofa úmida. Adicione a gema e a água gelada aos poucos até obter uma massa homogênea.<br>2. Forre o fundo e as laterais de uma forma de torta com a massa e fure com um garfo.<br>3. Asse em forno preaquecido a 180°C por cerca de 15 a 20 minutos, até dourar levemente.<br>4. Em uma panela, misture o leite condensado, o creme de leite, o amido e a baunilha. Cozinhe em fogo baixo até engrossar, mexendo sempre.<br>5. Espere o creme esfriar e espalhe sobre a massa assada.<br>6. Decore com as frutas e pincele uma calda de brilho ou geleia para um efeito cintilante.<br><br>🌙 <strong>Dica lunar:</strong><br>Para um toque especial, polvilhe açúcar de confeiteiro por cima antes de servir — como se fosse o pó das estrelas!',
    img: 'img/torta.jpg',
    views: 0,
  },
];

/* ---------- Salvar/ler favoritos ---------- */
function loadFavorites() {
  try {
    return JSON.parse(localStorage.getItem('dl-favs') || '[]');
  } catch (e) {
    return [];
  }
}
function saveFavorites(arr) {
  localStorage.setItem('dl-favs', JSON.stringify(arr));
}

/*Pesquisa de receitas IA ajudou */
function searchRecipes(query) {
  query = (query || '').toLowerCase().trim();
  if (!query) return RECIPES;
  return RECIPES.filter(
    r => r.title.toLowerCase().includes(query) || (r.type || '').includes(query)
  );
}

/* Favoritar IA ajudou */
function toggleFavorite(recipeId, btnEl = null) {
  const favs = loadFavorites();
  const idx = favs.indexOf(recipeId);

  // Adicionar ou remover dos favoritos , IA ajudou
  if (idx === -1) favs.push(recipeId);
  else favs.splice(idx, 1);

  saveFavorites(favs);

  // Atualiza apenas o botão clicado, sem recarregar tudo
  if (btnEl) {
    btnEl.textContent = favs.includes(recipeId) ? '💖' : '🤍';
  } else {
    renderAllGrids();
  }
}

/*Hover effect nas imagens — já feito no CSS; aqui reforçamos com pequena transição JS */
function attachImageHover() {
  document.querySelectorAll('.recipe-card img').forEach(img => {
    // img.addEventListener(
    //   "mouseenter",
    //   () => (img.style.transform = "scale(1.06)")
    // );
    // img.addEventListener(
    //   "mouseleave",
    //   () => (img.style.transform = "scale(1)")
    // );
  });
}

/* 4) Contador de visualizações (requisito) — função que incrementa views e salva localStorage */
function incrementView(recipeId) {
  const key = 'dl-views';
  const data = JSON.parse(localStorage.getItem(key) || '{}');
  data[recipeId] = (data[recipeId] || 0) + 1;
  localStorage.setItem(key, JSON.stringify(data));
}

/* 5) Modo noturno (requisito) */
function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  const active = document.documentElement.classList.contains('dark');
  localStorage.setItem('dl-theme-dark', active ? '1' : '0');
}
function applySavedTheme() {
  if (localStorage.getItem('dl-theme-dark') === '1') document.documentElement.classList.add('dark');
}

/* 6) Receita do dia (requisito) — função que escolhe aleatoriamente e exibe */
function showRecipeOfDay() {
  const idx = Math.floor(Math.random() * RECIPES.length);
  const r = RECIPES[idx];
  const el = document.getElementById('recipeOfDay');
  if (!el) return;
  el.innerHTML = `
  <div class="card recipe-card" onclick="openRecipe('${r.id}')">
  <img src="${r.img}" alt="${r.title}" />
  <div class="meta">
  <h4>${r.title}</h4>
  <p class="muted">Clique para ver receita</p>
  </div>
  </div>
`;
  attachImageHover();
}

/* ---------- Renderers: preenche grids e resultados ---------- */
function recipeCardHTML(r) {
  const fav = loadFavorites().includes(r.id) ? '💖' : '🤍';
  const viewData = JSON.parse(localStorage.getItem('dl-views') || '{}');
  const views = viewData[r.id] || r.views || 0;
  return `
        <div class="card recipe-card" onclick="openRecipe('${r.id}')">
        <img src="${r.img}" alt="${r.title}" />
        <div class="meta">
        <h4>${r.title}</h4>
        <small>${views} visualizações</small>
        <button class="favorite-btn"
           title="Favoritar"
           onclick="event.stopPropagation(); toggleFavorite('${r.id}', this)">
           ${fav}
        </button>
          </div>
        </div>
      `;
}

function renderAllGrids() {
  const sweetGrid = document.getElementById('sweetGrid');
  const savoryGrid = document.getElementById('savoryGrid');
  const searchResults = document.getElementById('searchResults');
  if (sweetGrid)
    sweetGrid.innerHTML = RECIPES.filter(r => r.type === 'doce')
      .map(recipeCardHTML)
      .join('');
  if (savoryGrid)
    savoryGrid.innerHTML = RECIPES.filter(r => r.type === 'salgada')
      .map(recipeCardHTML)
      .join('');
  if (searchResults) searchResults.innerHTML = RECIPES.map(recipeCardHTML).join('');
  attachImageHover();
}

/* abrir "receita" — incrementa contador e mostra modal simples (simulação) */
function openRecipe(id) {
  incrementView(id);
  renderAllGrids();
  const r = RECIPES.find(x => x.id === id);
  if (!r) return alert('Receita não encontrada');
  // Simples modal com detalhes
  const modal = document.createElement('div');
  modal.style =
    'position:fixed;inset:0;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;z-index:9999';
  modal.innerHTML = `
  <div style="background:var(--card);padding:18px;border-radius:12px;max-width:720px;width:90%;color:var(--text)">
   <button style="float:right" onclick="this.parentNode.parentNode.remove()">✖</button>
  <h3>${r.title}</h3>
   <img src="${r.img}" style="width:100%;height:260px;object-fit:cover;border-radius:8px" />
   <p>${r.description}</p>
   <button onclick="this.parentNode.parentNode.remove()">Fechar</button>
   </div>
   `;
  document.body.appendChild(modal);
}

/* ---------- Formulário de contato (validação simples) ---------- */
function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('message').value.trim();
    if (!name || !email || !msg) {
      document.getElementById('contactStatus').innerText = 'Preencha todos os campos.';
      return;
    }
    document.getElementById('contactStatus').innerText = 'Mensagem enviada! Obrigado 😊';
    form.reset();
  });
}

/* ---------- Menu mobile responsivo ---------- */
function setupMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const menu = document.getElementById('menu');

  if (!menuToggle || !menu) return;

  // Toggle menu visibility
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    // Change hamburger icon
    menuToggle.innerHTML = menu.classList.contains('active') ? '✕' : '☰';
  });

  // Close menu when clicking on menu items
  menu.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
      menu.classList.remove('active');
      menuToggle.innerHTML = '☰';
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', e => {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
      menu.classList.remove('active');
      menuToggle.innerHTML = '☰';
    }
  });

  // Close menu on window resize to larger screens
  window.addEventListener('resize', () => {
    if (window.innerWidth > 480) {
      menu.classList.remove('active');
      menuToggle.innerHTML = '☰';
    }
  });
}

/* ---------- Inicialização ---------- */
window.addEventListener('load', () => {
  document.getElementById('year') &&
    (document.getElementById('year').innerText = new Date().getFullYear());
  applySavedTheme();
  renderAllGrids();
  showRecipeOfDay();
  setupContactForm();
  setupMobileMenu();

  // ligar search
  const input = document.getElementById('search');
  if (input) {
    input.addEventListener('input', e => {
      const q = e.target.value;
      const results = searchRecipes(q);
      const el = document.getElementById('searchResults');
      if (el) el.innerHTML = results.map(recipeCardHTML).join('');
      attachImageHover();
    });
  }

  // ligar botões de toggle tema (pode haver vários)
  document.querySelectorAll('#toggleTheme, #toggleTheme2').forEach(
    b =>
      b &&
      b.addEventListener('click', () => {
        toggleTheme();
      })
  );

  // incrementar view da página inicial como métrica geral (ex.: visitas)
  const pkey = 'dl-home-views';
  localStorage.setItem(pkey, (parseInt(localStorage.getItem(pkey) || '0') + 1).toString());
});

// @Eduardo
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.login-form');
  const CREDENTIALS = {
    username: 'rafa@gmail.com',
    password: '123456',
  };

  form.addEventListener('submit', e => {
    e.preventDefault();

    const username = form.username.value.trim();
    const password = form.password.value.trim();
    const toastEl = document.getElementById('login-toast');
    const toastBody = toastEl.querySelector('.toast-body');
    toastEl.className = 'toast toast-pink align-items-center border-0';
    const toast = new bootstrap.Toast(toastEl);

    if (username === CREDENTIALS.username && password === CREDENTIALS.password) {
      toastBody.textContent = 'Login bem-sucedido!';
      toast.show();

      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1500);
    } else {
      toastBody.textContent = 'Credenciais inválidas. Tente novamente.';
      toast.show();
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const toastEl = document.getElementById('contact-toast');
  const toastBody = toastEl.querySelector('.toast-body');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    toastEl.className = 'toast toast-pink align-items-center border-0';
    const toast = new bootstrap.Toast(toastEl);
    if (name && email && message) {
      toastBody.textContent = 'Mensagem enviada com sucesso! ✨';
      toast.show();
      form.reset();
    } else {
      toastBody.textContent = 'Por favor, preencha todos os campos.';
      toast.show();
    }
  });
});
