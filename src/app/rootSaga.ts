
import { all } from 'redux-saga/effects'

import counterSaga from 'features/counter/counterSaga'


function* helloSaga() {
    console.log("Hello Saga")
}


export default function* rootSaga() {
    yield all([helloSaga(), counterSaga()])
}