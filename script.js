//De coördinaten van de hoeken van de afbeelding (nu in decimale coördinaten)
var imageBounds = [
  [50.98717954450199, 4.495553970336915],  // Linkerbovenhoek
  [50.995580437743314, 4.517011642456056], // Rechterbovenhoek
  [50.9886383295914, 4.529027938842774],   // Rechteronderhoek
  [50.978074609081055, 4.508256912231446]  // Linkeronderhoek
];

//Maak de kaart en stel het initiële zoomniveau in
var map = L.map('map', {
  center: [50.9875, 4.5147],  // Dit is ongeveer het midden van de afbeelding
  zoom: 14,                   // Beginzoomniveau
  minZoom: 14,                // Minimum zoomniveau
  maxZoom: 20,                // Maximum zoomniveau
  maxBounds: imageBounds,
  zoomControl: false       // Stel de maximale grenzen in
});

//---------------Onze kaart + wandelpaden/looproutes--------------------
  var imageUrl = 'images/kaart.svg';
  var alleWandelroutes_kaart = 'images/alleWandelroutes_kaart.svg';
  var domeinpad_kaart = 'images/domeinpad_kaart.svg';
  var historischpad_kaart = 'images/historischpad_kaart.svg';
  var ijsvogelpad_kaart = 'images/ijsvogelpad_kaart.svg';
  var looproute3_kaart = 'images/looproute(3,2)_kaart.svg';
  var looproute4_kaart = 'images/looproute(4,5)_kaart.svg';
  var looproute5_kaart = 'images/looproute(5)_kaart.svg';
  var MBTroute_kaart = 'images/MTBroute_kaart.svg';
  var imageOverlay = L.imageOverlay(imageUrl, imageBounds).addTo(map);

  // Voeg een CSS-klasse toe om de afbeelding te draaien
  imageOverlay.getElement().classList.add('leaflet-rotated');

//---------------Markers--------------------
  // Voeg markers toe voor de hoeken
  // L.marker([50.98717954450199, 4.495553970336915]).addTo(map).bindPopup('Linkerbovenhoek');
  // L.marker([50.9886383295914, 4.529027938842774]).addTo(map).bindPopup('Rechteronderhoek');
  // L.marker([50.995580437743314, 4.517011642456056]).addTo(map).bindPopup('Rechterbovenhoek');
  // L.marker([50.978074609081055, 4.508256912231446]).addTo(map).bindPopup('Linkeronderhoek');

//---------------Knoppen reset en zoemen--------------------
document.getElementById('reset-map').addEventListener('click', function() {
  map.setView([50.9875, 4.5147], 14);
  allMarkers.forEach(marker => {
    if (!map.hasLayer(marker)) { //alle markers die momenteel niet zichtbaar zijn
      map.addLayer(marker); //toon deze markers^
    }
  });
  if (map.hasLayer(imageOverlay)) {
    map.removeLayer(imageOverlay);
  } 
  imageOverlay = L.imageOverlay(imageUrl, imageBounds).addTo(map); //reset de kaart
});
document.getElementById('zoom-in').addEventListener('click', function() {
  map.zoomIn();
});
document.getElementById('zoom-out').addEventListener('click', function() {
  map.zoomOut();
});

//Functie om de zichtbaarheid van de zoomknoppen te beheren
function updateZoomButtons() {
  const zoomInButton = document.getElementById('zoom-in');
  const zoomOutButton = document.getElementById('zoom-out');

  //Controleer of inzoomen mogelijk is
  if (map.getZoom() < map.getMaxZoom()) {
    zoomInButton.style.display = 'block'; // Toon de knop voor inzoomen
  } else {
    zoomInButton.style.display = 'none'; // Verberg de knop voor inzoomen
  }

  //Controleer of uitzoomen mogelijk is
  if (map.getZoom() > map.getMinZoom()) {
    zoomOutButton.style.display = 'block'; // Toon de knop voor uitzoomen
  } else {
    zoomOutButton.style.display = 'none'; // Verberg de knop voor uitzoomen
  }
}

//Call de functie elke keer dat de zoom verandert
map.on('zoomend', function() {
  updateZoomButtons();
});
updateZoomButtons();//Initieel de zichtbaarheid van de knoppen bij pagina laden

