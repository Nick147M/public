import { render, screen } from '@testing-library/react';

import { PersonType } from '../../state/person/types';
import Person from './Person'

describe('<Person />', () => {
  test('should render the person\'s name', () => {
    const person: PersonType = {
      name: 'Jek Tono Porkins',
      height: 1,
      mass: 1,
      hair_color: '',
      skin_color: '',
      eye_color: '',
      birth_year: '',
      gender: '',
      homeworld: '',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: new Date(),
      edited: new Date(),
      url: ''
    }

    render(<Person person={person} />)

    screen.getByText(person.name)
  })
});
