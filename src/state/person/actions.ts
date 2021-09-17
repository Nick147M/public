import { PersonType } from '../../state/person/types';
import { PERSON_FETCH, PERSON_FETCH_SUCCESS, PersonFetchAction, PersonFetchSuccessAction } from './types';

export const personFetch = (
    id: number,
): PersonFetchAction => {
    return {
        type: PERSON_FETCH,
        id
    }
}

export const personFetchSuccess = (
    person: PersonType,
): PersonFetchSuccessAction => {
    return {
        type: PERSON_FETCH_SUCCESS,
        person,
    }
}
