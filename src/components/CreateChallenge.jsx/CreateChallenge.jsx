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

    // console.log("What is the name of challenge",name);
    // console.log("What is the name of goal",goal);
    // console.log("What is the name of aim",aim);
    // console.log("What is the name of wager",wager);
    // console.log("What is the name of notes",notes);





    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'FETCH_CHALLENGE',
            payload: name,goal,aim, wager,notes,
        })
        history.push('/user')
    }

    return (
        <>
            <h2> New Challenge Form</h2>
            <form className='form' onSubmit={handleSubmit}>
                <div className="name">
                    <label htmlFor="challengeName">Challenge Name:</label>
                    <input
                        type='text'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>

                <div className="form-goal">
                    <label htmlFor="goal">What is your goal and why:</label>
                    <input
                        type='text'
                        value={goal}
                        onChange={(event) => setGoal(event.target.value)}
                    />
                </div>

                <div className="aim">
                    <label htmlFor="aim">How many days do you want to work on this goal:</label>
                    <input
                        type='number'
                        value={aim}
                        onChange={(event) => setAim(event.target.value)}
                    />
                </div>

                <div className="aim">
                    <label htmlFor="wager">Wager - Enter a reward or consequence for your challenge:</label>
                    <input
                        type='text'
                        value={wager}
                        onChange={(event) => setWager(event.target.value)}
                    />
                </div>

                <div className="notes">
                    <label htmlFor="notes">Notes:</label>
                    <input
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