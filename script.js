/* ═══════════════════════════════════════════════
   TURBO FAHRSCHULE BERLIN — script.js
   ═══════════════════════════════════════════════ */
'use strict';

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

// Close on nav-link click
$$('.nav-a').forEach(a => on(a, 'click', closeMobileNav));

// Close on Escape
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

  const ease = t => 1 - Math.pow(1 - t, 3); // ease-out cubic

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

  const i18n = {
    de: {
      heroL1: 'Dein Führerschein.',
      heroL2: 'Schnell &amp; sicher.',
      heroL3: 'In deiner Sprache.',
      heroSub: 'Über 35 Jahre Erfahrung in Berlin Moabit. Persönliche Betreuung auf Deutsch, Arabisch und Englisch — damit du wirklich verstehst, was du lernst.',
      heroCta1: 'Jetzt kostenlos beraten lassen',
      dir: 'ltr',
      lang: 'de',
    },
    ar: {
      heroL1: 'رخصة القيادة الخاصة بك.',
      heroL2: 'سريع وآمن.',
      heroL3: 'بلغتك.',
      heroSub: 'أكثر من 35 عامًا من الخبرة في برلين موابيت. متابعة شخصية باللغة العربية والألمانية والإنجليزية — حتى تفهم حقًا ما تتعلمه.',
      heroCta1: 'احجز استشارة مجانية الآن',
      dir: 'rtl',
      lang: 'ar',
    },
    en: {
      heroL1: 'Your driving licence.',
      heroL2: 'Fast &amp; safe.',
      heroL3: 'In your language.',
      heroSub: 'Over 35 years of experience in Berlin Moabit. Personal support in German, Arabic & English — so you truly understand what you\'re learning.',
      heroCta1: 'Get a free consultation now',
      dir: 'ltr',
      lang: 'en',
    },
  };

  function applyLang(code) {
    const t = i18n[code];
    if (!t) return;

    // Update dir & lang
    document.documentElement.lang = t.lang;
    document.documentElement.dir  = t.dir;

    // Update hero copy
    const patch = (sel, key) => {
      const el = $(sel);
      if (el) el.innerHTML = t[key];
    };
    patch('[data-i18n="heroL1"]',  'heroL1');
    patch('[data-i18n="heroL2"]',  'heroL2');
    patch('[data-i18n="heroL3"]',  'heroL3');
    patch('[data-i18n="heroSub"]', 'heroSub');
    const cta = $('[data-i18n="heroCta1"]');
    if (cta) {
      // Preserve the SVG arrow
      const svg = cta.querySelector('svg');
      cta.innerHTML = t.heroCta1;
      if (svg) cta.appendChild(svg);
    }

    // Active button state
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

    // Pre-remove hidden attr so we can animate max-height
    ans.removeAttribute('hidden');

    on(btn, 'click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';

      // Collapse all others
      items.forEach(other => {
        if (other === item) return;
        const ob = $('.faq-q', other);
        const oa = $('.faq-a', other);
        ob?.setAttribute('aria-expanded', 'false');
        oa?.classList.remove('is-open');
      });

      // Toggle current
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

  const rules = {
    'f-name':     { required: true, min: 2,  msg: 'Bitte gib deinen Namen ein (min. 2 Zeichen).' },
    'f-phone':    { required: true, min: 6,  msg: 'Bitte gib eine gültige Telefonnummer ein.' },
    'f-interest': { required: true,           msg: 'Bitte wähle ein Angebot aus.' },
    'f-dsgvo':    { required: true, checkbox: true, msg: 'Bitte stimme der Datenschutzerklärung zu.' },
  };

  function validate(id) {
    const el    = $(`#${id}`);
    const rule  = rules[id];
    const errEl = el?.parentElement?.querySelector('.field-err') ??
                  el?.closest('.field')?.querySelector('.field-err');

    let error = '';
    if (rule.checkbox) {
      if (!el.checked) error = rule.msg;
    } else {
      const val = (el?.value ?? '').trim();
      if (!val) error = rule.msg;
      else if (rule.min && val.length < rule.min) error = rule.msg;
    }

    el?.classList.toggle('has-error', !!error);
    if (errEl) errEl.textContent = error;
    return !error;
  }

  // Live clear on change
  Object.keys(rules).forEach(id => {
    const el = $(`#${id}`);
    on(el, 'input',  () => validate(id));
    on(el, 'change', () => validate(id));
  });

  on(form, 'submit', async e => {
    e.preventDefault();

    // Validate all
    const valid = Object.keys(rules).map(validate).every(Boolean);
    if (!valid) {
      const firstErr = form.querySelector('.has-error');
      firstErr?.focus();
      return;
    }

    // Loading state
    const btnLabel   = submitBtn.querySelector('.btn-label');
    const btnSpinner = submitBtn.querySelector('.btn-spinner');
    if (btnLabel)   btnLabel.hidden   = true;
    if (btnSpinner) btnSpinner.hidden = false;
    submitBtn.disabled = true;

    // Simulate API call (replace with real fetch)
    await new Promise(r => setTimeout(r, 1300));

    // Success state
    submitBtn.hidden = true;
    if (success) success.hidden = false;

    // Reset
    form.reset();
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
