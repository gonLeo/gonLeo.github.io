/*!
*   Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
*   Copyright 2013-2022 Start Bootstrap
*   Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    
    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const translations = {
        en: {
            about: "About",
            experience: "Experience",
            education: "Education",
            skills: "Skills",
            projects: "Projects",
            language: "Language:",
            jobTitle: "Software Developer",
            'about-me': "Hello! I am a developer passionate about creating solutions that make people's lives easier. I have experience in full-stack web development, focusing on modern technologies to build efficient and scalable applications.",
            university: "Federal University of Mato Grosso (UFMT)",
            degree: "Bachelor of Computer Science",
            'skills-subtitle': "Programming Languages & Tools",
            'skills-summary': "I have a strong foundation in Java and web development, with experience in building scalable microservices and secure financial systems. I am proficient in a variety of modern technologies, including Spring Boot, React, and cloud platforms.",
            'view-on-github': "View on GitHub",
            'view-more': "View More",
            'view-less': "View Less",
            experienceEntries: [
                {
                    title: "Java Developer",
                    company: "CI&T",
                    description: "Responsible for the development, maintenance, and evolution of scalable microservices using Java and Spring Boot. Worked with technologies like RabbitMQ, MongoDB, and Datadog. Integrated internal AI agents via Python scripts and applied prompt engineering to automate tasks and optimize development processes.",
                    technologies: "Java, Spring Boot, Microservices, REST API, MongoDB, RabbitMQ, Datadog, Prompt Engineering, Python Automation",
                    date: "Jan 2025 – Present"
                },
                {
                    title: "Web Developer",
                    company: "GFT Technologies",
                    description: "Worked on the development and maintenance of secure web systems with Java, focused on fraud prevention and customer retention for financial services.",
                    technologies: "Java, Spring Boot, REST API, Microservices, JPA, Oracle, JUnit, Procedures, Fortify",
                    date: "Jul 2024 – Dec 2024"
                },
                {
                    title: "Java Web Developer",
                    company: "SIS – Integrated System Solutions",
                    description: "Developed and maintained enterprise Java web systems with a focus on fraud prevention, retention strategies, and data security for large-scale clients.",
                    technologies: "Java, Spring Boot, REST API, Microservices, JPA, Oracle, JUnit, Procedures, Fortify",
                    date: "Mar 2022 – Jun 2024"
                },
                {
                    title: "Full-stack Developer",
                    company: "Capgemini",
                    description: "Worked on the development of REST APIs for the inspection system of the Military Fire Brigade of Rio Grande do Sul, using Java on the backend and Angular on the frontend.",
                    technologies: "Java, JAX-RS, Hibernate, Criteria, Oracle SQL, Angular, JBoss",
                    date: "Aug 2021 – Mar 2022"
                },
                {
                    title: "Web/Java Developer",
                    company: "Totem TI",
                    description: "Worked on the GCE system for the Fire Department of Espírito Santo, responsible for developing, deploying, and maintaining Java REST APIs with Spring Boot and Angular frontend.",
                    technologies: "Java 11, Spring Boot, Hibernate, JUnit, Angular, PrimeNG, SQL Server",
                    date: "Jan 2021 – Aug 2021"
                },
                {
                    title: "Web Developer Intern",
                    company: "POLITEC - MT",
                    description: "Developed and maintained systems for the Official Forensic and Technical Identification Agency of Mato Grosso, using modern technologies and agile methodologies within the internal software factory.",
                    technologies: "React, Node.js, PostgreSQL, Sequelize, Redux, Material UI, Scrum",
                    date: "Aug 2019 – Jan 2021"
                },
                {
                    title: "Access Developer",
                    company: "SINFRA – Federal University of Mato Grosso (UFMT)",
                    description: "Created SIGTRAN, a transportation management system built with Microsoft Access and VBA, enabling generation of service orders, reports, and automation of internal processes.",
                    technologies: "Microsoft Access, VBA, SQL",
                    date: "Jun 2017 – Jun 2019"
                }
            ],
            projectEntries: [
                {
                    title: "Spotify Interface with React",
                    description: "A clone of the Spotify interface using React, focusing on componentization and creating a fluid and responsive user experience.",
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3u8d6fmmCH17pPpBRZEdNmJ-bTKrMTM9njQ&s",
                    githubUrl: "https://github.com/gonLeo/spotify"
                },
                {
                    title: "Academy System (Poligym)",
                    description: "A full-stack gym workout academy system built with Java and React, featuring user management and workout planning.",
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3u8d6fmmCH17pPpBRZEdNmJ-bTKrMTM9njQ&s",
                    githubUrl: "https://github.com/gonLeo/poligym"
                },
                {
                    title: "Spring Boot RESTful Services",
                    description: "Hands‑on project with Spring Boot, building RESTful Web Services using Spring MVC and JPA.",
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3u8d6fmmCH17pPpBRZEdNmJ-bTKrMTM9njQ&s",
                    githubUrl: "https://github.com/gonLeo/cursoSpringboot"
                },
                {
                    title: "OmniStack Week (Node & React)",
                    description: "Project from Rocketseat's OmniStack course, implementing a full-stack app using Node.js and React.",
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3u8d6fmmCH17pPpBRZEdNmJ-bTKrMTM9njQ&s",
                    githubUrl: "https://github.com/gonLeo/semanaOmnistack"
                },
                {
                    title: "Adonis API Boilerplate",
                    description: "Starter API project using AdonisJS, pre‑configured with authentication, ORM, migrations and CORS.",
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3u8d6fmmCH17pPpBRZEdNmJ-bTKrMTM9njQ&s",
                    githubUrl: "https://github.com/gonLeo/adonisServer"
                }
            ]

        },
        'pt-br': {
            about: "Sobre",
            experience: "Experiência",
            education: "Educação",
            skills: "Habilidades",
            projects: "Projetos",
            language: "Idioma:",
            jobTitle: "Desenvolvedor de Software",
            'about-me': "Olá! Sou um desenvolvedor apaixonado por criar soluções que facilitam a vida das pessoas. Tenho experiência em desenvolvimento web full-stack, com foco em tecnologias modernas para construir aplicações eficientes e escaláveis.",
            university: "Universidade Federal de Mato Grosso (UFMT)",
            degree: "Bacharelado em Ciência da Computação",
            'skills-subtitle': "Linguagens de Programação & Ferramentas",
            'skills-summary': "Tenho uma base sólida em Java e desenvolvimento web, com experiência na construção de microsserviços escaláveis e sistemas financeiros seguros. Sou proficiente em diversas tecnologias modernas, incluindo Spring Boot, React e plataformas em nuvem.",
            'view-on-github': "Ver no GitHub",
            'view-more': "Ver Mais",
            'view-less': "Ver Menos",
            experienceEntries: [
                {
                    title: "Desenvolvedor Java",
                    company: "CI&T",
                    description: "Responsável pelo desenvolvimento, manutenção e evolução de microsserviços escaláveis usando Java e Spring Boot. Trabalhei com tecnologias como RabbitMQ, MongoDB e Datadog. Integrei agentes internos de IA por meio de scripts Python e apliquei engenharia de prompt para automatizar tarefas e otimizar processos de desenvolvimento.",
                    technologies: "Java, Spring Boot, Microsserviços, REST API, MongoDB, RabbitMQ, Datadog, Engenharia de Prompt, Automação com Python",
                    date: "Jan 2025 – Presente"
                },
                {
                    title: "Desenvolvedor Web",
                    company: "GFT Technologies",
                    description: "Trabalhei no desenvolvimento e manutenção de sistemas web seguros com Java, com foco na prevenção de fraudes e retenção de clientes para serviços financeiros.",
                    technologies: "Java, Spring Boot, REST API, Microsserviços, JPA, Oracle, JUnit, Procedures, Fortify",
                    date: "Jul 2024 – Dez 2024"
                },
                {
                    title: "Desenvolvedor Web Java",
                    company: "SIS – Soluções Integradas de Sistemas",
                    description: "Desenvolvi e mantive sistemas web Java corporativos com foco em prevenção de fraudes, estratégias de retenção e segurança de dados para clientes de grande porte.",
                    technologies: "Java, Spring Boot, REST API, Microsserviços, JPA, Oracle, JUnit, Procedures, Fortify",
                    date: "Mar 2022 – Jun 2024"
                },
                {
                    title: "Desenvolvedor Full-stack",
                    company: "Capgemini",
                    description: "Trabalhei no desenvolvimento de APIs REST para o sistema de inspeção do Corpo de Bombeiros Militar do Rio Grande do Sul, utilizando Java no backend e Angular no frontend.",
                    technologies: "Java, JAX-RS, Hibernate, Criteria, Oracle SQL, Angular, JBoss",
                    date: "Ago 2021 – Mar 2022"
                },
                {
                    title: "Desenvolvedor Web/Java",
                    company: "Totem TI",
                    description: "Trabalhei no sistema GCE para o Corpo de Bombeiros do Espírito Santo, responsável pelo desenvolvimento, implantação e manutenção de APIs REST Java com Spring Boot e frontend Angular.",
                    technologies: "Java 11, Spring Boot, Hibernate, JUnit, Angular, PrimeNG, SQL Server",
                    date: "Jan 2021 – Ago 2021"
                },
                {
                    title: "Estagiário de Desenvolvimento Web",
                    company: "POLITEC - MT",
                    description: "Desenvolvi e mantive sistemas para a Perícia Oficial e Identificação Técnica de Mato Grosso, utilizando tecnologias modernas e metodologias ágeis dentro da fábrica de software interna.",
                    technologies: "React, Node.js, PostgreSQL, Sequelize, Redux, Material UI, Scrum",
                    date: "Ago 2019 – Jan 2021"
                },
                {
                    title: "Desenvolvedor Access",
                    company: "SINFRA – Universidade Federal de Mato Grosso (UFMT)",
                    description: "Criei o SIGTRAN, um sistema de gerenciamento de transportes desenvolvido com Microsoft Access e VBA, permitindo a geração de ordens de serviço, relatórios e automação de processos internos.",
                    technologies: "Microsoft Access, VBA, SQL",
                    date: "Jun 2017 – Jun 2019"
                }
            ],
            projectEntries: [
                {
                    title: "Interface do Spotify com React",
                    description: "Um clone da interface do Spotify utilizando React, com foco na componentização e na criação de uma experiência de usuário fluida e responsiva.",
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3u8d6fmmCH17pPpBRZEdNmJ-bTKrMTM9njQ&s",
                    githubUrl: "https://github.com/gonLeo/spotify"
                },
                {
                    title: "Sistema de Academia (Poligym)",
                    description: "Sistema completo de academia desenvolvido com Java e React, com funcionalidades de gestão de usuários e planejamento de treinos.",
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3u8d6fmmCH17pPpBRZEdNmJ-bTKrMTM9njQ&s",
                    githubUrl: "https://github.com/gonLeo/poligym"
                },
                {
                    title: "Serviços REST com Spring Boot",
                    description: "Projeto prático utilizando Spring Boot para construção de APIs RESTful com Spring MVC e JPA.",
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3u8d6fmmCH17pPpBRZEdNmJ-bTKrMTM9njQ&s",
                    githubUrl: "https://github.com/gonLeo/cursoSpringboot"
                },
                {
                    title: "Semana OmniStack (Node e React)",
                    description: "Projeto realizado durante a Semana OmniStack da Rocketseat, com desenvolvimento full stack usando Node.js e React.",
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3u8d6fmmCH17pPpBRZEdNmJ-bTKrMTM9njQ&s",
                    githubUrl: "https://github.com/gonLeo/semanaOmnistack"
                },
                {
                    title: "API Boilerplate com AdonisJS",
                    description: "Projeto base de API utilizando AdonisJS, com autenticação, ORM, migrações e CORS configurados.",
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3u8d6fmmCH17pPpBRZEdNmJ-bTKrMTM9njQ&s",
                    githubUrl: "https://github.com/gonLeo/adonisServer"
                }
            ]

        }
    };

    const experienceContainer = document.getElementById('experience-container');
    const projectsContainer = document.getElementById('projects-container');
    const viewMoreBtn = document.getElementById('view-more-btn');
    let experienceExpanded = false;

    // Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) { // Show button after scrolling 200px
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }

        // Language and Dark Mode Switcher visibility on mobile
        const langSwitcherContainer = document.querySelector('.language-switcher');
        if (window.innerWidth < 992) { // Check if it's a mobile view
            if (window.scrollY > 50) { // Hide after scrolling down a bit
                langSwitcherContainer.style.display = 'none';
            } else {
                langSwitcherContainer.style.display = 'flex'; // Show when at the top
            }
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    function renderExperience(lang) {
        experienceContainer.innerHTML = '';
        const entries = translations[lang].experienceEntries;
        const toShow = experienceExpanded ? entries.length : 3;

        for (let i = 0; i < toShow && i < entries.length; i++) {
            const entry = entries[i];
            const experienceCard = `
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">${entry.title}</h3>
                        <div class="subheading mb-3">${entry.company}</div>
                        <p>${entry.description}</p>
                        <p><strong>${lang === 'en' ? 'Technologies:' : 'Tecnologias:'}</strong> ${entry.technologies}</p>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">${entry.date}</span></div>
                </div>
            `;
            experienceContainer.innerHTML += experienceCard;
        }

        if (entries.length > 3) {
            viewMoreBtn.style.display = 'block';
            viewMoreBtn.textContent = experienceExpanded ? translations[lang]['view-less'] : translations[lang]['view-more'];
        } else {
            viewMoreBtn.style.display = 'none';
        }
    }

    viewMoreBtn.addEventListener('click', () => {
        experienceExpanded = !experienceExpanded;
        renderExperience(currentLang);
    });

    function renderProjects(lang) {
        projectsContainer.innerHTML = '';
        translations[lang].projectEntries.forEach(project => {
            const projectCard = `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card h-100">
                        <img src="${project.imageUrl}" class="card-img-top" alt="Project Image for ${project.title}">
                        <div class="card-body">
                            <h5 class="card-title">${project.title}</h5>
                            <p class="card-text">${project.description}</p>
                            <a href="${project.githubUrl}" class="btn btn-primary" target="_blank">${translations[lang]['view-on-github']}</a>
                        </div>
                    </div>
                </div>
            `;
            projectsContainer.innerHTML += projectCard;
        });
    }

    const langSwitcher = document.getElementById('lang-switcher');
    const darkModeSwitcher = document.getElementById('dark-mode-switcher');
    let currentLang = localStorage.getItem('lang');
    let darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';

    // Ensure English is the default if no language is explicitly set in localStorage
    if (currentLang !== 'pt-br') {
        currentLang = 'en';
    }

    function applyDarkMode(enabled) {
        if (enabled) {
            document.body.classList.add('dark-mode');
            darkModeSwitcher.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for light mode
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            darkModeSwitcher.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for dark mode
            localStorage.setItem('darkMode', 'disabled');
        }
    }

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = translations[lang][key];
        });
        renderExperience(lang);
        renderProjects(lang);
        langSwitcher.textContent = lang === 'en' ? 'PT-BR' : 'EN';
        localStorage.setItem('lang', lang);
        currentLang = lang;

        // Re-initialize ScrollSpy after language change
        if (sideNav) {
            bootstrap.ScrollSpy.getInstance(document.body)?.dispose(); // Dispose existing instance
            new bootstrap.ScrollSpy(document.body, {
                target: '#sideNav',
                offset: 74,
            });
        }
    }

    langSwitcher.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'pt-br' : 'en';
        setLanguage(newLang);
    });

    darkModeSwitcher.addEventListener('click', () => {
        darkModeEnabled = !darkModeEnabled;
        applyDarkMode(darkModeEnabled);
    });

    // Set initial language and dark mode
    setLanguage(currentLang);
    applyDarkMode(darkModeEnabled);

});