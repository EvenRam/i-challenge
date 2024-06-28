import React from 'react';
//import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const challenges = useSelector(store => store.challengeReducer)

  console.log("what is challenges", challenges);

  const dispatch = useDispatch();
  const history = useHistory()



  const handleSubmit = (event) => {
    event.preventDefault();
    // const challengeData = {
    //   name: name,
    //   challenger: challenger,
    //   aim: aim,
    //   wager: wager,
    //   notes: notes,
    //   dates: dates,
    // }
    dispatch({
      type: 'ADD_CHALLENGE',
      payload: name
    })
    history.push("/createChallenge")
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
          <tbody>

            {/* {challenges.map(challenge => (
            <tr key= {challenge.id}>
              <td>{challenge.name}</td>
              <td>{challenge.challenger}</td>
              <td>{challenge.goal}</td>
              <td>{challenge.notes}</td>
              <td>{challenge.wager}</td>
              <td>{challenge.dates}</td>
            </tr>
          ))} */}
          </tbody>

        </table>
        <button onClick={handleSubmit} type='submit'> Create Challenge</button>
        {/* <LogOutButton className="btn" />  */}
      </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
