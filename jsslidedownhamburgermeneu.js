$(document).ready(function(){
    $(".container").click(function(){
        $(".shopoutlets").toggleClass("displayblock");
        $(".quality").toggleClass("displayblock");
        $(".cheapproducts").toggleClass("displayblock");
      $(".nav-items").slideToggle(500);
      $(".bar1").toggleClass("change1");
  $(".bar2").toggleClass("change2");
  $(".bar3").toggleClass("change3");
    })});
    $(window).scroll(function(){
      if ($(this).scrollTop() > 10) {
         $('#nav-id').addClass('navbarclass');
         $('#nav-items').addClass('navbarclass');
      }
         else {
          $('#nav-id').removeClass('navbarclass');
          $('#nav-items').removeClass('navbarclass');
       }
  });
