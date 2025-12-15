// --- 1. PRELOADER & SETUP ---
const preloader = document.getElementById('preloader');
function hidePreloader() {
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => { preloader.style.display = 'none'; }, 500);
    }
}
document.addEventListener('DOMContentLoaded', function() { setTimeout(hidePreloader, 800); });
setTimeout(hidePreloader, 3000);

// --- 2. BỘ TỪ ĐIỂN DỊCH THUẬT (TRANSLATIONS) ---
const translations = {
    vi: {
        // MENU
        nav_home: "Trang chủ", 
        nav_about: "Giới thiệu", 
        nav_exp: "Kinh nghiệm", 
        nav_blog: "Bài viết", 
        nav_cert: "Chứng chỉ", // <--- ĐÃ THÊM MỚI
        nav_contact: "Liên hệ",

        // HERO & ABOUT
        hero_welcome: "Chào mừng đến với Blog của", hero_iam: "Tôi là một",
        hero_desc: "Đam mê khám phá Lập trình mạng, Java, Python và JavaScript. Chuyên xây dựng các hệ thống ổn định và bảo mật.",
        hero_btn: "Đọc bài viết mới nhất",
        sec_about: "Về Tôi",
        about_desc: "Sinh viên/Kỹ sư Hệ thống & Mạng máy tính định hướng DevOps và An ninh mạng. Có kiến thức nền tảng về quản trị hệ thống, mạng máy tính, triển khai dịch vụ và bảo mật hạ tầng CNTT.",
        stat_project: "Dự Án", stat_completed: "Hoàn Thành",
        stat_cert: "Chứng Chỉ", stat_pro: "Chuyên Nghiệp",
        stat_uni: "Đại Học",
        title_skills: "Chuyên Môn",
        title_edu: "Học Vấn", edu_current: "Hiện tại", edu_major: "Ngành Công nghệ phần mềm",
        title_contact: "Liên Hệ",
        sec_blog: "Chia Sẻ Kiến Thức",
        filter_all: "TẤT CẢ", filter_network: "MẠNG MÁY TÍNH", filter_fun: "GIẢI TRÍ",
        
        // BLOG TITLES & DESC (VIETNAMESE)
        b_osi_t: "Mô hình OSI 7 Tầng", b_osi_d: "Hiểu về cách dữ liệu di chuyển từ tầng Vật lý (Physical) đến Ứng dụng (Application).",
        b_dns_t: "DNS: Danh bạ của Internet", b_dns_d: "Cơ chế phân giải tên miền hoạt động ra sao?",
        b_http_t: "HTTP vs HTTPS & SSL", b_http_d: "Sự khác biệt về bảo mật và quy trình 'bắt tay' (Handshake) để mã hóa dữ liệu.",
        b_socket_t: "Socket TCP Client-Server", b_socket_d: "Mô hình giao tiếp tin cậy qua mạng. Nền tảng của các ứng dụng Chat.",
        b_works_d: "Câu nói kinh điển của mọi Dev: Tại sao code chạy ngon lành trên máy tôi nhưng sang máy sếp lại lỗi?",
        b_3am_t: "Code lúc 3h sáng vs 9h sáng", b_3am_d: "Sự khác biệt giữa việc code trong trạng thái 'thăng hoa' ban đêm và cơn đau đầu sáng hôm sau.",
        b_cls_t: "Class và Object", b_cls_d: "Class là khuôn mẫu, Object là thực thể cụ thể. Đây là nền tảng của OOP.",
        b_arr_t: "ArrayList vs Array", b_arr_d: "ArrayList linh hoạt hơn mảng thường vì có thể thay đổi kích thước động.",
        b_inh_t: "Kế thừa (Inheritance)", b_inh_d: "Dùng từ khóa `extends` để lớp con kế thừa thuộc tính của lớp cha.",
        b_int_t: "Interface là gì?", b_int_d: "Interface chứa các hàm trừu tượng, giúp đa kế thừa trong Java.",
        b_var_t: "Let vs Const vs Var", b_var_d: "Nên dùng `const` mặc định, `let` khi cần đổi giá trị. Tránh dùng `var`.",
        b_arrw_t: "Arrow Function", b_arrw_d: "Cách viết hàm ngắn gọn hơn trong ES6.",
        b_lit_t: "Template Literals", b_lit_d: "Nối chuỗi siêu dễ với dấu backtick (`).",
        b_dom_t: "DOM Manipulation", b_dom_d: "Thay đổi nội dung HTML bằng JS.",
        b_list_t: "List Comprehension", b_list_d: "Tạo list mới từ list cũ chỉ trong 1 dòng code.",
        b_dict_t: "Dictionary cơ bản", b_dict_d: "Lưu trữ dữ liệu dạng Key-Value cực mạnh mẽ.",
        b_ptr_t: "Con trỏ (Pointer)", b_ptr_d: "Biến lưu địa chỉ bộ nhớ của biến khác.",

        // CERTIFICATES & CONTACT
        sec_cert: "Chứng Chỉ Của Tôi", cert_hint: "(Nhấn vào ảnh để xem chi tiết)",
        c_jv1: "Chứng chỉ JavaScript Essentials 1", c_net: "Chứng chỉ Lập trình Mạng", c_jv2: "Chứng chỉ JavaScript Essentials 2",
        sec_contact: "Gửi Tin Nhắn", contact_btn: "Gửi tin nhắn",
        ph_search: "Tìm dữ liệu (VD: Java, Socket)...", ph_name: "Họ và tên", ph_msg: "Lời nhắn..."
    },
    en: {
        // MENU
        nav_home: "Home", 
        nav_about: "About", 
        nav_exp: "Experience", 
        nav_blog: "Blog", 
        nav_cert: "Certificates", // <--- ĐÃ THÊM MỚI
        nav_contact: "Contact",

        // HERO & ABOUT
        hero_welcome: "Welcome to the Blog of", hero_iam: "I am a",
        hero_desc: "Passionate about Network Programming, Java, Python, and JavaScript. Specializing in building stable and secure systems.",
        hero_btn: "Read Latest Posts",
        sec_about: "About Me",
        about_desc: "Student/System & Network Engineer aiming for DevOps and Cyber Security. Solid background in system administration, networking, and IT infrastructure security.",
        stat_project: "Projects", stat_completed: "Completed",
        stat_cert: "Certificates", stat_pro: "Professional",
        stat_uni: "University",
        title_skills: "Expertise",
        title_edu: "Education", edu_current: "Current", edu_major: "Software Engineering",
        title_contact: "Contact Info",
        sec_blog: "Knowledge Sharing",
        filter_all: "ALL", filter_network: "NETWORKING", filter_fun: "FUNNY",
        
        // BLOG TITLES & DESC (ENGLISH TRANSLATION)
        b_osi_t: "OSI 7-Layer Model", b_osi_d: "Understanding how data moves from Physical layer to Application layer.",
        b_dns_t: "DNS: The Phonebook of Internet", b_dns_d: "How does domain name resolution mechanism work?",
        b_http_t: "HTTP vs HTTPS & SSL", b_http_d: "Security differences and the Handshake process to encrypt data.",
        b_socket_t: "Socket TCP Client-Server", b_socket_d: "Reliable network communication model. The foundation of Chat apps.",
        b_works_d: "Classic Dev quote: Why does code work on my machine but crash on the boss's?",
        b_3am_t: "Coding at 3 AM vs 9 AM", b_3am_d: "The difference between coding in 'the zone' at night and the headache next morning.",
        b_cls_t: "Class and Object", b_cls_d: "Class is a blueprint, Object is a specific entity. Foundation of OOP.",
        b_arr_t: "ArrayList vs Array", b_arr_d: "ArrayList is more flexible than arrays as it can resize dynamically.",
        b_inh_t: "Inheritance", b_inh_d: "Using `extends` keyword so child class inherits properties from parent class.",
        b_int_t: "What is Interface?", b_int_d: "Interface contains abstract methods, enabling multiple inheritance in Java.",
        b_var_t: "Let vs Const vs Var", b_var_d: "Prefer `const` by default, `let` when reassignment is needed. Avoid `var`.",
        b_arrw_t: "Arrow Function", b_arrw_d: "Shorter syntax for writing functions introduced in ES6.",
        b_lit_t: "Template Literals", b_lit_d: "Easy string concatenation using backticks (`).",
        b_dom_t: "DOM Manipulation", b_dom_d: "Modifying HTML content dynamically using JS.",
        b_list_t: "List Comprehension", b_list_d: "Create a new list from an existing one in just a single line of code.",
        b_dict_t: "Basic Dictionary", b_dict_d: "Storing data in Key-Value pairs efficiently.",
        b_ptr_t: "Pointers in C", b_ptr_d: "A variable that stores the memory address of another variable.",

        // CERTIFICATES & CONTACT
        sec_cert: "My Certificates", cert_hint: "(Click image to view details)",
        c_jv1: "JavaScript Essentials 1 Certificate", c_net: "Network Programming Certificate", c_jv2: "JavaScript Essentials 2 Certificate",
        sec_contact: "Send Message", contact_btn: "Send Message",
        ph_search: "Search data (e.g., Java, Socket)...", ph_name: "Full Name", ph_msg: "Your Message..."
    }
};

