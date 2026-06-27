/* ═══════════════════════════════════════════════
   TURBO FAHRSCHULE BERLIN — script.js
   ═══════════════════════════════════════════════ */
'use strict';

/* ─── GLOBALE SPRACHSTEUERUNG ────────────────── */
let currentLang = 'de';

/* ─── i18n ÜBERSETZUNGEN ─────────────────────── */
const i18n = {
  de: {
    // Hero
    heroL1:   'Dein Führerschein.',
    heroL2:   'Schnell &amp; sicher.',
    heroL3:   'In deiner Sprache.',
    heroSub:  'Über 35 Jahre Erfahrung in Berlin Moabit. Persönliche Betreuung auf Deutsch, Arabisch und Englisch — damit du wirklich verstehst, was du lernst.',
    heroCta1: 'Jetzt kostenlos beraten lassen',
    dir: 'ltr', lang: 'de',
    // Navigation
    navVorteile:    'Vorteile',
    navKlassen:     'Klassen',
    navWarum:       'Warum wir?',
    navBewertungen: 'Bewertungen',
    navFaq:         'FAQ',
    hdrCta:         'Beratung anfragen',
    // Kontaktformular
    formTitle:       'Kostenlose Beratung anfragen',
    labelName:       'Dein Name',
    labelPhone:      'Telefon',
    labelEmail:      'E-Mail',
    labelInterest:   'Ich interessiere mich für',
    labelLang:       'Bevorzugte Sprache',
    labelMsg:        'Nachricht (optional)',
    submitBtn:       'Jetzt kostenlos anfragen',
    dsgvoText:       'Ich habe die <a href="datenschutz.html" class="form-link" target="_blank">Datenschutzerklärung</a> gelesen und stimme zu.',
    successTitle:    'Anfrage gesendet!',
    successMsg:      'Wir melden uns innerhalb von 24 Stunden bei dir — auf Deutsch, Arabisch oder Englisch.',
    formHint:        '* Pflichtfelder · Deine Daten werden vertraulich behandelt.',
    // Platzhalter
    placeholderName:  'Max Mustermann',
    placeholderPhone: '+49 160 …',
    placeholderEmail: 'max@example.de',
    placeholderMsg:   'Hast du spezielle Fragen oder Wünsche?',
    // Validierungsfehler
    errName:     'Bitte gib deinen Namen ein (min. 2 Zeichen).',
    errPhone:    'Bitte gib eine gültige Telefonnummer ein.',
    errInterest: 'Bitte wähle ein Angebot aus.',
    errDsgvo:    'Bitte stimme der Datenschutzerklärung zu.',
    errSend:     'Senden fehlgeschlagen. Bitte ruf uns an oder versuch es erneut.',
  },

  ar: {
    // Hero
    heroL1:   'رخصة القيادة الخاصة بك.',
    heroL2:   'سريع وآمن.',
    heroL3:   'بلغتك.',
    heroSub:  'أكثر من 35 عامًا من الخبرة في برلين موابيت. متابعة شخصية باللغة العربية والألمانية والإنجليزية — حتى تفهم حقًا ما تتعلمه.',
    heroCta1: 'احجز استشارة مجانية الآن',
    dir: 'rtl', lang: 'ar',
    // Navigation
    navVorteile:    'المزايا',
    navKlassen:     'الفئات',
    navWarum:       'لماذا نحن؟',
    navBewertungen: 'التقييمات',
    navFaq:         'الأسئلة',
    hdrCta:         'طلب استشارة',
    // Kontaktformular
    formTitle:       'طلب استشارة مجانية',
    labelName:       'اسمك',
    labelPhone:      'رقم الهاتف',
    labelEmail:      'البريد الإلكتروني',
    labelInterest:   'أنا مهتم بـ',
    labelLang:       'اللغة المفضلة',
    labelMsg:        'رسالة (اختياري)',
    submitBtn:       'أرسل طلبك مجاناً الآن',
    dsgvoText:       'لقد قرأت <a href="datenschutz.html" class="form-link" target="_blank">سياسة الخصوصية</a> وأوافق عليها.',
    successTitle:    'تم إرسال طلبك!',
    successMsg:      'سنتواصل معك خلال 24 ساعة — بالعربية أو الألمانية أو الإنجليزية.',
    formHint:        '* الحقول الإلزامية · بياناتك محمية وسرية.',
    // Platzhalter
    placeholderName:  'محمد أحمد',
    placeholderPhone: '+49 160 …',
    placeholderEmail: 'email@example.de',
    placeholderMsg:   'هل لديك أسئلة أو طلبات خاصة؟',
    // Validierungsfehler
    errName:     'يرجى إدخال اسمك (الحد الأدنى حرفان).',
    errPhone:    'يرجى إدخال رقم هاتف صالح.',
    errInterest: 'يرجى اختيار خدمة.',
    errDsgvo:    'يرجى الموافقة على سياسة الخصوصية.',
    errSend:     'فشل الإرسال. يرجى الاتصال بنا أو المحاولة مرة أخرى.',
  },

  en: {
    // Hero
    heroL1:   'Your driving licence.',
    heroL2:   'Fast &amp; safe.',
    heroL3:   'In your language.',
    heroSub:  'Over 35 years of experience in Berlin Moabit. Personal support in German, Arabic & English — so you truly understand what you\'re learning.',
    heroCta1: 'Get a free consultation now',
    dir: 'ltr', lang: 'en',
    // Navigation
    navVorteile:    'Benefits',
    navKlassen:     'Classes',
    navWarum:       'Why us?',
    navBewertungen: 'Reviews',
    navFaq:         'FAQ',
    hdrCta:         'Request advice',
    // Kontaktformular
    formTitle:       'Request a free consultation',
    labelName:       'Your name',
    labelPhone:      'Phone',
    labelEmail:      'E-Mail',
    labelInterest:   'I am interested in',
    labelLang:       'Preferred language',
    labelMsg:        'Message (optional)',
    submitBtn:       'Request now for free',
    dsgvoText:       'I have read the <a href="datenschutz.html" class="form-link" target="_blank">Privacy Policy</a> and agree.',
    successTitle:    'Request sent!',
    successMsg:      'We will get back to you within 24 hours — in English, German or Arabic.',
    formHint:        '* Required fields · Your data is kept confidential.',
    // Platzhalter
    placeholderName:  'John Smith',
    placeholderPhone: '+49 160 …',
    placeholderEmail: 'john@example.de',
    placeholderMsg:   'Do you have any specific questions or wishes?',
    // Validierungsfehler
    errName:     'Please enter your name (min. 2 characters).',
    errPhone:    'Please enter a valid phone number.',
    errInterest: 'Please select a service.',
    errDsgvo:    'Please agree to the Privacy Policy.',
    errSend:     'Sending failed. Please call us or try again.',
  },
};

