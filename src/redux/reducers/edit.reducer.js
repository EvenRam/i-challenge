

// HOLD ONLY THE SINGLE STUDENT OBJECT BEING EDITED 
const editChallenge =(state = {}, action) => {
  if(action.type === "SET_CHALLENGE_LIST"){
    return action.payload
  } else if ( action.type === 'EDIT_ONCHANGE'){
    return{
      ...state, 
      [action.payload.property]: action.payload.value
    }
  }else if (action.type === "EDIT _CLEAR"){
    return {challenge_name:''}
  }
  return state;
}

export default editChallenge
