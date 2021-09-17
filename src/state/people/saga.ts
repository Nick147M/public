import { SagaIterator } from 'redux-saga'
import { all, fork, put, select, takeEvery } from 'redux-saga/effects'
import { PEOPLE_FETCH, PeopleFetchAction } from './types'
import { peopleFetchSuccess } from './actions'
import { fetchPeople } from '../../api'
import { PersonType } from '../../state/person/types';
import { AppState } from '../../store';

const extractPageNum = (url: string | null) => {
    if (url === null) {
        return null;
    }
    var regExpResult = /[\?|&]page=(\d+)/g.exec(url);
    return regExpResult ? parseInt(regExpResult[1]) : null;
}

interface PeopleResponse {
    count: number;
    results: PersonType[];
    next: string | null;
    previous: string | null;
}

function* startFetchWatcher(): SagaIterator {
    yield takeEvery(PEOPLE_FETCH, startFetchWorker)
}

function* startFetchWorker(payload: PeopleFetchAction) {
    const { pageNum } = payload
    const search: string = yield select((state: AppState) => state.people.search);

    try {
        const peopleResponse: PeopleResponse = yield fetchPeople<PeopleResponse>(search, pageNum);

        yield put(peopleFetchSuccess(
            peopleResponse.results,
            extractPageNum(peopleResponse.previous),
            extractPageNum(peopleResponse.next))
        );
    } catch (err: any) {
        console.log(err);
    }
}


export default function* StartPeopleSagas() {
    yield all([fork(startFetchWatcher)])
}
