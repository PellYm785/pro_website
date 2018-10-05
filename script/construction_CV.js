function requestCV(callback) {
	var xhr = getXMLHttpRequest();
	var myRegex = /###error###/;
	var succes = false;

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			if (myRegex.test(xhr.responseText)) {
				alert('Connexion à la base de donnée échoué, actualisez la page ou revenez plus tard');

			} else {
				var myObj = JSON.parse(xhr.responseText);
				callback(myObj);
				succes = true;
			}
		}
	};

	xhr.open("GET", "https://nw-pres.fr/infos_CV.php", false);
	xhr.send(null);
	return succes;

}

function readDataCV(sData) {
	$("section").remove();
	var cv = ajouteCV(sData);
	$("#position").last().after(cv);

	if (!this.loadScript) {
		$("script")
				.last()
				.after(
						function() {
							var res = "<script src=\"https://nw-pres.fr/script/jQuery_rotate.js\"></script>";
							res += "<script src=\"https://nw-pres.fr/script/animCV.js\" type=\"text/javascript\" ></script>";

							return res;
						});
		this.loadScript = true;
	}

}

function ajouteCV(sData) {
	var form = sData.formation;
	var mois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
			"Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre");
	var moisEnNb = 0;
	var res = "";
	var i;

	res = "<section id=\"CV\">";
	res += "<div id=\"Element\">";
	// Partie compétence
	res += "<div id=\"Competences\">";
	res += "<div class=\"boutonCV\">";
	res += "<img src=\"../image/rubanC.png\"  class=\"ruban\">";
	res += "<svg class=\"fleche\">";
	res += "<polygon points=\"0 10,20 0,20 20\"/>";
	res += "</svg>";
	res += "</div>";
	res += "<div class=\"box\">";
	res += "<div class=\"content\">";
	res += "<ul id=\"listeComp\">";

	// Constrution de la liste compétence
	sData.typeComp.forEach(function(type) {
		res += "<li class=\"categorie\">" + type + "</li>";
		sData.Competence.forEach(function(comp) {
			if (comp.type == type) {
				res += "<li class=\"Competence\">" + comp.nom + "</li>";
			}

		});
	});

	res += "</ul>";
	res += "</div>";
	res += "</div>";
	res += "</div>";
	// Partie formation
	res += "<div id=\"Formations\">";
	res += "<div class=\"boutonCV\">";
	res += "<img src=\"../image/rubanF.png\"  class=\"ruban\"/>";
	res += "<svg class=\"fleche\">";
	res += "<polygon points=\"0 10,20 0,20 20\"/>";
	res += "</svg>";
	res += "</div>";
	res += "<div class=\"box\">";
	res += "<div class=\"content\">";
	res += "<ul id=\"listeForm\">";

	// Constrution de la liste formation
	for (i = 0; i < sData.formation.length - 1; i++) {
		res += "<li class=\"Formation\">" + listeFormtion(mois, form, i);
	}

	res += "<li class=\"Formation\" id=\"dernierFormation\">"
			+ listeFormtion(mois, form, i);

	res += "</ul>";
	res += "</div>";
	res += "</div>";
	res += "</div>";
	res += "</div>";
	res += "</section>";

	return res;
}

function listeFormtion(mois, form, i) {
	var res = "";

	res += "<p class=\"diplome\">" + form[i].nom + "</p>"
	res += "<p>" + form[i].etablissement + "</p>"
	res += "<p class=\"date\"> ";

	if (form[i].fin == "0000-00-00") {
		res += "Depuis ";
		moisEnNbDebut = parseInt(form[i].debut.substr(3, 2));
		res += mois[moisEnNbDebut - 1] + " " + form[i].debut.substr(0, 4)
				+ "</p>";
	} else {
		res += "De ";
		moisEnNbDebut = parseInt(form[i].debut.substr(3, 2));
		res += mois[moisEnNbDebut - 1] + " " + form[i].debut.substr(0, 4)
				+ " à ";

		moisEnNbFin = parseInt(form[i].fin.substr(3, 2));
		res += mois[moisEnNbFin - 1] + " " + form[i].fin.substr(0, 4) + "</p>";

	}

	if (form[i].commentaire != "") {
		res += "<p id=\"commentaire\">" + form[i].commentaire + "</p>";
	}

	res += "</li>";

	return res;
}