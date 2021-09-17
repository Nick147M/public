import React from 'react';
import { FilmType } from '../../state/person/types';


const Film: React.FC<{ film: FilmType }> = ({ film }) => {

    return (
        <>
            <div>{film.title}</div>
        </>
    )
}

export default Film
