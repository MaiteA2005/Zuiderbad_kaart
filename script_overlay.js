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


//-------horeca markers------------------//
// Horeca marker 1
horecaMarkerStrandbar.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Zuiderbad Strandbar',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>gezellige plek</b> aan het water, met een <b>zomerse vibe.</b> Ideaal voor een <b>drankje of aperitiefje</b> met zicht op het water.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="#" target="_blank" class="info-overlay-button">Meer informatie over Zuiderbad Strandbar</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// Horeca marker 2
horecaMarkerZomerlust.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Zuiderbad Zomerlust',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>sfeerval</b> eet- en drinkplekje, iets <b>rustiger</b> dan de strandbar. Met een <b>relaxte</b> zomerse sfeer.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="#" target="_blank" class="info-overlay-button">Meer informatie over Zuiderbad Zomerlust</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// Horeca marker 3
horecaMarkerStrandkiosk.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Zuiderbad Strandkiosk',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>take-away</b> kiosk met <b>snacks</b> en verfrissende <b>drankjes.</b> Ideaal als tussendoortje voor <b>strandbezoekers.</b>
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="#" target="_blank" class="info-overlay-button">Meer informatie over Zuiderbad Strandkiosk</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

//-------event markers------------------//
// Event marker 1
eventMarkerEvenementenweide.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'De Evenementenweide',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Hier worden <b>diverse evenementen</b> georganiseerd. Een <b>levendige plek</b> voor jong en oud.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="#" target="_blank" class="info-overlay-button">Meer informatie over de Evenementenweide</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// Event marker 2
eventMarkerSportimonium.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Het Sportimonium',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>sportief</b> en <b>educatief</b> centrum met <b>activiteiten</b> voor jong en oud. Een <b>leuke plek</b> voor een dagje uit.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="#" target="_blank" class="info-overlay-button">Meer informatie over het Sportimonium</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// Event marker 3
eventMarkerVergaderzaal.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'De Vergaderzaal',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>flexibele vergaderzaal</b> voor <b>bijeenkomsten</b> en <b>evenementen</b>. Voorzien van alle gemakken.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="#" target="_blank" class="info-overlay-button">Meer informatie over de Vergaderzaal</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// Event marker 4
eventMarkerSerre.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'De Serre',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>gezellige serre</b> met een <b>uitzicht</b> op het water. Perfect voor een <b>ontspannen middag</b> met vrienden of familie.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="#" target="_blank" class="info-overlay-button">Meer informatie over de Serre</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// Event marker 5
eventMarkerStrandhuis.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Het Strandhuis',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>gezellig strandhuis</b> met een <b>uitgebreide menukaart</b>. Perfect voor een <b>lunch</b> of <b>diner</b> met uitzicht op het strand.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="#" target="_blank" class="info-overlay-button">Meer informatie over het Strandhuis</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// Event marker 6
eventMarkerStrandzone.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'De Strandzone',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>uitgestrekte strandzone</b>. Perfect voor een <b>dagje strand</b> met vrienden of familie.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="#" target="_blank" class="info-overlay-button">Meer informatie over de Strandzone</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// Event marker 7
eventHoogtouwenparcoursMarker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Het Hoogtouwenparcours',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>uitdagend hoogtouwenparcours</b> voor de avontuurlijke bezoekers. Perfect voor een <b>dagje uit</b> met vrienden of familie.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="#" target="_blank" class="info-overlay-button">Meer informatie over het Hoogtouwenparcours</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

