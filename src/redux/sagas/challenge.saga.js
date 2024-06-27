import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

function* fetchChallenge (){
    try{
        const challenge = yield axios.get(`/api/challenge`)
        yield put({type: 'SET_CHALLENGE', payload: challenge.data})
    } catch(error){
        console.log('error with the shelf get request', error)
    }
}

function* challengeSaga(){
    yield takeLatest('fetch_challenge',fetchChallenge);
}

export default challengeSaga