import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const CreateChallenge = () => {

    const dispatch = useDispatch();
    const history = useHistory()


    const challenge = useSelector(store => store.challengeReducer)

    let [name, setName] = useState("")
    let [goal, setGoal] = useState("")
    let [aim, setAim] = useState("")
    let [wager, setWager] = useState("")
    let [notes, setNotes] = useState("")


    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'FETCH_CHALLENGE',
            payload: name,goal, aim, wager,notes,
        })
        history.push('/user')
    }

    return (
        <>
            <h2> New Challenge Form</h2>
            <form className='form' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="challengeName">Challenge Name:</label>
                    <input
                        id="challengeName"
                        type='text'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="goal">What is your goal and why:</label>
                    <input
                        id="goal"
                        type='text'
                        value={goal}
                        onChange={(event) => setGoal(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="aim">How many days do you want to work on this goal:</label>
                    <input
                        id="aim"
                        type='number'
                        value={aim}
                        onChange={(event) => setAim(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="wager">Wager - Enter a reward or consequence for your challenge:</label>
                    <input
                        id="wager"
                        type='text'
                        value={wager}
                        onChange={(event) => setWager(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="notes">Notes:</label>
                    <input
                        id="notes"
                        type='text'
                        value={notes}
                        onChange={(event) => setNotes(event.target.value)}
                    />
                </div>

                <button onClick={handleSubmit}
                type="submit">Submit</button>
            </form>

        </>
    )
}

export default CreateChallenge