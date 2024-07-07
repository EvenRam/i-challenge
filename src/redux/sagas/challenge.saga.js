import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

function* fetchChallenge() {
    try {
        const challengeResponse = yield axios.get(`/api/challenge`)
        console.log("challengeResponse data", challengeResponse.data)
        yield put({ type: 'SET_CHALLENGE', payload: challengeResponse.data })
    } catch (error) {
        console.log('error with the challenge fetch request', error)
    }
}
function* addChallenge(action) {
    console.log("Inside addChallenge, payload", action.payload)
    try {
      yield axios.post("/api/challenge", action.payload);
        yield put({ type: "SET_CHALLENGE", 
        payload: {
            challenge_name: action.payload.challenge_name,
            challenger: action.payload.challenger,
            measureable_goal: action.payload.measureable_goal,
            notes: action.payload.notes,
            wager: action.payload.wager,
            start_date: action.payload.start_date,
            end_date: action.payload.end_date,


        }
    });
    } catch (error) {
        console.log('error with add challenge post request', error)
    }
}

function* deleteChallenge(action){
    try{
        console.log("action.payload.id:", action.payload.id); 

        yield axios.delete(`/api/challenge/${action.payload.id}`);
        // yield put({type: 'DELETE_CHALLENGE_WORKED',payload: action.payload.id})
        yield put({ type: 'FETCH_CHALLENGE'})
    } catch (error){
        console.log('Error with the challenge delete request', error)
    }
}

function* challengeSaga() {
    yield takeLatest('FETCH_CHALLENGE', fetchChallenge);
    yield takeLatest('ADD_CHALLENGE', addChallenge)
    yield takeLatest('DELETE_CHALLENGE', deleteChallenge)
}
export default challengeSaga