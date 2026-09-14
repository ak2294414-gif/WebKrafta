/* ============================================================
   AURA TECH — INTERACTIVE JAVASCRIPT
   ============================================================ */

/* ── HEADER SCROLL EFFECT ──────────────────────────────────── */
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── MOBILE NAV TOGGLE ─────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});

function closeMobileNav() {
  mobileNav.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', false);
}

/* Close mobile nav on outside click */
document.addEventListener('click', (e) => {
  if (!header.contains(e.target)) {
    closeMobileNav();
  }
});

/* ── SERVICE TAB SWITCH ────────────────────────────────────── */
function switchTab(id, btn) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  btn.classList.add('active');
}

/* ── SERVICE CARD ACCORDION ────────────────────────────────── */
function toggleServiceDetail(card) {
  const isOpen = card.classList.toggle('open');
  /* Optionally close other open cards in the same grid */
  if (isOpen) {
    const siblings = card.parentElement.querySelectorAll('.service-card.open');
    siblings.forEach(s => {
      if (s !== card) s.classList.remove('open');
    });
  }
}

/* ── SCROLL FADE-UP ANIMATION ──────────────────────────────── */
(function initFadeUp() {
  const targets = document.querySelectorAll(
    '.bento-card, .method-card, .service-card, .trust-item, .contact-info-card, .form-card'
  );

  targets.forEach(el => el.classList.add('fade-up'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));
})();

/* ── FIREBASE CONFIG ──────────────────────────────────────── */
const FIREBASE_URL = 'https://dxdd-c7fd7-default-rtdb.firebaseio.com/consultations.json';

/* ── FORM SUBMISSION ──────────────────────────────────────── */
async function handleFormSubmit(event) {
  event.preventDefault();
  const form  = event.target;
  const btn   = document.getElementById('submit-btn');
  const label = document.getElementById('submit-label');

  /* Collect form data */
  const data = {
    fullName:       form.fullName.value.trim(),
    companyName:    form.companyName.value.trim(),
    phone:          form.phone.value.trim(),
    email:          form.email.value.trim(),
    servicePackage: form.servicePackage.value,
    maintenance:    form.maintenance.value === 'bundle'
                      ? '1-Year Free Maintenance Bundle'
                      : 'Standard Monthly Maintenance',
    requirements:   form.requirements.value.trim(),
    submittedAt:    new Date().toISOString(),
    source:         'Aura Tech Website'
  };

  /* Validate required fields */
  if (!data.fullName || !data.phone || !data.email || !data.servicePackage) {
    alert('Please fill in all required fields.');
    return;
  }

  /* Disable button & show loading */
  btn.disabled = true;
  label.textContent = 'Submitting...';

  try {
    /* POST to Firebase */
    const res = await fetch(FIREBASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error('Firebase error: ' + res.status);

    /* Build WhatsApp message */
    const waMsg = encodeURIComponent(
      `Hello Aura Tech! 👋\n\n` +
      `I just submitted a consultation request from your website.\n\n` +
      `📋 *My Details:*\n` +
      `• Name: ${data.fullName}\n` +
      `• Company: ${data.companyName || 'N/A'}\n` +
      `• Phone: ${data.phone}\n` +
      `• Email: ${data.email}\n\n` +
      `🛠️ *Selected Package:* ${data.servicePackage}\n` +
      `🔧 *Maintenance Option:* ${data.maintenance}\n\n` +
      `📝 *Project Notes:*\n${data.requirements || 'No additional notes.'}\n\n` +
      `Looking forward to connecting!`
    );

    const waLink = `https://wa.me/919864197899?text=${waMsg}`;

    /* Show success modal */
    document.getElementById('whatsapp-redirect').href = waLink;
    document.getElementById('success-modal').style.display = 'flex';

    /* Reset form */
    form.reset();

  } catch (err) {
    console.error('Submission error:', err);
    /* Even on error, still try to show modal / WA redirect */
    const waMsg = encodeURIComponent(
      `Hello Aura Tech! 👋\n\nI'd like to schedule a free consultation.\n\n` +
      `Name: ${data.fullName}\nPhone: ${data.phone}\nService: ${data.servicePackage}`
    );
    const waLink = `https://wa.me/919864197899?text=${waMsg}`;
    document.getElementById('whatsapp-redirect').href = waLink;
    document.getElementById('success-modal').style.display = 'flex';
  } finally {
    btn.disabled = false;
    label.textContent = 'Submit Consultation Request';
  }
}

/* ── MODAL CLOSE ──────────────────────────────────────────── */
function closeModal() {
  document.getElementById('success-modal').style.display = 'none';
}

/* Close modal on overlay click */
document.getElementById('success-modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('success-modal')) closeModal();
});

/* Close modal on Escape key */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* ── ACTIVE NAV HIGHLIGHT ON SCROLL ──────────────────────── */
(function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'nav-active',
            link.getAttribute('href') === '#' + entry.target.id
          );
        });
      }
    });
  }, { threshold: 0.3, rootMargin: '-68px 0px 0px 0px' });

  sections.forEach(s => observer.observe(s));
})();

/* Inject tiny active nav style */
const style = document.createElement('style');
style.textContent = `.nav-active { color: var(--clr-primary) !important; background: var(--clr-primary-lt) !important; }`;
document.head.appendChild(style);
