import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

function ChallengeProgress() {



    const challenges = useSelector(store => store.challengeReducer)

    console.log("challenge reducer", challenges)

    const dispatch = useDispatch();

    const [complete, setComplete] = useState({
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false
    });

    // Function to toggle completion status for a specific day
    const handleCompleteToggle = (day) => {
        setComplete({
            ...complete,
            [day]: !complete[day]
        });
    }

    // creating a function to save the stautus of completion to redux
    const completionStatus = () => {
        dispatch({
            type: 'UPDATE_COMPLETION_STATUS',
            payload: completionStatus // Send completionStatus to Redux
        });
    }


    return (
        <>

            <h2 className="name-challenge">Challenge Progress for: {challenges.challenge_name}</h2>

            <table>
                <thead>
                    <tr>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>
                            <button className='complete-button' onClick={() => handleCompleteToggle('monday')}>
                                {complete.monday ? '✅ Complete' : 'Mark as Complete'}
                            </button>
                        </td>

                        <td>
                            <button className='complete-button' onClick={() => handleCompleteToggle('tuesday')}>
                                {complete.tuesday ? '✅ Complete' : 'Mark as Complete'}
                            </button>
                        </td>

                        <td>
                            <button className='complete-button' onClick={() => handleCompleteToggle('wednesday')}>
                                {complete.wednesday ? '✅ Complete' : 'Mark as Complete'}
                            </button>
                        </td>

                        <td>
                            <button className='complete-button' onClick={() => handleCompleteToggle('thursday')}>
                                {complete.thursday ? '✅ Complete' : 'Mark as Complete'}
                            </button>
                        </td>

                        <td>
                            <button className='complete-button' onClick={() => handleCompleteToggle('friday')}>
                                {complete.friday ? '✅ Complete' : 'Mark as Complete'}
                            </button>
                        </td>

                        <td>
                            <button className='complete-button' onClick={() => handleCompleteToggle('saturday')}>
                                {complete.saturday ? '✅ Complete' : 'Mark as Complete'}
                            </button>
                        </td>

                        <td>
                            <button className='complete-button' onClick={() => handleCompleteToggle('sunday')}>
                                {complete.sunday ? '✅ Complete' : 'Mark as Complete'}
                            </button>
                        </td>
                    </tr>
                    </tbody>

                    </table>


                </>
    )
}

                export default ChallengeProgress