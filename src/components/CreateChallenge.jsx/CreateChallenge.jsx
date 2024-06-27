import React, { useState }from 'react';
import { useDispatch } from 'react-redux';

const CreateChallenge = () => {

    const dispatch = useDispatch();

    let [name, setName] = useState ("")
    let [goal, setGoal] = useState ("")
    let [aim, setAim] = useState ("")
    let [wager, setWager] = useState ("")
    let [notes, setNotes] = useState ("")


const handleSubmit = (event) => {
    event.preventDefault();

}
    return(
        <>
        <h2> New Challenge Form</h2>
        <form className='form' onSubmit={handleSubmit}>
        <label htmlFor="ChallengeName">
          Challenge Name:
            <input
                type='text'
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
              </label>
        </form>
        </>
    )
}

export default CreateChallenge