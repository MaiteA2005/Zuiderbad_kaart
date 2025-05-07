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
    maxBounds: imageBounds      // Stel de maximale grenzen in
  });

  // Voeg de OpenStreetMap tegellaag toe
  /*L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);*/

  // Voeg de zelfgemaakte kaart als een afbeelding-overlay toe
  var imageUrl = 'images/kaart_8.png';  // Het pad naar je afbeelding in de map 'images'
  var imageOverlay = L.imageOverlay(imageUrl, imageBounds).addTo(map);

  // Voeg een CSS-klasse toe om de afbeelding te draaien
  imageOverlay.getElement().classList.add('leaflet-rotated');

  // Voeg markers toe voor de hoeken
  L.marker([50.98717954450199, 4.495553970336915]).addTo(map).bindPopup('Linkerbovenhoek');
  L.marker([50.9886383295914, 4.529027938842774]).addTo(map).bindPopup('Rechteronderhoek');
  L.marker([50.995580437743314, 4.517011642456056]).addTo(map).bindPopup('Rechterbovenhoek');
  L.marker([50.978074609081055, 4.508256912231446]).addTo(map).bindPopup('Linkeronderhoek');

  // Voeg een rechthoek toe om de grenzen aan te geven
  //L.polygon(imageBounds, {color: "red", weight: 1}).addTo(map);

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

openBtn.addEventListener('click', () => {
  overlay.style.display = 'flex';
});

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
});
