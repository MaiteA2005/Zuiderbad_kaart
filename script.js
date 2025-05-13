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


  //---------------Knoppen zoemen--------------------
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
  /*L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);*/

//---------------Onze kaart--------------------
  // Voeg de zelfgemaakte kaart als een afbeelding-overlay toe
  var imageUrl = 'images/kaart_8.png';  
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

  /*-----------------------Script overlay----------------------------*/


const openBtn = document.getElementById('open-custom-overlay');
const overlay = document.getElementById('custom-overlay');

// Open overlay
openBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  overlay.classList.add('active');
});

overlay.addEventListener('click', () => {
  overlay.classList.remove('active');
});


// Stop klikbubbels binnen de overlay (knoppen en andere elementen)
Array.from(overlay.children).forEach((child) => {
  child.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

const closeBtn = document.getElementById('close-overlay');

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
});

//------------------------iconen plaatsen------------------------------------------
// Maak één custom icon voor parking
var parkingIcon = L.icon({
  iconUrl: 'images/parking_icon.png',  // Hetzelfde PNG bestand voor alle parkeermarkers
  iconSize: [38, 50],  // grootte van de afbeelding [breedte, hoogte]
  iconAnchor: [20, 40],  // het "puntje" van de marker (onderaan in het midden)
  popupAnchor: [0, -40]  // waar de popup opent relatief tot het icoon
});

// Maak verschillende parkeermarkers met hetzelfde icoon
var parkingMarker1 = L.marker([50.985, 4.51], { icon: parkingIcon }).addTo(map);
parkingMarker1.type = 'parking';

var parkingMarker2 = L.marker([50.985, 4.515], { icon: parkingIcon }).addTo(map);
parkingMarker2.type = 'parking';

var parkingMarker3 = L.marker([50.986, 4.52], { icon: parkingIcon }).addTo(map);
parkingMarker3.type = 'parking';

// Andere types (toilet en activiteit)
var toiletMarker = L.marker([50.986, 4.512]).addTo(map);
toiletMarker.type = 'toilet';

var activiteitMarker = L.marker([50.988, 4.515]).addTo(map);
activiteitMarker.type = 'activiteit';

// Alles opslaan in een array
var allMarkers = [parkingMarker1, parkingMarker2, parkingMarker3, toiletMarker, activiteitMarker];

// Object om bij te houden welke types zichtbaar zijn
var visibilityStatus = {
  parking: true,
  toilet: true,
  activiteit: true
};

// Algemene toggle functie om markers per type te tonen of verbergen
function toggleMarkersByType(type) {
  // Zet eerst alles op false zodat alle markers verborgen worden
  allMarkers.forEach(function(marker) {
    if (marker.type !== type) {
      map.removeLayer(marker); // Verwijder markers die niet bij het type horen
    }
  });

  // Voeg de markers van het geselecteerde type toe aan de kaart
  allMarkers.forEach(function(marker) {
    if (marker.type === type) {
      map.addLayer(marker);  // Voeg markers van het geselecteerde type toe
    }
  });
}

// Koppel knoppen aan de juiste type
document.getElementById('filterParking').addEventListener('click', function() {
  toggleMarkersByType('parking');
});

document.getElementById('filterToilet').addEventListener('click', function() {
  toggleMarkersByType('toilet');
});

document.getElementById('filterActiviteiten').addEventListener('click', function() {
  toggleMarkersByType('activiteit');
});

