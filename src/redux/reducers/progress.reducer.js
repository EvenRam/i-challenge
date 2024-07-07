
// reducers/completionReducer.js

const initialState = {
    completionStatus: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false
    }
  };
  
  const completionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_COMPLETION_STATUS':
        return {
          ...state,
          completionStatus: action.payload
        };
      case 'TOGGLE_DAY_COMPLETION':
        return {
          ...state,
          completionStatus: {
            ...state.completionStatus,
            [action.day]: !state.completionStatus[action.day]
          }
        };
      default:
        return state;
    }
  };
  
  export default completionReducer;
  