//-------Parking------------------//
// parking marker 1
parkingMarkerA.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Parking A',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>handige parkeerplaats</b> dichtbij het sportcomplex. Deze parking is ook <b>gratis.</b>
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="#" target="_blank" class="info-overlay-button">Meer informatie over Parking A</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// ingang marker 1
ingangMarkerA.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Ingang A',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      De ingang naar hofstade is het <b>dichtsbij</b> als je op <b>Parking A</b> parkeert.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="#" target="_blank" class="info-overlay-button">Meer informatie over Ingang A</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// parking marker 2
parkingMarkerB.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Parking A',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>handige parkeerplaats</b> dichtbij het sportverblijf en de zeilclub. Deze parking is <b>betalend.</b>
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="#" target="_blank" class="info-overlay-button">Meer informatie over Parking B</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// ingang marker 2
ingangMarkerB.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Ingang B',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      De ingang naar hofstade is het <b>dichtsbij</b> als je op <b>Parking B</b> parkeert.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="#" target="_blank" class="info-overlay-button">Meer informatie over Ingang B</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// parking marker 3
parkingMarkerC.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Parking C',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>handige parkeerplaats</b> waar vooral bedoelt is voor <b>bussen en leveranciers.</b>
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="#" target="_blank" class="info-overlay-button">Meer informatie over Parking C</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// ingang marker 3
ingangMarkerC.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Ingang D',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>handige parkeerplaats</b> waar vooral bedoelt is voor <b>bussen en leveranciers.</b>
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="#" target="_blank" class="info-overlay-button">Meer informatie over Ingang C</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// parking marker 4
parkingMarkerD.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Parking D',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>handige parkeerplaats</b> dichtbij het <b>strand en Zuiderbad</b>. Deze parking is <b>betalend.</b>
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="#" target="_blank" class="info-overlay-button">Meer informatie over Parking D</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// ingang marker 4
ingangMarkerD.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Ingang D',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      De ingang naar hofstade is het <b>dichtsbij</b> als je op <b>Parking D</b> parkeert.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="#" target="_blank" class="info-overlay-button">Meer informatie over Ingang D</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// parking marker 5
parkingMarkerE.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Parking E',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>handige parkeerplaats</b> dichtbij het <b>strand en Zuiderbad</b>. Deze parking is <b>betalend.</b>
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="#" target="_blank" class="info-overlay-button">Meer informatie over Parking E</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// ingang marker 5
ingangMarkerE.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Ingang E',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      De ingang naar hofstade is het <b>dichtsbij</b> als je op <b>Parking E</b> parkeert.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="#" target="_blank" class="info-overlay-button">Meer informatie over Ingang E</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// parking marker 6
parkingMarkerSportcomplex.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Parking Sportcomplex',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>handige parkeerplaats</b> naast het <b>sportverblijf</b>. Deze parking is <b>betalend.</b>
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="#" target="_blank" class="info-overlay-button">Meer informatie over Parking Sportcomplex</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// betaalterminal 1
betaalterminalMarker1.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Betaalterminal',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>handige betaalterminal</b> om de betalende parking te betalen.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="#" target="_blank" class="info-overlay-button">Meer informatie over Betaalterminal</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// betaalterminal 2
betaalterminalMarker2.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Betaalterminal',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>handige betaalterminal</b> om de betalende parking te betalen.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="#" target="_blank" class="info-overlay-button">Meer informatie over Betaalterminal</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// betaalterminal 3
betaalterminalMarker3.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Betaalterminal',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>handige betaalterminal</b> om de betalende parking te betalen.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="#" target="_blank" class="info-overlay-button">Meer informatie over Betaalterminal</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// betaalterminal 4
betaalterminalMarker4.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Betaalterminal',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>handige betaalterminal</b> om de betalende parking te betalen.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="#" target="_blank" class="info-overlay-button">Meer informatie over Betaalterminal</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// betaalterminal 5
betaalterminalMarker5.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Betaalterminal',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>handige betaalterminal</b> om de betalende parking te betalen.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="#" target="_blank" class="info-overlay-button">Meer informatie over Betaalterminal</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

//-------Activiteiten------------------//
// Activiteiten marker 1
parkingMarkerA.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Parking A',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>handige parkeerplaats</b> dichtbij het sportcomplex. Deze parking is ook <b>gratis.</b>
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="#" target="_blank" class="info-overlay-button">Meer informatie over Parking A</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});