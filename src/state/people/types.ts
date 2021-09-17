import { PersonType } from '../person/types';

const PEOPLE_FETCH = "/people/FETCH";
const PEOPLE_FETCH_SUCCESS = "/people/FETCH_SUCCESS";
const PEOPLE_SET_SEARCH = "/people/PEOPLE_SET_SEARCH";

export { PEOPLE_FETCH, PEOPLE_FETCH_SUCCESS, PEOPLE_SET_SEARCH }

export interface PeopleState {
    page: PersonType[];
    pageNum: number;
    prev: number | null;
    next: number | null;
    search: string;
    loading: boolean;
}

export interface PeopleFetchAction {
    type: typeof PEOPLE_FETCH;
    pageNum: number;
}

export interface PeopleFetchSuccessAction {
    type: typeof PEOPLE_FETCH_SUCCESS;
    page: PersonType[];
    prev: number | null;
    next: number | null;
}

export interface PeopleSetSearchAction {
    type: typeof PEOPLE_SET_SEARCH;
    search: string;
}

export type Actions = PeopleFetchAction | PeopleFetchSuccessAction | PeopleSetSearchAction;