// --- 3. LOGIC ĐỔI NGÔN NGỮ ---
const langBtn = document.getElementById('lang-toggle');
let currentLang = localStorage.getItem('lang') || 'vi'; 
let words = ["Sinh viên CNTT", "Java Developer", "Network Engineer", "Web Developer"];

function updateLanguage(lang) {
    if(langBtn) langBtn.textContent = lang === 'vi' ? 'VIE' : 'ENG';

    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Cập nhật Placeholder
    const searchInp = document.getElementById('searchInput');
    const nameInp = document.getElementById('contactName');
    const msgInp = document.getElementById('contactMsg');
    
    if(searchInp) searchInp.placeholder = translations[lang].ph_search;
    if(nameInp) nameInp.placeholder = translations[lang].ph_name;
    if(msgInp) msgInp.placeholder = translations[lang].ph_msg;

    // Cập nhật Typewriter Words
    if (lang === 'en') {
        words = ["IT Student", "Java Developer", "Network Engineer", "Web Developer"];
    } else {
        words = ["Sinh viên CNTT", "Java Developer", "Network Engineer", "Web Developer"];
    }
}

updateLanguage(currentLang);

if(langBtn) {
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'vi' ? 'en' : 'vi';
        localStorage.setItem('lang', currentLang);
        updateLanguage(currentLang);
    });
}

