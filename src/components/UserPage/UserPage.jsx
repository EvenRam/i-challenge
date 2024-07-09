import React from 'react';
import "./UserPage.css"
//import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ChallengeList from '../ChallengeList/ChallengeList';



function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();


   //On Load, call server
   useEffect(() => {
    console.log('in useEffect')
    dispatch({type: 'FETCH_CHALLENGE'});
}, [])

 
  return (
    <>
      <div className="user-container">
        <h1 className='welcome'>Welcome, {user.first_name}!</h1>
        <h2 className='challenges-page'> Challenges</h2>
      
        <ChallengeList/>
        </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
