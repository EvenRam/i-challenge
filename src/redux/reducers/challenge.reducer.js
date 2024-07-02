
const challengeReducer = (state = [],action) => {
    if (action.type === "SET_CHALLENGE") {
        const newChallenge = action.payload
        console.log('New Challenge', newChallenge)
        return newChallenge
      }
      return state;
}

  
export default challengeReducer
