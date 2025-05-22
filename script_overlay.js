// Klik op de toggle button (kruisje bovenaan in de overlay)
document.getElementById('info-overlay-toggle-btn').addEventListener('click', function(e) {
  e.stopPropagation();
  const overlay = document.getElementById('info-overlay');

  // Overlay sluiten
  overlay.style.display = 'none';
  overlay.classList.remove('open');
  document.getElementsByClassName('nav_up')[0].style.display = 'flex';
});

// Functie om overlay te openen met specifieke inhoud
function openInfoOverlay(title, content) {
  const overlay = document.getElementById('info-overlay');

  document.getElementById('info-overlay-title').innerText = title;
  document.getElementById('info-overlay-content').innerHTML = content;

  overlay.style.display = 'block';
  overlay.classList.add('open');
  document.getElementsByClassName('nav_up')[0].style.display = 'none';
}

// Voorbeeld horeca marker click event
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
      <a href="informatie_pages/horeca/zuiderbad_strandbar.html" class="info-overlay-button">Meer informatie over Zuiderbad Strandbar</a>
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
      Een <b>sfeerval</b> eet- en drinkplekje, iets <b>rustiger</b> dan de strandbar. Met een <b>relaxe</b> zomerse sfeer.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/horeca/zuiderbad_zomerlust.html" class="info-overlay-button">Meer informatie over Zuiderbad Zomerlust</a>
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
  <a href="informatie_pages/horeca/zuiderbad_strandkiosk.html" class="info-overlay-button">Meer informatie over Zuiderbad Strandkiosk</a>
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
  <a href="informatie_pages/evenementlocaties/eventlocaties_eventweide.html" class="info-overlay-button">Meer informatie over de Evenementenweide</a>
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
  <a href="informatie_pages/evenementlocaties/eventlocaties_hetSportimonium.html" class="info-overlay-button">Meer informatie over het Sportimonium</a>
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
  <a href="informatie_pages/evenementlocaties/eventlocaties_deVergaderzaal.html" class="info-overlay-button">Meer informatie over de Vergaderzaal</a>
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
  <a href="informatie_pages/evenementlocaties/eventlocaties_deSerre.html" class="info-overlay-button">Meer informatie over de Serre</a>
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
  <a href="informatie_pages/evenementlocaties/eventlocaties_hetStrandhuis.html" class="info-overlay-button">Meer informatie over het Strandhuis</a>
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
  <a href="informatie_pages/evenementlocaties/eventlocaties_strandzone.html" class="info-overlay-button">Meer informatie over de Strandzone</a>
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
  <a href="informatie_pages/evenementlocaties/eventlocaties_hoogtouwenparcours.html" class="info-overlay-button">Meer informatie over het Hoogtouwenparcours</a>
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
  <a href="informatie_pages/parking/parking_A.html" class="info-overlay-button">Meer informatie over Parking A</a>
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
      De ingang naar hofstade is het <b>dichtsbijzijnd</b> als je op <b>Parking A</b> parkeert.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
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
  <a href="informatie_pages/parking/parking_B.html" class="info-overlay-button">Meer informatie over Parking B</a>
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
      De ingang naar hofstade is het <b>dichtsbijzijnd</b> als je op <b>Parking B</b> parkeert.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
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
  <a href="informatie_pages/parking/parking_C.html" class="info-overlay-button">Meer informatie over Parking C</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// ingang marker 3
