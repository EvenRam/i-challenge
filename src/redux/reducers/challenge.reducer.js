
const challengeReducer = (state = [{}],action) => {
    if (action.type === "SET_CHALLENGE") {
        console.log('action.payload', action.payload)
        const newChallenge = action.payload
        return [...state, newChallenge]
      }
      else if (action.type === "DELETE_CHALLENGE"){
        console.log("action.payload",action.payload)
        return state .filter(challenge => challenge.id !== action.payload)
      }
      return state;
}

  
export default challengeReducer
