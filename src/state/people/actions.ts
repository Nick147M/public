import { PersonType } from '../../state/person/types';
import { PeopleFetchAction, PeopleFetchSuccessAction, PeopleSetSearchAction, PEOPLE_FETCH, PEOPLE_FETCH_SUCCESS, PEOPLE_SET_SEARCH } from './types';

export const peopleFetch = (
    pageNum: number,
): PeopleFetchAction => {
    return {
        type: PEOPLE_FETCH,
        pageNum,
    }
}

export const peopleFetchSuccess = (
    page: PersonType[],
    prev: number | null,
    next: number | null,
): PeopleFetchSuccessAction => {
    return {
        type: PEOPLE_FETCH_SUCCESS,
        page,
        prev,
        next,
    }
}

export const peopleSetSearch = (
    search: string,
): PeopleSetSearchAction => {
    return {
        type: PEOPLE_SET_SEARCH,
        search,
    }
}