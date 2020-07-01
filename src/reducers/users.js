const { RECEIVE_USERS } = require("../actions/users")

export default function users (state = [], action)  {
    switch(action.type) {
        case RECEIVE_USERS:
            return action.users
        default:
            return state    
    }
}