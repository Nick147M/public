import { PERSON_FETCH, PERSON_FETCH_SUCCESS, PersonState, Actions } from './types';
import produce from 'immer';

const initialState: PersonState = {
    person: null,
    loading: false,
}

const reducer = (
    state: PersonState = initialState,
    action: Actions
) => {
    return produce(state, draft => {
        if (action.type === PERSON_FETCH) {
            draft.person = null;
            draft.loading = true;

        } else if (action.type === PERSON_FETCH_SUCCESS) {
            draft.person = action.person;
            draft.loading = false;

        }
    })
}

export default reducer;