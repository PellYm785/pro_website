//var supportedFlag = $.keyframe.isSupported();
//console.log($('nav').eq(0).height());
animate_menu($('nav'));
animate_menu($('.footer'));
function animate_menu(list_element) {
	var first_position = list_element.eq(0).position();
	var last_position = [];
	
	list_element.each(function(index, element) {
	    last_position.push($(element).position());
	});
	
	list_element.each(function(index, element) {

		console.log(index);
		console.log(last_position);
		var final_width = $(element).width();

		$(element).css({
			'height' : $(element).height(),
			'width' : $(element).height(),
			'position' : 'absolute',
			'top' : first_position.top,
			'left' : first_position.left
		});

		$(element).animate({
			'top' : last_position[index].top,
			'left' : index>1 ? (last_position[index].left - $(element).css("marginLeft")): last_position[index]
		}, {
			duration : 1000,
			complete : function() {
				console.log(element);
				$(element).animate({
					'height' : $(element).height() + 'px',
					'width' : final_width + 'px',
					
				}, 500);
			}
		});

	});
}

