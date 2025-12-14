// Toggle Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Styles cho menu mobile
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

// Đóng menu khi click link
document.querySelectorAll('.nav-links a').forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            navLinks.style.display = 'none';
        }
    });
});

// Smooth Scrolling cho các link điều hướng
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

// --- CHỨC NĂNG MỚI THEO YÊU CẦU ---

// 1. Xử lý click vào hộp "Dự Án" -> Mở GitHub tab mới
const projectLink = document.getElementById('project-link');
if (projectLink) {
    projectLink.addEventListener('click', () => {
        // Thay link GitHub của bạn vào đây
        window.open('https://github.com/vhyyy', '_blank');
    });
}

// 2. Xử lý click vào hộp "Chứng Chỉ" -> Cuộn xuống phần #certificates
const certLink = document.getElementById('cert-link');
if (certLink) {
    certLink.addEventListener('click', () => {
        const certSection = document.getElementById('certificates');
        if (certSection) {
            certSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Cuộn để phần đầu section nằm ở đầu màn hình
            });
        }
    });
}
// --- CHỨC NĂNG LIGHTBOX (XEM ẢNH CHỨNG CHỈ) ---

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("img01");

// Hàm mở Modal (được gọi từ thẻ HTML onclick)
function openModal(element) {
    modal.style.display = "block";
    // Lấy src của ảnh con bên trong thẻ div được click
    const imgElement = element.querySelector('img');
    modalImg.src = imgElement.src;
}

// Hàm đóng Modal
function closeModal() {
    modal.style.display = "none";
}

// Đóng modal khi click ra ngoài ảnh
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}