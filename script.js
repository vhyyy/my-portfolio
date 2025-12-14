// --- 1. PRELOADER (Màn hình chờ) ---
const preloader = document.getElementById('preloader');
window.addEventListener('load', function() {
    preloader.style.opacity = '0'; 
    setTimeout(() => {
        preloader.style.display = 'none'; 
    }, 500);
});

// --- 2. DARK MODE TOGGLE ---
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = themeBtn.querySelector('i');
const body = document.body;

// Kiểm tra bộ nhớ xem trước đó đã chọn Dark Mode chưa
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// --- 3. MOBILE MENU ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    if (navLinks.classList.contains('active')) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'var(--nav-bg)'; // Tương thích Dark Mode
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 5px 10px var(--shadow)';
    } else {
        navLinks.style.display = 'none';
    }
});

// --- 4. SCROLL ANIMATION (Hiệu ứng khi cuộn) ---
const animatedElements = document.querySelectorAll('.hero-text, .hero-img, .section-title, .about-content, .stat-box, .info-card, .project-card, .cert-card, .contact-form');
animatedElements.forEach((el) => el.classList.add('hidden'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
animatedElements.forEach((el) => observer.observe(el));

// --- 5. SCROLL PROGRESS & BACK TO TOP ---
const progressBar = document.querySelector('.scroll-progress');
const backToTopBtn = document.getElementById("backToTop");

window.onscroll = function() {
    // Thanh tiến trình
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";

    // Nút Back to Top
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- 6. TYPEWRITER EFFECT (Chữ chạy) ---
const textElement = document.querySelector(".typing-text");
const words = ["Sinh viên CNTT", "Java Developer", "Network Engineer", "Web Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex--);
    } else {
        textElement.textContent = currentWord.substring(0, charIndex++);
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; // Dừng lại đọc
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }
    setTimeout(typeEffect, typeSpeed);
}
document.addEventListener('DOMContentLoaded', typeEffect);

// --- 7. CUSTOM CURSOR ---
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', function(e) {
    const posX = e.clientX;
    const posY = e.clientY;
    
    // Chỉ chạy trên màn hình lớn (có chuột)
    if (window.innerWidth > 768) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    }
});

// --- 8. LIGHTBOX (Xem ảnh chứng chỉ) ---
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("img01");

function openModal(element) {
    modal.style.display = "block";
    const imgElement = element.querySelector('img');
    modalImg.src = imgElement.src;
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Click vào các hộp thống kê
const projectLink = document.getElementById('project-link');
if (projectLink) {
    projectLink.addEventListener('click', () => {
        window.open('https://github.com/vhyyy', '_blank');
    });
}

const certLink = document.getElementById('cert-link');
if (certLink) {
    certLink.addEventListener('click', () => {
        const certSection = document.getElementById('certificates');
        if (certSection) {
            certSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}