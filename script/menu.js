var $listLiMenu = $('nav').children('ul').children('li');
var menu_hide = true;
var $menu = $('nav').children('ul');
var $displayer_menu = $("#container-icon-menu");

$listLiMenu.each(function(index, element){
    $(element).click(function(){
        if(!$(element).hasClass('selected')){
            $('li').removeClass("selected");
            $(element).addClass('selected');
            $('section').removeClass("show");
            $('section').addClass("hide");
            $('#'+$(element).data('link')).removeClass("hide");
            $('#'+$(element).data('link')).addClass("show");
            if($(element)[0].id == 'CV_in' && $(window).width() < 1024){
                switcher.build();
            }else{
                switcher.destroy();
            }
        }
    });
});

$(window).resize(function(){
    if($(window).width() > 1024){
        switcher.disable();
    }else{
        menu_hide = true;
        switcher.build();
        switcher.enable();
        switcher.replace();
    }
});

$displayer_menu.click(function(){
    if(menu_hide){
        $menu.show();
        menu_hide = false;
    }
});