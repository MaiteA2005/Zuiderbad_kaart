document.getElementById('info-overlay-toggle-btn').addEventListener('click', function(e) {
  e.stopPropagation(); // voorkom dat de header click mee gaat
  document.getElementById('info-overlay').classList.toggle('open');
});

document.getElementById('info-overlay-close-btn').addEventListener('click', function(e) {
  e.stopPropagation();
  document.getElementById('info-overlay').style.display = 'none';
  document.getElementById('info-overlay').classList.remove('open');
  document.getElementById('info-overlay-close-btn').style.display = 'none';
  document.getElementsByClassName('nav_up')[0].style.display = 'flex';
});





function openInfoOverlay(title, content) {
  document.getElementById('info-overlay-title').innerText = title;
  document.getElementById('info-overlay-content').innerHTML = content;
  document.getElementById('info-overlay').style.display = 'block';
  document.getElementById('info-overlay').classList.add('open');
  document.getElementById('info-overlay-close-btn').style.display = 'flex';

  document.getElementsByClassName('nav_up')[0].style.display = 'none';
}



horecaMarkerStrandbar.on('click', function(e) {
  map.setView(e.latlng, 18);
  openInfoOverlay(
    'Zuiderbad Strandbar',
    `<p>Geniet van een verfrissend drankje aan het water.</p>
     <p><strong>Advies:</strong> Vergeet je zonnebril niet!</p>
     <div class="info-overlay-information">
     <a href="#" target="_blank">Meer informatie over de strandbar</a>
     <img src="images/go_advies.svg" alt="Zuiderbad Strandbar" />
     </div>`
     
  );
});
