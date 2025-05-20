function openInfoOverlay(content) {
  document.getElementById('info-overlay-content').innerHTML = content;
  document.getElementById('info-overlay').style.display = 'block';
}

function closeInfoOverlay() {
  document.getElementById('info-overlay').style.display = 'none';
}

horecaMarkerStrandbar.on('click', function(e) {
  map.setView(e.latlng, 18);
  openInfoOverlay(`
    <h2>Zuiderbad Strandbar</h2>
    <p>Geniet van een verfrissend drankje en een gezellig terrasje met zicht op het water.</p>
    <p><strong>Advies:</strong> Neem voldoende zonnecrème mee en drink genoeg water bij warm weer!</p>
    <a href="https://www.zuiderbad.be" target="_blank">Informatie over zuiderbad</a>
  `);
});
