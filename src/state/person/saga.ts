import { SagaIterator } from 'redux-saga'
import { all, call, fork, put, select, takeEvery, CallEffect } from 'redux-saga/effects'
import { PERSON_FETCH, PersonFetchAction, PersonResponse, FilmResponse, SpeciesResponse } from './types'
import { personFetchSuccess } from './actions'
import { fetchPerson, fetchFilm, fetchSpecies } from '../../api'
import { PersonType } from '../../state/person/types';
import { AppState } from '../../store';
import { extractId } from '../../utils';
import _ from 'lodash';


function* startFetchWatcher(): SagaIterator {
    yield takeEvery(PERSON_FETCH, startFetchWorker)
}

function* startFetchWorker(payload: PersonFetchAction) {
    const { id } = payload

    try {
        const personResponse: PersonResponse = yield fetchPerson<PersonResponse>(id);
        const { films, species } = personResponse;

        const person: PersonType = {
            name: personResponse.name,
            height: personResponse.height,
            mass: personResponse.mass,
            hair_color: personResponse.hair_color,
            skin_color: personResponse.skin_color,
            eye_color: personResponse.eye_color,
            birth_year: personResponse.birth_year,
            gender: personResponse.gender,
            homeworld: personResponse.homeworld,
            films: [],
            species: [],
            vehicles: personResponse.vehicles,
            starships: personResponse.starships,
            created: personResponse.created,
            edited: personResponse.edited,
            url: personResponse.url
        }

        // Films
        const filmCalls: CallEffect[] = []
        for (let f = 0; f < films.length; f++) {
            let callEffect: CallEffect = call(fetchFilm, extractId(films[f])!);
            filmCalls.push(callEffect);
        }

        const filmsResponses: Array<FilmResponse> = yield all(filmCalls)
        filmsResponses.forEach(resp => {
            person.films.push({ ...resp });
        })


        // Species
        const specCalls: CallEffect[] = []
        for (let s = 0; s < species.length; s++) {
            let callEffect: CallEffect = call(fetchSpecies, extractId(species[s])!);
            specCalls.push(callEffect);
        }

        const specResponses: Array<SpeciesResponse> = yield all(specCalls)
        specResponses.forEach(resp => {
            person.species.push({ ...resp });
        })

        yield put(personFetchSuccess(person));
    } catch (err: any) {
        console.log(err);
    }
}


export default function* StartPeopleSagas() {
    yield all([fork(startFetchWatcher)])
}