/* ─── UTILS ──────────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const on = (el, ev, fn, opts) => el?.addEventListener(ev, fn, opts);

/* ─── HEADER: scroll state ───────────────────── */
const hdr = $('#siteHeader');
function updateHeader() {
  hdr?.classList.toggle('is-scrolled', window.scrollY > 60);
}
on(window, 'scroll', updateHeader, { passive: true });
updateHeader();

/* ─── FAB visibility ─────────────────────────── */
const fab = $('#fab');
function updateFab() {
  fab?.classList.toggle('is-visible', window.scrollY > 500);
}
on(window, 'scroll', updateFab, { passive: true });

/* ─── BURGER / MOBILE NAV ────────────────────── */
const burgerBtn = $('#burgerBtn');
const primaryNav = $('#primaryNav');

function closeMobileNav() {
  primaryNav?.classList.remove('is-open');
  burgerBtn?.classList.remove('is-open');
  burgerBtn?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

on(burgerBtn, 'click', () => {
  const isOpen = primaryNav?.classList.toggle('is-open');
  burgerBtn.classList.toggle('is-open', isOpen);
  burgerBtn.setAttribute('aria-expanded', String(!!isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

$$('.nav-a').forEach(a => on(a, 'click', closeMobileNav));
on(document, 'keydown', e => { if (e.key === 'Escape') closeMobileNav(); });

/* ─── SMOOTH SCROLL ──────────────────────────── */
on(document, 'click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href');
  if (id === '#') return;
  const target = document.querySelector(id);
  if (!target) return;
  e.preventDefault();
  const offset = (hdr?.offsetHeight ?? 70) + 12;
  window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
});

/* ─── SCROLL REVEAL ──────────────────────────── */
(function initReveal() {
  const els = $$('[data-reveal]');
  if (!els.length) return;

  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('in-view'));
    return;
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = parseInt(el.dataset.delay ?? '0', 10);
      setTimeout(() => el.classList.add('in-view'), delay);
      io.unobserve(el);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => io.observe(el));
})();

/* ─── COUNTER ANIMATION ──────────────────────── */
(function initCounters() {
  const els = $$('[data-count]');
  if (!els.length || !('IntersectionObserver' in window)) return;

  const ease = t => 1 - Math.pow(1 - t, 3);

  function animateCount(el) {
    const target   = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals ?? '0', 10);
    const suffix   = el.dataset.suffix ?? '';
    const duration = 1400;
    const start    = performance.now();

    const tick = now => {
      const progress = Math.min((now - start) / duration, 1);
      const value    = target * ease(progress);
      el.textContent = value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      animateCount(e.target);
      io.unobserve(e.target);
    });
  }, { threshold: 0.5 });

  els.forEach(el => io.observe(el));
})();

