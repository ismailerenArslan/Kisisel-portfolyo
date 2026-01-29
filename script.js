// Elementleri seç
const form = document.getElementById('contactForm');
const notification = document.getElementById('notification');

form.addEventListener('submit', function(e) {
    // 1. Sayfa yenilenmesini engelle (preventDefault)
    e.preventDefault();

    // Formdan verileri al (Örnek amaçlı, şu an backend yok)
    const name = document.getElementById('name').value;

    // 2. Kullanıcıya DOM manipülasyonu ile geri bildirim ver
    notification.style.display = 'block';
    notification.style.backgroundColor = 'rgba(0, 173, 181, 0.2)'; // Hafif transparan turkuaz arka plan
    notification.style.color = '#00FFF5'; // Neon parlak yazı rengi
    notification.style.border = '1px solid #00ADB5';
    
    notification.innerHTML = `Teşekkürler <b>${name}</b>! Mesajınız karanlık tarafa başarıyla iletildi.`;

    // Formu temizle
    form.reset();

    // 4 saniye sonra mesajı kaldır
    setTimeout(() => {
        notification.style.display = 'none';
    }, 4000);
});

// --- Scroll-driven smooth section transition (no snap) ---
// --- Click-to-open section navigation ---
document.addEventListener('DOMContentLoaded', () => {
    const sections = Array.from(document.querySelectorAll('section'));
    const hero = document.getElementById('hero');
    const header = document.querySelector('header');
    const heroButtons = Array.from(document.querySelectorAll('.hero-buttons a'));
    const headerLinks = Array.from(document.querySelectorAll('.nav-links a'));
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    // Hamburger Menü Toggle
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            const isActive = navLinks.classList.contains('active');
            
            if (isActive) {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                body.classList.remove('menu-open');
            } else {
                navLinks.classList.add('active');
                mobileMenuToggle.classList.add('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'true');
                body.classList.add('menu-open');
            }
        });

        // Menü dışına tıklanınca menüyü kapat
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && 
                !navLinks.contains(e.target) && 
                !mobileMenuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                body.classList.remove('menu-open');
            }
        });
    }

    // Menü linklerine tıklandığında menüyü kapat
    const closeMobileMenu = () => {
        if (navLinks && mobileMenuToggle) {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            body.classList.remove('menu-open');
        }
    };

    // Initial state: show only hero, hide other sections, hide header
    sections.forEach(s => {
        if (s.id === 'hero') {
            s.classList.add('section-visible');
            s.classList.remove('section-hidden');
        } else {
            s.classList.add('section-hidden');
            s.classList.remove('section-visible');
        }
    });
    if (header) header.classList.add('header-hidden');

    function openSection(id) {
        sections.forEach(s => {
            if (s.id === id) {
                s.classList.add('section-visible');
                s.classList.remove('section-hidden');
            } else {
                s.classList.add('section-hidden');
                s.classList.remove('section-visible');
            }
        });
        // show header when a section (other than hero) is open
        if (header) header.classList.remove('header-hidden');
        // ensure top of page
        window.scrollTo({ top: 0 });
    }

    function showHero() {
        sections.forEach(s => {
            if (s.id === 'hero') {
                s.classList.add('section-visible');
                s.classList.remove('section-hidden');
            } else {
                s.classList.add('section-hidden');
                s.classList.remove('section-visible');
            }
        });
        // hide header again on hero
        if (header) header.classList.add('header-hidden');
        window.scrollTo({ top: 0 });
    }

    // hero button clicks open sections
    heroButtons.forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const target = a.getAttribute('href').replace('#','');
            if (!target) return;
            if (target === 'hero') {
                showHero();
                history.replaceState(null, '', '#hero');
            } else {
                openSection(target);
                history.replaceState(null, '', `#${target}`);
            }
        });
    });

    // header link clicks should behave similarly (and show header already visible)
    headerLinks.forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const target = a.getAttribute('href').replace('#','');
            if (!target) return;
            
            // Mobil menüyü kapat
            closeMobileMenu();
            
            if (target === 'hero') {
                showHero();
                history.replaceState(null, '', '#hero');
            } else {
                openSection(target);
                history.replaceState(null, '', `#${target}`);
            }
        });
    });

    // If page loads with a hash, open that section and show header if not hero
    const initialHash = location.hash.replace('#','');
    if (initialHash && initialHash !== 'hero') {
        setTimeout(() => openSection(initialHash), 50);
    } else {
        showHero();
    }
});