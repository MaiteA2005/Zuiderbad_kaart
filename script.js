// De coördinaten van de hoeken van de afbeelding (nu in decimale coördinaten)
var imageBounds = [
    [50.98717954450199, 4.495553970336915],  // Linkerbovenhoek
    [50.995580437743314, 4.517011642456056], // Rechterbovenhoek
    [50.9886383295914, 4.529027938842774],   // Rechteronderhoek
    [50.978074609081055, 4.508256912231446]  // Linkeronderhoek
  ];

  // Maak de kaart en stel het initiële zoomniveau in
  var map = L.map('map', {
    center: [50.9875, 4.5147],  // Dit is ongeveer het midden van de afbeelding
    zoom: 14,                   // Beginzoomniveau
    minZoom: 14,                // Minimum zoomniveau
    maxZoom: 20,                // Maximum zoomniveau
    maxBounds: imageBounds,
    zoomControl: false       // Stel de maximale grenzen in
  });


  //---------------Knoppen reset en zoemen--------------------
document.getElementById('reset-map').addEventListener('click', function() {
  map.setView([50.9875, 4.5147], 14);
  allMarkers.forEach(marker => {
    if (!map.hasLayer(marker)) { //alle markers die momenteel niet zichtbaar zijn
      map.addLayer(marker); //toon deze markers^
    }
  });
});
document.getElementById('zoom-in').addEventListener('click', function() {
  map.zoomIn();
});

document.getElementById('zoom-out').addEventListener('click', function() {
  map.zoomOut();
});

// Functie om de zichtbaarheid van de zoomknoppen te beheren
function updateZoomButtons() {
  const zoomInButton = document.getElementById('zoom-in');
  const zoomOutButton = document.getElementById('zoom-out');

  // Controleer of inzoomen mogelijk is
  if (map.getZoom() < map.getMaxZoom()) {
    zoomInButton.style.display = 'block'; // Toon de knop voor inzoomen
  } else {
    zoomInButton.style.display = 'none'; // Verberg de knop voor inzoomen
  }

  // Controleer of uitzoomen mogelijk is
  if (map.getZoom() > map.getMinZoom()) {
    zoomOutButton.style.display = 'block'; // Toon de knop voor uitzoomen
  } else {
    zoomOutButton.style.display = 'none'; // Verberg de knop voor uitzoomen
  }
}

// Call de functie elke keer dat de zoom verandert
map.on('zoomend', function() {
  updateZoomButtons();
});

// Initieel de zichtbaarheid van de knoppen bij pagina laden
updateZoomButtons();

//---------------Echter streetview--------------------
  // Voeg de OpenStreetMap tegellaag toe
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

//---------------Onze kaart--------------------
  var imageUrl = 'images/kaart.svg';  
  var imageOverlay = L.imageOverlay(imageUrl, imageBounds).addTo(map);

  // Voeg een CSS-klasse toe om de afbeelding te draaien
  imageOverlay.getElement().classList.add('leaflet-rotated');

//---------------Markers--------------------
  // Voeg markers toe voor de hoeken
  /*L.marker([50.98717954450199, 4.495553970336915]).addTo(map).bindPopup('Linkerbovenhoek');
  L.marker([50.9886383295914, 4.529027938842774]).addTo(map).bindPopup('Rechteronderhoek');
  L.marker([50.995580437743314, 4.517011642456056]).addTo(map).bindPopup('Rechterbovenhoek');
  L.marker([50.978074609081055, 4.508256912231446]).addTo(map).bindPopup('Linkeronderhoek');*/

  // Voeg een rechthoek toe om de grenzen aan te geven
  //L.polygon(imageBounds, {color: "red", weight: 1}).addTo(map);

//---------------Coordinaten zoeken--------------------
  // Voeg een klikgebeurtenis toe om de coördinaten weer te geven
  map.on('click', function(e) {
    var coord = e.latlng;
    var lat = coord.lat;
    var lng = coord.lng;
    alert("Je hebt geklikt op de coördinaten: " + lat + ", " + lng);
  });

  //---------------Locatie van de gebruiker--------------------

// Functie om de locatie van de gebruiker te verkrijgen en weer te geven
map.locate({ setView: true, maxZoom: 16 });  // Stel de kaart in om de locatie van de gebruiker te tonen met een maximum zoomniveau van 16

// Event listener wanneer de locatie van de gebruiker is gevonden
map.on('locationfound', function(e) {
    // Voeg een marker toe voor de locatie van de gebruiker
    var userMarker = L.marker(e.latlng).addTo(map);

    // Voeg een popup toe die de gebruiker informeert over hun locatie
    userMarker.bindPopup("U bent hier.").openPopup();
});

// Event listener voor als de locatie niet gevonden kan worden
map.on('locationerror', function(e) {
    alert("Locatie kan niet worden gevonden. Om uw locatie te kunnen vinden, moet u de locatie-instellingen van uw browser inschakelen.");
});

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

