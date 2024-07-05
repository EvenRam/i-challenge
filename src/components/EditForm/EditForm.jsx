import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function EditForm(props) {

  const dispatch = useDispatch();
  const history = useHistory();


  const editChallenge = useSelector((store) => store.editChallenge)



  function handleNameChange(event) {
    dispatch({
      type: 'EDIT_ONCHANGE',
      payload: {
        property: 'challenge_name', value: event.target.value,
      }
    })
  }


  function measurableGoalChange(event) {
    dispatch({
      type: "EDIT_ONCHANGE",
      payload: {
        property: "measureable_goal", value: event.target.value,
      }
    })
  }

  function handleNotesChange(event) {
    dispatch({
      type: "EDIT_ONCHANGE",
      payload: {
        property: "notes", value: event.target.value,
      }
    })
  }

  function handleWagerChange(event) {
    dispatch({
      type: "EDIT_ONCHANGE",
      payload: {
        property: "wager", value: event.target.value,
      }
    })
  }


  function handleDatesChange(event) {
    dispatch({
      type: "EDIT_ONCHANGE",
      payload: {
        property: "dates", value: event.target.value,
      }
    })
  }


  function handleSubmit(event) {
    event.preventDefault();

    console.log("edit challenge", editChallenge)


    // PUT REQUEST to /challenges/:id
    axios.put(`/api/challenge/${editChallenge.id}`, editChallenge)
      .then(response => {
        // clean up reducer data            
        dispatch({ type: 'EDIT_CLEAR' });

        // refresh will happen with useEffect on Home
        history.push('/user'); // back to list
      })
      .catch(error => {
        console.log('error on PUT: ', error);
      })

  };



  return (
    <>

      <h2>Edit Challlenge</h2>
      <p>About to Edit: {editChallenge.challenge_name}</p>

      {console.log('edit challenge', editChallenge)
      }
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => handleNameChange(event)}
          placeholder='Challenge Name'
          value={editChallenge.challenge_name}>
        </input>

        <input
          onChange={(event) => measurableGoalChange(event)}
          placeholder='Weekly Aim'
          value={editChallenge.measureable_goal}>
        </input>

        <input
          onChange={(event) => handleNotesChange(event)}
          placeholder='notes'
          value={editChallenge.notes}>
        </input>

        <input
          onChange={(event) => handleWagerChange(event)}
          placeholder='Wager'
          value={editChallenge.wager}>
        </input>

        <input
          onChange={(event) => handleDatesChange(event)}
          placeholder='Dates'
          value={editChallenge.dates}>
        </input>

        <input type='submit' value='Update Challenge' />

      </form>
    </>
  );
}

export default EditForm;