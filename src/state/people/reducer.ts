import { PeopleState, Actions, PEOPLE_FETCH, PEOPLE_FETCH_SUCCESS, PEOPLE_SET_SEARCH } from './types';
import produce from 'immer';
import _ from 'lodash';

const initialState: PeopleState = {
    page: [],
    pageNum: 1,
    next: null,
    prev: null,
    search: '',
    loading: false,
}

const reducer = (
    state: PeopleState = initialState,
    action: Actions
) => {
    return produce(state, draft => {
        if (action.type === PEOPLE_FETCH) {
            draft.page = [];
            draft.pageNum = action.pageNum;
            draft.next = null;
            draft.prev = null;
            draft.loading = true;

        } else if (action.type === PEOPLE_FETCH_SUCCESS) {
            draft.page = action.page;
            draft.prev = action.prev;
            draft.next = action.next;
            draft.loading = false;

        } else if (action.type === PEOPLE_SET_SEARCH) {
            draft.search = action.search;

        }
    })
}

export default reducer;