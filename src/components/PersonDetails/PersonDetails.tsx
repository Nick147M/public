import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PersonType, PersonState } from '../../state/person/types';
import { personFetch } from '../../state/person/actions';
import { Redirect, Route, Switch, useParams } from 'react-router-dom';
import { AppState } from '../../store';
import Film from '../Film';
import Species from '../Species';


const PersonDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch()
    const state: PersonState = useSelector((state: AppState) => state.person)

    const person = state.person;

    React.useEffect(() => {
        dispatch(personFetch(parseInt(id)));
    }, [])

    return (
        <div>
            {
                state.loading && <h4><i>{'Loading...'}</i></h4>
            }
            {
                (person !== undefined && person !== null) && <>
                    <div>{person.name}</div>
                    <div>{person.birth_year}</div>
                    <div>{person.created}</div>
                    <div>{person.edited}</div>
                    <div>{person.eye_color}</div>
                    <div>{person.gender}</div>
                    <div>{person.hair_color}</div>
                    <div>{person.height}</div>
                    <div>{person.homeworld}</div>
                    <div>{person.mass}</div>
                    <div>{person.name}</div>
                    <div>{person.skin_color}</div>
                    <div>{person.starships}</div>
                    <div>{person.url}</div>
                    <div>{person.vehicles}</div>
                    {
                        person.films.length > 0 &&
                        <div>
                            <h3>{'Films'}</h3>
                            {
                                person.films.map((film, index) => (
                                    <div key={index}>
                                        <Film film={film} />
                                    </div>
                                ))
                            }
                        </div>
                    }
                    {
                        person.species.length > 0 &&
                        <div>
                            <h3>{'Species'}</h3>
                            {
                                person.species.map((species, index) => (
                                    <div key={index}>
                                        <Species species={species} />
                                    </div>
                                ))
                            }
                        </div>
                    }
                </>
            }
        </div>
    )
}

export default PersonDetails
