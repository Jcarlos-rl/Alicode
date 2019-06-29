$(document).ready(function(){
    $('.slider').slider({
        height: $(window).height(),
        indicators: false,
    });
});

$(document).ready(function(){
    $('.sidenav').sidenav();
});

$(document).ready(function(){
    $('.carousel').carousel({
        dist: 0,
        indicators: true,
    });
});

setInterval(function(){
    $('.carousel').carousel('next');
}, 6000);

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});

$(document).ready(function(){
    $('.tabs').tabs();
});

$(document).ready(function(){
    $('.modal').modal();
});
function myFunction(x) {
    if (x.matches) { // If media query matches
      document.body.style.backgroundColor = "yellow";
    } else {
     document.body.style.backgroundColor = "pink";
    }
}

$(document).ready(function(){
    var flag=false;
    var scroll;
    var x = window.matchMedia("(max-width: 600px)");
    $(window).scroll(function(){
        scroll=$(window).scrollTop();
        if(scroll > 100){
            if(!flag){
                $(".logo-nav").css({"margin-top": "5px","width": "100px","display":"none"});
                $("a.sidenav-trigger").css({"display":"block"});
                $("ul.menu").css({"display":"none"});
                $("nav.nav-color").css({"background-color":"#2e2e2e"});
                $(".logo-text").css({"margin-top": "5px"});
                flag=true;
            }
        }else{
            if(flag){
                $(".logo-nav").css({"width": "250px","transition":"0.5s","display":"block"});
                if(x.matches){
                    $("a.sidenav-trigger").css({"display":"block"});
                }else{
                    $("a.sidenav-trigger").css({"display":"none"});
                }
                $("ul.menu").css({"display":"block"});
                $("nav.nav-color").css({"background-color":"transparent"});
                $(".logo-text").css({"margin-top": "105px", "transition":"0.5s"});
                flag=false;
            }
        }
    });
});