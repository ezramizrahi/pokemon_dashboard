import React from 'react';
import renderer from 'react-test-renderer';
import LocationPokemon from './LocationPokemon';

describe('LocationPokemon Component', () => {
  it('renders loading message if props are empty', () => {
    const props = {};
    const tree = renderer
      .create(<LocationPokemon {...props}></LocationPokemon>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
