//---------------Overlay--------------------
const openBtn = document.getElementById('open-custom-overlay'); // Dit is de knop die de 'Meer' opent
const overlay = document.getElementById('custom-overlay'); // Dit is de overlay die je wilt openen/sluiten
const closeBtn = document.getElementById('close-overlay'); // Dit is de knop die de overlay sluit

// Open overlay
openBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  overlay.classList.add('active');
});

// Sluit overlay als je erop klikt
overlay.addEventListener('click', () => {
  overlay.classList.remove('active');
});

// Stop klikbubbels binnen de overlay (knoppen en andere elementen)
Array.from(overlay.children).forEach((child) => {
  child.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

// Selecteer knoppen
const horecaBtn = document.getElementById('filterHoreca');
const eventlocatiesBtn = document.getElementById('filterEventlocaties');
const parkingBtn = document.getElementById('filterParking');
const meerBtn = document.getElementById('open-custom-overlay');

// Selecteer overlay containers
const horecaMenu = document.getElementById('horeca-menu');
const eventlocatiesMenu = document.getElementById('eventlocaties-menu');
const parkingsMenu = document.getElementById('parkings-menu');

// Helperfunctie om alle overlays te sluiten
function sluitAlleMenus() {
  horecaMenu.classList.add('hidden');
  eventlocatiesMenu.classList.add('hidden');
  parkingsMenu.classList.add('hidden');
}

// Event listeners
horecaBtn.addEventListener('click', () => {
  sluitAlleMenus();
  horecaMenu.classList.remove('hidden');
});

eventlocatiesBtn.addEventListener('click', () => {
  sluitAlleMenus();
  eventlocatiesMenu.classList.remove('hidden');
});

parkingBtn.addEventListener('click', () => {
  sluitAlleMenus();
  parkingsMenu.classList.remove('hidden');
});

meerBtn.addEventListener('click', () => {
  sluitAlleMenus(); // sluit alle als je op 'Meer' klikt
});

document.querySelectorAll('.close-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const menu = btn.closest('.overlay-menu');
    if (menu) menu.classList.add('hidden');
  });
});

//-------------------- Toggle pins -------------------
// ------------------- Toggle functie voor de knoppen -------------------
function showPin(id, type) {
  document.getElementById(id).addEventListener('click', () => {
    toggleMarkersByType(type);
    sluitAlleMenus();
  });
}
//Horeca
showPin('alleHoreca', 'horeca'); //alle horeca
showPin('strandbarHoreca', 'strandbar');
showPin('strandkioskHoreca', 'strandkiosk');
showPin('zomerlustHoreca', 'zomerlust');
//Eventlocaties
showPin('alleEventlocaties', 'event'); //alle eventlocaties
showPin('serreEvent', 'serre');
showPin('strandhuisEvent', 'strandhuis');
showPin('sportimoniumEvent', 'sportimonium');
showPin('vergaderzaalEvent', 'vergaderzaal');
showPin('eventweideEvent', 'evenementenweide');
showPin('strandzoneEvent', 'strandzone');
showPin('hoogtouwenparcoursEvent', 'hoogtouwenparcours');
//Parking
showPin('alleParking', 'parking'); //alle parking
showPin('parkingA', 'parkingA');
showPin('ingangA', 'parkingA');
showPin('parkingB', 'parkingB');
showPin('ingangB', 'parkingB');
showPin('parkingD', 'parkingD');
showPin('ingangD', 'parkingD');
showPin('parkingE', 'parkingE');
showPin('ingangE', 'parkingE');
showPin('parkingSportcomplex', 'parkingSportcomplex');
showPin('ingangC', 'ingangC');


//-------------------- Submenu 'Activiteiten & Sport' -------------------
const openActiviteitenBtn = document.getElementById('filterActiviteitenSport'); // Dit is de knop die het submenu ('activiteiten & sport') opent/sluit
const submenuActiviteiten = document.getElementById('activiteiten-submenu'); // Dit is het submenu ('activiteiten & sport') dat je wilt openen/sluiten
const backtomainActiviteiten = document.getElementById('back-to-main-menu'); // Dit is het pijltje om terug te gaan naar het hoofdmenu

openActiviteitenBtn.addEventListener('click', function(e) {
  e.stopPropagation(); // voorkomt sluiten van overlay
  submenuActiviteiten.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
});

backtomainActiviteiten.addEventListener('click', () => {
  submenuActiviteiten.classList.remove('active');
});

//-------------------- Submenu 'Wandelroutes' -------------------
const openWandelroutesBtn = document.getElementById('filterWandelroutes'); // Dit is de knop die het submenu ('wandelroutes') opent/sluit
const submenuWandelroutes = document.getElementById('wandelroutes-submenu'); // Dit is het submenu ('wandelroutes') dat je wilt openen/sluiten
const backtomainWandelroutes = document.getElementById('back-to-main-menu-wandelroutes'); // Dit is het pijltje om terug te gaan naar het hoofdmenu

openWandelroutesBtn.addEventListener('click', function(e) {
  e.stopPropagation(); // voorkomt sluiten van overlay
  submenuWandelroutes.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
});

backtomainWandelroutes.addEventListener('click', () => {
  submenuWandelroutes.classList.remove('active');
});

//-------------------- Submenu 'Cultuur & Sportlocaties ' -------------------
const openCultuurBtn = document.getElementById('filterCultuurSportlocaties'); // Dit is de knop die het submenu ('cultuur & sportlocaties') opent/sluit
const submenuCultuur = document.getElementById('cultuur-submenu'); // Dit is het submenu ('cultuur & sportlocaties') dat je wilt openen/sluiten
const backtomainCultuur = document.getElementById('back-to-main-menu-cultuur'); // Dit is het pijltje om terug te gaan naar het hoofdmenu

openCultuurBtn.addEventListener('click', function(e) {
  e.stopPropagation(); // voorkomt sluiten van overlay
  submenuCultuur.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
});

backtomainCultuur.addEventListener('click', () => {
  submenuCultuur.classList.remove('active');
});