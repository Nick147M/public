import { PersonType } from '../../state/person/types';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { push } from 'connected-react-router';
import { extractId } from '../../utils'

interface PersonProps {
  person: PersonType
}

const Person: React.FC<PersonProps> = ({ person }) => {
  const dispatch = useDispatch()
  const id: number | null = extractId(person.url)

  const handlePerson = (id: number) => () => {
    dispatch(push(`/person/${id}`))
  }

  return <div onClick={handlePerson(id!)}>{person.name}</div>
}

export default Person
