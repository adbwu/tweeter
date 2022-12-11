$(document).ready(function () {

  //jQuery for new tweet form slide animation
  $("#call-to-action").click(function() {
      $( ".new-tweet" ).slideToggle( "fast", "swing" );
    });

  const bounce = (() => {$("#c-t-a-chevron")
  .animate({"padding-top": "+=3px"})
  .animate({"padding-top": "-=3px"});
  });

  setInterval(bounce, 300);

  //code to "bounce" the nav chevron
  // function bounce() {
  //   $('i#c-t-a-chevron').animate({
  //     top: '+=50'
  //   }, 1000, 'bounce', function() {
  //     $('i#c-t-a-chevron').animate({
  //       top: '-=50'
  //     }, 1000, 'bounce', function() {
  //       bounce();
  //     });
  //   });
  // }
  // bounce();
});