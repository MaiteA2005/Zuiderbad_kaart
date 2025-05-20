document.getElementById('info-overlay-toggle-btn').addEventListener('click', function(e) {
  e.stopPropagation(); // voorkom dat de header click mee gaat
  document.getElementById('info-overlay').classList.toggle('open');
});

document.getElementById('info-overlay-close-btn').addEventListener('click', function(e) {
  e.stopPropagation();
  document.getElementById('info-overlay').style.display = 'none';
});

function openInfoOverlay(title, content) {
  document.getElementById('info-overlay-title').innerText = title;
  document.getElementById('info-overlay-content').innerHTML = content;
  document.getElementById('info-overlay').style.display = 'block';
  document.getElementById('info-overlay').classList.add('open');
}


horecaMarkerStrandbar.on('click', function(e) {
  map.setView(e.latlng, 18);
  openInfoOverlay(
    'Zuiderbad Strandbar',
    `<p>Geniet van een verfrissend drankje aan het water.</p>
     <p><strong>Advies:</strong> Vergeet je zonnebril niet!</p>`
  );
});
