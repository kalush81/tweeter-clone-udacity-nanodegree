import getInitialData from '../utils/api';
import receiveTweets from './tweets';
import receiveUsers from './users';

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({tweets, users}) => {
                dispatch(receiveTweets(tweets));
                dispatch(receiveUsers(users));
            })
    }
}