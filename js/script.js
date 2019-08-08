function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

$(document).ready(function() {
    var _Seconds,
        int;
    var min;
    var hour;
    var arr;
    var cookies_sec_o;
    var cookies_sec_t;
    var cookies_min_o;
    var cookies_min_t;
    var cookies_hou_o;
    var cookies_hou_t;
    cookies_sec_o = getCookie("one--s");
    cookies_sec_t = getCookie("two--s");
    cookies_min_o = getCookie("one--m");
    cookies_min_t = getCookie("two--m");
    cookies_hou_o = getCookie("one--h");
    cookies_hou_t = getCookie("two--h");

    if (cookies_sec_o != undefined) {
        $('.min--timer > .two--m').text(cookies_min_t);
        $('.min--timer > .one--m').text(cookies_min_o);
        _Seconds = cookies_sec_o + cookies_sec_t;
        if (cookies_min_o != undefined) {
                $('.min--timer > .two--m').text(cookies_min_t);
        $('.min--timer > .one--m').text(cookies_min_o);
            min = cookies_min_o + cookies_min_t;
        } else {
            min = $('.min--timer > .minute-on').text() + $('.min--timer > .minute-two').text();
        }

        if (cookies_hou_o != undefined) {
                    $('.hour--timer > .one--h').text(cookies_hou_o);
        $('.hour--timer > .two--h').text(cookies_hou_t);
            hour = cookies_hou_o + cookies_hou_t;
        } else {
            hour = $(' .one--h').text() + $('.hour--timer > .two--h').text();
        }
        int = setInterval(function() { 
            if (_Seconds > 0) {
                _Seconds--; 

                arr = _Seconds + '';
                arr = arr.split('', 3);
                if (arr.length == 1) {
                    document.cookie = "one--s=0";
                    document.cookie = "two--s=" + arr[0] + "";
                    $('.sec--timer > .two--s').text(arr[0]);
                    $('.sec--timer > .one--s').text('0');
                } else {
                    document.cookie = "one--s=" + arr[0] + "";
                    document.cookie = "two--s=" + arr[1] + "";
                    $('.sec--timer > .one--s').text(arr[0]); 
                    $('.sec--timer > .two--s').text(arr[1]);
                }
            } else {
                if (min > 0) {
                    min--;
                    arr = min + '';
                    arr = arr.split('', 3);
                    if (arr.length == 1) {
                        document.cookie = "one--m=0";
                        document.cookie = "two--m=" + arr[0] + "";
                        $('.min--timer > .two--m').text(arr[0]);
                        $('.min--timer > .one--m').text('0');
                    } else {
                        document.cookie = "one--m=" + arr[0] + "";
                        document.cookie = "two--m=" + arr[1] + "";
                        $('.min--timer > .two--m').text(arr[1]);
                        $('.min--timer > .one--m').text(arr[0]);
                    }
                    _Seconds = '59';
                    arr = _Seconds;
                    arr = arr.split('', 3);
                    if (arr.length == 1) {
                        document.cookie = "one--s=0";
                        document.cookie = "two--s=" + arr[0] + "";
                        $('.sec--timer > .two--s').text(arr[0]);
                        $('.sec--timer > .one--s').text('0');
                    } else {
                        document.cookie = "one--s=" + arr[0] + "";
                        document.cookie = "two--s=" + arr[1] + "";
                        $('.sec--timer > .two--s').text(arr[1]); 
                        $('.sec--timer > .one--s').text(arr[0]);
                    }
                } else {
                    if (hour > 0) {
                        hour--;
                        arr = hour + '';
                        arr = arr.split('', 3);
                        if (arr.length == 1) {
                            document.cookie = "one--h=0";
                            document.cookie = "two--h=" + arr[0] + "";
                            $('.hour--timer > .one--h').text(arr[0]);
                            $('.min--timer > .two--h').text('0');
                        } else {
                            document.cookie = "one--h=" + arr[0] + "";
                            document.cookie = "two--h=" + arr[1] + "";
                            $('.hour--timer > .one--h').text(arr[0]);
                            $('.min--timer > .two--h').text(arr[1]);
                        }

                        min = 59;
                        arr = min + '';
                        arr = arr.split('', 3);
                        if (arr.length == 1) {
                            document.cookie = "one--m=0";
                            document.cookie = "two--m=" + arr[0] + "";
                            $('.min--timer > .two--m').text(arr[0]);
                            $('.min--timer > .one--m').text('0');
                        } else {
                            document.cookie = "one--m=" + arr[0] + "";
                            document.cookie = "two--m=" + arr[1] + "";
                            $('.min--timer > .two--m').text(arr[1]);
                            $('.min--timer > .one--m').text(arr[0]);
                        }
                        _Seconds = '59';
                        arr = _Seconds;
                        arr = arr.split('', 3);
                        document.cookie = "one--s=" + arr[0] + "";
                        document.cookie = "two--s=" + arr[1] + "";
                        $('.sec--timer > .two--s').text(arr[1]); 
                        $('.sec--timer > .one--s').text(arr[0]);

                    } else {
                        clearInterval(int); 
                    }
                }

            }
        }, 1000);
    }
});