ingangMarkerC.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Ingang C',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>handige parkeerplaats</b> waar vooral bedoelt is voor <b>bussen en leveranciers.</b>
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
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
  <a href="informatie_pages/parking/parking_D.html" class="info-overlay-button">Meer informatie over Parking D</a>
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
      De ingang naar hofstade is het <b>dichtsbijzijnd</b> als je op <b>Parking D</b> parkeert.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
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
  <a href="informatie_pages/parking/parking_E.html" class="info-overlay-button">Meer informatie over Parking E</a>
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
      De ingang naar hofstade is het <b>dichtsbijzijnd</b> als je op <b>Parking E</b> parkeert.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
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
  <a href="informatie_pages/parking/parking_sportcomplex.html" class="info-overlay-button">Meer informatie over Parking Sportcomplex</a>
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
      Een <b>handige terminal</b> om voor je parking te betalen.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/parking/parking_betaalterminals.html" class="info-overlay-button">Meer informatie over Betaalterminal</a>
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
      Een <b>handige terminal</b> om voor je parking te betalen.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/parking/parking_betaalterminals.html" class="info-overlay-button">Meer informatie over Betaalterminal</a>
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
      Een <b>handige terminal</b> om voor je parking te betalen.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/parking/parking_betaalterminals.html" class="info-overlay-button">Meer informatie over Betaalterminal</a>
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
      Een <b>handige terminal</b> om voor je parking te betalen.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/parking/parking_betaalterminals.html" class="info-overlay-button">Meer informatie over Betaalterminal</a>
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
      Een <b>handige terminal</b> om voor je parking te betalen.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/parking/parking_betaalterminals.html" class="info-overlay-button">Meer informatie over Betaalterminal</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

//-------Activiteiten------------------//
// Activiteiten marker 1
basketVoetbalMarker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'basket-en voetbalplein',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>basket-en voetbalplein</b> voor de sportieve bezoekers. Perfect voor een <b>potje basketbal</b> of <b>voetbal.</b>
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/activiteiten&sport/basket&voetbal.html" class="info-overlay-button">Meer informatie over basket-en voetbalplein</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// Activiteiten marker 2
boogschietenMarker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Boogschieten',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Het boogschietterrien waar je <b>veilig</b> kan leren boogschieten. Een <b>leuke activiteit</b> voor jong en oud.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/activiteiten&sport/boogschieten.html" class="info-overlay-button">Meer informatie over Boogschieten</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// Activiteiten marker 3
finsePistMarker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Finse Piste',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>zachte looproute</b> doorheen een groene omgeving. Ideaal voor <b>joggers en wandelaars.</b>
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/activiteiten&sport/finse_piste.html" class="info-overlay-button">Meer informatie over Finse Piste</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// Activiteiten marker 5
hoogtouwenparcoursMarker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Hoogtouwenparcours',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
Een <b>uitdagend hoogtouwenparcours</b> voor de avontuurlijke bezoekers. Perfect voor een <b>dagje uit</b> met vrienden of familie.    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/activiteiten&sport/hoogtouwenparcours.html" class="info-overlay-button">Meer informatie over Hoogtouwenparcours</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// Activiteiten marker 6
megaSpeeltuinMarker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Mega speeltuin',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>grote, avontuurlijke speeltuin</b> met klimtoestellen, glijbanen, schommels en meer.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/activiteiten&sport/mega_speeltuin.html" class="info-overlay-button">Meer informatie over Mega speeltuin</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// Activiteiten marker 7
muurklimmenMarker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Muurklimmen',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een klimmuur <b>geschikt voor verschillende leeftijden en niveaus</b>. Klimmen versterkt je lichaam én je focus. 
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/activiteiten&sport/muurklimmen.html" class="info-overlay-button">Meer informatie over Muurklimmen</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// Activiteiten marker 8
openwaterzwemmenMarker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Openwaterzwemmen',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>veilige omgeving</b> voor openwaterzwemmen. Voor beginners en ervaren zwemmers.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/activiteiten&sport/openwaterzwemmen.html" class="info-overlay-button">Meer informatie over Openwaterzwemmen</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// Activiteiten marker 9
pingpongMarker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Pingpongtafel',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een klassieke <b>outdoor pingpongtafel,</b> ideaal voor snelle spelletjes of intensieve duels.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/activiteiten&sport/pingpongtafel.html" class="info-overlay-button">Meer informatie over Pingpongtafel</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});


