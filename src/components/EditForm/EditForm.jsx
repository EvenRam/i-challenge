import { useDispatch, useSelector } from 'react-redux';
import {useEffect } from 'react';
import axios from 'axios';


function EditForm(props) {

  const dispatch = useDispatch();
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
      type: "measureable_goal",
      payload: {
        property: "measureable_goal", value: event.target.value,
      }
    })
  }

  function handleNotesChange(event) {
    dispatch({
      type: "notes",
      payload: {
        property: "notes", value: event.target.value,
      }
    })
  }

  function handleWagerChange(event) {
    dispatch({
      type: "wager",
      payload: {
        property: "wager", value: event.target.value,
      }
    })
  }


  function handleDatesChange(event) {
    dispatch({
      type: "dates",
      payload: {
        property: "dates", value: event.target.value,
      }
    })
  }


  function handleSubmit(event) {
    event.preventDefault();

    // PUT REQUEST to /challenges/:id
    axios.put(`/challenge/${editChallenge.id}`, editChallenge)
      .then(response => {
        // clean up reducer data            
        dispatch({ type: 'EDIT_CLEAR' });

        // refresh will happen with useEffect on Home
        history.push('/'); // back to list
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