// --- 1. PRELOADER (SỬA LỖI XOAY LIÊN TỤC) ---
const preloader = document.getElementById('preloader');

function hidePreloader() {
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
}

// Cách 1: Tắt khi cấu trúc web tải xong (Nhanh hơn, không đợi ảnh)
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(hidePreloader, 800); // Chờ 0.8s cho hiệu ứng đẹp rồi tắt
});

// Cách 2 (Dự phòng): Tắt cưỡng chế sau 3 giây nếu mạng quá lag
setTimeout(hidePreloader, 3000);


// --- 2. BỘ TỪ ĐIỂN ANH - VIỆT ---
const translations = {
    vi: {
        nav_home: "Trang chủ",
        nav_about: "Giới thiệu",
        nav_exp: "Kinh nghiệm",
        nav_blog: "Bài viết",
        nav_contact: "Liên hệ",
        hero_welcome: "Chào mừng đến với Blog của",
        hero_iam: "Tôi là một",
        hero_desc: "Đam mê khám phá Lập trình mạng, Java, Python và JavaScript. Chuyên xây dựng các hệ thống ổn định và bảo mật.",
        hero_btn: "Đọc bài viết mới nhất",
        sec_about: "Về Tôi",
        about_desc: "Sinh viên/Kỹ sư Hệ thống & Mạng máy tính định hướng DevOps và An ninh mạng. Có kiến thức nền tảng về quản trị hệ thống, mạng máy tính, triển khai dịch vụ và bảo mật hạ tầng CNTT.",
        stat_project: "Dự Án",
        stat_completed: "Hoàn Thành",
        stat_cert: "Chứng Chỉ",
        stat_pro: "Chuyên Nghiệp",
        stat_uni: "Đại Học",
        title_skills: "Chuyên Môn",
        title_edu: "Học Vấn",
        edu_current: "Hiện tại",
        edu_major: "Ngành Công nghệ phần mềm",
        title_contact: "Liên Hệ",
        sec_blog: "Chia Sẻ Kiến Thức",
        filter_all: "TẤT CẢ",
        filter_network: "MẠNG MÁY TÍNH",
        filter_fun: "GIẢI TRÍ",
        sec_cert: "Chứng Chỉ Của Tôi",
        cert_hint: "(Nhấn vào ảnh để xem chi tiết)",
        cert_java: "Chứng chỉ Lập trình Java",
        cert_net: "Chứng chỉ Lập trình Mạng",
        sec_contact: "Gửi Tin Nhắn",
        contact_btn: "Gửi tin nhắn",
        // Blog & Code
        blog_osi_title: "Mô hình OSI 7 Tầng",
        blog_osi_desc: "Hiểu về cách dữ liệu di chuyển từ tầng Vật lý (Physical) đến Ứng dụng (Application).",
        blog_dns_title: "DNS: Danh bạ của Internet",
        blog_dns_desc: "Cơ chế phân giải tên miền hoạt động ra sao?",
        blog_java_class_title: "Class và Object",
        blog_java_class_desc: "Class là khuôn mẫu, Object là thực thể cụ thể.",
        // Placeholders
        ph_search: "Tìm dữ liệu (VD: Java, Socket)...",
        ph_name: "Họ và tên",
        ph_msg: "Lời nhắn..."
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_exp: "Experience",
        nav_blog: "Blog",
        nav_contact: "Contact",
        hero_welcome: "Welcome to the Blog of",
        hero_iam: "I am a",
        hero_desc: "Passionate about Network Programming, Java, Python, and JavaScript. Specializing in building stable and secure systems.",
        hero_btn: "Read Latest Posts",
        sec_about: "About Me",
        about_desc: "Student/System & Network Engineer aiming for DevOps and Cyber Security. Solid background in system administration, computer networking, service deployment, and IT infrastructure security.",
        stat_project: "Projects",
        stat_completed: "Completed",
        stat_cert: "Certificates",
        stat_pro: "Professional",
        stat_uni: "University",
        title_skills: "Expertise",
        title_edu: "Education",
        edu_current: "Current",
        edu_major: "Software Engineering",
        title_contact: "Contact Info",
        sec_blog: "Knowledge Sharing",
        filter_all: "ALL",
        filter_network: "COMPUTER NETWORK",
        filter_fun: "FUNNY",
        sec_cert: "My Certificates",
        cert_hint: "(Click image to view details)",
        cert_java: "Java Programming Certificate",
        cert_net: "Network Programming Certificate",
        sec_contact: "Send Message",
        contact_btn: "Send Message",
        // Blog
        blog_osi_title: "OSI 7-Layer Model",
        blog_osi_desc: "Understanding how data moves from Physical layer to Application layer.",
        blog_dns_title: "DNS: The Phonebook of Internet",
        blog_dns_desc: "How does domain name resolution mechanism work?",
        blog_java_class_title: "Class and Object",
        blog_java_class_desc: "Class is a blueprint, Object is a specific entity.",
        // Placeholders
        ph_search: "Search data (e.g., Java, Socket)...",
        ph_name: "Full Name",
        ph_msg: "Your Message..."
    }
};

