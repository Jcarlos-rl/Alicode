$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.fixed-action-btn').floatingActionButton();
    $('.slider').slider({
        height: 190
    });
    $('.tabs').tabs();
    $('.modal').modal();

    setTimeout(function(){
        $(".logo-letter").css({"display":"block","transition":"3s"})
    },6500)
    var x = window.matchMedia("(min-width: 993px)")
    myFunction(x)
    function myFunction(x) {
        if (x.matches) {
            $("body").mousemove(function(e) {
                parallaxIt(e, ".fondo", -50);
            });
            function parallaxIt(e, target, movement) {
                var $this = $("body");
                var relX = e.pageX - $this.offset().left;
                var relY = e.pageY - $this.offset().top;
              
                TweenMax.to(target, 1, {
                  x: (relX - $this.width() / 4) / $this.width() * movement,
                  y: (relY - $this.height() / 4) / $this.height() * movement
                });
            }
        }
    }

    var flag=false;
    var scroll;
    $(window).scroll(function(){
        scroll=$(window).scrollTop();
        if(scroll > 50){
            if(!flag){
                $("nav").css({"background-color": "#E9EBF0","box-shadow":"0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)"});
                flag=true;
            }
        }else{
            if(flag){
                $("nav").css({"background-color": "transparent","box-shadow":"0 0 0 0 rgba(0,0,0,0.14), 0 0 0 0 rgba(0,0,0,0.12), 0 0 0 0 rgba(0,0,0,0.2)"});
                flag=false;
            }
        }
    });
});
function tabs(evt, cityName, hr) {
    $(".header h1").css({"font-size":"3rem","transition":"0.2s"});
    $(".header h5,.center h6,.header div,.header p,.container h6,.header p").css({"display":"none","transition":"0.2s"});
    $(".container-service").css({"margin":"0 auto","max-width":"1280px","width":"50%"});
    $(".servicios svg").css({"width":"50px"});
    $(".simpsa, .ali, .cloud, .bleu").css({"width":"100%","height":"90px"});
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    hrs = document.getElementsByClassName("hr");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    for (i = 0; i < hrs.length; i++) {
        hrs[i].style.display = "none";
    }
    active = document.getElementsByClassName("img");
    for (i = 0; i < active.length; i++) {
        active[i].className = active[i].className.replace(" active", "");
        console.log(active[i]);
    }
    document.getElementById(cityName).style.display = "block";
    document.getElementById(hr).style.display = "block";
    evt.currentTarget.className += " active";
}
      