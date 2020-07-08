import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_NEW_TWEET } from "../actions/tweets";

export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return { ...state, ...action.tweets };
    case ADD_NEW_TWEET:
      return Object.assign(state, action.state);
    case TOGGLE_TWEET:
        console.log('action', action.tweet.id)
        const {id, authedUser, hasLiked} = action.tweet
      return {
        ...state,
        [id]: {
          ...state[id],
          likes:
            hasLiked === true
              ? state[id].likes.filter((uid) => uid !== authedUser)
              : state[id].likes.concat([authedUser]),
        },
          
      };
    default:
      return state;
  }
}
