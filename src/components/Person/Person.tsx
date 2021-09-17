import { PersonType } from '../../state/person/types';
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router';
import { extractId } from '../../utils'
import {
    TableCell,
    TableRow
} from '@mui/material';

interface PersonProps {
    person: PersonType
}

const Person: React.FC<PersonProps> = ({ person }) => {
    const dispatch = useDispatch()
    const id: number | null = extractId(person.url)

    const handlePerson = (id: number) => () => {
        dispatch(push(`/person/${id}`))
    }

    return <TableRow
        onClick={handlePerson(id!)}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
        <TableCell component="th" scope="row">
            {person.name}
        </TableCell>
        <TableCell align="right">{person.gender}</TableCell>
        <TableCell align="right">{person.birth_year}</TableCell>
        <TableCell align="right">{person.homeworld}</TableCell>
        <TableCell align="right">{person.height}</TableCell>
    </TableRow>
}

export default Person
