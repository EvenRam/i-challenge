import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Calendar } from 'primereact/calendar';
import "./EditForm.css";



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

      <h2 className="edit-challenge">Edit Challlenge</h2>
      <p className="about-toedit">About to Edit: {editChallenge.challenge_name}</p>

      {console.log('edit challenge', editChallenge)}
      <form className=' edit-form'
       onSubmit={handleSubmit}>
<div>
        <input
        className="challengename-container"
          onChange={(event) => handleNameChange(event)}
          placeholder='Challenge Name'
          value={editChallenge.challenge_name}>
        </input>
        </div>

        <div>
        <input
          className="goal-container"
          onChange={(event) => measurableGoalChange(event)}
          placeholder='Weekly Aim'
          value={editChallenge.measureable_goal}>
        </input>
        </div>

        <div>
        <input
        className="notes-container"
          onChange={(event) => handleNotesChange(event)}
          placeholder='notes'
          value={editChallenge.notes}>
        </input>
        </div>


        <div>
        <input
          className="wager-container"
          onChange={(event) => handleWagerChange(event)}
          placeholder='Wager'
          value={editChallenge.wager}>
        </input>
        </div>

        <div className="calendar-container">
          {/* <label className="calendar-container" htmlFor="dates">Select start Date:</label> */}
          <Calendar
           placeholder='Start Date'
            value={editChallenge.sart_date}
            onChange={(event) => handleStartDate(event)}           
          />
        </div>

        <div className="calendar-container">
          {/* <label className="calendar-container" htmlFor="dates">Select End Date:</label> */}
          <Calendar
           placeholder='End Date'
            value={editChallenge.end_date}
            onChange={(event) => handleEndDate(event)}
            
          />
        </div>


        <input className="update-button" type='submit' value='Update Challenge' />

      </form>

     
    </>
  );
}

export default EditForm;