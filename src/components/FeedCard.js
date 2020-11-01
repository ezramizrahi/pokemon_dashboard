import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { dates } from '../dates';
import CatchLocation from './CatchLocation';
import { Card, Feed, Label, Icon } from 'semantic-ui-react';

const FeedCard = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        let myPokemon = [];
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=5&offset=6");
        let urls = response.data.results;
        myPokemon = await Promise.all(urls.map(async(url) => {
          return await axios.get(url.url);
        }));
        setPokemonData(myPokemon);
      } catch (err) {
        console.log(err);
      }
    };
    getPokemon();
  }, [])

  // helper functions
  const getRandomItemFromArray = (array) => {
    return array[Math.floor((Math.random()*array.length))];
  };
  const evolved = ['wartortle', 'blastoise'];

  return (
    <Card color='blue'>
      <Card.Content>
        <Card.Header>
          <Icon name='newspaper' /> Recent Activity
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Feed>
        {pokemonData && pokemonData?.map((p, index) =>
          <Feed.Event key={p.data.id}>
            <Feed.Label image={p.data.sprites.front_shiny} />
            <Feed.Content>
              <Feed.Date content={getRandomItemFromArray(dates)} />
              {evolved.includes(p.data.name)
                ?
                <React.Fragment>
                  <Feed.Summary>
                    Your Pokémon evolved!
                    <Label as='a' color='teal' size='mini'>
                      <Icon name='info circle' /> Learn More
                    </Label>
                  </Feed.Summary>
                </React.Fragment>
                :
                <React.Fragment>
                  <Feed.Summary>
                    You caught a {p.data.name}!
                  </Feed.Summary>
                  <CatchLocation id={p.data.id}></CatchLocation>
                </React.Fragment>
              }
              <Feed.Meta>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>
        )}
        </Feed>
      </Card.Content>
    </Card>
  )
};

export default FeedCard;