/* ─── LANGUAGE SWITCHER ──────────────────────── */
(function initLang() {
  const btns = $$('.lang-btn');

  function applyLang(code) {
    const t = i18n[code];
    if (!t) return;

    currentLang = code;

    // Sprache und Textrichtung auf <html> setzen
    document.documentElement.lang = t.lang;
    document.documentElement.dir  = t.dir;

    // data-i18n → innerHTML (ggf. vorhandene SVGs werden erhalten)
    $$('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] === undefined) return;
      const svg = el.querySelector('svg');
      el.innerHTML = t[key];
      if (svg) el.appendChild(svg);
    });

    // data-i18n-html → innerHTML (für Elemente mit Links, z. B. DSGVO)
    // Hängt automatisch das Pflichtfeld-Sternchen an
    $$('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (t[key] === undefined) return;
      el.innerHTML = t[key] + ' <span aria-hidden="true">*</span>';
    });

    // data-i18n-placeholder → placeholder-Attribut
    $$('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (t[key] !== undefined) el.placeholder = t[key];
    });

    // Aktiver Button-Zustand
    btns.forEach(b => {
      b.classList.toggle('is-active', b.dataset.lang === code);
      b.setAttribute('aria-pressed', String(b.dataset.lang === code));
    });
  }

  btns.forEach(btn => on(btn, 'click', () => applyLang(btn.dataset.lang)));
})();

/* ─── FAQ ACCORDION ──────────────────────────── */
(function initFaq() {
  const items = $$('.faq-item');

  items.forEach(item => {
    const btn = $('.faq-q', item);
    const ans = $('.faq-a', item);
    if (!btn || !ans) return;

    ans.removeAttribute('hidden');

    on(btn, 'click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';

      items.forEach(other => {
        if (other === item) return;
        const ob = $('.faq-q', other);
        const oa = $('.faq-a', other);
        ob?.setAttribute('aria-expanded', 'false');
        oa?.classList.remove('is-open');
      });

      btn.setAttribute('aria-expanded', String(!expanded));
      ans.classList.toggle('is-open', !expanded);
    });
  });
})();

