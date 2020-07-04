import { RECEIVE_TWEETS } from "../actions/tweets";
import { ADD_NEW_TWEET } from "../actions/tweets";

export default function tweets (state = {}, action)  {
    switch(action.type) {
        case RECEIVE_TWEETS:
            return action.tweets
        case ADD_NEW_TWEET:
            return Object.assign(state, action.state) 
        default:
            return state    
    }
}