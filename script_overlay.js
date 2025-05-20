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
    `<div class="info-overlay-advice">
      <div class="speech-bubble">
        <img src="images/ballon_advies.svg" alt="Ballon achtergrond" class="ballon-bg" />
        <p>Een <b>gezellige plek</b> aan het water, met een <b>zomerse vibe.</b> Ideaal voor een <b>drankje of aperitiefje</b> met zicht op het water.</p>
      </div>
      <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
    </div>
    
    <div class="info-overlay-information">
    <a href=""#" target="_blank" class="info-overlay-button">Meer informatie over Zuiderbad Strandbar</a>
    <img src="images/go_advies.svg" alt="Sluiten" />
    </div>`

  );
});
