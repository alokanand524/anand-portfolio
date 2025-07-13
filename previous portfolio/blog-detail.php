<?php
// blog-detail.php

$blogId = $_GET['id'] ?? 0;

// Simulated blog data
$blogs = [
    1 => [
        'title' => 'What is webRTC ?',
        'image' => 'images/webrtc-Main.png',
        'content' => 'With WebRTC, you can add real-time communication capabilities to your application that works on top of an open standard. It supports video, voice, and generic data to be sent between peers, allowing developers to build powerful voice- and video-communication solutions. The technology is available on all modern browsers as well as on native clients for all major platforms. The technologies behind WebRTC are implemented as an open web standard and available as regular JavaScript APIs in all major browsers. For native clients, like Android and iOS applications, a library is available that provides the same functionality. The WebRTC project is open-source and supported by Apple, Google, Microsoft and Mozilla, amongst others. This page is maintained by the Google WebRTC team.',
        'content2' => 'There are many different use-cases for WebRTC, from basic web apps that uses the camera or microphone, to more advanced video-calling applications and screen sharing. We have gathered a number of code samples to better illustrate how the technology works and what you can use it for. A WebRTC application will usually go through a common application flow. Accessing the media devices, opening peer connections, discovering peers, and start streaming. We recommend that new developers read through our introduction to WebRTC before they start developing.',
        'content3' => 'First, webRTC uses UDP, and UDP is not a reliable protocol for transferring important data. UDP is good at sending data really fast but it doesn’t check whether or not the data is being received. So UDP is great for video because the data gets there fast and if we lose a few frames it’s not a big deal; but if this were a file we needed to send over and we lose a few bytes of data the entire file can be corrupted. WebRTC also has no built-in signaling so it cant be used on its own to establish a peer to peer connection. WebRTC takes care of everything for us once the connection is established but leaves it up to us on how to transmit the initial data in order to connect two peers.'
    ],
    2 => [
        'title' => 'My Blog Title 2',
        'image' => 'images/alokimage.jpeg',
        'content' => 'This is the full content of Blog Post 2. This can also include formatting, links, and more.'
    ],
    3 => [
        'title' => 'My Blog Title 3',
        'image' => 'images/alokimage.jpeg',
        'content' => 'This is the full content of Blog Post 2. This can also include formatting, links, and more.'
    ],
    // Add more blog posts if needed
];

// Validate blog ID
if (!isset($blogs[$blogId])) {
    echo "<h2>Blog not found</h2>";
    exit;
}

$blog = $blogs[$blogId];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <title><?= htmlspecialchars($blog['title']) ?></title>
    <link rel="stylesheet" href="style.css" />

    <style>
        body {
            background: #f7f8fa;
            margin: 0;
            padding: 0;
            color: #333;
            font-family: 'Times New Roman', Times, serif;
        }

        .blog-detail {
            max-width: 1000px;
            padding: 30px;
        }

        .blog-detail h1 {
            font-size: 2rem;
            margin-bottom: 20px;
            color: #111;
        }

        .hilight-text {
            width: 100%;
            background-color: rgb(0, 183, 255)white;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .text-note {
            width: 800px;
            border: 1px solid cadetblue;
            border-radius: 10px;
            height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .blog-img {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 2rem 0rem;
        }

        .blog-img2 {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 2rem 0rem;
        }

        .blog-img2 img {
            width: 100%;
        }

        .blog-img img {
            width: 400px;
            height: auto;
            border-radius: 10px;
            margin-bottom: 25px;
        }

        .blog-detail p {
            font-size: 1.1rem;
            line-height: 1.7;
            text-align: justify;
            color: #555;
            padding-left: 2rem;
        }

        .text {
            color: #555;
            padding: 10px;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Responsive design */
        @media (max-width: 600px) {
            .blog-detail {
                padding: 20px;
                margin: 20px;
            }

            .blog-detail h1 {
                font-size: 1.5rem;
            }

            .blog-detail p {
                font-size: 1rem;
            }

            .blog-img {
                flex-direction: column-reverse;
            }
        }
    </style>
</head>

<body>

    <div class="container">

        <div class="blog-detail">

            <h1><?= htmlspecialchars($blog['title']) ?></h1>

            <div class="hilight-text">
                <div class="text-note">
                    <h2 class="text" style="font-family:proxima-nova, sans-serif">
                        “WebRTC is the cornerstone of real-time communication on the web — enabling voice, video, and
                        data sharing without plugins, directly in your browser.”
                    </h2>
                </div>
            </div>

            <div class="blog-img">
                <img src="<?= htmlspecialchars($blog['image']) ?>" alt="Blog Image" />
                <p> <?= nl2br(htmlspecialchars($blog['content'])) ?> </p>
            </div>

            <p> <?= nl2br(htmlspecialchars($blog['content2'])) ?> </p>


            <div class="blog-img2">
                <img src="images/webRTC.png" alt="Blog Image" />
            </div>

            <p> <?= nl2br(htmlspecialchars($blog['content3'])) ?> </p>
        </div>
    </div>

</body>

</html>