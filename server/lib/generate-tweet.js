const { generateRandomUser } = require('./util/user-helper.js');

//generates a tweet with the correct syntax
 module.exports = { generateTweet: (content) => {
    let tweet = {
      "user": generateRandomUser(),
      "content": {
        "text": content
      },
      "created_at": Date.now()
    };
    return tweet;
  }
}
