const { generateRandomUser } = require('../../server/lib/util/user-helper.js');

//generates a tweet with the correct syntax
const generateTweet = (content) => {
  let tweet = {
    "user": generateRandomUser(),
    "content": {
      "text": content
    },
    "created_at": Date.now()
  };
  return tweet;
}
