import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Calendar } from 'primereact/calendar';



function EditForm(props) {

  const dispatch = useDispatch();
  const history = useHistory();

  const editChallenge = useSelector((store) => store.editChallenge)

  // Format dates
 

  function handleNameChange(event) {
    dispatch({
      type: 'EDIT_ONCHANGE',
      payload: {
        property: 'challenge_name', 
        value: event.target.value,
      }
    })
  }

 
  function measurableGoalChange(event) {
    dispatch({
      type: "EDIT_ONCHANGE",
      payload: {
        property: "measureable_goal", 
        value: event.target.value,
      }
    })
  }

  function handleNotesChange(event) {
    dispatch({
      type: "EDIT_ONCHANGE",
      payload: {
        property: "notes", 
        value: event.target.value,
      }
    })
  }

  function handleWagerChange(event) {
    dispatch({
      type: "EDIT_ONCHANGE",
      payload: {
        property: "wager", 
        value: event.target.value,
      }
    })
  }

  function handleStartDate(event) {
    dispatch({
      type: 'EDIT_ONCHANGE',
      payload: {
        property: 'start_date',
        value: event.value,      
      },
    });
  }

  function handleEndDate(event) {
    dispatch({
      type: 'EDIT_ONCHANGE',
      payload: {
        property: 'end_date',
        value: event.value,       
      },
    });
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

      {console.log('edit challenge', editChallenge)}
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

        <div className="calendar-container">
          <label htmlFor="dates">Select start Date:</label>
          <Calendar
            value={editChallenge.sart_date}
            onChange={(event) => handleStartDate(event)}           
          />
        </div>

        <div className="calendar-container">
          <label htmlFor="dates">Select End Date:</label>
          <Calendar
            value={editChallenge.end_date}
            onChange={(event) => handleEndDate(event)}
            
          />
        </div>

        {console.log("editChallenge.selectedDates",editChallenge.start_date)}

        <input type='submit' value='Update Challenge' />

      </form>

     
    </>
  );
}

export default EditForm;