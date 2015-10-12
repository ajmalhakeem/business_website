$(document).ready(function() {

  $(".dismiss").hide();
  $(".dismiss-two").hide();
  $(".dismiss-three").hide();

  $(".fa").click(function() {
    $(".fa").removeClass("active");
    $(this).addClass("active");

    $(".dismiss").slideDown(500);
  });

  $(".btn-default").click(function() {

    $(".dismiss-two").show();

    setTimeout(
      function() 
      {
        $(".dismiss-two").hide();
        $(".dismiss-three").show();
      }, 3000);
  });
});