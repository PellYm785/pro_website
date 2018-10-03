var $list_li_menu = $('nav').children().children();
$list_li_menu.each(function(index, element){
        $(element).click(function(){
                if(!$(element).hasClass('selected')){
                    $('li').removeClass("selected");
                    $(element).addClass('selected');
                    $('section').removeClass("show");
                    $('section').addClass("hide");
                    $('#'+$(element).data('link')).removeClass("hide");
                    $('#'+$(element).data('link')).addClass("show");
                }
            });
    });