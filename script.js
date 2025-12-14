// --- 1. DARK MODE TOGGLE ---
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = themeBtn.querySelector('i');
const body = document.body;

// Kiểm tra xem người dùng đã lưu chế độ nào trước đó chưa
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun'); // Đổi icon mặt trăng thành mặt trời
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Đổi icon và lưu trạng thái vào bộ nhớ trình duyệt
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// --- 2. MOBILE MENU ---
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
        navLinks.style.background = 'var(--nav-bg)'; // Dùng biến màu để hợp dark mode
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 5px 10px var(--shadow)';
    } else {
        navLinks.style.display = 'none';
    }
});

// --- 3. SCROLL ANIMATION (HIỆU ỨNG CUỘN) ---
// Tự động thêm class 'hidden' vào các phần tử muốn animation
const animatedElements = document.querySelectorAll('.hero-text, .hero-img, .section-title, .about-content, .stat-box, .info-card, .project-card, .cert-card, .contact-form');
animatedElements.forEach((el) => el.classList.add('hidden'));

// Sử dụng Intersection Observer để phát hiện khi phần tử vào màn hình
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Thêm class show để hiện ra
        }
    });
});

animatedElements.forEach((el) => observer.observe(el));


// --- 4. LIGHTBOX (XEM ẢNH) ---
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