//-------------------- Marker iconen -------------------
var parkingIcon = L.icon({
  iconUrl: 'images/icon_parking.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

var eventIcon = L.icon({
  iconUrl: 'images/icon_event.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

//Horeca
var strandbarIcon = L.icon({
  iconUrl: 'images/icon_horeca.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

var strandkioskIcon = L.icon({
  iconUrl: 'images/icon_strandkiosk.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

var zomerlustIcon = L.icon({
  iconUrl: 'images/icon_zomerlust.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

var toiletIcon = L.icon({
  iconUrl: 'images/icon_toilet.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

var doucheIcon = L.icon({
  iconUrl: 'images/icon_douches.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

// ------------------- Markers -------------------
// Horeca
var horecaMarkerStrandbar = L.marker([50.985634754671985, 4.516260623931886], { icon: strandbarIcon }).addTo(map);
horecaMarkerStrandbar.type = 'horeca';

var horecaMarkerZomerlust = L.marker([50.98277939632882, 4.510990083217622], { icon: zomerlustIcon }).addTo(map);
horecaMarkerZomerlust.type = 'horeca';

var horecaMarkerStrandkiosk = L.marker([ 50.98411029466692, 4.514678120613099], { icon: strandkioskIcon }).addTo(map);
horecaMarkerStrandkiosk.type = 'horeca';

// Eventmarkers
var eventMarkerEvenementenweide = L.marker([50.9831659968704, 4.5079585038344145], { icon: eventIcon }).addTo(map);
eventMarkerEvenementenweide.type = 'event';

var eventMarkerSportimonium = L.marker([50.98680139323165, 4.516255259513856], { icon: eventIcon }).addTo(map);
eventMarkerSportimonium.type = 'event';

var eventMarkerVergaderzaal = L.marker([50.987026032162305, 4.515922665596009], { icon: eventIcon }).addTo(map);
eventMarkerVergaderzaal.type = 'event';

var eventMarkerSerre = L.marker([50.98561797006336, 4.516198933124543], { icon: eventIcon }).addTo(map);
eventMarkerSerre.type = 'event';

var eventMarkerStrandhuis = L.marker([50.98537994500934, 4.51627403497696], { icon: eventIcon }).addTo(map);
eventMarkerStrandhuis.type = 'event';

var eventMarkerStrandzone = L.marker([50.986191606564894, 4.515712479729678], { icon: eventIcon }).addTo(map);
eventMarkerStrandzone.type = 'event';

var eventMarkerOudVoetbalveld = L.marker([50.98085433336773, 4.506029835797888], { icon: eventIcon }).addTo(map);
eventMarkerOudVoetbalveld.type = 'event';

// Parkeermarkers
var parkingMarkerA = L.marker([50.986136341897186, 4.497790932655335], { icon: parkingIcon }).addTo(map);
parkingMarkerA.type = 'parking';

var parkingMarkerB = L.marker([50.98393345077176, 4.503209715489184], { icon: parkingIcon }).addTo(map);
parkingMarkerB.type = 'parking';

var parkingMarkerE = L.marker([50.985335068286396, 4.518384581268919], { icon: parkingIcon }).addTo(map);
parkingMarkerE.type = 'parking';

var parkingMarkerD = L.marker([50.9795492747968, 4.508751368038711], { icon: parkingIcon }).addTo(map);
parkingMarkerD.type = 'parking';

var parkingMarkerSportcomplex = L.marker([50.98375722468085, 4.5052900212819225], { icon: parkingIcon }).addTo(map);
parkingMarkerSportcomplex.type = 'parking';

//Activiteiten & sport


//Wandelroutes

// Cultuur & sportlocaties

// Toiletten
var toiletMarker = L.marker([50.984454251754734, 4.5148720245430916], { icon: toiletIcon }).addTo(map);
toiletMarker.type = 'toilet';

// Alle markers opslaan
var allMarkers = [
  parkingMarkerA, parkingMarkerB, parkingMarkerE, parkingMarkerD, parkingMarkerSportcomplex,
  eventMarkerEvenementenweide, eventMarkerVergaderzaal, eventMarkerSportimonium, eventMarkerSerre, eventMarkerStrandhuis, eventMarkerStrandzone, eventMarkerOudVoetbalveld, 
  horecaMarkerStrandbar, horecaMarkerZomerlust, horecaMarkerStrandkiosk,


];

// ------------------- Filterfunctie -------------------
function toggleMarkersByType(type) {
  allMarkers.forEach(marker => {
    if (marker.type === type) {
      map.addLayer(marker);
    } else {
      map.removeLayer(marker);
    }
  });
}

// Object om bij te houden welke types zichtbaar zijn
var visibilityStatus = {
  parking: true,
  toilet: true,
  activiteit: true
};

// ------------------- Knoppen koppelen -------------------
document.getElementById('filterHoreca').addEventListener('click', function() {
  toggleMarkersByType('horeca');
});

document.getElementById('filterEventlocaties').addEventListener('click', function() {
  toggleMarkersByType('event');
});

document.getElementById('filterParking').addEventListener('click', function() {
  toggleMarkersByType('parking');
});

document.getElementById('filterToiletten').addEventListener('click', function() {
  toggleMarkersByType('toilet');
  overlay.classList.remove('active');
});