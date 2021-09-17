import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PeopleState } from '../../state/people/types'
import Person from '../Person'
import { peopleFetch, peopleSetSearch } from '../../state/people/actions'
import { AppState } from '../../store'

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
                    <input value={state.search} onChange={handleSearchTerm} />
                    <button onClick={e => fetchPage(1)}>{'Search'}</button>
                </div>
            }

            {
                state.page?.length > 0 && state.page.map((person, index) => <Person person={person} key={index} />)
            }

            {
                state.prev !== null && <button onClick={e => fetchPage(state.prev!)}>{'Prev'}</button>
            }

            {
                state.next !== null && <button onClick={e => fetchPage(state.next!)}>{'Next'}</button>
            }
        </div>
    )
}

export default People
