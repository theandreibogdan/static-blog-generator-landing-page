document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuButton = document.querySelector('[data-mobile-menu-button]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    const closeMenuButton = document.querySelector('[data-close-menu-button]');
    const backdrop = document.querySelector('[data-backdrop]');

    function toggleMobileMenu() {
        const isHidden = mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden', !isHidden);
        backdrop.classList.toggle('hidden', !isHidden);
        document.body.classList.toggle('overflow-hidden', !isHidden);
    }

    mobileMenuButton?.addEventListener('click', toggleMobileMenu);
    closeMenuButton?.addEventListener('click', toggleMobileMenu);
    backdrop?.addEventListener('click', toggleMobileMenu);
}); 