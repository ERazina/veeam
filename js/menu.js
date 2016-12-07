$(document).ready(function(){

        var $menu = $("#menu");

        $(window).scroll(function(){
            if ( $(this).scrollTop() > 1010 && $menu.hasClass("default") ){
                $menu.fadeOut('fast',function(){
                    $(this).removeClass("default")
                           .addClass("fixed transbg")
                           .fadeIn('fast');
                });
            } else if($(this).scrollTop() <= 1010 && $menu.hasClass("fixed")) {
                $menu.fadeOut('fast',function(){
                    $(this).removeClass("fixed transbg")
                           .addClass("default")
                           .fadeIn('fast');
					$('.zerro').css('display', 'none');
                });
            }
        });//scroll

        $menu.hover(
            function(){
                if( $(this).hasClass('fixed') ){
                    $(this).removeClass('transbg');
                }
            },
            function(){
                if( $(this).hasClass('fixed') ){
                    $(this).addClass('transbg');
                }
            });//hover
    });//jQuery

//анимация плавного перехода по меню
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();
 
        // получем идентификатор блока из атрибута href
        var id  = $(this).attr('href'),
			
 
        // находим высоту, на которой расположен блок
            top = $(id).offset().top;
         
        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({scrollTop: top}, 800);
    });
});


//подсветка активных ссылок
//$(document).ready(function(){
//    $("#menu").on("click","a", function (event) {
//        // исключаем стандартную реакцию браузера
//        event.preventDefault();
//// получем идентификатор блока из атрибута href
//        $("#menu").addClass();
			
			//добавляем класс Active
  
//    });


$('.menu-item a').click(function(){
$('.menu-item a').removeClass('active');
$(this).addClass('active');
});