var Ok = 0;
$('.yes').click(function() {
    if (Ok == 0) {
        $('.show--poll').fadeIn('slow');
        $('.yes >span > img').css({
            'background': '#1ce91c'
        });
        Ok++
    }
});
$('.no').click(function() {
    if (Ok == 0) {
        $('.show--poll').fadeIn('slow');
        $('.no >span > img').css({
            'background': '#f00'
        });
        Ok++
    }
});
$('.not_buy').click(function() {
    if (Ok == 0) {
        $('.show--poll').fadeIn('slow');
        $('.not_buy >span > img').css({
            'background': '#00b7f4'
        });
        Ok++
    }
});
$('.request--open').click(function() {
    $('.modal--request').fadeIn('slow');
    $('.fade-bg').fadeIn('400');
});


var src_vid;
$('.request--open--video').click(function() {
    var video_url = ['zLTVEQ_VoFY?rel=0', 'k1N4s1NRHfo?rel=0', 'NBS-R2cuqr4?rel=0'];

    if ($(this).hasClass('clock-v')) {
        if ($('iframe').attr('src') == 'https://www.youtube.com/embed/' + video_url[0]) {} else {
            $('.modal--video').find('iframe').attr('src', 'https://www.youtube.com/embed/' + video_url[0]);
            src_vid = video_url[0];
        }

    } else if ($(this).hasClass('etari-111-vi')) {
        if ($('iframe').attr('src') == 'https://www.youtube.com/embed/' + video_url[1]) {} else {
            $('.modal--video').find('iframe').attr('src', 'https://www.youtube.com/embed/' + video_url[1]);
            src_vid = video_url[1];
        }
    } else if ($(this).hasClass('etari-555-vi')) {
        if ($('iframe').attr('src') == 'https://www.youtube.com/embed/' + video_url[2]) {} else {
            $('.modal--video').find('iframe').attr('src', 'https://www.youtube.com/embed/' + video_url[2]);
            src_vid = video_url[2];
        }
    }
    $('.modal--video').fadeIn('slow');
    $('.fade-bg').fadeIn('400');
});

$('.close').click(function() {
    $(this).parent().parent().fadeOut('slow');
    $('.fade-bg').fadeOut('400');
});

$(document).ready(function() {


    $(".navbar > li > a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });


});


$('.mobil--bar').click(function(e) {
    var id = $(this).attr('data-id');
    if (id == 0) {
        $('.navbar').slideDown('slow');
        id++;
        $(this).attr('data-id', id)
    } else {
        $('.navbar').slideUp('slow');
        id--;
        $(this).attr('data-id', id)
    }
});
$('.fade-bg').click(function() {
    $('.modal--public').fadeOut('slow');
    $('.modal--confidenc').fadeOut('slow');
    $('.modal--video').fadeOut('slow');
    $('.modal--request').fadeOut('slow');
    $('.fade-bg').fadeOut('slow');
});

$('.public--ofer').click(function() {

    $('.modal--public').fadeIn('slow');
    $('.fade-bg').fadeIn('400');
});
$('.public--confid').click(function() {

    $('.modal--confidenc').fadeIn('slow');
    $('.fade-bg').fadeIn('400');
});

function marp_api() {
    if ($(window).width() < 992) {
        $('.section--ten').css({
            'display': 'none'
        });
    }
}
marp_api();


function WhoAreYou() {
    var is_opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var is_Edge = navigator.userAgent.indexOf("Edge") > -1;
    var is_chrome = !!window.chrome && !is_opera && !is_Edge;
    var is_explorer = typeof document !== 'undefined' && !!document.documentMode && !is_Edge;
    var is_firefox = typeof window.InstallTrigger !== 'undefined';
    var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (is_safari) {
        $('.d--f').css({
            "display": "-webkit-inline-block"
        });
        $('.modal--request .form > input').addClass('db');
        $('.logo').addClass('dib');
        $('.phone').addClass('dib');

    }
}


   if ($(window).width() > 992) {
        $('.proverka-s').html('<script src="https://api-maps.yandex.ru/2.1/?apikey=a2bebccb-6b3f-45b6-bbed-b7d97089e3cc&lang=ru_RU" type="text/javascript"></script>')
     
    }
$(document).ready(function(){
  if ($(window).width() > 992) {
         ymaps.ready(function(){
                    var map = new ymaps.Map("map", {
                center: [55.683012, 37.661741],
                zoom: 15
            });
                    // Создание геообъекта с типом точка (метка).
var myGeoObject = new ymaps.GeoObject({
    geometry: {
        type: "Point", // тип геометрии - точка
        coordinates: [55.683012, 37.661741] // координаты точки
    }
});

// Размещение геообъекта на карте.
                map.geoObjects.add(myGeoObject); 
        });

  }
});
