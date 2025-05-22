//---------------Overlay--------------------
const openBtn = document.getElementById('open-custom-overlay'); // Knop die de 'Meer' opent
const overlay = document.getElementById('custom-overlay'); // De overlay zelf
const closeBtn = document.getElementById('close-overlay'); // Knop om overlay te sluiten

// Open overlay
openBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  overlay.classList.add('active');
});

// Sluit overlay als je erop klikt (buiten de menu)
overlay.addEventListener('click', () => {
  overlay.classList.remove('active');
  sluitAlleMenus();
  sluitSubmenus();
});

// Stop klikbubbels binnen de overlay (zodat klikken in submenu niet sluit)
Array.from(overlay.children).forEach((child) => {
  child.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

// Selecteer knoppen van hoofdmappen
const horecaBtn = document.getElementById('filterHoreca');
const eventlocatiesBtn = document.getElementById('filterEventlocaties');
const parkingBtn = document.getElementById('filterParking');
const meerBtn = document.getElementById('open-custom-overlay');

// Selecteer overlay containers
const horecaMenu = document.getElementById('horeca-menu');
const eventlocatiesMenu = document.getElementById('eventlocaties-menu');
const parkingsMenu = document.getElementById('parkings-menu');

// Submenus
const openActiviteitenBtn = document.getElementById('filterActiviteitenSport');
const submenuActiviteiten = document.getElementById('activiteiten-submenu');
const backtomainActiviteiten = document.getElementById('back-to-main-menu');

const openWandelroutesBtn = document.getElementById('filterWandelroutes');
const submenuWandelroutes = document.getElementById('wandelroutes-submenu');
const backtomainWandelroutes = document.getElementById('back-to-main-menu-wandelroutes');

const openCultuurBtn = document.getElementById('filterCultuurSportlocaties');
const submenuCultuur = document.getElementById('cultuur-submenu');
const backtomainCultuur = document.getElementById('back-to-main-menu-cultuur');

// Helperfunctie om alle hoofdmenu's te sluiten
function sluitAlleMenus() {
  horecaMenu.classList.add('hidden');
  eventlocatiesMenu.classList.add('hidden');
  parkingsMenu.classList.add('hidden');
}

// Helperfunctie om alle submenus te sluiten
function sluitSubmenus() {
  submenuActiviteiten.classList.remove('active');
  submenuWandelroutes.classList.remove('active');
  submenuCultuur.classList.remove('active');
}

// Helperfunctie om overlay én alle menus te sluiten
function sluitOverlayEnMenus() {
  overlay.classList.remove('active');
  sluitAlleMenus();
  sluitSubmenus();
}

// Eventlisteners voor hoofdmappen
horecaBtn.addEventListener('click', () => {
  if (horecaMenu.classList.contains('hidden')) {
    horecaMenu.classList.remove('hidden');
  } else {
    sluitAlleMenus();
  }
});

eventlocatiesBtn.addEventListener('click', () => {
  if (eventlocatiesMenu.classList.contains('hidden')) {
    eventlocatiesMenu.classList.remove('hidden');
  } else {
    sluitAlleMenus();
  }
});

parkingBtn.addEventListener('click', () => {
if (parkingsMenu.classList.contains('hidden')) {
    parkingsMenu.classList.remove('hidden');
  } else {
    sluitAlleMenus();
  }
});

meerBtn.addEventListener('click', () => {
  sluitAlleMenus();
  sluitSubmenus();
});

// Sluitknoppen in overlay-menus
document.querySelectorAll('.close-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const menu = btn.closest('.overlay-menu');
    if (menu) menu.classList.add('hidden');
  });
});

//-------------------- Toggle pins -------------------
// Toggle functie voor de knoppen en sluiten overlay
function showPin(id, type) {
  const element = document.getElementById(id);
  if (!element) return;
  element.addEventListener('click', () => {
    toggleMarkersByType(type);
    sluitOverlayEnMenus();
  });
}

// Horeca pins
showPin('alleHoreca', 'horeca');
showPin('strandbarHoreca', 'strandbar');
showPin('strandkioskHoreca', 'strandkiosk');
showPin('zomerlustHoreca', 'zomerlust');

// Eventlocaties pins
showPin('alleEventlocaties', 'event');
showPin('serreEvent', 'serre');
showPin('strandhuisEvent', 'strandhuis');
showPin('sportimoniumEvent', 'sportimonium');
showPin('vergaderzaalEvent', 'vergaderzaal');
showPin('eventweideEvent', 'evenementenweide');
showPin('hoogtouwenparcoursEvent', 'hoogtouwenEvent');
showPin('strandzoneEvent', 'strandzone');
showPin('oudVoetbalveldEvent', 'oudVoetbalveld');

// Parking pins
showPin('alleParking', 'parking');
showPin('parkingA', 'parkingA');
showPin('parkingB', 'parkingB');
showPin('parkingC', 'parkingC');
showPin('ingangC', 'ingangC');
showPin('parkingD', 'parkingD');
showPin('parkingE', 'parkingE');
showPin('parkingSportcomplex', 'parkingSportcomplex');
showPin('betaalterminalsParking', 'betaalterminal');

//-------------------- Submenu 'Activiteiten & Sport' -------------------
openActiviteitenBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  submenuActiviteiten.classList.toggle('active');
});

backtomainActiviteiten.addEventListener('click', () => {
  submenuActiviteiten.classList.remove('active');
});

//-------------------- Submenu 'Wandelroutes' -------------------
openWandelroutesBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  submenuWandelroutes.classList.toggle('active');
});

backtomainWandelroutes.addEventListener('click', () => {
  submenuWandelroutes.classList.remove('active');
});

//-------------------- Submenu 'Cultuur & Sportlocaties' -------------------
openCultuurBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  submenuCultuur.classList.toggle('active');
});

backtomainCultuur.addEventListener('click', () => {
  submenuCultuur.classList.remove('active');
});

// Sluit overlay als je op sluitknop klikt
closeBtn.addEventListener('click', () => {
  sluitOverlayEnMenus();
});

// Sluit overlay en menu als je op een item in overlay-menu klikt
document.querySelectorAll('.overlay-menu ul li').forEach(li => {
  li.addEventListener('click', () => {
    sluitOverlayEnMenus();
  });
});
