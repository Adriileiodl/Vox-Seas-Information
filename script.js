// ===== TRADUÇÕES =====
const translations = {
  pt: {
    nav_about: "Sobre", nav_fruits: "Frutas", nav_map: "Mapa", nav_codes: "Códigos", nav_news: "Novidades",
    hero_tag: "⚔️ Aventura pirata no Roblox",
    hero_sub: "Navegue pelos mares, enfrente monstros marinhos e domine as ilhas.",
    soon: "EM BREVE...",
    about_title: "Sobre o jogo",
    about_text: "Vox Seas é um RPG de pirata inspirado em One Piece, onde você faz missões em várias ilhas e luta em PvE e PvP.",
    c1_t: "Piratas ou Marinha", c1_d: "Escolha o seu lado logo ao entrar no jogo.",
    c2_t: "Vox Fruits", c2_d: "Frutas que dão habilidades poderosas e mudam seu estilo de luta.",
    c3_t: "Sea Beasts", c3_d: "Monstros marinhos gigantes que aparecem no oceano como chefes de raid.",
    c4_t: "Estilos de luta", c4_d: "Use espadas, punhos, armas e frutas para evoluir.",
    c5_t: "Navios e Tripulação", c5_d: "Compre navios, explore os mares e forme sua própria crew.",
    c6_t: "Ilhas e Chefes", c6_d: "Várias ilhas com inimigos, missões e chefes cada vez mais fortes.",
    fruits_title: "🍎 Frutas", map_title: "🗺️ Mapa e Ilhas", codes_title: "🎁 Códigos", news_title: "📰 Novidades",
    footer: "Site feito por fãs. Não é afiliado ao Roblox nem aos criadores de Vox Seas."
  },
  en: {
    nav_about: "About", nav_fruits: "Fruits", nav_map: "Map", nav_codes: "Codes", nav_news: "News",
    hero_tag: "⚔️ Pirate adventure on Roblox",
    hero_sub: "Sail the seas, face giant sea monsters and conquer the islands.",
    soon: "COMING SOON...",
    about_title: "About the game",
    about_text: "Vox Seas is a pirate RPG inspired by One Piece, where you complete quests across many islands and fight in PvE and PvP.",
    c1_t: "Pirates or Marines", c1_d: "Pick your side as soon as you join the game.",
    c2_t: "Vox Fruits", c2_d: "Fruits that grant powerful abilities and change your fighting style.",
    c3_t: "Sea Beasts", c3_d: "Giant sea monsters that appear in the ocean as raid bosses.",
    c4_t: "Fighting styles", c4_d: "Use swords, fists, guns and fruits to level up.",
    c5_t: "Ships & Crews", c5_d: "Buy ships, explore the seas and build your own crew.",
    c6_t: "Islands & Bosses", c6_d: "Many islands with enemies, quests and ever stronger bosses.",
    fruits_title: "🍎 Fruits", map_title: "🗺️ Map & Islands", codes_title: "🎁 Codes", news_title: "📰 News",
    footer: "Fan-made site. Not affiliated with Roblox or the creators of Vox Seas."
  },
  es: {
    nav_about: "Acerca de", nav_fruits: "Frutas", nav_map: "Mapa", nav_codes: "Códigos", nav_news: "Novedades",
    hero_tag: "⚔️ Aventura pirata en Roblox",
    hero_sub: "Navega por los mares, enfrenta monstruos marinos y domina las islas.",
    soon: "PRÓXIMAMENTE...",
    about_title: "Sobre el juego",
    about_text: "Vox Seas es un RPG pirata inspirado en One Piece, donde haces misiones en muchas islas y luchas en PvE y PvP.",
    c1_t: "Piratas o Marina", c1_d: "Elige tu bando apenas entres al juego.",
    c2_t: "Vox Fruits", c2_d: "Frutas que dan habilidades poderosas y cambian tu estilo de pelea.",
    c3_t: "Sea Beasts", c3_d: "Monstruos marinos gigantes que aparecen en el océano como jefes de raid.",
    c4_t: "Estilos de pelea", c4_d: "Usa espadas, puños, armas y frutas para subir de nivel.",
    c5_t: "Barcos y Tripulación", c5_d: "Compra barcos, explora los mares y forma tu propia tripulación.",
    c6_t: "Islas y Jefes", c6_d: "Muchas islas con enemigos, misiones y jefes cada vez más fuertes.",
    fruits_title: "🍎 Frutas", map_title: "🗺️ Mapa e Islas", codes_title: "🎁 Códigos", news_title: "📰 Novedades",
    footer: "Sitio hecho por fans. No está afiliado a Roblox ni a los creadores de Vox Seas."
  }
};

const htmlLang = { pt: "pt-BR", en: "en", es: "es" };
const overlay = document.getElementById("langOverlay");

// ===== TROCAR IDIOMA =====
function setLanguage(lang) {
  const dict = translations[lang] || translations.pt;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });
  document.documentElement.lang = htmlLang[lang];
  document.getElementById("currentLang").textContent = lang.toUpperCase();
  try { localStorage.setItem("voxseas_lang", lang); } catch (e) {}
}

// ===== POP-UP: UMA VEZ POR DIA =====
function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function openOverlay() { overlay.classList.add("show"); }
function closeOverlay() { overlay.classList.remove("show"); }

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
    try { localStorage.setItem("voxseas_lang_day", todayKey()); } catch (e) {}
    closeOverlay();
  });
});

document.getElementById("changeLang").addEventListener("click", openOverlay);

// Inicialização
let savedLang = "pt", savedDay = null;
try {
  savedLang = localStorage.getItem("voxseas_lang") || "pt";
  savedDay = localStorage.getItem("voxseas_lang_day");
} catch (e) {}

setLanguage(savedLang);
if (savedDay !== todayKey()) openOverlay(); // primeira visita do dia

// ===== BOLHAS DE FUNDO =====
const bubbleBox = document.getElementById("bubbles");
for (let i = 0; i < 28; i++) {
  const b = document.createElement("span");
  b.className = "bubble";
  const size = 6 + Math.random() * 22;
  b.style.width = b.style.height = size + "px";
  b.style.left = Math.random() * 100 + "%";
  b.style.animationDuration = 9 + Math.random() * 14 + "s";
  b.style.animationDelay = -Math.random() * 20 + "s";
  bubbleBox.appendChild(b);
}
