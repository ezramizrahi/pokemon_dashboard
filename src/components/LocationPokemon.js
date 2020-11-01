import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Label, Loader } from 'semantic-ui-react';

const LocationPokemon = ( props ) => {
  const url = props.url;
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getPokemon = async (url) => {
      try {
        const response = await axios.get(url);
        setPokemon(response);
      } catch (err) {
        console.log(err);
      }
    };
    getPokemon(url);
  }, [url])

  return (
    <div>
      {(pokemon && pokemon?.data)
        ?
        <Label as='a' color='blue' size='mini' image>
          <img alt={pokemon.data.name} src={pokemon.data.sprites.front_shiny} />
          {pokemon.data.name}
          <Label.Detail>
            Type(s): {pokemon.data.types.map((t, index) =>
              <span key={index}>{t.type.name} </span>
            )}
          </Label.Detail>
        </Label>
        :
        <Loader size='mini'>Fetching Location Pokémon Info...</Loader>
      }
    </div>
  )
};

export default LocationPokemon;
