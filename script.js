// ===============================================
// MODERN PORTFOLIO JAVASCRIPT
// Enhanced with animations, interactions & AOS
// ===============================================

// ===============================================
// PROJECTS DATA - GLOBAL SCOPE
// ===============================================
const projectsData = [
    {
        id: 1,
        title: "Carrito de Compras React",
        description: "Aplicación de e-commerce desarrollada con React y Local Storage. Incluye funcionalidades completas de carrito de compras, gestión de productos, y persistencia de datos local. Interfaz moderna y responsive para una experiencia de usuario optimizada.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&auto=format",
        technologies: ["React", "JavaScript", "CSS3", "Local Storage", "HTML5"],
        category: "frontend",
        github: "https://github.com/fabioFV2005/CarritoCompras"
    },
    {
        id: 2,
        title: "NutriKinesis - Contador de Ejercicios IA",
        description: "Aplicación innovadora para gimnasios que utiliza Flask y MediaPipe para contar repeticiones de ejercicios en tiempo real. Sistema de visión por computadora que analiza movimientos corporales y proporciona feedback automático para mejorar la experiencia de entrenamiento.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&auto=format",
        technologies: ["Flask", "Python", "MediaPipe", "OpenCV", "JavaScript", "HTML5", "CSS3"],
        category: "fullstack",
        github: "https://github.com/fabioFV2005/nutrikinesis"
    },
    {
        id: 3,
        title: "La Yunqueña - Sistema de Tienda",
        description: "Plataforma completa de e-commerce desarrollada para la tienda La Yunqueña en Cochabamba. Sistema integral con gestión de inventario, procesamiento de pedidos, y panel administrativo. Diseño adaptado a las necesidades locales del negocio.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&auto=format",
        technologies: ["PHP", "MySQL", "JavaScript", "CSS3", "HTML5"],
        category: "fullstack",
        github: "https://github.com/fabioFV2005/clienteTienda"
    },
    {
        id: 4,
        title: "Amazon Clone",
        description: "Réplica completa de la interfaz de Amazon con funcionalidades de e-commerce. Incluye catálogo de productos, sistema de búsqueda, carrito de compras, y diseño responsive. Proyecto que demuestra habilidades en desarrollo frontend y UX/UI.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop&auto=format",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        category: "frontend",
        github: "https://github.com/fabioFV2005/copy_amazon"
    },
    {
        id: 5,
        title: "CNN Clone - Portal de Noticias",
        description: "Clon completo del sitio web de CNN desarrollado con PHP usando arquitectura MVC. Incluye gestión de noticias, base de datos MySQL, panel administrativo, y funcionalidades dinámicas con JavaScript. Sistema robusto para gestión de contenido informativo.",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop&auto=format",
        technologies: ["PHP", "MySQL", "JavaScript", "MVC", "CSS3", "HTML5"],
        category: "fullstack",
        github: "https://github.com/fabioFV2005/cnn_copy"
    },
    {
        id: 6,
        title: "Sistema de Búsqueda de Personas Perdidas",
        description: "Aplicación web completa para crear hojas de presentación de personas perdidas. Incluye gestión de usuarios, autenticación JWT, subida de imágenes con Cloudinary y base de datos MongoDB. Sistema robusto con API RESTful para ayudar a reunir familias.",
        image: "https://observatoriotratabolivia.org/wp-content/uploads/2024/09/ilustracion-eje-desaparecidos-1.png",
        technologies: ["React", "Express", "Node.js", "MongoDB", "JWT", "Cloudinary", "TailwindCSS"],
        category: "fullstack",
        github: "https://github.com/fabioFV2005/deploy_devtree_frontend",
        demo: "https://ayudacbba.netlify.app/"
    },
    {
        id: 7,
        title: "Portfolio Freelance Moderno",
        description: "Sitio web profesional y responsivo para freelancers. Diseño limpio y moderno con animaciones suaves, optimizado para conversiones y experiencia de usuario excepcional. Totalmente adaptable a diferentes dispositivos.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&auto=format",
        technologies: ["React", "HTML5", "CSS3", "JavaScript"],
        category: "frontend",
        demo: "https://astounding-madeleine-1651a0.netlify.app"
    },
    {
        id: 8,
        title: "Sistema de Gestión para Restaurante",
        description: "Plataforma integral para restaurantes con gestión completa de ventas, reservas, inventario y reportes. Arquitectura MVC con PHP, base de datos MySQL optimizada y panel administrativo intuitivo para mejorar la eficiencia operativa.",
        image: "https://png.pngtree.com/recommend-works/png-clipart/20241213/ourmid/pngtree-experienced-male-master-chef-logo-illustration-png-image_14072793.png",
        technologies: ["PHP", "MySQL", "JavaScript", "CSS3", "HTML5"],
        category: "fullstack",
        github: "https://github.com/fabioFV2005/apptuty-mvc-php"
    },
    {
        id: 9,
        title: "App de Gestión de Entregas",
        description: "Sistema especializado para repartidores con geolocalización en tiempo real, autenticación OAuth con Google, gestión de pedidos y rutas optimizadas. Desarrollado con Flask y MySQL para máxima eficiencia en las entregas.",
        image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=250&fit=crop&auto=format",
        technologies: ["Flask", "Python", "MySQL", "Google OAuth", "JavaScript", "HTML5", "CSS3"],
        category: "fullstack",
        github: "https://github.com/fabioFV2005/flaskproject"
    },
    {
        id: 10,
        title: "Plataforma de Cuentos Digitales",
        description: "Biblioteca digital interactiva para visualizar cuentos, historias y relatos. Interfaz moderna con React, backend robusto con Node.js y base de datos MongoDB. Experiencia inmersiva para lectores de todas las edades.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI0hQya4tlRHiK3AGM17nd2Ns0oMl8fvNHEw&s",
        technologies: ["React", "Node.js", "MongoDB", "JavaScript", "CSS3"],
        category: "fullstack",
        demo: "https://cuenta-cuentos-ikr23xh1h-fabio-fernandezs-projects.vercel.app/"
    },
    {
        id: 11,
        title: "Suite de Testing - Componentes Empresariales",
        description: "Colección de tests unitarios y de integración para proyectos empresariales. Incluye frameworks de testing, mocks, y herramientas de automatización. Implementaciones con Jest, Cypress y herramientas de CI/CD para garantizar calidad de código.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&auto=format",
        technologies: ["Jest", "Cypress", "JavaScript", "Node.js", "CI/CD"],
        category: "fullstack"
    },
    {
        id: 12,
        title: "Módulos de Integración API",
        description: "Conjunto de módulos para integración con APIs externas en proyectos empresariales. Incluye conectores, middleware personalizado, y sistemas de cache. Desarrollados para optimizar comunicación entre microservicios y aplicaciones de terceros.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&auto=format",
        technologies: ["Node.js", "Express", "Redis", "Docker", "Microservices"],
        category: "fullstack"
    },
    {
        id: 13,
        title: "TeleMedicina IoT - Solución de Salud Digital",
        description: "Solución integral de telemedicina que integra hardware, software e IA para iniciativas de salud y bienestar. Arquitectura IoT con ESP32 y sensores biomédicos (MAX30102 para SpO₂ y frecuencia cardíaca, MLX90614 para temperatura corporal). Aplicación móvil Flutter con Firebase, IA Gemini para soporte clínico, y presentado en el MUN de GAM Cochabamba enfocado en el ODS 3.",
        image: "assets/telemedicina/719f7693-dc65-4138-b190-6d0b5103555f.jpg",
        images: [
            "assets/telemedicina/719f7693-dc65-4138-b190-6d0b5103555f.jpg",
            "assets/telemedicina/a7729a17-a6b0-44e0-94fc-77d346ec4173.jpg",
            "assets/telemedicina/be1dbb20-fd1d-4d51-9efa-5661c8336d0b.jpg"
        ],
        technologies: ["Flutter", "Firebase", "ESP32", "IoT", "Gemini AI", "Python", "MAX30102", "MLX90614"],
        category: "fullstack"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 100
    });

    // ===============================================
    // NAVIGATION FUNCTIONALITY
    // ===============================================
    
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Animate hamburger bars
        const bars = hamburger.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (hamburger.classList.contains('active')) {
                if (index === 0) bar.style.transform = 'rotate(45deg) translate(6px, 6px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            }
        });
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Reset hamburger animation
            const bars = hamburger.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
        });
    });

    // Active navigation link highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // ===============================================
    // TYPING ANIMATION FOR HERO SECTION
    // ===============================================
    
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const texts = typingElement.getAttribute('data-text').split(',');
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        // Hide initial text and remove any CSS cursor
        typingElement.style.borderRight = 'none';
        typingElement.textContent = '';
        
        function typeWriter() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typeSpeed = 100;
            
            if (isDeleting) {
                typeSpeed = 50;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500;
            }
            
            setTimeout(typeWriter, typeSpeed);
        }
        
        // Start typing animation after a delay
        setTimeout(typeWriter, 1000);
    }

    // ===============================================
    // SKILLS ANIMATION
    // ===============================================
    
    function animateSkills() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const width = progressBar.getAttribute('data-width');
                    
                    // Animate the progress bar
                    setTimeout(() => {
                        progressBar.style.width = width + '%';
                    }, 200);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        skillBars.forEach(bar => observer.observe(bar));
    }
    
    animateSkills();

    // ===============================================
    // TECHNOLOGIES SECTION INTERACTION
    // ===============================================
    
    const techItems = document.querySelectorAll('.tech-item');
    
    // Enhanced tech item interactions
    techItems.forEach(item => {
        item.addEventListener('click', function() {
            const techName = this.getAttribute('data-tech');
            showTechInfo(techName);
        });
        
        // Add ripple effect on click
        item.addEventListener('click', function(e) {
            createRipple(e, this);
        });
        
        // Enhanced hover effects
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            
            // Add glow effect
            const glow = this.querySelector('.tech-glow');
            if (glow) {
                glow.style.opacity = '0.4';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            
            // Remove glow effect
            const glow = this.querySelector('.tech-glow');
            if (glow) {
                glow.style.opacity = '0';
            }
        });
        
        // Keyboard accessibility
        item.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const techName = this.getAttribute('data-tech');
                showTechInfo(techName);
            }
        });
        
        item.setAttribute('tabindex', '0');
    });

    // Create ripple effect
    function createRipple(event, element) {
        const circle = document.createElement('span');
        const diameter = Math.max(element.clientWidth, element.clientHeight);
        const radius = diameter / 2;
        
        const rect = element.getBoundingClientRect();
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - rect.left - radius}px`;
        circle.style.top = `${event.clientY - rect.top - radius}px`;
        circle.classList.add('ripple');
        
        // Add ripple styles
        circle.style.position = 'absolute';
        circle.style.borderRadius = '50%';
        circle.style.background = 'rgba(255, 255, 255, 0.3)';
        circle.style.transform = 'scale(0)';
        circle.style.animation = 'ripple 0.6s linear';
        circle.style.pointerEvents = 'none';
        
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        
        const ripple = element.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }
        
        element.appendChild(circle);
        
        // Remove ripple after animation
        setTimeout(() => {
            circle.remove();
        }, 600);
    }

    // Technology information with enhanced content
    const techInfo = {
        'JavaScript': 'Mi lenguaje principal. Dominio completo de ES6+, programación asíncrona, DOM manipulation, closures, prototypes y patrones de diseño modernos. Experiencia en desarrollo tanto frontend como backend.',
        'TypeScript': 'Uso TypeScript para proyectos empresariales escalables, aprovechando el tipado estático, interfaces, generics y decorators para código más robusto y mantenible.',
        'React': 'Framework preferido para interfaces de usuario. Experiencia con hooks, context API, state management, performance optimization y arquitecturas component-based modernas.',
        'Node.js': 'Desarrollo backend completo con Node.js. APIs RESTful, middleware custom, autenticación JWT, integración de bases de datos y arquitecturas de microservicios.',
        'Python': 'Lenguaje versátil para desarrollo web, scripting, automatización y análisis de datos. Experiencia con frameworks como Flask y manejo de APIs.',
        'Flask': 'Microframework de Python para desarrollo web rápido y escalable. Ideal para APIs REST, aplicaciones web ligeras y prototipado rápido con arquitectura MVC.',
        'PHP': 'Desarrollo web tradicional y moderno. Experiencia en sistemas de gestión de contenido, e-commerce y aplicaciones web con arquitectura MVC robusta.',
        'C++': 'Base sólida en programación de sistemas, algoritmos de alto rendimiento, estructuras de datos complejas y optimización de memoria.',
        'HTML5': 'Estructura semántica moderna, accesibilidad web (WCAG), SEO optimization, forms validation y APIs nativas del navegador.',
        'CSS3': 'Diseño responsivo avanzado, Flexbox, Grid, animaciones complejas, SASS/SCSS, metodologías BEM y arquitecturas CSS escalables.',
        'Git': 'Control de versiones profesional, workflows colaborativos (GitFlow), resolución de conflictos, rebasing y mejores prácticas en equipos de desarrollo.',
        'MongoDB': 'Base de datos NoSQL para aplicaciones modernas. Experiencia en agregaciones complejas, indexación, sharding y optimización de consultas.',
        'MySQL': 'Sistema de gestión de bases de datos relacionales. Experto en consultas complejas, procedimientos almacenados, optimización de rendimiento y diseño de esquemas normalizados.'
    };

    function showTechInfo(techName) {
        const info = techInfo[techName] || 'Información no disponible para esta tecnología.';
        
        // Remove existing tooltip
        const existingTooltip = document.querySelector('.tech-tooltip');
        if (existingTooltip) {
            existingTooltip.remove();
        }
        
        // Create enhanced tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'tech-tooltip';
        tooltip.innerHTML = `
            <div class="tooltip-content">
                <h4>${techName}</h4>
                <p>${info}</p>
                <button class="tooltip-close" aria-label="Cerrar">&times;</button>
            </div>
        `;
        
        document.body.appendChild(tooltip);
        
        // Close functionality
        const closeBtn = tooltip.querySelector('.tooltip-close');
        closeBtn.addEventListener('click', () => {
            tooltip.style.animation = 'tooltip-disappear 0.3s ease-out forwards';
            setTimeout(() => tooltip.remove(), 300);
        });
        
        // Close on outside click
        setTimeout(() => {
            document.addEventListener('click', function(e) {
                if (!tooltip.contains(e.target) && !e.target.closest('.tech-item')) {
                    tooltip.style.animation = 'tooltip-disappear 0.3s ease-out forwards';
                    setTimeout(() => tooltip.remove(), 300);
                }
            }, { once: true });
        }, 100);
        
        // Close on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                tooltip.style.animation = 'tooltip-disappear 0.3s ease-out forwards';
                setTimeout(() => tooltip.remove(), 300);
            }
        }, { once: true });
    }

    // ===============================================
    // PROJECTS SECTION ENHANCED
    // ===============================================

    // Enhanced project rendering with animations
    function renderProjects(projects) {
        const projectsGrid = document.getElementById('projectsGrid');
        if (!projectsGrid) return;
        
        // Add fade out animation
        projectsGrid.style.opacity = '0';
        projectsGrid.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            projectsGrid.innerHTML = projects.map(project => `
                <div class="project-card" data-category="${project.category}" data-aos="fade-up" data-aos-delay="100">
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.title}" loading="lazy" 
                             onclick="openCarousel(${project.id})" style="cursor: pointer;">
                        <div class="project-overlay">
                            <div class="project-links">
                                ${project.images ? `
                                    <button class="project-link" onclick="openCarousel(${project.id})" title="Ver galería de imágenes">
                                        <i class="fas fa-images"></i>
                                    </button>
                                ` : ''}
                                ${project.github ? `
                                    <a href="${project.github}" target="_blank" class="project-link" title="Ver código en GitHub" rel="noopener">
                                        <i class="fab fa-github"></i>
                                    </a>
                                ` : ''}
                                ${project.demo ? `
                                    <a href="${project.demo}" target="_blank" class="project-link" title="Ver demo en vivo" rel="noopener">
                                        <i class="fas fa-external-link-alt"></i>
                                    </a>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <div class="project-technologies">
                            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
            
            // Refresh AOS for new elements
            AOS.refresh();
            
            // Fade in animation
            projectsGrid.style.transition = 'all 0.5s ease';
            projectsGrid.style.opacity = '1';
            projectsGrid.style.transform = 'translateY(0)';
        }, 200);
    }

    // Enhanced project filtering with animations
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button with animation
            this.classList.add('active');
            
            // Update filter counts
            updateFilterCounts();
            
            const filter = this.getAttribute('data-filter');
            const filteredProjects = filter === 'all' 
                ? projectsData 
                : projectsData.filter(project => project.category === filter);
            
            renderProjects(filteredProjects);
        });
    });

    // Update filter counts
    function updateFilterCounts() {
        const allCount = projectsData.length;
        const frontendCount = projectsData.filter(p => p.category === 'frontend').length;
        const fullstackCount = projectsData.filter(p => p.category === 'fullstack').length;
        
        const allBtn = document.querySelector('[data-filter="all"] .filter-count');
        const frontendBtn = document.querySelector('[data-filter="frontend"] .filter-count');
        const fullstackBtn = document.querySelector('[data-filter="fullstack"] .filter-count');
        
        if (allBtn) allBtn.textContent = allCount;
        if (frontendBtn) frontendBtn.textContent = frontendCount;
        if (fullstackBtn) fullstackBtn.textContent = fullstackCount;
    }

    // Initialize projects
    renderProjects(projectsData);
    updateFilterCounts();

    // ===============================================
    // ENHANCED CONTACT FORM - WHATSAPP INTEGRATION
    // ===============================================
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name').trim();
            const email = formData.get('email').trim();
            const subject = formData.get('subject').trim();
            const message = formData.get('message').trim();
            
            // Enhanced validation
            if (!name || !email || !message) {
                showNotification('Por favor, completa todos los campos obligatorios.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Por favor, ingresa un email válido.', 'error');
                return;
            }
            
            // Create enhanced WhatsApp message
            const whatsappMessage = `🌟 *Nuevo contacto desde Portfolio*\n\n` +
                                  `👤 *Nombre:* ${name}\n` +
                                  `📧 *Email:* ${email}\n` +
                                  `${subject ? `📝 *Asunto:* ${subject}\n` : ''}` +
                                  `\n💬 *Mensaje:*\n${message}\n\n` +
                                  `📅 *Fecha:* ${new Date().toLocaleDateString('es-ES', {
                                      year: 'numeric',
                                      month: 'long',
                                      day: 'numeric',
                                      hour: '2-digit',
                                      minute: '2-digit'
                                  })}`;
            
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappNumber = '59162662995';
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            // Enhanced button animation
            const submitBtn = this.querySelector('.btn-submit');
            const originalHTML = submitBtn.innerHTML;
            
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            
            setTimeout(() => {
                // Open WhatsApp
                window.open(whatsappURL, '_blank');
                
                // Reset form with animation
                this.reset();
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalHTML;
                
                // Show success notification
                showNotification('¡Mensaje preparado! Se abrió WhatsApp para enviar.', 'success');
            }, 1500);
        });
    }

    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Enhanced notification system
    function showNotification(message, type = 'info') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: '10000',
            backgroundColor: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6',
            color: 'white',
            padding: '16px 24px',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease',
            maxWidth: '400px'
        });
        
        const content = notification.querySelector('.notification-content');
        Object.assign(content.style, {
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
        });
        
        const closeBtn = notification.querySelector('.notification-close');
        Object.assign(closeBtn.style, {
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '20px',
            cursor: 'pointer',
            marginLeft: 'auto'
        });
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Close functionality
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto close
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    // ===============================================
    // SMOOTH SCROLLING AND PARALLAX EFFECTS
    // ===============================================
    
    // Enhanced smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Subtle parallax effect for floating shapes
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            shape.style.transform = `translateY(${yPos}px)`;
        });
    });

    // ===============================================
    // PERFORMANCE OPTIMIZATIONS
    // ===============================================
    
    // Throttle function for scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Lazy loading for images
    const images = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src; // Trigger loading
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // ===============================================
    // THEME TOGGLE FUNCTIONALITY
    // ===============================================
    
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    
    // Update icon based on current theme
    function updateThemeIcon() {
        const icon = themeToggle?.querySelector('i');
        const currentTheme = body.getAttribute('data-theme');
        
        if (icon) {
            if (currentTheme === 'dark') {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
    }
    
    // Initialize icon
    updateThemeIcon();
    
    // Apply initial theme styles
    function applyThemeStyles() {
        const currentTheme = body.getAttribute('data-theme');
        
        // Force refresh AOS animations with theme
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
        
        // Update any dynamic content based on theme
        const techItems = document.querySelectorAll('.tech-item');
        techItems.forEach(item => {
            // Force repaint to apply new styles
            item.style.transform = 'translateZ(0)';
        });
    }
    
    // Apply initial theme
    applyThemeStyles();
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            // Add transition class for smooth theme change
            body.classList.add('theme-transition');
            
            // Update theme
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Update icon
            updateThemeIcon();
            
            // Apply theme-specific styles
            applyThemeStyles();
            
            // Remove transition class after animation
            setTimeout(() => {
                body.classList.remove('theme-transition');
            }, 300);
        });
    }

    // ===============================================
    // EASTER EGGS AND DELIGHTFUL INTERACTIONS
    // ===============================================
    
    // Konami code easter egg
    let konamiCode = [];
    const konamiSequence = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.code);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
            showNotification('🎉 ¡Konami Code activado! Eres un verdadero geek.', 'success');
            // Add some fun visual effect
            document.body.style.animation = 'rainbow 2s ease-in-out';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 2000);
        }
    });

    // ===============================================
    // INITIALIZATION COMPLETE
    // ===============================================
    
    console.log('🚀 Modern Portfolio loaded successfully!');
    console.log('💻 Enhanced with AOS animations, modern interactions and optimizations');
    console.log('✨ Built with passion using modern JavaScript, CSS3 and HTML5');
    
    // Portfolio loaded - ready to use
});

// ===============================================
// CSS ANIMATIONS (Added via JavaScript)
// ===============================================

// Add custom styles for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes tooltip-disappear {
        from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
        }
    }
    
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        25% { filter: hue-rotate(90deg); }
        50% { filter: hue-rotate(180deg); }
        75% { filter: hue-rotate(270deg); }
        100% { filter: hue-rotate(360deg); }
    }
    
    .notification {
        backdrop-filter: blur(10px);
    }
    
    .tech-item {
        will-change: transform;
    }
    
    .project-card {
        will-change: transform;
    }
`;

document.head.appendChild(style);

// ===============================================
// MODAL CAROUSEL FUNCTIONALITY
// ===============================================

let currentSlide = 0;
let currentProject = null;

// Función para abrir el carousel
function openCarousel(projectId) {
    console.log('openCarousel called with projectId:', projectId);
    const project = projectsData.find(p => p.id === projectId);
    console.log('Found project:', project);
    
    if (!project || !project.images) {
        console.log('No project or no images found');
        return;
    }
    
    currentProject = project;
    currentSlide = 0;
    
    const modal = document.getElementById('imageModal');
    const carouselTrack = document.getElementById('carouselTrack');
    const carouselTitle = document.getElementById('carouselTitle');
    const carouselDescription = document.getElementById('carouselDescription');
    const carouselIndicators = document.getElementById('carouselIndicators');
    
    console.log('Modal elements found:', {modal, carouselTrack, carouselTitle, carouselDescription, carouselIndicators});
    
    // Crear slides
    carouselTrack.innerHTML = project.images.map(image => `
        <div class="carousel-slide">
            <img src="${image}" alt="${project.title}" loading="lazy" onclick="toggleImageZoom(this)">
        </div>
    `).join('');
    
    // Crear indicadores
    carouselIndicators.innerHTML = project.images.map((_, index) => `
        <button class="carousel-indicator ${index === 0 ? 'active' : ''}" 
                onclick="goToSlide(${index})"></button>
    `).join('');
    
    // Establecer información
    carouselTitle.textContent = project.title;
    carouselDescription.textContent = project.description;
    
    // Mostrar modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    console.log('Modal should be visible now');
    
    // Actualizar posición del carousel
    updateCarouselPosition();
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Función para ir a un slide específico
function goToSlide(slideIndex) {
    if (!currentProject) return;
    
    currentSlide = slideIndex;
    updateCarouselPosition();
    updateIndicators();
}

// Función para ir al slide anterior
function prevSlide() {
    if (!currentProject) return;
    
    currentSlide = currentSlide > 0 ? currentSlide - 1 : currentProject.images.length - 1;
    updateCarouselPosition();
    updateIndicators();
}

// Función para ir al siguiente slide
function nextSlide() {
    if (!currentProject) return;
    
    currentSlide = currentSlide < currentProject.images.length - 1 ? currentSlide + 1 : 0;
    updateCarouselPosition();
    updateIndicators();
}

// Función para actualizar la posición del carousel
function updateCarouselPosition() {
    const carouselTrack = document.getElementById('carouselTrack');
    const translateX = -currentSlide * 100;
    carouselTrack.style.transform = `translateX(${translateX}%)`;
}

// Función para actualizar los indicadores
function updateIndicators() {
    const indicators = document.querySelectorAll('.carousel-indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

// Event listeners para el modal
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const closeButton = document.getElementById('closeModal');
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');
    
    // Cerrar modal
    closeButton.addEventListener('click', closeModal);
    
    // Cerrar modal al hacer click fuera del contenido
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Navegación con botones
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
    
    // Navegación con teclado
    document.addEventListener('keydown', function(e) {
        if (!modal.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeModal();
                break;
            case 'ArrowLeft':
                prevSlide();
                break;
            case 'ArrowRight':
                nextSlide();
                break;
        }
    });
});

// Función para hacer zoom en las imágenes
function toggleImageZoom(img) {
    if (img.style.transform === 'scale(2)') {
        img.style.transform = 'scale(1)';
        img.style.cursor = 'zoom-in';
        img.parentElement.style.overflow = 'hidden';
    } else {
        img.style.transform = 'scale(2)';
        img.style.cursor = 'zoom-out';
        img.parentElement.style.overflow = 'auto';
    }
    img.style.transition = 'transform 0.3s ease';
}

// Hacer las funciones globales para poder usarlas en onclick
window.openCarousel = openCarousel;
window.closeModal = closeModal;
window.goToSlide = goToSlide;
window.toggleImageZoom = toggleImageZoom;
window.projectsData = projectsData; // También hacer projectsData global para debugging

// ===============================================
// CV MODAL FUNCTIONALITY
// ===============================================

function openCVModal() {
    const modal = document.getElementById('cvModal');
    const iframe = document.getElementById('cvViewer');
    const loading = modal.querySelector('.cv-loading');
    
    // Mostrar modal
    modal.classList.add('active');
    
    // Configurar ruta del CV - probamos diferentes rutas
    const cvPath = 'assets/cv.pdf'; // Sin ./ al inicio
    
    // Mostrar loading
    loading.classList.remove('hidden');
    
    // Cargar PDF en iframe
    iframe.src = cvPath;
    
    // Timeout para mostrar error si no carga
    const loadTimeout = setTimeout(() => {
        if (!iframe.src || iframe.contentWindow.location.href === 'about:blank') {
            loading.innerHTML = `
                <div style="text-align: center;">
                    <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #ef4444; margin-bottom: 1rem;"></i>
                    <p style="color: var(--text-color); margin-bottom: 1rem;">Error al cargar el CV</p>
                    <p style="color: var(--text-muted); font-size: 0.9rem;">Archivo: <strong>assets/cv.pdf</strong></p>
                    <p style="color: var(--text-muted); font-size: 0.8rem;">Asegúrate de estar usando un servidor local (http://localhost:8000)</p>
                    <button onclick="location.reload()" style="
                        background: var(--primary-color); 
                        color: white; 
                        border: none; 
                        padding: 10px 20px; 
                        border-radius: 8px; 
                        cursor: pointer; 
                        margin-top: 10px;
                    ">Reintentar</button>
                </div>
            `;
        }
    }, 5000);
    
    // Ocultar loading cuando cargue
    iframe.onload = function() {
        clearTimeout(loadTimeout);
        setTimeout(() => {
            loading.classList.add('hidden');
        }, 500);
    };
    
    // Manejar errores
    iframe.onerror = function() {
        loading.innerHTML = `
            <div style="text-align: center;">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #ef4444; margin-bottom: 1rem;"></i>
                <p style="color: var(--text-color); margin-bottom: 1rem;">No se pudo cargar el CV</p>
                <p style="color: var(--text-muted); font-size: 0.9rem;">Archivo esperado en: <strong>assets/cv.pdf</strong></p>
                <p style="color: var(--text-muted); font-size: 0.8rem;">Asegúrate de que el archivo esté en la carpeta assets del proyecto</p>
            </div>
        `;
    };
    
    // Cerrar modal con ESC
    document.addEventListener('keydown', handleCVModalKeydown);
    
    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';
}

function closeCVModal() {
    const modal = document.getElementById('cvModal');
    const iframe = document.getElementById('cvViewer');
    const loading = modal.querySelector('.cv-loading');
    
    // Ocultar modal
    modal.classList.remove('active');
    
    // Limpiar iframe
    iframe.src = '';
    
    // Restaurar loading state
    loading.classList.remove('hidden');
    loading.innerHTML = `
        <div class="cv-spinner"></div>
        <p>Cargando currículum...</p>
    `;
    
    // Remover event listener
    document.removeEventListener('keydown', handleCVModalKeydown);
    
    // Restaurar scroll del body
    document.body.style.overflow = '';
}

function downloadCV() {
    // Crear link temporal para descarga
    const link = document.createElement('a');
    link.href = 'assets/cv.pdf'; // Sin ./ al inicio
    link.download = 'CV_Fabio_Fernandez.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function handleCVModalKeydown(e) {
    if (e.key === 'Escape') {
        closeCVModal();
    }
}

// Cerrar modal haciendo click fuera del contenido
document.addEventListener('click', function(e) {
    const modal = document.getElementById('cvModal');
    if (e.target === modal) {
        closeCVModal();
    }
});

// Hacer las funciones del CV globales
window.openCVModal = openCVModal;
window.closeCVModal = closeCVModal;
window.downloadCV = downloadCV;
