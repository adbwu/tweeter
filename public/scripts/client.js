/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function () {
  $(function() {
    $('#post-tweet-form').submit(function (event){
      event.preventDefault();
      const text = decodeURI($( this ).serialize());
      console.log(text);
      if (decodeURI(text).length === 5) {
        console.log("true");
        alert( "Tweets cannot be empty!" );
      } else if (decodeURI(text).length > 146) {
        console.log("too long");
        console.log(decodeURI(text));
        alert( "Tweets must be 140 characters or less!" );
      } else {
          $.ajax({
          type: "POST",
          url: "/tweets",
          data: text
        });
      }
    });
  });

  //creates DOM for tweet with provided data
  const createTweetElement = (tweetData) => {
    //converts millisecond time to "time ago" format
    const ago = moment(tweetData.created_at).fromNow();
    return $(`<article class="tweet">
    <header>
      <div class="user">
        <img class="profilepic" src=${tweetData.user.avatars}/>
        <div class="username">${tweetData.user.name}</div>
      </div>
      <div class="usertag">${tweetData.user.handle}</div>
    </header>
    <div class="content">
      ${tweetData.content.text}
    </div>
    <footer>
      <div class="since">
        ${ago}
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
  const renderTweets = function(tweets, callback) {
    console.log(tweets);
    tweets.forEach( (entry) => {
    const $tweet = createTweetElement(entry);
    $('#tweets-container').append($tweet)});
  }


  const loadTweets = (() => {
    $.get('http://localhost:8080/tweets', (tweets) => { 
    console.log(tweets);
    renderTweets(tweets);
  })});
  
  loadTweets();
});