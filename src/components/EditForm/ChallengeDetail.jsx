import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';


function ChallengeDetail(props){

    const dispatch = useDispatch();
    const history = useHistory();


    const handleEdit = () => {
// disptaching to the sotre, the student being edited. 
        // using SET_CHALLENGE_LIST action 
        dispatch({ type: 'SET_CHALLENGE', payload: props.challenge})

        // route to editForm 
        history.push('/edit');
    }

    const handleDelete = (challengeId)=>{
        console.log("Delete Clicked");
        console.log("challenge id is", challengeId)
        dispatch({type:"DELETE_CHALLENGE",payload:{id:challengeId}})
        }



const handleChallangeProgress = () => {
    dispatch({ type: 'SET_CHALLENGE', payload: props.challenge})

    history.push('/progress');
}

return(

    <>
     <tr>
                    <td> <button className='challenge-name'
                    onClick={() =>handleChallangeProgress(props.challenge.id)}>
                      {props.challenge.challenge_name}</button></td>

                    {/* <td>{props.challenge.challenger}</td> */}
                    <td>{props.challenge.measureable_goal}</td>
                    <td>{props.challenge.notes}</td>
                    <td>{props.challenge.wager}</td>
                    <td>{props.challenge.start_date}</td>
                    <td>{props.challenge.end_date}</td>


                    <td><button className='edit-button'
                    onClick={()=> handleEdit(props.challenge.id)}> 
                    Edit </button></td>
                    
                    <td> <button className='delete-button'
                    onClick={() =>handleDelete(props.challenge.id)}>
                      Delete</button></td>

                   

                  </tr>
    </>
)
}

export default ChallengeDetail