// --- 3. LOGIC ĐỔI NGÔN NGỮ ---
const langBtn = document.getElementById('lang-toggle');
let currentLang = localStorage.getItem('lang') || 'vi'; 
let words = ["Sinh viên CNTT", "Java Developer", "Network Engineer", "Web Developer"]; // Mặc định

function updateLanguage(lang) {
    // Cập nhật nút bấm
    if(langBtn) langBtn.textContent = lang === 'vi' ? 'VIE' : 'ENG';

    // Cập nhật text
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Cập nhật Placeholders
    const searchInp = document.getElementById('searchInput');
    const nameInp = document.getElementById('contactName');
    const msgInp = document.getElementById('contactMsg');
    
    if(searchInp) searchInp.placeholder = translations[lang].ph_search;
    if(nameInp) nameInp.placeholder = translations[lang].ph_name;
    if(msgInp) msgInp.placeholder = translations[lang].ph_msg;

    // Cập nhật từ khóa cho Typewriter
    if (lang === 'en') {
        words = ["IT Student", "Java Developer", "Network Engineer", "Web Developer"];
    } else {
        words = ["Sinh viên CNTT", "Java Developer", "Network Engineer", "Web Developer"];
    }
}

// Khởi chạy ngôn ngữ lần đầu
updateLanguage(currentLang);

if(langBtn) {
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'vi' ? 'en' : 'vi';
        localStorage.setItem('lang', currentLang);
        updateLanguage(currentLang);
    });
}


// --- 4. DARK MODE ---
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = themeBtn ? themeBtn.querySelector('i') : null;
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    if(themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
}

if(themeBtn) {
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            if(themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            if(themeIcon) themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
}


// --- 5. MOBILE MENU ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if(hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'var(--nav-bg)';
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = '0 5px 10px var(--shadow)';
        } else {
            navLinks.style.display = 'none';
        }
    });
}


// --- 6. SCROLL ANIMATION ---
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


// --- 7. PROGRESS BAR & BACK TO TOP ---
const progressBar = document.querySelector('.scroll-progress');
const backToTopBtn = document.getElementById("backToTop");

window.onscroll = function() {
    // Progress Bar
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if(progressBar) progressBar.style.width = scrolled + "%";

    // Back to Top
    if(backToTopBtn) {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    }
};

if(backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


// --- 8. TYPEWRITER EFFECT ---
const textElement = document.querySelector(".typing-text");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if(!textElement) return;
    
    const currentWord = words[wordIndex];
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex--);
    } else {
        textElement.textContent = currentWord.substring(0, charIndex++);
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }
    setTimeout(typeEffect, typeSpeed);
}
document.addEventListener('DOMContentLoaded', typeEffect);


// --- 9. CUSTOM CURSOR ---
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', function(e) {
    const posX = e.clientX;
    const posY = e.clientY;
    
    if (window.innerWidth > 768 && cursorDot && cursorOutline) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    }
});


// --- 10. LIGHTBOX (MODAL ẢNH) ---
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("img01");

function openModal(element) {
    if(modal && modalImg) {
        modal.style.display = "block";
        const imgElement = element.querySelector('img');
        if(imgElement) modalImg.src = imgElement.src;
    }
}

function closeModal() {
    if(modal) modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// --- 11. EXTERNAL LINKS ---
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


// --- 12. SEARCH & FILTER (TÌM KIẾM BÀI VIẾT) ---
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const searchInput = document.getElementById('searchInput');

// A. Filter Button Logic
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const activeBtn = document.querySelector('.filter-btn.active');
        if(activeBtn) activeBtn.classList.remove('active');
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (filterValue === 'all' || filterValue === cardCategory) {
                card.style.display = 'flex';
                // Reset Animation
                card.style.animation = 'none';
                card.offsetHeight; /* trigger reflow */
                card.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// B. Search Input Logic
if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
        const term = e.target.value.toLowerCase();
        
        if(term.length > 0) {
            const activeBtn = document.querySelector('.filter-btn.active');
            if(activeBtn && activeBtn.getAttribute('data-filter') !== 'all') {
                 activeBtn.classList.remove('active');
                 const allBtn = document.querySelector('[data-filter="all"]');
                 if(allBtn) allBtn.classList.add('active');
            }
        }

        projectCards.forEach(card => {
            const title = card.querySelector('h3') ? card.querySelector('h3').textContent.toLowerCase() : "";
            const desc = card.querySelector('p') ? card.querySelector('p').textContent.toLowerCase() : "";
            const categoryElem = card.querySelector('.category');
            const category = categoryElem ? categoryElem.textContent.toLowerCase() : "";

            if (title.includes(term) || desc.includes(term) || category.includes(term)) {
                card.style.display = 'flex';
                card.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Thêm keyframe animation (chỉ chạy 1 lần)
if (!document.getElementById('dynamic-styles')) {
    const styleSheet = document.createElement("style");
    styleSheet.id = 'dynamic-styles';
    styleSheet.innerText = `
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95) translateY(10px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
        }
    `;
    document.head.appendChild(styleSheet);
}