// Activiteiten marker 10
piratenSpeeltuinMarker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Piraten speeltuin',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Thema-speeltuin in <b>piratenstijl,</b> ideaal voor jonge avonturiers. Denk aan <b>klimrekken, schommels, glijbanen.</b>
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/activiteiten&sport/piratenspeeltuin.html" class="info-overlay-button">Meer informatie over Piraten speeltuin</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// Activiteiten marker 11
skaterampMarker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Skateramp',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Speciaal aangelegd <b>skategedeelte voor skaters, steppers of BMX’ers.</b> Geschikt voor beginners én meer ervaren riders.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/activiteiten&sport/skateramp.html" class="info-overlay-button">Meer informatie over Skateramp</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// Activiteiten marker 12
voetbalveldMarker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Voetbalveld',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>open grasveldje met doelen</b>, perfect voor een informeel potje voetbal of penalty’s trappen.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/activiteiten&sport/voetbalveld.html" class="info-overlay-button">Meer informatie over Voetbalveld</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// Activiteiten marker 13
waterpretparkMarker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Waterpretpark',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>waterpretpark</b> met <b>glijbanen en speeltoestellen.</b> Perfect voor een <b>verkoelende dag.</b>
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/activiteiten&sport/waterpark.html" class="info-overlay-button">Meer informatie over Waterpretpark</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// Activiteiten marker 14
zensportplatformMarker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Zensportplatform',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>rustige zone</b> voor <b>yoga, tai chi of andere mindful activiteiten</b>. Meestal in een <b>groene omgeving</b>.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/activiteiten&sport/zensportplatform.html" class="info-overlay-button">Meer informatie over Zensportplatform</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

//-------cultuur- & sportlocaties------------------//
// Activiteiten marker 1
documentatiecentrumMarker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Documentatiecentrum',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een plek vol informatie over sport, sportgeschiedenis en beweging. Educatief en interessant.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/cultuur&sportlocaties/documentatiecentrum.html" class="info-overlay-button">Meer informatie over Documentatiecentrum</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// Activiteiten marker 2
hondenweideMarker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Hondenweide',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Laat je hond <b>vriendjes</b> maken. De ideale plek voor <b>socialisatie.</b> Breng een speeltje mee en laat ze samen spelen.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/cultuur&sportlocaties/hondenweide.html" class="info-overlay-button">Meer informatie over Hondenweide</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// Activiteiten marker 3
sportcomplexMarker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Sportcomplex',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>sportcomplex</b> voor verschillende sporten. Ideaal voor recreatieve en competitieve sporters.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/cultuur&sportlocaties/sportcomplex.html" class="info-overlay-button">Meer informatie over Sportcomplex</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// Activiteiten marker 4
sportverblijfMarker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Sportverblijf',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      <b>Accommodatie voor sporters en groepen</b> die meerdaags op het domein verblijven. <b>Functioneel, sportief en gezellig.</b>
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/cultuur&sportlocaties/sportverblijf.html" class="info-overlay-button">Meer informatie over Sportverblijf</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// Activiteiten marker 5
sportweideMarker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Sportweide',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      <b>Open veld</b> geschikt voor verschillende <b>buitensporten of evenementen.</b> Ideaal voor spontane sportactiviteiten.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/cultuur&sportlocaties/sportweide.html" class="info-overlay-button">Meer informatie over Sportweide</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// Activiteiten marker 6
survivalkampMarker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Survivalkamp',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Uitdagend <b>parcours met hindernissen, modder en avontuur</b>. Hier test je kracht, moed en samenwerking.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/cultuur&sportlocaties/survivalkamp.html" class="info-overlay-button">Meer informatie over Survivalkamp</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// Activiteiten marker 7
uitleendienstMarker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Uitleendienst',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Hier kun je <b>sportmateriaal lenen</b> (ballen, rackets, pingpongbatjes enz.). Handig als je zelf niets bij hebt.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/cultuur&sportlocaties/uitleendienst.html" class="info-overlay-button">Meer informatie over Uitleendienst</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// Activiteiten marker 7
zeilclubMarker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Zeilclub',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Waterplezier op z’n best! Bij de zeilclub <b>leer je zeilen of neem je deel aan activiteiten</b> op het water.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/cultuur&sportlocaties/zeilclub.html" class="info-overlay-button">Meer informatie over Zeilclub</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

