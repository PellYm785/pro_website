<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>
        Présentation
    </title>
    <link rel="stylesheet" href="style/ordi_pleinEcran.css" />
    <link rel="stylesheet" href="style/ordi_fenetre.css" />
    <link rel="stylesheet" href="style/smartphone.css" />
    <link rel="stylesheet" href="libs/css/OverlayScrollbars.css" />
    <script src="https://code.jquery.com/jquery-3.3.1.js"
        integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
        crossorigin="anonymous">
    </script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"
        integrity="sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30="
        crossorigin="anonymous">
    </script>
    <script>
        $(document).ready(function(){
                $("body").css({ height: $(window).height()*0.85});
            });
    </script>
</head>
<body>

	<header>
	    <div id="border_title_top" class="border_title">
	    </div>
	    <h1>
	        PRESENTATION NGBAMA William
	    </h1>
	    <div id="border_title_bottom" class="border_title">
	    </div>
	</header>
	
	
	<nav id="menu">
		
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
	    </ul>
	</nav>
	<div id="container-icon-menu">
		<?php
		include "image/icon-menu.svg";
		?>
	</div>
