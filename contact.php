<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Portfolio Website Design</title>
    <link rel="stylesheet" href="style.css">
    <!----Font awesome cdn  font icon css -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">



</head>

<body>
    <div class="hero-header2">
        <?php include('nav.php') ?>

        <div style="margin:1rem;">
            <form id="contactForm" class="contact-card">
                <h2>Contact Us</h2>

                <div class="form-floating mb-3">
                    <input type="text" class="form-control form-decor" id="name" placeholder="Your Name" required>

                </div>

                <div class="form-floating mb-3">
                    <input type="email" class="form-control form-decor" id="email" placeholder="name@example.com"
                        required>
                </div>

                <!-- <div class="form-floating mb-3">
                    <input type="text" class="form-control form-decor" id="subject" placeholder="Subject" required>
                </div> -->

                <div class="form-floating mb-4">
                    <textarea class="form-control form-decor" placeholder="Your message" id="message"
                        style="height: 120px" required></textarea>
                </div>

                <button type="submit" class="btn btn-whatsapp w-100 py-2">Send via WhatsApp</button>
            </form>
        </div>




    </div>
    <!---typed js for typing text effect-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.10/typed.min.js"></script>
    <script src="script.js"></script>

    <script>
        document.getElementById("contactForm").addEventListener("submit", function (e) {
            e.preventDefault();

            // Get input values
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            // Your WhatsApp number in international format (no + or spaces)
            const phoneNumber = "916207338266"; // Replace with your number

            // Encode message for URL
            const text = `*Contact Form Submission*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

            // Open WhatsApp
            window.open(whatsappURL, "_blank");
        });
    </script>

</body>

</html>