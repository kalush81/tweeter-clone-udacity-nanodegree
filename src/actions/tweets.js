export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const ADD_NEW_TWEET = 'ADD_NEW_TWEET';

export function receiveTweets(tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets
    }
}

export function addNewTweet(tweet) {
    return {
        type: ADD_NEW_TWEET,
        tweet
    }
}