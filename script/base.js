/**
 * 
 */
/**
 * 
 */

// Déclaration des variables
var lmORcv = 0;
var etatCom = false; // boolean
var etatForm = false; // boolean
var loadScript = false;
var timeOpC = new SinglyList(); // liste chaînée: stocke les ID des setTimeout
								// liée à la fontion
var timeOpF = new SinglyList(); // liste chaînée: stocke les ID des setTimeout
								// liée à la fontion

// Intialisation
requestLM(readDataLM);
$("#LM").hide();
$("#LM").fadeIn(500);
$("#LM_in").css({
	"backgroundColor" : "#C4C4C4"
});
$("#CV_in").css({
	"backgroundColor" : "#FFFFFF",
	"cursor": "pointer"
});
$("#line").css({
	"background-image" : "linear-gradient(60deg, white,  #B28155)"
});
$("#LM_in").mouseover(overLM.bind(this));
$("#LM_in").mouseout(outLM.bind(this));
$("#LM_in").click(updateBtnLM.bind(this));
$("#CV_in").mouseover(overCV.bind(this));
$("#CV_in").mouseout(outCV.bind(this));
$("#CV_in").click(updateBtnCV.bind(this));
// Appui bouton Curriculum Vitae

function updateBtnCV() {
	if (this.lmORcv != 1) {
		if (requestCV(readDataCV)) {
			this.lmORcv = 1;
			$(".boutonCV:first").click(updateBtnCom.bind(this));
			$(".boutonCV:last").click(updateBtnForm.bind(this));

			$("#CV_in").stop();
			$("#CV").hide();
			$("#CV").fadeIn(500);

			$(".Competence").css({
				"opacity" : "0"
			});
			$(".Formation").css({
				"opacity" : "0"
			});
			$("#listeComp").hide();
			$("#listeForm").hide();

			$("#CV_in").css({
				"backgroundColor" : "#C4C4C4",
				"cursor": "default"
			});
			$("#LM_in").css({
				"backgroundColor" : "#FFFFFF",
				"cursor": "pointer"
			});
			$("#line").css({
				"background-image" : "linear-gradient(60deg, white, #486CFE)"
			});
		}
	}
}

// Appui bouton Lettre de motivation

function updateBtnLM() {
	if (this.lmORcv != 0) {
		requestLM(readDataLM);
		this.lmORcv = 0;
		$("#LM_in").stop();
		$("#LM").hide();
		$("#LM").fadeIn(500);

		$("#LM_in").css({
			"backgroundColor" : "#C4C4C4",
			"cursor": "default"
		});
		$("#CV_in").css({
			"backgroundColor" : "#FFFFFF",
			"cursor": "pointer"
		});
		$("#line").css({
			"background-image" : "linear-gradient(60deg, white,  #B28155)"
		});
	}

}

// Souris sur le bouton Curriculum Vitae désactivé

function overCV() {
	if (this.lmORcv != 1) {
		$("#CV_in").stop(true, false);
		$("#LM_in").stop(true, false);
		$("#CV_in").animate({
			backgroundColor : "#45fee6",
			right : "-10"
		}, 1000);
	}
}

// Souris hors bouton Curriculum Vitae désactivé

function outCV() {
	if (this.lmORcv != 1) {
		$("#CV_in").stop(true, false);
		$("#CV_in").animate({
			backgroundColor : "#FFFFFF",
			right : "+10"
		}, 500);
	}
}

// Souris sur le bouton Lettre de motivation désactivé

function overLM() {
	if (this.lmORcv != 0) {
		$("#LM_in").stop(true, false);
		$("#LM_in").animate({
			backgroundColor : "#45FEE6",
			left : "+10"
		}, 500);
	}
}

// Souris hors bouton Lettre de motivation désactivé

function outLM() {
	if (this.lmORcv != 0) {
		$("#LM_in").stop(true, false);
		$("#LM_in").animate({
			backgroundColor : "#FFFFFF",
			left : "-10"
		}, 500);
	}
}

function getXMLHttpRequest() {
	var xhr = null;

	if (window.XMLHttpRequest || window.ActiveXObject) {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
		} else {
			xhr = new XMLHttpRequest();
		}
	} else {
		alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
		return null;
	}

	return xhr;
}