/* ─── FORM VALIDATION & SUBMIT ───────────────── */
(function initForm() {
  const form      = $('#kontaktForm');
  const submitBtn = $('#submitBtn');
  const success   = $('#formSuccess');
  if (!form) return;

  // Validierungsregeln — msgKey verweist auf i18n-Schlüssel
  const rules = {
    'f-name':     { required: true, min: 2,            msgKey: 'errName' },
    'f-phone':    { required: true, min: 6,            msgKey: 'errPhone' },
    'f-interest': { required: true,                    msgKey: 'errInterest' },
    'f-dsgvo':    { required: true, checkbox: true,    msgKey: 'errDsgvo' },
  };

  function getMsg(msgKey) {
    return i18n[currentLang]?.[msgKey] ?? i18n.de[msgKey] ?? msgKey;
  }

  function validate(id) {
    const el    = $(`#${id}`);
    const rule  = rules[id];
    // Fehler-Span: erst im direkten Elternteil suchen, dann im .field-Container
    const errEl = el?.parentElement?.querySelector('.field-err') ??
                  el?.closest('.field')?.querySelector('.field-err');

    let error = '';
    if (rule.checkbox) {
      if (!el.checked) error = getMsg(rule.msgKey);
    } else {
      const val = (el?.value ?? '').trim();
      if (!val) error = getMsg(rule.msgKey);
      else if (rule.min && val.length < rule.min) error = getMsg(rule.msgKey);
    }

    el?.classList.toggle('has-error', !!error);
    if (errEl) errEl.textContent = error;
    return !error;
  }

  // Fehler beim Tippen/Ändern live löschen
  Object.keys(rules).forEach(id => {
    const el = $(`#${id}`);
    on(el, 'input',  () => validate(id));
    on(el, 'change', () => validate(id));
  });

  on(form, 'submit', async e => {
    e.preventDefault();

    const valid = Object.keys(rules).map(validate).every(Boolean);
    if (!valid) {
      const firstErr = form.querySelector('.has-error');
      firstErr?.focus();
      return;
    }

    // Lade-Zustand
    const btnLabel   = submitBtn.querySelector('.btn-label');
    const btnSpinner = submitBtn.querySelector('.btn-spinner');
    if (btnLabel)   btnLabel.hidden   = true;
    if (btnSpinner) btnSpinner.hidden = false;
    submitBtn.disabled = true;

    try {
      // Formspree-Endpoint — eigene ID einsetzen: https://formspree.io
      const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xaqgnngk';

      const data = new FormData(form);
      const res  = await fetch(FORMSPREE_ENDPOINT, {
        method:  'POST',
        headers: { Accept: 'application/json' },
        body:    data,
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      // Erfolg
      submitBtn.hidden = true;
      if (success) success.hidden = false;
      form.reset();
    } catch (err) {
      // Fehler: Button wieder aktivieren
      if (btnLabel)   btnLabel.hidden   = false;
      if (btnSpinner) btnSpinner.hidden = true;
      submitBtn.disabled = false;

      // Fehlermeldung unter dem Button
      let errEl = form.querySelector('.form-send-error');
      if (!errEl) {
        errEl = document.createElement('p');
        errEl.className = 'form-send-error field-err';
        errEl.style.textAlign = 'center';
        submitBtn.insertAdjacentElement('afterend', errEl);
      }
      errEl.textContent = getMsg('errSend');
    }
  });
})();

/* ─── ACTIVE NAV LINK (scroll spy) ──────────── */
(function initScrollSpy() {
  const sections = $$('section[id], div[id]').filter(el => el.id);
  const navLinks = $$('.primary-nav .nav-a');
  if (!sections.length || !navLinks.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--amber)' : '';
      });
    });
  }, { rootMargin: '-40% 0px -40% 0px' });

  sections.forEach(s => io.observe(s));
})();

/* ─── HERO PARALLAX (desktop only) ──────────── */
(function initParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.innerWidth < 960) return;

  const heroVis = $('.hero-visual');
  const heroBg  = $('.hero-bg__arabic');
  if (!heroVis) return;

  on(window, 'scroll', () => {
    const y = window.scrollY;
    heroVis.style.transform = `translateY(${y * 0.07}px)`;
    if (heroBg) heroBg.style.transform = `translateY(${-y * 0.04}px)`;
  }, { passive: true });
})();

/* ─── REVIEW CARD: hover lift clamp ─────────── */
(function initCardTilt() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  $$('.review-card').forEach(card => {
    on(card, 'mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width  - .5) * 6;
      const y = ((e.clientY - r.top)  / r.height - .5) * -6;
      card.style.transform = `perspective(600px) rotateX(${y}deg) rotateY(${x}deg) translateY(-5px)`;
    });
    on(card, 'mouseleave', () => { card.style.transform = ''; });
  });
})();
