/**
 * 
 */
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
	"backgroundColor" : "#C4C4C4"
});
$("#LM_in").css({
	"backgroundColor" : "#FAFEFF"
});
$("#line").css({
	"background-image" : "linear-gradient(60deg, white, #486CFE)"
});

function updateBtnCom() {
	var i;

	if (!this.etatCom) {
		this.etatCom = true;

		$(".Competence").finish();
		$(".fleche").eq(0).rotate({
			animateTo : -90
		});
		$("#listeComp").stop();
		$("#listeComp").slideDown();
		opacite($(".Competence"), 0, this.timeOpC);
		$(".box").eq(0).css({
			"padding" : "5%"
		});
		$(".box").eq(0).css({
			"border" : "solid"
		});
	} else {
		etatCom = false;

		for (var i = 1; i <= this.timeOpC._length; i++) {
			clearTimeout(this.timeOpC.GetValAt(i));
		}
		for (var i = 1; i <= timeOpC._length; i++) {
			this.timeOpC.remove(i);
		}

		$(".Competence").stop(true, false);
		$("#listeComp").stop(true, false);

		$(".Competence").css({
			"opacity" : "0"
		});

		$(".fleche").eq(0).rotate({
			animateTo : 0
		});

		$("#listeComp").slideUp(function() {
			$(".box").eq(0).css({
				"border" : "none"
			});
		}.bind(this));

		$(".box").eq(0).css({
			"padding" : "0%"
		});

	}

}

function updateBtnForm() {

	var i

	if (!this.etatForm) {
		this.etatForm = true;
		$(".fleche").eq(1).rotate({
			animateTo : -90
		});
		$("#listeForm").stop();
		$("#listeForm").slideDown();
		opacite($(".Formation"), 0, this.timeOpF);
		$(".box").eq(1).css({
			"padding" : "5%"
		});
		$(".box").eq(1).css({
			"border" : "solid"
		});
	} else {
		etatForm = false;

		for (var i = 1; i <= this.timeOpF._length; i++) {
			clearTimeout(this.timeOpF.GetValAt(i));
		}
		for (var i = 1; i <= timeOpF._length; i++) {
			this.timeOpF.remove(i);
		}

		$(".Formation").stop(true, false);
		$("#listeForm").stop(true, false);

		$(".Formation").css({
			"opacity" : "0"
		});

		$(".fleche").eq(1).rotate({
			animateTo : 0
		});

		$("#listeForm").slideUp(function() {
			$(".box").eq(1).css({
				"border" : "none"
			});
		}.bind(this));

		$(".box").eq(1).css({
			"padding" : "0%"
		});
	}

}

function opacite(element, i, liste) {
	element.eq(i).animate({
		opacity : 1,
		duration : "slow"
	});

	if (i < element.length) {
		i++

		liste.add(setTimeout(opacite.bind(this), 50, element, i, liste));
	}
}
