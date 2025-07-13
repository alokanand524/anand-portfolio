document.addEventListener("DOMContentLoaded", function () {
        // Fade-in effect
        setTimeout(() => {
            document.body.style.opacity = "1";
        }, 100);

        // Sidebar toggle (burger menu)
        const toggleBtn = document.getElementById("sidebarToggle");
        const sidebar = document.querySelector(".sidebar");
        if (toggleBtn) {
            toggleBtn.addEventListener("click", function () {
                sidebar.classList.toggle("active");
            });
        }

        // Page navigation switching
        const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
        const pages = document.querySelectorAll('.page');

        sidebarLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();

                const pageToShow = this.getAttribute('data-page');
                if (!pageToShow) return;

                // Hide all pages
                pages.forEach(page => page.classList.remove('active'));

                // Show selected page
                const targetPage = document.getElementById(pageToShow);
                if (targetPage) {
                    targetPage.classList.add('active');
                }

                // Update active link
                sidebarLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');

                // Close sidebar on mobile
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('active');
                }
            });
        });

        // Contact form submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function (e) {
                e.preventDefault();
                alert('Message sent successfully! I will get back to you soon.');
                contactForm.reset();
            });
        }
    });