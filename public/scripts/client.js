/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function () {

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  
  $(function() {
    $('#post-tweet-form').submit(function (event){
      event.preventDefault();
      const text = $( this ).serialize();
      if (decodeURI(text).length === 5) {
        $( "#too-short" )
        .show( "slow")
        .delay(3000)
        .fadeOut("slow");
      } else if (decodeURI(text).length > 146) {
        $( "#too-long" )
        .show( "slow")
        .delay(3000)
        .fadeOut("slow");
      } else {
          $.ajax({
          type: "POST",
          url: "/tweets",
          data: text,
          success: singleTweet
        });
        console.log("clientJS text " + text);
        $( "#success" )
        .show( "slow")
        .delay(3000)
        .fadeOut("slow");
        $("#post-tweet-form").trigger("reset");
      }
    });
  });

  //creates DOM for tweet with provided data
    const createTweetElement = (tweetData) => {
    //converts millisecond time to "time ago" format
    const timeAgo = moment(tweetData.created_at).fromNow();
    const escapedText = escape(tweetData.content.text)
    return $(`<article class="tweet">
    <header>
      <div class="user">
        <img class="profilepic" src=${tweetData.user.avatars}/>
        <div class="username">${tweetData.user.name}</div>
      </div>
      <div class="usertag">${tweetData.user.handle}</div>
    </header>
    <div class="content">
      ${escapedText}
    </div>
    <footer>
      <div class="since">
        <p>${timeAgo}</p>
      </div>
      <div class="action-icons">
        <a href="/report"><i class="bi bi-flag-fill"></i></a>
        <a href="/retweet"><i class="bi bi-repeat"></i></a>
        <a href="/like"><i class="bi bi-heart-fill"></i></a>
      </div>
    </footer>
  </article>`      
  )};
  
  //loops through data, creates tweet with fuction call and renders to page
  const renderTweets = function(tweets) {
    tweets.forEach( (entry) => {
    const $tweet = createTweetElement(entry);
    $('#tweets-container').append($tweet)});
  }
  
  //function to allow me to pass a variable to loadtweets without having it fire immediately on "success" of .post
  const singleTweet = () => (loadTweets("one"));

  //loads all tweets at start of page, or just most recent after a new one is posted
  const loadTweets = ((amount) => {
    $.get('http://localhost:8080/tweets', (tweets) => { 
      if (amount === "all") {
        renderTweets(tweets);
      } else if (amount === "one") {
        const recentTweet = tweets[tweets.length - 1];
        console.log("tweets length: " + tweets.length);
        console.dir("load tweets: " + recentTweet.content.text);
       renderTweets([recentTweet]);
      }
    })
  });

  loadTweets("all");
});