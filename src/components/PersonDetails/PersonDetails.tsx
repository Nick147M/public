import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PersonState } from '../../state/person/types';
import { personFetch } from '../../state/person/actions';
import { useParams } from 'react-router-dom';
import { AppState } from '../../store';
import Film from '../Film';
import Species from '../Species';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow
} from '@mui/material';
import Paper from '@mui/material/Paper';


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

                    <TableContainer component={Paper}>
                        <Table size='small' aria-label="simple table">
                            <TableBody>
                                <TableRow>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell>{person.name}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="right">Birth Year</TableCell>
                                    <TableCell>{person.birth_year}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="right">Eye Color</TableCell>
                                    <TableCell>{person.eye_color}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="right">Gender</TableCell>
                                    <TableCell>{person.gender}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="right">Hair Color</TableCell>
                                    <TableCell>{person.hair_color}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="right">Height</TableCell>
                                    <TableCell>{person.height}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="right">Homeworld</TableCell>
                                    <TableCell>{person.homeworld}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="right">Mass</TableCell>
                                    <TableCell>{person.mass}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="right">Skin Color</TableCell>
                                    <TableCell>{person.skin_color}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="right">Starships</TableCell>
                                    <TableCell>{person.starships}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="right">Url</TableCell>
                                    <TableCell>{person.url}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="right">Vehicles</TableCell>
                                    <TableCell>{person.vehicles}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

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
