import { all, call } from 'redux-saga/effects'
import peopleSaga from './state/people/saga'
import pesonSaga from './state/person/saga'

const sagas = [
    call(peopleSaga),
    call(pesonSaga),
]

export default function* rootSaga() {
    yield all(sagas)
}
