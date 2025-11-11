 // -------------------------------
        // Alternar tema claro/escuro
        // -------------------------------
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        const icon = themeToggle.querySelector('i');
        
        // Verifica se o usuário já tem um tema salvo no localStorage
        if (localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark-mode');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
        
        // Ao clicar no botão, alterna a classe .dark-mode no body e troca o ícone
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            }
        });
        
        // ----------------------------------------
        // Animação de scroll suave para âncoras
        // ----------------------------------------
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Rolagem suave até a seção, descontando a altura do header (80px)
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // -------------------------------------------------
        // Animação de elementos (skills e projetos) ao rolar
        // -------------------------------------------------
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.skill-card, .project-card');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                // Quando o elemento entra na área visível, aplica a animação
                if (elementPosition < screenPosition) {
                    element.style.animation = 'fadeInUp 1s forwards';
                }
            });
        };
        
        window.addEventListener('scroll', animateOnScroll);
        
        // -------------------------------------------------
        // Efeito de digitação no título principal (Hero)
        // -------------------------------------------------
        const typedText = document.querySelector('.hero-content h1');
        if (typedText) {
            // Guarda o texto original e limpa o conteúdo
            const originalText = typedText.textContent;
            typedText.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                // Vai adicionando letra por letra com um pequeno delay
                if (i < originalText.length) {
                    typedText.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            
            // Inicia o efeito de digitação após 1 segundo
            setTimeout(typeWriter, 1000);
        }