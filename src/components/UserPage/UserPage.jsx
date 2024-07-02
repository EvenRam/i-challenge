import React from 'react';
//import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from 'react';



function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const challenges = useSelector(store => store.challengeReducer)

  const dispatch = useDispatch();
  const history = useHistory()

  useEffect(() => {
    dispatch({ type: "FETCH_CHALLENGE" })
  }, []);

  const handleSubmit = () => {
    history.push("/createChallenge")
  }

  const handleDelete = (challengeId)=>{
  console.log("Delete Clicked");
  console.log("challenge id is", challengeId)
  dispatch({type:"DELETE_CHALLENGE",payload:challengeId})
  }
  return (
    <>
      <div className="container">
        <h2>Welcome, {user.username}!</h2>
        {/* <p>Your ID is: {user.id}</p> */}
        <h2> Your Current Challenges</h2>
      </div>
      <div>
        <h2>Challenge List</h2>
        <table >
          <thead>
            <tr>
              <th>Challenge Name</th>
              <th>Challenger</th>
              <th>Weekly Aim</th>
              <th>Notes</th>
              <th>Wager</th>
              <th>Dates</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          {/* {console.log("UserPAge challenges:", challenges)} */}
{/*.map needs to have an condition if it has any empty array*/}
          <tbody>
            {(challenges.length > 0 && Array.isArray(challenges)) && 
              challenges.map((challenge) => (
                <tr key={challenge.id}>
                  <td>{challenge.challenge_name}</td>
                  <td>{challenge.challenger}</td>
                  <td>{challenge.measureable_goal}</td>
                  <td>{challenge.notes}</td>
                  <td>{challenge.wager}</td>
                  <td>{challenge.dates}</td>
                  <td><button> Edit </button></td>
                  <td><button className='delete-button'
                  onClick={() =>handleDelete(challenge.id)}>
                    Delete</button></td>
                </tr>
              ))}
          </tbody>

        </table>
        <button className='create-button' 
        onClick={handleSubmit} type='button'> 
        Create Challenge</button>
        {/* <LogOutButton className="btn" />  */}
      </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
