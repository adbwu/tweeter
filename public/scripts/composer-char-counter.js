// gets tweet length and sets counter value to remaining characters
$(document).ready(function () {
  $("#tweet-text:input").on("input", (function(){
    const tweetLength = $(this).val().length;
    const counter = $(this).parents("form").find(".counter");
    const button = $(this).parents("form").find("button")
    const newCounter = 140 - tweetLength;
    if (newCounter < 0 ) {
      //adds a negative class to counter and button for CSS styling
      counter.addClass("negative");
      button.addClass("negative");
      button.removeClass("positive"); 
    } else if (newCounter === 140 ) {
      //adds a negative class to counter and button for CSS styling
      button.addClass("negative");
      button.removeClass("positive");  
    } else {
      //returns styling and functionality when character count is ok
      counter.removeClass("negative");
      button.removeClass("negative");
      button.addClass("positive");
    }
    counter.val(newCounter);
    }));
}); 
