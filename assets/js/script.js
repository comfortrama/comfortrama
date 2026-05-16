// ── Mobile Menu ──
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');
hamburger?.addEventListener('click', () => {
  navUl?.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// Active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ── Scroll Reveal ──
const observer = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.animationDelay = (i * 0.08) + 's';
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── Header scroll effect ──
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (!header) return;
  if (window.scrollY > 80) {
    header.style.boxShadow = '0 4px 24px rgba(0,0,0,0.12)';
  } else {
    header.style.boxShadow = '0 2px 16px rgba(0,0,0,0.07)';
  }
});

// ── FAQ Accordion ──
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ── Form submit ──
document.querySelectorAll('form[id]').forEach(form => {
  const success = document.getElementById('form-success');
  if (!success) return;
  form.addEventListener('submit', () => {
    setTimeout(() => {
      form.style.display = 'none';
      success.style.display = 'block';
    }, 800);
  });
});

// ── Min date on date inputs ──
document.querySelectorAll('input[type="date"]').forEach(input => {
  input.min = new Date().toISOString().split('T')[0];
});

// ── Hamburger animation ──
const style = document.createElement('style');
style.textContent = `
  .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(5px,5px); }
  .hamburger.active span:nth-child(2) { opacity: 0; }
  .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(7px,-6px); }
`;
document.head.appendChild(style);
