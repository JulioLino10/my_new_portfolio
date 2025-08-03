function myScope() {

    // Sistema de Tradução
    const translations = {
        pt: {
            // Navegação
            'nav-about': 'Sobre mim',
            'nav-skills': 'Habilidades',
            'nav-projects': 'Projetos',
            'nav-contact': 'Contato',
            
            // Hero Section
            'hero-greeting': 'Olá,<br>Meu nome<br>é <span class="highlight-name rainbow-text">Julio Lino</span>!',
            'hero-subtitle': 'Desenvolvedor & Estudante de Ciência da Computação',
            'btn-projects': 'PROJETOS',
            'btn-cv': 'DOWNLOAD CV',
            
            // About Section
            'about-title': 'Sobre mim',
            'stat-projects': 'Projetos',
            'stat-years': 'Anos Estudando',
            'about-p1': 'Sou um <b>desenvolvedor com foco em Banco de Dados</b> e estudante de Ciência da Computação. Crio, estruturo e gerencio sistemas de dados, sites e aplicações web — sempre com propósito e precisão. Tenho experiência em <b>automação de processos com Python</b>, transformando tarefas repetitivas em rotinas inteligentes.',
            'about-highlight': 'Meu código é ferramenta e arte: resolve, organiza e impulsiona.',
            'about-p2': 'Também curto compartilhar meus aprendizados ao longo da jornada com programação e tecnologia, sempre buscando ajudar, trocar ideias e fortalecer a conexão com a comunidade de desenvolvedores. Se quiser acompanhar esse caminho mais de perto, me segue lá no <a href="https://www.instagram.com/_lino0z_/" class="instagram-link glow-link">Instagram</a> e confere o conteúdo que venho criando sobre o universo da TI.',
            'about-cta': 'Estou aberto a oportunidades de <b>emprego</b> nas quais eu possa contribuir, aprender e crescer. Se você tiver uma boa oportunidade que corresponda às minhas habilidades e experiência, não hesite em <b>entrar em contato</b>.',
            
            // Skills Section
            'skills-title': 'Skills e Habilidades',
            'skills-subtitle': 'Tecnologias que domino e utilizo em meus projetos',
            'frontend': 'Frontend',
            'backend': 'Backend & Database',
            'tools': 'Ferramentas',
            'automation': 'Automação',
            
            // Projects Section
            'projects-title': 'Projetos',
            'projects-subtitle': 'Abaixo você encontrará alguns dos meus projetos pessoais e de estudo. Mais projetos estão disponíveis em meu <a href="https://github.com/JulioLino10">GitHub</a>',
            'tag-automation': 'Automação',
            'project1-title': '🧩 Automação de Forecast Comercial',
            'project1-desc': 'Sistema desenvolvido em Python para otimizar o preenchimento de forecasts comerciais. Extrai dados de propostas em PDF e envia automaticamente para Google Sheets, eliminando tarefas repetitivas e reduzindo erros manuais.',
            'repository': 'Repositório',
            'next-project': 'Próximo Projeto',
            'in-development': 'Em desenvolvimento...',
            'project2-title': '🚀 Sistema Web Moderno',
            'project2-desc': 'Aplicação web completa em desenvolvimento utilizando tecnologias modernas para criar uma experiência única para o usuário.',
            'coming-soon': 'Em breve',
            'database-system': 'Sistema de Banco de Dados',
            'in-planning': 'Em planejamento...',
            'project3-title': '📊 Gerenciador de Dados',
            'project3-desc': 'Sistema robusto de gerenciamento de banco de dados com interface intuitiva e funcionalidades avançadas de análise.',
            'in-planning-status': 'Em planejamento',
            
            // Contact Section
            'contact-title': 'Contato',
            'contact-subtitle': 'Sinta-se à vontade para entrar em contato comigo. Estou sempre aberto a novas oportunidades e colaborações.',
            'email-label': 'Email',
            'location-label': 'Localização',
            'brazil': 'Brasil',
            'availability-label': 'Disponibilidade',
            'schedule': 'Seg - Sex: 9h às 18h',
            'social-label': 'Redes Sociais',
            'name-label': 'Nome',
            'email-form-label': 'Email',
            'subject-label': 'Assunto',
            'message-label': 'Mensagem',
            'send-message': 'Enviar Mensagem'
        },
        en: {
            // Navigation
            'nav-about': 'About me',
            'nav-skills': 'Skills',
            'nav-projects': 'Projects',
            'nav-contact': 'Contact',
            
            // Hero Section
            'hero-greeting': 'Hello,<br>My name<br>is <span class="highlight-name rainbow-text">Julio Lino</span>!',
            'hero-subtitle': 'Developer & Computer Science Student',
            'btn-projects': 'PROJECTS',
            'btn-cv': 'DOWNLOAD CV',
            
            // About Section
            'about-title': 'About me',
            'stat-projects': 'Projects',
            'stat-years': 'Years Studying',
            'about-p1': 'I am a <b>developer focused on Database</b> and Computer Science student. I create, structure and manage data systems, websites and web applications — always with purpose and precision. I have experience in <b>process automation with Python</b>, transforming repetitive tasks into intelligent routines.',
            'about-highlight': 'My code is tool and art: it solves, organizes and drives.',
            'about-p2': 'I also enjoy sharing my learnings along the journey with programming and technology, always seeking to help, exchange ideas and strengthen the connection with the developer community. If you want to follow this path more closely, follow me on <a href="https://www.instagram.com/_lino0z_/" class="instagram-link glow-link">Instagram</a> and check out the content I\'ve been creating about the IT universe.',
            'about-cta': 'I am open to <b>job</b> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience, don\'t hesitate to <b>get in touch</b>.',
            
            // Skills Section
            'skills-title': 'Skills & Abilities',
            'skills-subtitle': 'Technologies I master and use in my projects',
            'frontend': 'Frontend',
            'backend': 'Backend & Database',
            'tools': 'Tools',
            'automation': 'Automation',
            
            // Projects Section
            'projects-title': 'Projects',
            'projects-subtitle': 'Below you will find some of my personal and study projects. More projects are available on my <a href="https://github.com/JulioLino10">GitHub</a>',
            'tag-automation': 'Automation',
            'project1-title': '🧩 Commercial Forecast Automation',
            'project1-desc': 'System developed in Python to optimize commercial forecast filling. Extracts data from PDF proposals and automatically sends to Google Sheets, eliminating repetitive tasks and reducing manual errors.',
            'repository': 'Repository',
            'next-project': 'Next Project',
            'in-development': 'In development...',
            'project2-title': '🚀 Modern Web System',
            'project2-desc': 'Complete web application under development using modern technologies to create a unique user experience.',
            'coming-soon': 'Coming soon',
            'database-system': 'Database System',
            'in-planning': 'In planning...',
            'project3-title': '📊 Data Manager',
            'project3-desc': 'Robust database management system with intuitive interface and advanced analysis features.',
            'in-planning-status': 'In planning',
            
            // Contact Section
            'contact-title': 'Contact',
            'contact-subtitle': 'Feel free to contact me. I am always open to new opportunities and collaborations.',
            'email-label': 'Email',
            'location-label': 'Location',
            'brazil': 'Brazil',
            'availability-label': 'Availability',
            'schedule': 'Mon - Fri: 9am to 6pm',
            'social-label': 'Social Media',
            'name-label': 'Name',
            'email-form-label': 'Email',
            'subject-label': 'Subject',
            'message-label': 'Message',
            'send-message': 'Send Message'
        }
    };

    let currentLang = 'pt';

    function switchLanguage() {
        const langToggle = document.getElementById('lang-toggle');
        const currentLangSpan = document.getElementById('current-lang');
        
        if (!langToggle) return;

        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'pt' ? 'en' : 'pt';
            currentLangSpan.textContent = currentLang.toUpperCase();
            
            // Adicionar efeito de rotação
            langToggle.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                langToggle.style.transform = 'rotate(0deg)';
            }, 500);

            updateTexts();
        });
    }

    function updateTexts() {
        const elements = document.querySelectorAll('[data-translate]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[currentLang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[currentLang][key];
                } else {
                    element.innerHTML = translations[currentLang][key];
                }
            }
        });

        // Atualizar texto de digitação
        updateTypingText();
    }

    function updateTypingText() {
        const typingTexts = {
            pt: [
                "Desenvolvedor Full Stack",
                "Especialista em Banco de Dados", 
                "Automação com Python",
                "Estudante de Ciência da Computação"
            ],
            en: [
                "Full Stack Developer",
                "Database Specialist",
                "Python Automation",
                "Computer Science Student"
            ]
        };

        if (window.typingInterval) {
            clearInterval(window.typingInterval);
        }

        startTypingEffect(typingTexts[currentLang]);
    }

    function startTypingEffect(textArray) {
        const typedTextSpan = document.querySelector(".typed-text");
        const cursorSpan = document.querySelector(".cursor");

        if (!typedTextSpan) return;

        let textArrayIndex = 0;
        let charIndex = 0;

        function typeText() {
            if (charIndex < textArray[textArrayIndex].length) {
                if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 100);
            } else {
                cursorSpan.classList.remove("typing");
                setTimeout(eraseText, 2000);
            }
        }

        function eraseText() {
            if (charIndex > 0) {
                if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(eraseText, 50);
            } else {
                cursorSpan.classList.remove("typing");
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(typeText, 500);
            }
        }

        typeText();
    }

    // Funções existentes mantidas
    function btnNavBAr() {
        const btn = document.querySelector('#btn-mobile');
        const nav = document.querySelector('.nav-bar');

        btn.addEventListener('click', () => nav.classList.toggle('active'));
    }

    function closeMenuOnNavItemClick() {
        const navItems = document.querySelectorAll('.nav-item');
        const nav = document.querySelector('.nav-bar');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
    }

    function seeMore() {
        const seeMore = document.querySelector('.see-more');
        if (seeMore) {
            seeMore.addEventListener('click', () => {
                const aboutMe = document.querySelector('.main-four');
                if (aboutMe) {
                    aboutMe.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    }

    function projectImagesLinks() {
        const images = document.querySelectorAll('.project-img');
        images.forEach(img => {
            img.addEventListener('click', (e) => {
                const link = img.getAttribute('data-link');
                if (link) {
                    window.open(link, '_blank');
                }
            });
        });
    }

    function logoReload() {
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }

    // Criar partículas de fundo melhoradas
    function createParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;

        for (let i = 0; i < 100; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            const size = Math.random() * 6 + 2;
            const colors = ['#ffffff', '#cccccc', '#999999'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.background = color;
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
            particle.style.opacity = Math.random() * 0.3 + 0.1;
            
            particlesContainer.appendChild(particle);
        }
    }

    // Animação das barras de progresso melhorada
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const progress = progressBar.getAttribute('data-progress');
                    
                    setTimeout(() => {
                        progressBar.style.width = progress + '%';
                        progressBar.classList.add('skill-glow');
                    }, 300);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => observer.observe(bar));
    }

    // Animação dos números das estatísticas melhorada
    function animateNumbers() {
        const numbers = document.querySelectorAll('.stat-number');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const number = entry.target;
                    const count = parseInt(number.getAttribute('data-count'));
                    let current = 0;
                    
                    const increment = count / 60;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= count) {
                            current = count;
                            clearInterval(timer);
                            number.classList.add('pulse');
                        }
                        number.textContent = Math.floor(current);
                    }, 30);
                }
            });
        }, { threshold: 0.5 });

        numbers.forEach(num => observer.observe(num));
    }

    // Smooth scroll para links de navegação
    function smoothScroll() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Header transparente no scroll melhorado
    function headerOnScroll() {
        const header = document.querySelector('header');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const rate = scrolled * -0.5;
            
            if (scrolled > 100) {
                header.style.background = 'rgba(10, 10, 10, 0.98)';
                header.style.backdropFilter = 'blur(25px)';
                header.style.transform = `translateY(${Math.max(rate, -50)}px)`;
            } else {
                header.style.background = 'rgba(10, 10, 10, 0.9)';
                header.style.backdropFilter = 'blur(20px)';
                header.style.transform = 'translateY(0px)';
            }
        });
    }

    // Download CV functionality melhorada
    function downloadCV() {
        const downloadBtn = document.querySelector('.download-cv');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', () => {
                downloadBtn.classList.add('shake');
                setTimeout(() => {
                    downloadBtn.classList.remove('shake');
                }, 500);
                
                const message = currentLang === 'pt' ? 
                    'Funcionalidade de download do CV será implementada em breve!' :
                    'CV download functionality will be implemented soon!';
                alert(message);
            });
        }
    }

    // Formulário de contato com validação melhorada
    function contactForm() {
        const form = document.querySelector('.contact-form');
        const submitBtn = document.querySelector('.btn-contact');
        
        if (form) {
            form.addEventListener('submit', (e) => {
                const name = form.querySelector('#name').value;
                const email = form.querySelector('#email').value;
                const message = form.querySelector('#message').value;
                
                if (!name || !email || !message) {
                    e.preventDefault();
                    const errorMsg = currentLang === 'pt' ? 
                        'Por favor, preencha todos os campos obrigatórios.' :
                        'Please fill in all required fields.';
                    alert(errorMsg);
                    return;
                }
                
                // Animação do botão durante o envio
                const sendingText = currentLang === 'pt' ? 'Enviando...' : 'Sending...';
                submitBtn.innerHTML = `<span>${sendingText}</span><i class="fas fa-spinner fa-spin"></i>`;
                submitBtn.classList.add('btn-pulse');
                
                // Restaura o botão após alguns segundos
                setTimeout(() => {
                    const originalText = currentLang === 'pt' ? 'Enviar Mensagem' : 'Send Message';
                    submitBtn.innerHTML = `<span>${originalText}</span><i class="fas fa-paper-plane icon-fly"></i>`;
                    submitBtn.classList.remove('btn-pulse');
                }, 3000);
            });
        }
    }

    // Efeitos de hover aprimorados
    function enhancedHoverEffects() {
        // Efeito glitch no logo
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.addEventListener('mouseenter', () => {
                logo.classList.add('glitch');
                setTimeout(() => logo.classList.remove('glitch'), 300);
            });
        }

        // Efeitos nos cards de projeto
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-15px) rotateX(5deg) rotateY(2deg)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg)';
            });
        });

        // Efeito rainbow no nome principal
        const highlightName = document.querySelector('.highlight-name');
        if (highlightName) {
            setInterval(() => {
                highlightName.classList.toggle('rainbow-text');
            }, 3000);
        }
    }

    // Parallax effect para o background
    function parallaxEffect() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.main');
            
            if (parallax) {
                const speed = scrolled * 0.5;
                parallax.style.transform = `translateY(${speed}px)`;
            }
        });
    }

    // Inicializar todas as funções
    function init() {
        btnNavBAr();
        closeMenuOnNavItemClick();
        seeMore();
        projectImagesLinks();
        logoReload();
        switchLanguage();
        createParticles();
        animateSkillBars();
        animateNumbers();
        smoothScroll();
        headerOnScroll();
        downloadCV();
        contactForm();
        enhancedHoverEffects();
        parallaxEffect();
        
        // Inicializar textos em português
        updateTexts();
    }

    // Executar quando a página carregar
    document.addEventListener('DOMContentLoaded', init);
    
    // Fallback se DOMContentLoaded já passou
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}

myScope();