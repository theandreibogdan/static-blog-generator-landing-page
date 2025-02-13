document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu functionality
    const mobileMenuButton = document.querySelector('[data-mobile-menu-button]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    const backdrop = document.querySelector('[data-backdrop]');
    const closeMenuButton = document.querySelector('[data-close-menu-button]');

    function toggleMenu() {
        mobileMenu.classList.toggle('hidden');
        backdrop.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden');
    }

    mobileMenuButton?.addEventListener('click', toggleMenu);
    closeMenuButton?.addEventListener('click', toggleMenu);
    backdrop?.addEventListener('click', toggleMenu);

    // Improved smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (!mobileMenu?.classList.contains('hidden')) {
                    toggleMenu();
                }
                
                // Get header height for offset
                const headerHeight = document.querySelector('header').offsetHeight;
                
                // Calculate scroll position with offset
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20; // Added 20px padding
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Enhanced active state for navigation items
    const sections = document.querySelectorAll('section, div[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    function updateActiveNavItem() {
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        sections.forEach(section => {
            if (!section.id) return;
            
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.id;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active', 'text-gray-900');
                    link.classList.add('text-gray-500');
                    
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active', 'text-gray-900');
                        link.classList.remove('text-gray-500');
                    }
                });
            }
        });
    }

    // Update active nav item on scroll with throttling
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateActiveNavItem();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initial check for active section
    updateActiveNavItem();
}); 
    updateActiveNavItem(); // Initial check
}); 