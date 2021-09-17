import React from 'react';
import { SpeciesType } from '../../state/person/types';


const Species: React.FC<{ species: SpeciesType }> = ({ species }) => {

    return (
        <>
            <div>{species.name}</div>
        </>
    )
}

export default Species
