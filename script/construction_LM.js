/**
 * 
 */
function requestLM(callback) {
	var xhr = getXMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			callback(xhr.responseText);
		}
	};

	xhr.open("GET", "https://nw-pres.fr/LM.xml", false);
	xhr.send(null);
}

function readDataLM(sData) {
	$("section").remove();
	var lm = ajouteLM(sData);
	$("#position").last().after(lm);

}

function ajouteLM(sData) {
	var res = "";

	res += '<section id="LM">';
	res += '<div id="fondLM"></div>';
	res += '<article>';

	// Informations personnelles
	res += '<div class="tete">';
	res += '<p  class="sans_espace">' + $(sData).find("nom").text() + '</p>';
	res += '<p  class="sans_espace">' + $(sData).find("adresse").text()
			+ '</p>';
	res += '<p  class="sans_espace">' + $(sData).find("ville").text()
			+ '</p>';
	res += '<p  class="sans_espace_top">' + $(sData).find("contact").text()
			+ '</p>';
	res += '</div>';
	res += '<p id="date">' + $(sData).find("date").text() + '</p>';

	// Corps de la lettre de motivation
	res += '<div class="tete">';
	res += '<p>' + $(sData).find("sujet").text() + '</p>';
	res += '</div>';
	res += '<p id="debutCorps">' + $(sData).find("debutCorps").text() + "</p>";
	res += '<div id="corps">';

	// Récupération des paragraphes
	res += '<p>' + $(sData).find("introduction").text() + '</p>';
	res += '<p>' + $(sData).find("corpsPrincipal").text() + '</p>';
	res += '<p>' + $(sData).find("fin").text() + '</p>';
	res += '<p>' + $(sData).find("politesse").text() + '</p>';
	
	// Pied de la lettre
	res += '</div><p id="pied">' + $(sData).find("nom").text() + '</p>';
	res += '</article></section>';

	return res;

}
