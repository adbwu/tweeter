/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1670281571000
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1670540837000
    }
  ]

  //
  const createTweetElement = (tweetData) => {
    //converts millisecond time to "time ago" format
    const ago = moment(tweetData.created_at).fromNow();
    //creates DOM for tweet with provided data
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
    data.forEach( (entry) => {
    const $tweet = createTweetElement(entry);
    $('#tweets-container').append($tweet)});
  }

  renderTweets(data);
});