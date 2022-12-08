/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  const createTweetElement = (tweetData) => {
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
        ${tweetData.created_at}
      </div>
      <div class="action-icons">
        <a href="/report"><i class="bi bi-flag-fill"></i></a>
        <a href="/retweet"><i class="bi bi-repeat"></i></a>
        <a href="/like"><i class="bi bi-heart-fill"></i></a>
      </div>
    </footer>
  </article>`      
  )};

  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  }

  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});