//---------------Echte streetview--------------------
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

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
//Parking
var parkingIcon = L.icon({
  iconUrl: 'images/icon_parking.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});
var ingangIcon = L.icon({
  iconUrl: 'images/icon_ingang.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});
var betaalterminalIcon = L.icon({
  iconUrl: 'images/icon_betaalautomaat.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});
//Eventlocaties
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
//Sanitair
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
var kleedkamersIcon = L.icon({
  iconUrl: 'images/icon_kleedkamers.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});
//Activiteiten & sport
var basketbalIcon = L.icon({
  iconUrl: 'images/icon_basket.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});
var boogschietenIcon = L.icon({
  iconUrl: 'images/icon_boogschieten.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});
var hoogtouwenparcoursIcon = L.icon({
  iconUrl: 'images/icon_hoogteparcours.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});
var speeltuinIcon = L.icon({ //Megaspeeltuin - Piratenspeeltuin
  iconUrl: 'images/icon_speeltuin.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});
var MTBIcon = L.icon({
  iconUrl: 'images/icon_MTB.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});
var muurklimmenIcon = L.icon({
  iconUrl: 'images/icon_klimmuur.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});
var openwaterzwemmenIcon = L.icon({
  iconUrl: 'images/icon_openwaterzwemmen.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});
var pingpongIcon = L.icon({
  iconUrl: 'images/icon_pingpong.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});
var skaterampIcon = L.icon({
  iconUrl: 'images/icon_skatepark.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});
var voetbalveldIcon = L.icon({
  iconUrl: 'images/icon_voetbal.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});
var waterpretparkIcon = L.icon({
  iconUrl: 'images/icon_waterpark.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});
var zensportplatformIcon = L.icon({
  iconUrl: 'images/icon_zensportplatform.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});
//Cutuur & sportlocaties
var sportIcon = L.icon({ //sportcomplex - sportverblijf - sportweide - uitleendienst
  iconUrl: 'images/icon_sport.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});
// var documentatiecentrumIcon = L.icon({
//   iconUrl: 'images/icon_documentatiecentrum.png',
//   iconSize: [38, 50],
//   iconAnchor: [20, 40],
//   popupAnchor: [0, -40]
// });
var hondenweideIcon = L.icon({
  iconUrl: 'images/icon_hond.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});
var survivalIcon = L.icon({
  iconUrl: 'images/icon_survivalkamp.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});
var zeilclubIcon = L.icon({
  iconUrl: 'images/icon_zeilen.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});
//
var wandelIcon = L.icon({
  iconUrl: 'images/icon_wandelen.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});
var EHBOIcon = L.icon({
  iconUrl: 'images/icon_EHBO.png',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});
// ------------------- Markers -------------------
//Horeca
var horecaMarkerStrandbar = L.marker([50.98557, 4.5157], { icon: strandbarIcon }).addTo(map);
horecaMarkerStrandbar.types = ['horeca'];
var horecaMarkerZomerlust = L.marker([50.98279, 4.51064], { icon: zomerlustIcon }).addTo(map);
horecaMarkerZomerlust.types = ['horeca'];
var horecaMarkerStrandkiosk = L.marker([50.9842, 4.5143], { icon: strandkioskIcon }).addTo(map);
horecaMarkerStrandkiosk.types = ['horeca'];
//Eventmarkers
var eventMarkerEvenementenweide = L.marker([50.98317, 4.50796], { icon: eventIcon }).addTo(map);
eventMarkerEvenementenweide.types = ['event'];
var eventMarkerSportimonium = L.marker([50.98666, 4.51598], { icon: eventIcon }).addTo(map);
eventMarkerSportimonium.types = ['event'];
var eventMarkerVergaderzaal = L.marker([50.98689, 4.51569], { icon: eventIcon }).addTo(map);
eventMarkerVergaderzaal.types = ['event'];
var eventMarkerSerre = L.marker([50.98552, 4.51563], { icon: eventIcon }).addTo(map);
eventMarkerSerre.types = ['event'];
var eventMarkerStrandhuis = L.marker([50.98527, 4.51578], { icon: eventIcon }).addTo(map);
eventMarkerStrandhuis.types = ['event'];
var eventMarkerStrandzone = L.marker([50.98608, 4.51551], { icon: eventIcon }).addTo(map);
eventMarkerStrandzone.types = ['event'];
var eventMarkerOudVoetbalveld = L.marker([50.98075, 4.50637], { icon: eventIcon }).addTo(map);
eventMarkerOudVoetbalveld.types = ['event'];
//Parkeermarkers
var parkingMarkerA = L.marker([50.98672, 4.49802], { icon: parkingIcon }).addTo(map);
parkingMarkerA.types = ['parking'];
var ingangMarkerA = L.marker([50.987912566298824, 4.497474431991578], { icon: ingangIcon }).addTo(map);
ingangMarkerA.types = ['parking'];
var parkingMarkerB = L.marker([50.98412, 4.50338], { icon: parkingIcon }).addTo(map);
parkingMarkerB.types = ['parking'];
var ingangMarkerB = L.marker([50.98388038152604, 4.503541588783265], { icon: ingangIcon }).addTo(map);
ingangMarkerB.types = ['parking'];
var parkingMarkerE = L.marker([50.98527, 4.51835], { icon: parkingIcon }).addTo(map);
parkingMarkerE.types = ['parking'];
var ingangMarkerE = L.marker([50.985943748848975, 4.519549012184144], { icon: ingangIcon }).addTo(map);
ingangMarkerE.types = ['parking'];
var parkingMarkerD = L.marker([50.97957, 4.50878], { icon: parkingIcon }).addTo(map);
parkingMarkerD.types = ['parking'];
var ingangMarkerD = L.marker([50.979753653065636, 4.506293535232545], { icon: ingangIcon }).addTo(map);
ingangMarkerD.types = ['parking'];
var parkingMarkerSportcomplex = L.marker([50.98384, 4.50519], { icon: parkingIcon }).addTo(map);
parkingMarkerSportcomplex.types = ['parking'];
var ingangMarkerC = L.marker([50.982340417116006, 4.504458904266358], { icon: ingangIcon }).addTo(map);
ingangMarkerC.types = ['parking'];
//Betaalterminals
var betaalterminalMarker1 = L.marker([50.98320842346658, 4.51439380645752], { icon: betaalterminalIcon }).addTo(map);
betaalterminalMarker1.types = ['parking', 'betaalterminal'];
var betaalterminalMarker2 = L.marker([50.9857715209928, 4.518867731094361], { icon: betaalterminalIcon }).addTo(map);
betaalterminalMarker2.types = ['parking', 'betaalterminal'];
var betaalterminalMarker3 = L.marker([50.98253330770319, 4.512966871261598], { icon: betaalterminalIcon }).addTo(map);
betaalterminalMarker3.types = ['parking', 'betaalterminal'];
var betaalterminalMarker4 = L.marker([50.979346365935555, 4.507120996713639], { icon: betaalterminalIcon }).addTo(map);
betaalterminalMarker4.types = ['parking', 'betaalterminal'];
var betaalterminalMarker5 = L.marker([50.98387019598249, 4.50366497039795], { icon: betaalterminalIcon }).addTo(map);
betaalterminalMarker5.types = ['parking', 'betaalterminal'];
//Activiteiten & sport
var basketVoetbalMarker = L.marker([50.98238462833598, 4.506588578224183], { icon: basketbalIcon }).addTo(map);
basketVoetbalMarker.types = ['activiteit', 'basketVoetbal'];
var boogschietenMarker = L.marker([50.98328097641515, 4.506073594093324], { icon: boogschietenIcon }).addTo(map);
boogschietenMarker.types = ['activiteit', 'boogschieten'];
var finsePistMarker = L.marker([50.98651911759529, 4.518476261767087], { icon: wandelIcon }).addTo(map);
finsePistMarker.types = ['activiteit', 'finsePiste'];
var hoogtouwenparcoursMarker = L.marker([50.98431609117996, 4.504517912864686], { icon: hoogtouwenparcoursIcon }).addTo(map);
hoogtouwenparcoursMarker.types = ['activiteit', 'hoogtouwenparcours'];
var megaSpeeltuinMarker = L.marker([50.98268883746178, 4.511314630508424], { icon: speeltuinIcon }).addTo(map);
megaSpeeltuinMarker.types = ['activiteit', 'megaspeeltuin'];
var muurklimmenMarker = L.marker([50.98340925174416, 4.505848288536073], { icon: muurklimmenIcon }).addTo(map);
muurklimmenMarker.types = ['activiteit', 'muurklimmen'];
var openwaterzwemmenMarker = L.marker([50.984424278799814, 4.512274861335755], { icon: openwaterzwemmenIcon }).addTo(map);
openwaterzwemmenMarker.types = ['activiteit', 'openwaterzwemmen'];
var pingpongMarker = L.marker([50.98360862237425, 4.505816102027894], { icon: pingpongIcon }).addTo(map);
pingpongMarker.types = ['activiteit', 'pingpong'];
var piratenSpeeltuinMarker = L.marker([50.983944675917876, 4.513455033302308], { icon: speeltuinIcon }).addTo(map);
piratenSpeeltuinMarker.types = ['activiteit', 'piratenspeeltuin'];
var skaterampMarker = L.marker([50.98329448033371, 4.506408870220185], { icon: skaterampIcon }).addTo(map);
skaterampMarker.types = ['activiteit', 'skateramp'];
var voetbalveldMarker = L.marker([50.9841065666959, 4.505711495876313], { icon: voetbalveldIcon }).addTo(map);
voetbalveldMarker.types = ['activiteit', 'voetbalveld'];
var waterpretparkMarker = L.marker([50.98346581850775, 4.512130022048951], { icon: waterpretparkIcon }).addTo(map);
waterpretparkMarker.types = ['activiteit', 'waterpretpark'];
var zensportplatformMarker = L.marker([50.98769910880914, 4.513029603571903], { icon: zensportplatformIcon }).addTo(map);
zensportplatformMarker.types = ['activiteit', 'zensportplatform'];
// Cultuur & sportlocaties
var documentatiecentrumMarker = L.marker([50.98630890987, 4.517129659652711], { icon: sportIcon }).addTo(map);
documentatiecentrumMarker.types = ['cultuur', 'documentatiecentrum'];
var hondenweideMarker = L.marker([50.989371343719, 4.502254128456117], { icon: hondenweideIcon }).addTo(map);
hondenweideMarker.types = ['cultuur', 'hondenweide'];
var sportcomplexMarker = L.marker([50.98706159632641, 4.497211575508119], { icon: sportIcon }).addTo(map);
sportcomplexMarker.types = ['cultuur', 'sportcomplex'];
var sportverblijfMarker = L.marker([50.98383993387205, 4.505513012409211], { icon: sportIcon }).addTo(map);
sportverblijfMarker.types = ['cultuur', 'sportverblijf'];
var sportweideMarker = L.marker([50.98194033672298, 4.507720470428468], { icon: sportIcon }).addTo(map);
sportweideMarker.types = ['cultuur', 'sportweide'];
var survivalkampMarker = L.marker([50.98541062997392, 4.505188465118409], { icon: survivalIcon }).addTo(map);
survivalkampMarker.types = ['cultuur', 'survivalkamp'];
var uitleendienstMarker = L.marker([50.987301371188366, 4.5168399810791025], { icon: sportIcon }).addTo(map);
uitleendienstMarker.types = ['cultuur', 'uitleendienst'];
var zeilclubMarker = L.marker([50.98456104612578, 4.506390094757081], { icon: zeilclubIcon }).addTo(map);
zeilclubMarker.types = ['cultuur', 'zeilclub'];
// Toiletten
var toilet1Marker = L.marker([50.985454343982965, 4.5159788914792385], { icon: toiletIcon }).addTo(map);
toilet1Marker.type = 'toilet';
var toilet2Marker = L.marker([50.982655090237145, 4.510526353483929], { icon: toiletIcon }).addTo(map);
toilet2Marker.type = 'toilet';
//Openbare douches
var doucheMarker = L.marker([50.985099592014066, 4.515268206596375], { icon: doucheIcon }).addTo(map);
doucheMarker.type = 'douche';
//Kleedkamers
var kleedkamers1Marker = L.marker([50.98632156606132, 4.5161622835904955], { icon: kleedkamersIcon }).addTo(map);
kleedkamers1Marker.type = 'kleedkamers';
var kleedkamers2Marker = L.marker([50.984185859372815, 4.506065830925175], { icon: kleedkamersIcon }).addTo(map);
kleedkamers2Marker.type = 'kleedkamers';
var EHBOMarker = L.marker([50.98512996684507, 4.515520334243775], { icon: EHBOIcon }).addTo(map);
EHBOMarker.type = 'EHBO';
//Alle markers opslaan
var allMarkers = [
  //Horeca
  horecaMarkerStrandbar, horecaMarkerZomerlust, horecaMarkerStrandkiosk,
  //Eventlocaties
  eventMarkerEvenementenweide, eventMarkerVergaderzaal, eventMarkerSportimonium, eventMarkerSerre, eventMarkerStrandhuis, eventMarkerStrandzone, eventMarkerOudVoetbalveld, 
  //Parking
  parkingMarkerA, parkingMarkerB, parkingMarkerE, parkingMarkerD, parkingMarkerSportcomplex,
  ingangMarkerA, ingangMarkerB, ingangMarkerC, ingangMarkerD, ingangMarkerE,
  betaalterminalMarker1, betaalterminalMarker2, betaalterminalMarker3, betaalterminalMarker4, betaalterminalMarker5,
  //Activiteiten & sport
  basketVoetbalMarker, boogschietenMarker, finsePistMarker, hoogtouwenparcoursMarker, megaSpeeltuinMarker, muurklimmenMarker, openwaterzwemmenMarker, pingpongMarker, piratenSpeeltuinMarker, skaterampMarker, voetbalveldMarker, waterpretparkMarker, zensportplatformMarker,
  //Cultuur & sportlocaties
  documentatiecentrumMarker, hondenweideMarker, sportcomplexMarker, sportverblijfMarker, sportweideMarker, survivalkampMarker, uitleendienstMarker, zeilclubMarker,
  //Sanitair
  doucheMarker, toilet1Marker,toilet2Marker, kleedkamers1Marker, kleedkamers2Marker, EHBOMarker
];
// ------------------- Filterfunctie -------------------
function toggleMarkersByType(type) {
  allMarkers.forEach(marker => {
    const markerTypes = marker.types || [marker.type];
    if (markerTypes.includes(type)) {
      map.addLayer(marker);    // Toon marker
    } else {
      map.removeLayer(marker); // Verberg marker
    }
  });
}
// ------------------- Toggle functie voor de knoppen -------------------
function showPin(id, type) {
  document.getElementById(id).addEventListener('click', () => {
    toggleMarkersByType(type);
    overlay.classList.remove('active'); //het hoofmenu wordt gesloten
  });
}
// ------------------- Toggle functie voor wandelroutes -------------------
function showWandelroute(id, kaart) {
  document.getElementById(id).addEventListener('click', () => {
    imageOverlay = L.imageOverlay(kaart, imageBounds).addTo(map);
    overlay.classList.remove('active'); //het hoofmenu wordt gesloten
  });
}
// ------------------- Knoppen koppelen -------------------
//Horeca
document.getElementById('filterHoreca').addEventListener('click', function() {
  toggleMarkersByType('horeca');
});
//Eventlocaties
document.getElementById('filterEventlocaties').addEventListener('click', function() {
  toggleMarkersByType('event');
});
//Parking
document.getElementById('filterParking').addEventListener('click', function() {
  toggleMarkersByType('parking');
});
//Sanitair
showPin('filterToiletten', 'toilet');
showPin('filterDouche', 'douche');
showPin('filterKleedkamers', 'kleedkamers');
showPin('filterEHBO', 'EHBO');
//Activiteiten & sport
showPin('alleActiviteiten', 'activiteit'); //alle activiteiten
showPin('basketActiviteit', 'basketVoetbal');
showPin('boogschietActiviteit', 'boogschieten');
showPin('finsePisteActiviteit', 'finsePiste');
showPin('hoogtouwparcoursActiviteit', 'hoogtouwenparcours');
showPin('megaSpeeltuinActiviteit', 'megaspeeltuin');
showWandelroute('MTBActiviteit', MBTroute_kaart);
showPin('muurklimActiviteit', 'muurklimmen');
showPin('openwaterzwemmenActiviteit', 'openwaterzwemmen');
showPin('pinpongActiviteit', 'pingpong');
showPin('piratenspeeltuinActiviteit', 'piratenspeeltuin');
showPin('skaterampActiviteit', 'skateramp');
showPin('voetbalveldActiviteit', 'voetbalveld');
showPin('waterpretparkActiviteit', 'waterpretpark');
showPin('zensportplatformActiviteit', 'zensportplatform');
//Wandelroutes
showWandelroute('alleWandelroutes', alleWandelroutes_kaart);
showWandelroute('domeinpadWandelroute', domeinpad_kaart);
showWandelroute('historischpadWandelroute', historischpad_kaart);
showWandelroute('ijsvogelpadWandelroute', ijsvogelpad_kaart);
showWandelroute('loop3Wandelroute', looproute3_kaart);
showWandelroute('loop4Wandelroute', looproute4_kaart);
showWandelroute('loop5Wandelroute', looproute5_kaart);
//Cultuur & sportlocaties
document.getElementById('alleCultuur').addEventListener('click', function() {
  toggleMarkersByType('cultuur');
  //submenuCultuur.classList.remove('active'); --> het submenu 'cultuur en sportlocaties' blijft actief
  overlay.classList.remove('active');
});
showPin('documentatiecentrumCultuur', 'documentatiecentrum');
showPin('hondenweideCultuur', 'hondenweide');
showPin('sportcomplexCultuur', 'sportcomplex');
showPin('sportverblijfCultuur', 'sportverblijf');
showPin('sportweideCultuur', 'sportweide');
showPin('survivalkampCultuur', 'survivalkamp');
showPin('uitleendienstCultuur', 'uitleendienst');
showPin('zeilclubCultuur', 'zeilclub');