import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ChallengeProgress() {



    const challenges = useSelector(store => store.challengeReducer)

    console.log("challenge reducer", challenges)
    const dispatch = useDispatch();

    const [complete, setComplete] = useState(false);

    const handleMondayComplete = () => {
        setComplete(!complete);
        complete()
    }

    const handleTuesdayComplete = () => {
        setComplete(!complete);
        complete()
    }
    const handleWednesdayComplete = () => {
        setComplete(!complete);
        complete()
    }
    const handleThursdayComplete = () => {
        setComplete(!complete);
        complete()
    }

    const handleFridayComplete = () => {
        setComplete(!complete);
        complete()
    }
    const handleSaturdayComplete = () => {
        setComplete(!complete);
        complete()
    }

    const handleSundayComplete = () => {
        setComplete(!complete);
        complete()
    }
    return (
        <>
            {/* <h2> {challenges.challenge_name}</h2> */}
            <div>
                <h2>Challenge Progress</h2>
                <table >
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

                        <td>
                            <button className='complete-button' onClick={handleMondayComplete}>
                                {complete ? '✅ Complete' : 'Mark as Complete'}
                            </button>
                        </td>
                        <td>
                            <button className='complete-button' onClick={handleTuesdayComplete}>
                                {complete ? '✅ Complete' : 'Mark as Complete'}
                            </button>
                        </td>
                        <td>
                            <button className='complete-button' onClick={handleWednesdayComplete}>
                                {complete ? '✅ Complete' : 'Mark as Complete'}
                            </button>
                        </td>
                        <td>
                            <button className='complete-button' onClick={handleThursdayComplete}>
                                {complete ? '✅ Complete' : 'Mark as Complete'}
                            </button>
                        </td>
                        <td>
                            <button className='complete-button' onClick={handleFridayComplete}>
                                {complete ? '✅ Complete' : 'Mark as Complete'}
                            </button>
                        </td>
                        <td>
                            <button className='complete-button' onClick={handleSaturdayComplete}>
                                {complete ? '✅ Complete' : 'Mark as Complete'}
                            </button>
                        </td>
                        <td>
                            <button className='complete-button' onClick={handleSundayComplete}>
                                {complete ? '✅ Complete' : 'Mark as Complete'}
                            </button>
                        </td>
                    </thead>
                </table>
            </div>


        </>
    )
}

export default ChallengeProgress