// --- 4. CÁC CHỨC NĂNG KHÁC (Dark Mode, Menu, Filter...) ---
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

const animatedElements = document.querySelectorAll('.hero-text, .hero-img, .section-title, .about-content, .stat-box, .info-card, .project-card, .cert-card, .contact-form');
animatedElements.forEach((el) => el.classList.add('hidden'));
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('show');
    });
});
animatedElements.forEach((el) => observer.observe(el));

const progressBar = document.querySelector('.scroll-progress');
const backToTopBtn = document.getElementById("backToTop");
window.onscroll = function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if(progressBar) progressBar.style.width = scrolled + "%";
    if(backToTopBtn) {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    }
};
if(backToTopBtn) {
    backToTopBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
}

const textElement = document.querySelector(".typing-text");
let wordIndex = 0; let charIndex = 0; let isDeleting = false;
function typeEffect() {
    if(!textElement) return;
    const currentWord = words[wordIndex];
    if (isDeleting) { textElement.textContent = currentWord.substring(0, charIndex--); } 
    else { textElement.textContent = currentWord.substring(0, charIndex++); }
    let typeSpeed = isDeleting ? 50 : 100;
    if (!isDeleting && charIndex === currentWord.length) { typeSpeed = 2000; isDeleting = true; } 
    else if (isDeleting && charIndex === 0) { isDeleting = false; wordIndex = (wordIndex + 1) % words.length; typeSpeed = 500; }
    setTimeout(typeEffect, typeSpeed);
}
document.addEventListener('DOMContentLoaded', typeEffect);

const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');
window.addEventListener('mousemove', function(e) {
    const posX = e.clientX; const posY = e.clientY;
    if (window.innerWidth > 768 && cursorDot && cursorOutline) {
        cursorDot.style.left = `${posX}px`; cursorDot.style.top = `${posY}px`;
        cursorOutline.animate({ left: `${posX}px`, top: `${posY}px` }, { duration: 500, fill: "forwards" });
    }
});

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("img01");
function openModal(element) {
    if(modal && modalImg) {
        modal.style.display = "block";
        const imgElement = element.querySelector('img');
        if(imgElement) modalImg.src = imgElement.src;
    }
}
function closeModal() { if(modal) modal.style.display = "none"; }
window.onclick = function(event) { if (event.target == modal) modal.style.display = "none"; }

const projectLink = document.getElementById('project-link');
if (projectLink) { projectLink.addEventListener('click', () => { window.open('https://github.com/vhyyy', '_blank'); }); }

const certLink = document.getElementById('cert-link');
if (certLink) { 
    certLink.addEventListener('click', () => { 
        const certSection = document.getElementById('certificates'); 
        if (certSection) certSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
    }); 
}

const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const searchInput = document.getElementById('searchInput');

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
                card.style.animation = 'none';
                card.offsetHeight; // Trigger reflow
                card.style.animation = 'fadeIn 0.5s ease forwards';
            } else { card.style.display = 'none'; }
        });
    });
});

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
                card.style.display = 'flex'; card.style.animation = 'fadeIn 0.5s ease forwards';
            } else { card.style.display = 'none'; }
        });
    });
}

if (!document.getElementById('dynamic-styles')) {
    const styleSheet = document.createElement("style");
    styleSheet.id = 'dynamic-styles';
    styleSheet.innerText = `@keyframes fadeIn { from { opacity: 0; transform: scale(0.95) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }`;
    document.head.appendChild(styleSheet);
}