import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Calendar } from 'primereact/calendar';
import "./CreateChallenge.css"


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
            <h2 className='challenge-form'> New Challenge Form</h2>
            <form className='form' onSubmit={handleSubmit}>

                <div className="name">
                    <label htmlFor="challengeName">Challenge Name:</label>
                    <input
                    className="challengeName"
                        type='text'
                        id="challengeName"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>


                <div className="aim">
                    <label htmlFor="aim">Weekly Goal:</label>
                    <input
                        className="aim"
                        id="aim"
                        type='number'
                        value={aim}
                        onChange={(event) => setAim(event.target.value)}
                    />
                </div>

                <div className="wager">
                    <label htmlFor="wager">Wager:</label>
                    <input
                    className="wager"
                        id="wager"
                        type='text'
                        value={wager}
                        onChange={(event) => setWager(event.target.value)}
                    />
                </div>

                <div className="notes">
                    <label htmlFor="notes">Notes:</label>
                    <input
                    className="notes"
                        id="notes"
                        type='text'
                        value={notes}
                        onChange={(event) => setNotes(event.target.value)}
                    />
                </div>

                <div className="card-calendar">
                    <label 
                    className="start-calendar"
                    htmlFor="notes">Start Date:</label>
                    
                    <Calendar value={startDate} onChange={(event) => setStartDate(event.value)}
                     />
                </div>

                <div className="second-calendar">
                    <label 
                    className="end-calendar" htmlFor="notes">End Date:</label>

                    <Calendar value={endDate} onChange={(event) => setEndDate(event.value)} />
                </div>

                <button onClick={handleSubmit}>Submit</button>
            </form>

        </>
    )
}

export default CreateChallenge