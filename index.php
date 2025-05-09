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
    <div class="hero-header">
        <div class="wrapper">
        <?php include('nav.php') ?>
            <div class="container">
                <div class="hero-pic">
                    <img src="images/alokimage.jpeg" alt="profile pic">
                </div>
                <div class="hero-text">
                    <h5>Hi I'm <span class="input">Backend Developer</span></h5>
                    <h1>Alok Anand</h1>
                    <p> 
                        A passionate developer, an unstoppable explorer, a lifelong learner — coding runs in my veins and coffee fuels my soul!
                    </p>

                    <div class="btn-group">
                        <a href="alok_anand.pdf" class="btn active">Download CV</a>
                        <a href="contact.php" class="btn">Contact</a>
                    </div>

                    <div class="social">
                        <!-- <a href="#"><i class="fa-brands fa-facebook"></i></a> -->
                        <a href="https://www.linkedin.com/in/anand171"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://www.instagram.com/callme_alok_"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://github.com/alokanand524"><i class="fa-brands fa-github"></i></a>
                        <a href="https://x.com/CoolBoY_alok"><i class="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!---typed js for typing text effect-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.10/typed.min.js"></script>
    <script>
        /** creating button click show hide navbar **/
        var togglebtn = document.querySelector(".togglebtn");
        var nav = document.querySelector(".navlinks");
        var links = document.querySelector(".navlinks li");

        togglebtn.addEventListener("click", function () {
            this.classList.toggle("click");
            nav.classList.toggle("open");
        })

        var typed = new Typed(".input", {
            strings: ["Backend Developer", "API Tester", "Web Developer", "Bugs Fixer"],
            typedSpeed: 100,
            backSpeed: 80,
            loop: true
        })
    </script>
</body>

</html>