$(document).ready(function () {
  
  $(window).scroll(function() {
    if ($(this).scrollTop()>120) { 
      $('#to-top-btn').show(1000);
     } else {
      $('#to-top-btn').hide(1000);
     }
  })

  $("#to-top-btn").click(function(){
    $(window).scrollTop(200);
    $( ".new-tweet" ).slideDown( "fast", "swing" );
  })

});