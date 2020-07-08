import { saveLikeToggle, saveTweet } from "../utils/api";
import { hideLoading, showLoading } from "react-redux-loading";

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

export function handleAddTweet(tweet, replyingTo) {
    
  return (dispatch, getState) => {
    const { authedUser } = getState();
    
    dispatch(showLoading);

    return saveTweet({
      text: tweet,
      author: authedUser,
      replyingTo,
    })
      .then((tweet) => {
          console.log('respond tweet: ',tweet)
        dispatch(addNewTweet(tweet));
      })
      .then(() => {
        dispatch(hideLoading);
      })
      .catch((e) => {
        console.warn("Error in handleAddTweet: ", e);
        alert("There was an error adding the tweet. Try again.");
      });
  };
}
