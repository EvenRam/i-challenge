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

return(

    <>
     <tr>
                    <td>{props.challenge.challenge_name}</td>
                    <td>{props.challenge.challenger}</td>
                    <td>{props.challenge.measureable_goal}</td>
                    <td>{props.challenge.notes}</td>
                    <td>{props.challenge.wager}</td>
                    <td>{props.challenge.dates}</td>
                    <td><button className='edit-button'
                    onClick={()=> handleEdit(props.challenge.id)}> Edit </button></td>
                    
                    <td> <button className='delete-button'
                    onClick={() =>handleDelete(props.challenge.id)}>
                      Delete</button></td>
                  </tr>
    </>
)
}

export default ChallengeDetail