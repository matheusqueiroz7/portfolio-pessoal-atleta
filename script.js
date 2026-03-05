document.addEventListener('DOMContentLoaded', () => {

    const translations = {
    
    navHome: { pt: "Início", en: "Home" },
    navSkills: { pt: "Habilidades", en: "Skills" },
    navProjects: { pt: "Projetos", en: "Projects" },
    navContact: { pt: "Contato", en: "Contact" },
    
    heroGreeting: { pt: "Olá, eu sou", en: "Hello, I am" },
    heroName: { pt: "Matheus Queiroz", en: "Matheus Queiroz" },
    heroBio: { pt: "Estou aqui para dar dicas e ajudar você a se tornar atleta. Com foco em voleibol e mentalidade.", en: "I'm here to give you tips and help you become an athlete focusing on volleyball and mindset." },
    heroButton: { pt: "Ver Projetos", en: "View Projects" },
    
    skillsTitle: { pt: "Minhas Habilidades", en: "My Skills" },
    
    projectsTitle: { pt: "Meus Projetos de Destaque", en: "Featured Projects" },
    
    project1Title: { pt: "1° Lugar Copa Campo Verde (2024)", en: "1st Place Campo Verde Cup (2024)" },
    project1Desc: { pt: "No mês de novembro de 2024 conquistei meu primeiro campeonato de voleibol federado.", en: "In November 2024 I won my first federated volleyball championship." },
    
    project2Title: { pt: "Destaque de melhor levantador Copa Craques (2024)", en: "Best Setter Highlight Copa Craques (2024)" },
    project2Desc: { pt: "Conquistei destaque como melhor levantador durante a Copa Craques de 2024.", en: "I received recognition as best setter during the 2024 Copa Craques." },
    
    project3Title: { pt: "Faculdade de Educação Física na UFMT", en: "Physical Education at UFMT" },
    project3Desc: { pt: "Formação em Educação Física pela UFMT (2027).", en: "Bachelor's degree in Physical Education at UFMT (2027)." },
    
    btnDemo: { pt: "Demo", en: "Demo" },
    btnCode: { pt: "Código", en: "Code" },
    
    contactTitle: { pt: "Vamos construir uma carreira?", en: "Shall we build a career together?" },
    contactSubtitle: { pt: "Entre em contato caso tenha interesse na compra do curso, parcerias ou para tirar dúvidas sobre voleibol.", en: "Contact me if you are interested in the course, partnerships, or if you have questions about volleyball." },
    
    formName: { pt: "Seu Nome", en: "Your Name" },
    formEmail: { pt: "Seu Email", en: "Your Email" },
    formMessage: { pt: "Sua Mensagem", en: "Your Message" },
    formSend: { pt: "Enviar Mensagem", en: "Send Message" },
    
    formSuccess: { pt: "Mensagem enviada com sucesso! Em breve entrarei em contato.", en: "Message sent successfully! I will contact you soon." },
    
    footerText: { pt: "© 2026 Matheus Queiroz. Feito com paixão e código.", en: "© 2026 Matheus Queiroz. Made with passion and code." }
    
    };
    
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = localStorage.getItem('lang') || 'pt';
    
    function translatePage(lang) {
    
    for (const key in translations) {
    
    const element = document.querySelector(`[data-key="${key}"]`);
    
    if (element) {
    
    const text = translations[key][lang];
    
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
    
    element.placeholder = text;
    
    } else {
    
    element.textContent = text;
    
    }
    
    }
    
    }
    
    langButtons.forEach(btn => {
    
    btn.classList.remove('active-lang');
    
    if (btn.dataset.lang === lang) {
    
    btn.classList.add('active-lang');
    
    }
    
    });
    
    currentLang = lang;
    
    localStorage.setItem('lang', lang);
    
    }
    
    langButtons.forEach(button => {
    
    button.addEventListener('click', () => {
    
    const lang = button.dataset.lang;
    
    translatePage(lang);
    
    });
    
    });
    
    translatePage(currentLang);
    
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;
    
    modeToggle.addEventListener('click', () => {
    
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    const isDark = body.classList.contains('dark-mode');
    
    modeToggle.querySelector('i').className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    });
    
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
    
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    modeToggle.querySelector('i').className = 'fas fa-moon';
    
    } else {
    
    body.classList.add('dark-mode');
    modeToggle.querySelector('i').className = 'fas fa-sun';
    
    }
    
    const typingElement = document.querySelector('.typing');
    
    if (typingElement) {
    
    const textArray = JSON.parse(typingElement.getAttribute('data-text'));
    
    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;
    
    function type() {
    
    const currentText = textArray[textIndex];
    
    if (!deleting) {
    
    typingElement.textContent = currentText.substring(0, charIndex++);
    
    if (charIndex > currentText.length) {
    
    deleting = true;
    setTimeout(type, 1500);
    return;
    
    }
    
    } else {
    
    typingElement.textContent = currentText.substring(0, charIndex--);
    
    if (charIndex < 0) {
    
    deleting = false;
    textIndex = (textIndex + 1) % textArray.length;
    
    }
    
    }
    
    setTimeout(type, deleting ? 50 : 100);
    
    }
    
    type();
    
    }
    
    const skillsSection = document.getElementById('habilidades');
    const skillBars = document.querySelectorAll('.bar');
    
    let animated = false;
    
    function animateSkills() {
    
    if (!skillsSection) return;
    
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    
    if (sectionTop < screenHeight - 100 && !animated) {
    
    skillBars.forEach(bar => {
    
    const percent = bar.getAttribute('data-percent');
    
    bar.style.width = percent + '%';
    
    });
    
    animated = true;
    
    window.removeEventListener('scroll', animateSkills);
    
    }
    
    }
    
    window.addEventListener('scroll', animateSkills);
    
    animateSkills();
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    
    anchor.addEventListener('click', function(e) {
    
    e.preventDefault();
    
    const target = document.getElementById(this.getAttribute('href').substring(1));
    
    const headerHeight = document.querySelector('header').offsetHeight;
    
    if (target) {
    
    window.scrollTo({
    
    top: target.offsetTop - headerHeight,
    behavior: 'smooth'
    
    });
    
    }
    
    });
    
    });
    
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    contactForm.addEventListener('submit', function(e) {
    
    e.preventDefault();
    
    const successMessage = translations.formSuccess[currentLang];
    
    formMessage.style.color = 'var(--primary-color)';
    formMessage.textContent = successMessage;
    
    contactForm.reset();
    
    });
    
    });