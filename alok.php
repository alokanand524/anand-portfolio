<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portfolio of Alok Anand, 
        a skilled frontend developer specializing in React, 
        UI/UX, and web performance, 
        full stack developer, 
        website design, 
        full stack project, 
        portfolio design, 
        APIs testing,
        Database expert,
        RestFull APIs,
        React Developer,
        Postgresql.">

    <link rel="stylesheet" href="style.css">
    <link rel="icon" type="image/x-icon" href="images/alokimage.jpeg">

    <title>Alok Anand | Full Stack Developer</title>

    <style>
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 1.5rem;
            margin-top: 1.5rem;
            text-align: center;
        }

        .skill-card {
            background-color: #fff;
            border-radius: 50%;
            width: 90px;
            height: 90px;
            padding: 10px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            transition: transform 0.3s ease;
        }

        .skill-card img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            transition: transform 0.3s ease;
        }

        .skill-card:hover img {
            transform: scale(1.2);
        }

        .skill-card span {
            display: block;
            margin-top: 0.6rem;
            font-size: 0.9rem;
            color: var(--text-color);
        }

        @media (max-width: 768px) {
            .skills-grid {
                gap: 0.5rem;
            }
        }
    </style>
</head>

<body>
    <!-- Burger Menu Toggle Button -->
    <div class="mobile-nav-toggle" id="sidebarToggle">&#9776;</div>

    <!-- Sidebar -->
    <aside class="sidebar">
        <div class="sidebar-header">
            <img src="images/alokimage.jpeg" alt="Alok Anand" class="profile-img" loading="lazy">
            <h2>Alok Anand</h2>
            <p>Full stack Developer</p>
        </div>

        <ul class="sidebar-nav">
            <li><a href="#" class="active" data-page="home">🏠 Home</a></li>
            <li><a href="#" data-page="about">👤 Who I Am</a></li>
            <li><a href="#" data-page="services">🛠️ Services</a></li>
            <li><a href="#" data-page="portfolio">📂 Portfolio</a></li>
            <li><a href="#" data-page="contact">✉️ Hire Me</a></li>
        </ul>


    </aside>

    <button id="darkModeToggle" class="btn btn-outline"
        style="position: absolute; top: 20px; right: 20px; z-index: 102;">
        🌙
    </button>


    <!-- Main Content Area -->
    <main class="main-content">
        <!-- Home Page -->
        <section class="page active" id="home">
            <h1 class="page-title">Welcome</h1>
            <div class="home-content">
                <div class="home-text">
                    <h1>Hello, I'm Alok Anand</h1>
                    <h2>Full Stack Developer</h2>
                    <p>I create beautiful, functional, and responsive websites that help businesses grow and engage
                        their audience. With over 3 years of experience in web development, I specialize in creating
                        user-friendly interfaces with clean, efficient code.</p>
                    <a href="Alok_Anand_Resume.pdf" class="btn">Download CV</a>
                    <a href="#" class="btn btn-outline" data-page="contact">Find Me Around the Web</a>
                </div>
                <div class="home-image">
                    <img src="images/alokimage.jpeg" alt="alok anand" loading="lazy">
                </div>
            </div>
        </section>

        <!-- About Page -->
        <section class="page" id="about">
            <h1 class="page-title">About Me</h1>
            <div class="about-content">
                <div class="about-info">
                    <h3>Who I Am</h3>
                    <p>I'm a passionate Full Stack Developer with a strong sense of design and attention to detail. My
                        journey in software development began during college and has since grown into a rewarding career
                        where I enjoy building scalable web applications and solving real-world problems through clean,
                        efficient code.</p>
                    <p>When I'm not developing, I love exploring emerging technologies, contributing to open-source
                        projects, or recharging in nature through hiking and adventure.</p>

                    <!-- <div class="skills">
                        <h3>My Skills</h3>
                        <div class="skill-item">
                            <div class="skill-name">
                                <span>HTML/CSS</span>
                                <span>95%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 95%;"></div>
                            </div>
                        </div>

                        <div class="skill-item">
                            <div class="skill-name">
                                <span>JavaScript</span>
                                <span>90%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 90%;"></div>
                            </div>
                        </div>

                        <div class="skill-item">
                            <div class="skill-name">
                                <span>React</span>
                                <span>85%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 85%;"></div>
                            </div>
                        </div>

                        <div class="skill-item">
                            <div class="skill-name">
                                <span>UI/UX Design</span>
                                <span>80%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 80%;"></div>
                            </div>
                        </div>
                    </div> -->

                    <div class="skills">
                        <h3>My Skills</h3>
                        <div class="skills-grid">
                            <div class="skill-card">
                                <img src="images/HTML5.png" alt="HTML/CSS" />
                            </div>

                            <div class="skill-card">
                                <img src="images/css3.png" alt="UI/UX Design" />
                            </div>
                            <div class="skill-card">
                                <img src="images/javascript.webp" alt="JavaScript" />
                            </div>
                            <div class="skill-card">
                                <img src="images/React.webp" alt="React" />
                            </div>
                            <div class="skill-card">
                                <img src="images/php.png" alt="React" />
                            </div>
                            <div class="skill-card">
                                <img src="images/laravel.jpeg" alt="React" />
                            </div>
                            <div class="skill-card">
                                <img src="images/postgresql.png" alt="React" />
                            </div>
                            <div class="skill-card">
                                <img src="images/mysql1.png" alt="React" />
                            </div>
                            <div class="skill-card">
                                <img src="images/git.png" alt="React" />
                            </div>
                            <div class="skill-card">
                                <img src="images/github.png" alt="React" />
                            </div>
                            <div class="skill-card">
                                <img src="images/redis.png" alt="React" />
                            </div>
                            <div class="skill-card">
                                <img src="images/linux.jpeg" alt="React" />
                            </div>
                        </div>
                    </div>

                </div>

                <div class="about-info">
                    <h3>Experience</h3>
                    <div class="timeline">
                        <div class="timeline-item">
                            <h4>Backend Developer</h4>
                            <p><i>Aadrika Enterprises • Dec 2024 - Present</i></p>
                            <p>Currently working as a Laravel backend engineer, responsible for designing and developing
                                RESTful APIs, resolving
                                bugs, and managing backend logic for scalable applications. Also involved in basic DBA
                                tasks including database
                                optimization and query structuring.</p>
                        </div>

                        <div class="timeline-item">
                            <h4>Frontend Developer</h4>
                            <p><i>National Informatics Centre (NIC) • January 2024 - May 2024</i></p>
                            <p>Worked on the development of a Youth Hostel Management System website for a
                                government-run
                                initiative offering affordable accommodations to young travelers. Focused on
                                functionality, user experience, and
                                practical implementation.</p>
                        </div>

                        <div class="timeline-item">
                            <h4>Freelancing</h4>
                            <p><i>Freelance • 2022 - continue..</i></p>
                            <p>Worked with multiple clients to design and develop dynamic websites tailored to their
                                unique needs. Projects
                                included platforms for NGOs, service-based businesses, and social initiatives. Focused
                                on clean code,
                                responsiveness, and maintainability.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Page -->
        <section class="page" id="services">
            <h1 class="page-title">My Services</h1>
            <div class="services-grid">
                <div class="service-card">
                    <i class="fa">💻</i>
                    <h3>Web Development</h3>
                    <p>Custom websites built with modern technologies tailored to your business needs. Responsive, fast,
                        and optimized for all devices.</p>
                </div>

                <div class="service-card">
                    <i class="fa">🎨</i>
                    <h3>UI/UX Design</h3>
                    <p>Beautiful interfaces designed for optimal user experience. Intuitive navigation and visually
                        appealing layouts that convert visitors.</p>
                </div>

                <div class="service-card">
                    <i class="fa">⚛️</i>
                    <h3>React Applications</h3>
                    <p>Interactive web applications built with React and modern JavaScript frameworks for dynamic,
                        engaging user experiences.</p>
                </div>

                <div class="service-card">
                    <i class="fa">📱</i>
                    <h3>Responsive Design</h3>
                    <p>Mobile-first approach ensures your website looks and functions perfectly on any device, from
                        smartphone to desktop.</p>
                </div>

                <div class="service-card">
                    <i class="fa">🚀</i>
                    <h3>Performance Optimization</h3>
                    <p>Speed is critical for user retention. I optimize websites to load quickly and efficiently,
                        improving rankings and user satisfaction.</p>
                </div>

                <div class="service-card">
                    <i class="fa">🔄</i>
                    <h3>Maintenance & Support</h3>
                    <p>Ongoing support to keep your website updated, secure, and functioning optimally as your business
                        evolves.</p>
                </div>
            </div>
        </section>

        <!-- Portfolio Page -->
        <section class="page" id="portfolio">
            <h1 class="page-title">My Work</h1>
            <div class="portfolio-grid">
                <div class="portfolio-item">
                    <img src="images/kamaskhi.png"
                        alt="Minimalist e-commerce website design with product showcase and clean typography"
                        class="portfolio-img">
                    <div class="portfolio-overlay">
                        <h3>Kamakshi Mahila Seva Sansthan (NGO)</h3>
                        <p>A fully responsive NGO built with React and integrated payment processing.</p>
                        <a href="https://kamakshisevasansthan.com/" class="btn">View Project</a>
                    </div>
                </div>

                <div class="portfolio-item">
                    <img src="images/vedanttours.png"
                        alt="Modern dashboard interface with data visualization charts and clean layout"
                        class="portfolio-img">
                    <div class="portfolio-overlay">
                        <h3>Vedan Tours - Car Services</h3>
                        <p>Fully responsive website with Admin Controll , HTML, Bootstap, Js, MySQL based.</p>
                        <a href="https://vedanttours.com/" class="btn">View Project</a>
                    </div>
                </div>

                <div class="portfolio-item">
                    <img src="images/iskconaAgriTech.png"
                        alt="Mobile app interface showing fitness tracking features with vibrant colors"
                        class="portfolio-img">
                    <div class="portfolio-overlay">
                        <h3>ISckona Agri Tech PVT. LTD</h3>
                        <p>This is fully responsive dynamic website based on PHP and Bootstap with Admin Pannel.</p>
                        <a href="https://iskconaagritech.com/" class="btn">View Project</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Page -->
        <section class="page" id="contact">
            <h1 class="page-title">Get In Touch</h1>
            <div class="contact-container">
                <div class="contact-info">
                    <h3>Contact Information</h3>
                    <p>Feel free to reach out for project inquiries or collaboration opportunities. I'm always excited
                        to hear about new ideas!</p>

                    <div class="info-item">
                        <h4>Email</h4>
                        <p>alokanand8266@gmail.com</p>
                    </div>

                    <div class="info-item">
                        <h4>Phone</h4>
                        <p>+91 6207338266</p>
                    </div>

                    <div class="info-item">
                        <h4>Location</h4>
                        <p>India</p>
                    </div>
                </div>

                <div class="contact-form">
                    <form id="contactForm">
                        <input type="text" id="name" placeholder="Your Name" required>
                        <input type="email" id="email" placeholder="Your Email" required>
                        <input type="text" id="subject" placeholder="Subject">
                        <textarea id="message" placeholder="What's in your mind....!" required></textarea>
                        <button type="submit" class="btn">Send Message</button>
                    </form>
                </div>

            </div>
        </section>
    </main>

    <!-- <script>
        // DOM Elements
        const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
        const pages = document.querySelectorAll('.page');
        const mobileToggle = document.querySelector('.mobile-nav-toggle');
        const sidebar = document.querySelector('.sidebar');

        // Page Navigation
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();

                // Get the page to show
                const pageToShow = this.getAttribute('data-page');

                // Hide all pages
                pages.forEach(page => {
                    page.classList.remove('active');
                });

                // Show selected page
                document.getElementById(pageToShow).classList.add('active');

                // Update active link
                sidebarLinks.forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');

                // Close sidebar on mobile after selection
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('active');
                }
            });
        });

        // Mobile Navigation Toggle
        mobileToggle.addEventListener('click', function () {
            sidebar.classList.toggle('active');
        });

        // Contact Form Submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function (e) {
                e.preventDefault();
                alert('Message sent successfully! I will get back to you soon.');
                contactForm.reset();
            });
        }

        // Responsive Adjustments
        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) {
                sidebar.classList.remove('active');
            }
        });

        // Smooth animations when switching pages
        document.addEventListener('DOMContentLoaded', function () {
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });
    </script> -->

    <script src="script.js"></script>


    <script>
        const toggleDark = document.getElementById('darkModeToggle');
        toggleDark.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');

            toggleDark.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
        });
    </script>

    <script>
        document.addEventListener("click", function (e) {
            const sidebar = document.querySelector(".sidebar");
            const toggleBtn = document.getElementById("sidebarToggle");

            // Only trigger on mobile view
            if (window.innerWidth <= 768) {
                const isClickInsideSidebar = sidebar.contains(e.target);
                const isClickToggleBtn = toggleBtn.contains(e.target);

                if (!isClickInsideSidebar && !isClickToggleBtn) {
                    sidebar.classList.remove("active");
                    toggleBtn.classList.remove("open");
                }
            }
        });

    </script>

    <script>
        document.getElementById('contactForm').addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            // Replace with your WhatsApp number (international format, no + or spaces)
            const phoneNumber = "916207338266";

            // Format message
            const whatsappMessage = `Hello! 👋%0A%0AYou received a new message from your portfolio site:%0A%0A🧑 Name: ${name}%0A📧 Email: ${email}%0A📌 Subject: ${subject || 'Not provided'}%0A💬 Message: ${message}%0A%0A--End of Message--`;

            // Redirect to WhatsApp
            const url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
            window.open(url, '_blank');
        });
    </script>



</body>

</html>