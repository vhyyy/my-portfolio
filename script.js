// Toggle Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // CSS động cho menu mobile
    if (navLinks.classList.contains('active')) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#fff';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
        navLinks.style.zIndex = '999';
    } else {
        navLinks.style.display = 'none';
    }
});

// Đóng menu khi click vào link
document.querySelectorAll('.nav-links a').forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            navLinks.style.display = 'none';
        }
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation cho Skill Bar khi cuộn tới
const skillsSection = document.querySelector('#skills');
const progressBars = document.querySelectorAll('.skill-per');

function showProgress() {
    progressBars.forEach(progressBar => {
        // Lấy giá trị width từ class CSS (đã set trong style.css)
        // Code này kích hoạt lại transition để tạo hiệu ứng chạy từ 0 -> width
        const value = progressBar.style.width; 
        progressBar.style.width = '0'; // Reset về 0
        setTimeout(() => {
            progressBar.style.width = value; // Chạy lên giá trị thật
        }, 100);
    });
}

// Lắng nghe sự kiện scroll để kích hoạt animation skill
window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
        // Có thể thêm class để chỉ chạy animation 1 lần nếu muốn
        // Hiện tại CSS transition đã tự xử lý mượt mà
    }
});