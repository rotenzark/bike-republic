/* Bike Republic — i18n IT/EN, intro "il timbro", nav, reveal, watchdog */
(function () {
  'use strict';

  /* ---------- i18n ---------- */

  var translations = {
    it: {
      skip: 'Salta al contenuto',
      menu: 'Menu',
      nav_shop: 'I reparti',
      nav_workshop: "L'officina",
      nav_gallery: 'La gallery',
      nav_hours: 'Orari e dove',
      call_short: 'Chiama',
      call_cta: "Chiama l'officina",
      call_cta2: 'Chiama',
      shop_cta: 'Guarda i reparti',
      hero_eyebrow: 'Negozio · officina · Alzaia Naviglio Grande 144, Milano',
      hero_title: 'La Repubblica delle Biciclette',
      hero_lead: "Un negozio, un'officina, una finestra aperta sul mondo della bici: un punto di arrivo per risolvere problemi e dubbi, un punto di partenza per nuove avventure su due ruote.",
      tr1: 'Sul Naviglio dal 2012',
      tr2: 'Dealer ufficiale Pelago e BRN',
      tr3: 'Aperti anche la domenica',
      tr4: 'Ricambi originali in officina',
      rep_title: 'I reparti della Repubblica',
      rep_sub: 'Tutte le bici per tutte le persone — e tutto quello che serve per usarle ogni giorno.',
      rp1_t: 'Bikes',
      rp1_p: 'Dai grandi classici alle proposte più ricercate e innovative: city bike, bici da viaggio, gravel. Una selezione che si rinnova di continuo — per trovare insieme la bici giusta.',
      rp1_tag: 'City · viaggio · gravel · bimbi',
      rp1_alt: 'Bicicletta classica bordeaux appoggiata a una porta di legno azzurra',
      rp2_t: 'Other Stuff',
      rp2_p: 'I lucchetti veramente sicuri, i caschi più belli, borse per il turismo e il commuting, running bike per i bambini: infiniti spunti per sicurezza, comodità e stile.',
      rp2_tag: 'Lucchetti · caschi · borse · luci',
      rp2_alt: 'Casco pieghevole in pelle color cuoio',
      rp3_t: 'Officina',
      rp3_p: 'Il cuore del negozio: check-up, restyling e personalizzazioni con componenti di qualità e ricambi originali. È qui che nascono le "special" più belle e ardite.',
      rp3_tag: 'Check-up · restyling · special',
      rp3_alt: 'Bicicletta da viaggio in un angolo urbano notturno',
      ws_title: "L'officina è il cuore",
      ws_p1: 'Qui ci prendiamo cura dei vostri mezzi: dal check-up stagionale alla revisione completa, dal restyling alla personalizzazione. Solo componenti di qualità, pezzi di ricambio originali, strumenti professionali — e la mano di chi le bici le ama davvero.',
      ws_s1: 'Check-up e messa a punto stagionale',
      ws_s2: 'Riparazioni con ricambi originali',
      ws_s3: 'Restyling e personalizzazioni',
      ws_s4: "Le “special” su misura, dalla prima idea all'ultima vite",
      ws_note: "Il menù dell'officina, coi tempi e i prezzi del momento, ve lo diciamo al banco o al telefono.",
      gal_title: '#lifeinbikerepublic',
      gal_sub: 'Bici uscite dal negozio e finite in giro per il mondo — dalle pagine della Repubblica.',
      g1_alt: 'Bici da viaggio color crema appoggiata a un muretto lungo un fiume, con un ponte di ferro alle spalle',
      g2_alt: 'City bike cromata su una strada sterrata',
      g3_alt: 'Dettaglio del manubrio di una city bike azzurra in strada',
      g4_alt: 'Mountain bike rossa davanti a un canyon con cascata',
      g5_alt: 'Bici da viaggio con targa Cairo to Cape Town in un campo di grano',
      g6_alt: 'Due persone di sera caricano una bici pieghevole vicino a un furgone',
      gal_note: 'Le foto vengono dalle pagine e dalle uscite di Bike Republic. Il resto è ogni giorno su Instagram.',
      ig_cta: 'Segui @bikerepublicmilano',
      slow_q: "«Il vento sul viso, il battito del cuore che aumenta, il paesaggio che scorre, il sorriso spontaneo, il senso di libertà e leggerezza: cosa c'è di più divertente di un semplice giro in bicicletta?»",
      slow_c: 'Slow bike — la filosofia della casa',
      hours_title: 'Orari e dove',
      hours_sub: 'A trenta metri dalla chiesa di San Cristoforo, a fianco della Canottieri Olona.',
      hours_caption: 'Orari di apertura',
      mon: 'Lunedì',
      tuesun: 'Martedì – Domenica',
      closed: 'chiuso',
      come1: "In bici: da Porta Genova, cinque minuti lungo l'Alzaia",
      come2: 'Tram 2, poi il ponte pedonale di San Cristoforo',
      come3: 'In auto: parcheggio della Canottieri, a fianco del negozio',
      maps: 'Apri in Google Maps',
      f_contacts: 'Contatti',
      f_where: 'Dove',
      f_what: 'Il negozio',
      f_line: 'Negozio e officina indipendente: strumenti evoluti per la mobilità urbana, dal 2012.',
      aria_top: 'Bike Republic — torna su',
      aria_nav: 'Navigazione principale'
    },
    en: {
      skip: 'Skip to content',
      menu: 'Menu',
      nav_shop: 'The departments',
      nav_workshop: 'The workshop',
      nav_gallery: 'The gallery',
      nav_hours: 'Hours & location',
      call_short: 'Call',
      call_cta: 'Call the workshop',
      call_cta2: 'Call',
      shop_cta: 'See the departments',
      hero_eyebrow: 'Shop · workshop · Alzaia Naviglio Grande 144, Milan',
      hero_title: 'The Republic of Bicycles',
      hero_lead: 'A shop, a workshop, an open window onto the world of bikes: a place to arrive at when you have problems and doubts, and a place to set off from towards new adventures on two wheels.',
      tr1: 'On the Naviglio since 2012',
      tr2: 'Official Pelago and BRN dealer',
      tr3: 'Open on Sundays too',
      tr4: 'Original spare parts in the workshop',
      rep_title: 'The departments of the Republic',
      rep_sub: 'All types of bike for all types of people — and everything you need to ride them every day.',
      rp1_t: 'Bikes',
      rp1_p: 'From the great classics to the most refined and innovative rides: city bikes, touring bikes, gravel. A selection that keeps evolving — to find the right bike, together.',
      rp1_tag: 'City · touring · gravel · kids',
      rp1_alt: 'A classic burgundy bicycle leaning against a light-blue wooden door',
      rp2_t: 'Other Stuff',
      rp2_p: 'Locks that are actually secure, the best-looking helmets, bags for touring and commuting, balance bikes for kids: endless ideas for safety, comfort and style.',
      rp2_tag: 'Locks · helmets · bags · lights',
      rp2_alt: 'A leather folding helmet in tan colour',
      rp3_t: 'Workshop',
      rp3_p: 'The heart of the shop: check-ups, restyling and customisations with quality components and original spare parts. This is where the boldest, most beautiful "specials" are born.',
      rp3_tag: 'Check-ups · restyling · specials',
      rp3_alt: 'A touring bicycle in an urban corner at night',
      ws_title: 'The workshop is the heart',
      ws_p1: 'This is where we take care of your ride: from the seasonal check-up to full overhauls, from restyling to customisation. Only quality components, original spare parts, professional tools — and the hands of people who truly love bikes.',
      ws_s1: 'Seasonal check-up and tune-up',
      ws_s2: 'Repairs with original spare parts',
      ws_s3: 'Restyling and customisation',
      ws_s4: 'Made-to-measure "specials", from first idea to last bolt',
      ws_note: "The workshop menu, with current times and prices, is at the counter — or a phone call away.",
      gal_title: '#lifeinbikerepublic',
      gal_sub: 'Bikes that left the shop and ended up around the world — from the pages of the Republic.',
      g1_alt: 'A cream touring bike leaning on a low wall by a river, with an iron bridge behind',
      g2_alt: 'A chrome city bike on a gravel road',
      g3_alt: 'Handlebar detail of a light-blue city bike in the street',
      g4_alt: 'A red mountain bike in front of a canyon with a waterfall',
      g5_alt: 'A touring bike with a Cairo to Cape Town plate in a wheat field',
      g6_alt: 'Two people loading a folding bike by a van at night',
      gal_note: 'The photos come from Bike Republic’s pages and rides. The rest is on Instagram, every day.',
      ig_cta: 'Follow @bikerepublicmilano',
      slow_q: '“The wind on your face, your heartbeat rising, the landscape rolling by, the spontaneous smile, the sense of freedom and lightness: what could be more fun than a simple bike ride?”',
      slow_c: 'Slow bike — the house philosophy',
      hours_title: 'Hours & location',
      hours_sub: 'Thirty metres from the San Cristoforo church, right next to the Canottieri Olona rowing club.',
      hours_caption: 'Opening hours',
      mon: 'Monday',
      tuesun: 'Tuesday – Sunday',
      closed: 'closed',
      come1: 'By bike: five minutes from Porta Genova along the Alzaia',
      come2: 'Tram 2, then the San Cristoforo footbridge',
      come3: 'By car: the Canottieri car park, right next to the shop',
      maps: 'Open in Google Maps',
      f_contacts: 'Contact',
      f_where: 'Find us',
      f_what: 'The shop',
      f_line: 'An independent shop and workshop: evolved tools for urban mobility, since 2012.',
      aria_top: 'Bike Republic — back to top',
      aria_nav: 'Main navigation'
    }
  };

  var current = 'it';
  try {
    var saved = localStorage.getItem('bikerepublic-lang');
    if (saved === 'en' || saved === 'it') current = saved;
  } catch (e) { /* storage non disponibile: si resta in IT */ }

  function applyLang(lang) {
    var dict = translations[lang];
    if (!dict) return;
    current = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem('bikerepublic-lang', lang); } catch (e) { /* ok */ }
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  if (current !== 'it') applyLang(current);

  /* ---------- intro "il timbro" ---------- */

  var intro = document.getElementById('intro');
  if (intro) {
    var introReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (introReduced) {
      intro.remove();
    } else {
      var introDone = false;
      var sfuma = function () {
        intro.classList.add('intro--via');
      };
      var finishIntro = function () {
        if (introDone) return;
        introDone = true;
        clearTimeout(viaTimer);
        clearTimeout(endTimer);
        document.body.classList.remove('intro-lock');
        intro.remove();
        window.removeEventListener('pointerdown', finishIntro, true);
        window.removeEventListener('keydown', finishIntro, true);
      };
      document.body.classList.add('intro-lock');
      var viaTimer = setTimeout(sfuma, 1900);
      var endTimer = setTimeout(finishIntro, 2500);
      window.addEventListener('pointerdown', finishIntro, true);
      window.addEventListener('keydown', finishIntro, true);
    }
  }

  /* ---------- copyright dinamico ---------- */

  var nowYear = new Date().getFullYear();
  document.querySelectorAll('[data-current-year]').forEach(function (el) {
    el.textContent = String(nowYear);
  });

  /* ---------- nav mobile ---------- */

  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  if (nav && toggle) {
    var chiudiNav = function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    };
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.nav-menu a').forEach(function (link) {
      link.addEventListener('click', chiudiNav);
    });
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        chiudiNav();
        toggle.focus();
      }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 920) chiudiNav();
    });
  }

  /* ---------- reveal on scroll ---------- */

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll(
      '.hero-contenuto, .fiducia-voce, .sezione-titolo, .sezione-sub, ' +
      '.reparto, .officina-testo, .officina-voci, .officina-nota, ' +
      '.g-foto, .galleria-nota, .galleria-cta, .slowbike-inner, .orari-tabella, .dove'
    );
    targets.forEach(function (t) { t.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    targets.forEach(function (t) { io.observe(t); });
  }

  /* ---------- rete di sicurezza: se IntersectionObserver non parte, mostra tutto ---------- */

  if ('IntersectionObserver' in window) {
    var ioVivo = false;
    var sentinella = new IntersectionObserver(function () { ioVivo = true; sentinella.disconnect(); });
    sentinella.observe(document.body);
    setTimeout(function () {
      if (!ioVivo) {
        document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
      }
    }, 1500);
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