// Activiteiten marker 8
MTBMarker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Mountenbiken',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>uitdagend mountainbikeparcours</b> doorheen de bossen van Hofstade. Ideaal voor <b>avontuurlijke fietsers.</b>
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>

<div class="info-overlay-information">
  <a href="informatie_pages/cultuur&sportlocaties/mountainbike.html" class="info-overlay-button">Meer informatie over mountenbike</a>
  <img src="images/go_advies.svg" alt="Sluiten" />
</div>`
  );
});

//-------Sanitair-----------------//
//-------toiletten-----------------//
// toilet marker 1
toilet1Marker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Toilet',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>schoon toilet</b> dichtbij de <b>strandzone.</b>
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>
</div>`
  );
});

// toilet marker 2
toilet2Marker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Toilet',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>schoon toilet</b> dichtbij de <b>mega speeltuin.</b>
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>
</div>`
  );
});

// toilet marker 3
toilet3Marker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Toilet',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>schoon toilet</b> in het <b>sportcomplex.</b>
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>
</div>`
  );
});

// toilet marker 4
toilet4Marker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Toilet',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een <b>schoon toilet</b> dichtbij de <b>zeilclub en het survivalkamp.</b>
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>
</div>`
  );
});

//-------douches-----------------//
// douches marker 1
doucheMarker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Toilet',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Openbare douches voor <b>zwemmers</b> en <b>sporters.</b> Ideaal om je af te spoelen na een <b>dagje strand of sport.</b>
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>
</div>`
  );
});

//-------kleedkamers-----------------//
// kleedkamer marker 1
kleedkamers1Marker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Kleedkamer',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Kleedkamers voor <b>sporters</b> en <b>zwemmers.</b> Ideaal om je om te kleden voor een <b>dagje strand of sport.</b>
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>
</div>`
  );
});

// kleedkamer marker 2
kleedkamers2Marker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Kleedkamer',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Kleedkamers voor <b>sporters</b> en <b>zwemmers.</b> Ideaal om je om te kleden voor een <b>dagje strand of sport.</b>
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>
</div>`
  );
});

//-------EHBO-----------------//
// EHBO marker 1
EHBOMarker.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'EHBO',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      EHBO-post voor <b>noodgevallen</b> en <b>eerste hulp</b> bij ongevallen.
    </p>
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>
</div>`
  );
});


//-------Geschiedenis------------------//
// Geschiedenis 1
historieMarker1.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  
  window.location.href = "informatie_pages/geschiedenis/olympischeFakkel.html";

});

// Geschiedenis 2
historieMarker2.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  openInfoOverlay(
'Kunstwerk',
`<div class="info-overlay-advice">
  <div class="speech-bubble">
    <p>
      Een kunstwerk <b>zonder naam</b> en waarvan de maker <b>onbekend</b> is.
      <br>
      Zeker de moeite waard om te ontdekken.
    </p>
    
  </div>
  <img src="images/zon_plain.png" alt="Zonnetje" class="sun-icon" />
</div>
</div>`
  );
});

// Geschiedenis 3
historieMarker3.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  
  window.location.href = "informatie_pages/geschiedenis/bootshuis.html";

});

// Geschiedenis 4
historieMarker4.on('click', function(e) {
  map.setView([e.latlng.lat - 0.001, e.latlng.lng], 18);
  
  window.location.href = "informatie_pages/geschiedenis/rafOfRaaf.html";

});