import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

function* fetchChallenge() {
    try {
        const challenge = yield axios.get(`/api/challenge`)
        yield put({ type: 'SET_CHALLENGE', payload: challenge.data })
    } catch (error) {
        console.log('error with the shelf get request', error)
    }
}

function* addChallenge(action) {
    try {
        yield axios.post("/api/challenge", {
            challenge_name: action.payload.name,
            challenger: action.payload.challenger,
            measureable_goal: action.payload.goal,
            notes: action.payload.notes,
            wager: action.payload.wager,
            dates: action.payload.dates,
        });
        yield put({ type: "SET_CHALLENGE" });
    } catch (error) {
        console.log('error with add challenge post request', error)
    }

}

function* challengeSaga() {
    yield takeLatest('FETCH_CHALLENGE', fetchChallenge);
    // yield takeLatest('ADD_CHALLENGE', addChallenge)
}

export default challengeSaga