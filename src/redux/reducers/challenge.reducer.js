const challengeReducer = (state = [],action) => {
    switch(action.type){
        case'SET_CHALLENGE':
            return action.payload;
        default:
            return state;
    }
}

export default challengeReducer;