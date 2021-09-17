const PERSON_FETCH = "/person/FETCH";
const PERSON_FETCH_SUCCESS = "/people/FETCH_SUCCESS";

export { PERSON_FETCH, PERSON_FETCH_SUCCESS }

type uri = string;

export interface PersonResponse {
    name: string;
    height: number;
    mass: number;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: uri;
    films: uri[];
    species: uri[];
    vehicles: uri[];
    starships: uri[];
    created: Date;
    edited: Date;
    url: uri;
}

export interface FilmResponse {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: uri[];
    planets: uri[];
    starships: uri[];
    vehicles: uri[];
    species: uri[];
    created: Date;
    edited: Date;
    url: uri;
}

export interface SpeciesResponse {
    name: string,
    classification: string,
    designation: string,
    average_height: string,
    skin_colors: string,
    hair_colors: string,
    eye_colors: string,
    average_lifespan: string,
    homeworld: uri,
    language: string,
    people: uri[],
    films: uri[],
    created: Date,
    edited: Date,
    url: uri
}

export interface FilmType {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: uri[];
    planets: uri[];
    starships: uri[];
    vehicles: uri[];
    species: uri[];
    created: Date;
    edited: Date;
    url: uri;
}

export interface SpeciesType {
    name: string,
    classification: string,
    designation: string,
    average_height: string,
    skin_colors: string,
    hair_colors: string,
    eye_colors: string,
    average_lifespan: string,
    homeworld: uri,
    language: string,
    people: uri[],
    films: uri[],
    created: Date,
    edited: Date,
    url: uri
}

export interface PersonType {
    name: string;
    height: number;
    mass: number;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: uri;
    films: FilmType[];
    species: SpeciesType[];
    vehicles: uri[];
    starships: uri[];
    created: Date;
    edited: Date;
    url: uri;
}

export interface PersonState {
    person: PersonType | null;
    loading: boolean;
}

export interface PersonFetchAction {
    type: typeof PERSON_FETCH;
    id: number;
}

export interface PersonFetchSuccessAction {
    type: typeof PERSON_FETCH_SUCCESS;
    person: PersonType;
}

export type Actions = PersonFetchAction | PersonFetchSuccessAction;