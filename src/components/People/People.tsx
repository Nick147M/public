import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PeopleState } from '../../state/people/types'
import Person from '../Person'
import { peopleFetch, peopleSetSearch } from '../../state/people/actions'
import { AppState } from '../../store'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function People() {
    const dispatch = useDispatch()
    const state: PeopleState = useSelector((state: AppState) => state.people)

    const fetchPage = (pageNum: number) => {
        dispatch(peopleFetch(pageNum));
    }

    const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(peopleSetSearch(e.target.value));
    }

    React.useEffect(() => {
        fetchPage(state.pageNum);
    }, [])

    return (
        <div>
            {
                state.loading && <h4><i>{'Loading...'}</i></h4>
            }

            {
                !state.loading && <div>
                    <TextField size='small' value={state.search} onChange={handleSearchTerm} />
                    <Button variant='contained' onClick={e => fetchPage(1)}>{'Search'}</Button>
                </div>
            }

            {
                state.page?.length > 0 &&

                <TableContainer component={Paper}>
                    <Table size='small' sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Gender</TableCell>
                                <TableCell align="right">Birth Year</TableCell>
                                <TableCell align="right">Homeworld</TableCell>
                                <TableCell align="right">Height</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {state.page.map((person, index) => <Person person={person} key={index} />)}
                        </TableBody>
                    </Table>
                </TableContainer>
            }

            {
                state.prev !== null && <Button variant='contained' onClick={e => fetchPage(state.prev!)}>{'Prev'}</Button>
            }

            {
                state.next !== null && <Button variant='contained' onClick={e => fetchPage(state.next!)}>{'Next'}</Button>
            }
        </div>
    )
}

export default People
