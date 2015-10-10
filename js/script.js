$(document).ready( function() {

    function checkScroll(){
        var startY = $('.navbar').height() * 12; //The point where the navbar changes in px

        if($(window).scrollTop() > startY){
            $('.navbar').addClass("scrolled");
        }else{
            $('.navbar').removeClass("scrolled");
        }
    }

    if($('.navbar').length > 0){
        $(window).on("scroll load resize", function(){
            checkScroll();
        });
    }

    $("#divhide").hide(); //hide your div initially
    var topOfOthDiv = $("#otherdiv").offset().top;
    var windowHeight = $(window).scrollTop()+$(window).height();
    $(window).scroll(function() {
        if(windowHeight > topOfOthDiv) { //scrolled past the other div?
            $("#divhide").fadeIn(1500); //reached the desired point -- show div
        }
    });
});