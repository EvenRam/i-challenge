import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from 'react';
import ChallengeDetail from '../EditForm/ChallengeDetail';

function ChallengeList(props){


    const challenges = useSelector(store => store.challengeReducer)

    const dispatch = useDispatch();
    const history = useHistory()
  
    useEffect(() => {
      dispatch({ type: "FETCH_CHALLENGE" })
    }, []);
  
    const handleSubmit = () => {
      history.push("/createChallenge")
    }
  
    
    return (
      <>
        <div className="container">
         
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
                challenges.map((challenge) => {
                    return  <ChallengeDetail key= {challenge.id} challenge= {challenge}/>
             
                })}
            </tbody>
  
          </table>
          <button className='create-button' 
          onClick={handleSubmit} type='button'> 
          Create Challenge</button>
        </div>
      </>
    );

}
export default ChallengeList