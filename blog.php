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

        <section class="blog-section wrapper">
            <h2>B L O G</h2>

            <div class="blog-wrap">
                <div class="blog-card">
                    <img src="images/alokimage.jpeg" alt="">
                    <div class="blog-details">
                        <h4>Lets know what is webRTC and how it Work</h4>
                        <p>First, webRTC uses UDP, and UDP is not a reliable protocol for transferring important data. UDP is good at sending data really fast but it doesn’t check whether or not the data is being received. So UDP is great for video because the data gets there fast and if we lose a few frames it’s not a big deal.</p>

                        <button><a href="blog-detail.php?id=1" target="_blank">Read More ></a></button>

                    </div>
                </div>                
            </div>

            <!-- <div class="blog-wrap">
                <div class="blog-card">
                    <img src="images/alokimage.jpeg" alt="">
                    <div class="blog-details">
                        <h4>My Blog Title2</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <button><a href="blog-detail.php?id=2" target="_blank">Read More ></a></button>

                    </div>
                </div>                
            </div> -->

            <!-- <div class="blog-wrap">
                <div class="blog-card">
                    <img src="images/alokimage.jpeg" alt="">
                    <div class="blog-details">
                        <h4>My Blog Title</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <button><a href="blog-detail.php?id=3" target="_blank">Read More ></a></button>

                    </div>
                </div>                
            </div> -->
        </section>

    </div>
    <!---typed js for typing text effect-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.10/typed.min.js"></script>
    <script src="script.js"></script>
</body>

</html>