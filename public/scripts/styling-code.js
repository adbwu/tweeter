$(document).ready(function () {

  //jQuery for new tweet form slide animation
  $(".call-to-action").click(function() {
      $( ".new-tweet" ).slideToggle( "fast", "swing" );
    });

  //function to add bounce animation to "write new tweet" button
  const bounce = (() => {$(".c-t-a-chevron")
  .animate({"padding-top": "+=3px"})
  .animate({"padding-top": "-=3px"});
  });

  setInterval(bounce, 300);

});