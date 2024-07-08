import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Calendar } from 'primereact/calendar';



const CreateChallenge = () => {

    const dispatch = useDispatch();
    const history = useHistory()


    const challenge = useSelector(store => store.challengeReducer)

    let [name, setName] = useState("")
    let [aim, setAim] = useState("")
    let [wager, setWager] = useState("")
    let [notes, setNotes] = useState("")
    let [startDate, setStartDate] = useState(null);
    let [endDate, setEndDate] = useState(null);


    const handleSubmit = (event) => {
        event.preventDefault();

        
        dispatch({
            type: 'ADD_CHALLENGE',
            payload: {
                challenge_name: name,
                measureable_goal: aim,
                // challenger: "self",
                wager: wager,
                notes: notes,
                start_date: startDate,
                end_date: endDate
            }

        })

        history.push('/user')
    }
    // Start date: January 1, 2023 // End date: December 31, 2023 ];
    return (
        <>
            <h2> New Challenge Form</h2>
            <form className='form' onSubmit={handleSubmit}>

                <div className="name">
                    <label htmlFor="challengeName">Challenge Name:</label>
                    <input
                        type='text'
                        id="challengeName"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>


                <div className="aim">
                    <label htmlFor="aim">How many days do you want to work on this goal:</label>
                    <input
                        id="aim"
                        type='number'
                        value={aim}
                        onChange={(event) => setAim(event.target.value)}
                    />
                </div>

                <div className="wager">
                    <label htmlFor="wager">Wager - Enter a reward or consequence for your challenge:</label>
                    <input
                        id="wager"
                        type='text'
                        value={wager}
                        onChange={(event) => setWager(event.target.value)}
                    />
                </div>

                <div className="notes">
                    <label htmlFor="notes">Notes:</label>
                    <input
                        id="notes"
                        type='text'
                        value={notes}
                        onChange={(event) => setNotes(event.target.value)}
                    />
                </div>

                <div className="card flex justify-content-center">
                    <label htmlFor="notes">Start Date:</label>
                    <Calendar value={startDate} onChange={(event) => setStartDate(event.value)}
                    dateFormat="MM d, yy" />
                </div>

                <div className="card flex justify-content-center">
                    <label htmlFor="notes">End Date:</label>

                    <Calendar value={endDate} onChange={(event) => setEndDate(event.value)} />
                </div>

                <button onClick={handleSubmit}>Submit</button>
            </form>

        </>
    )
}

export default CreateChallenge