import { saveLikeToggle } from "../utils/api";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const ADD_NEW_TWEET = "ADD_NEW_TWEET";
export const TOGGLE_TWEET = "TOGGLE_TWEET";

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  };
}

export function addNewTweet(tweet) {
  return {
    type: ADD_NEW_TWEET,
    tweet,
  };
}

export function toggleTweet(tweet) {
  return {
    type: TOGGLE_TWEET,
    tweet,
  };
}

export function handleToggleTweet(info) {
  return (dispatch) => {
    saveLikeToggle(info)
      .then(() => {
        dispatch(toggleTweet(info));
      })
      .catch((e) => {
        console.warn("Error in handleToggleTweet: ", e);
        alert("There was an error liking the tweet. Try again.");
      });
  };
}
