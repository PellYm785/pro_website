<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>
        Présentation
    </title>
    <link rel="stylesheet" href="style/1920x1080.css" />
    <link rel="stylesheet" href="style/fenetre.css" />
    <link rel="stylesheet" href="style/smartphone.css" />
    <script src="https://code.jquery.com/jquery-3.3.1.js"
        integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
        crossorigin="anonymous">
    </script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"
        integrity="sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30="
        crossorigin="anonymous">
    </script>
    <script src="script/pluginPageEffect.js"></script>
    <script src="script/moduleRI/Item"></script>
    <script src="script/moduleRI/Category"></script>
    <script src="script/moduleRI/Section"></script>
    <script src="script/moduleRI/RI"></script>
    <script>
        $(document).ready(function(){
                $("body").css({ height: $(window).height()*0.85});
            });
    </script>
</head>
<body>

	<header>
        <video autoplay loop>
            <source src="image/video-background.mp4" type="video/mp4">
        </video>
        <h1>
            PRESENTATION NGBAMA William
        </h1>
	</header>
	

	<nav>
        <div id="container-icon-menu">
            <?php
            include "image/icon-menu.svg";
            ?>
            <span>
                Menu
            </span>
        </div>

        <div id="menu">
                <?php
                include "image/close-menu.svg";
                ?>
            <ul>
                <li id="LM_in" class="selected" data-link="LM">
                    <div>
                        Lettre de motivation
                    </div>
                </li>
                <li id="CV_in" data-link="CV">
                    <div>
                        Curriculum Vitae
                    </div>
                </li>
                <li id="Contact_in" data-link="Contact">
                    <div>
                        Contact
                    </div>
                </li>
            </ul>
        </div>
	</nav>


    <div id="background-content"></div>
    <div id="content">
