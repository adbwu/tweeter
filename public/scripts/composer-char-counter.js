$(document).ready(function () {
  $("#tweet-text:input").keydown(function(){
    let tweetLength = $(this).val().length;
    let counter = $(this).parents("form").find(".counter");
    let newCounter = 140 - tweetLength;
    if (newCounter < 0 ) {
      counter.addClass("negative")
    } else {
      counter.removeClass("negative")
    }
    counter.val(newCounter);
  });
}); 