
const challengeReducer = (state = [],action) => {
    if (action.type === "SET_CHALLENGE") {
        console.log('action.payload', action.payload)
        const newChallenge = action.payload
        return newChallenge

      }
      return state;
}

  
export default challengeReducer
