$(document).ready(function () {
    var $list_li_menu = $('nav').children().children();
    var menu_hide = true;
    var switcher = new Switch('.section-cv') ;

    $list_li_menu.each(function(index, element){
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
    $('video').css('width', $(window).width());
    $('video').ready(function () {
        $('header').css('height', $('video').height());
    });

    console.log($('video').height());
    $(window).resize(function(){
        console.log($('video').height());
        $('video').css('width', $(window).width());
        $('video').ready(function () {
            $('header').css('height', $('video').height());
        });

        if($(window).width() > 1024){
            $("#menu").show();
            switcher.disable();
        }else{
            $("#menu").hide();
            $("#container-icon-menu").css({"background": "grey" });
            $("rect").attr("fill", "black");
            menu_hide = true;
            switcher.build();
            switcher.enable();
            switcher.replace();
        }
    });

    $("#container-icon-menu").click(function(){
        if(menu_hide){
            $("#menu").show();
            $(this).css({"background": "black" });
            $("rect").attr("fill", "grey");
            menu_hide = false;
        }else{
            $("#menu").hide();
            $(this).css({"background": "grey" });
            $("rect").attr("fill", "black");
            menu_hide = true;
        }
    });
})
