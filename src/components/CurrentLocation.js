import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LocationPokemon from './LocationPokemon';
import { Card, Icon, Item, Loader, Label, List } from 'semantic-ui-react';
import vermilion from '../images/vermilion.png';
import thunderbadge from '../images/thunderbadge.png';

const CurrentLocation = () => {
  const [locationData, setLocationData] = useState([]);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/location-area/vermilion-city-area/");
        setLocationData(response);
      } catch (err) {
        console.log(err);
      }
    };
    getLocation();
  }, [])

  // format the location name
  const formatText = (text) => {
    const removeHyphens = text.replace(/-/g, ' ')
    .split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
    return removeHyphens;
  };

  let pokemonEncounters;
  if (locationData.length !== 0) {
    pokemonEncounters = locationData.data.pokemon_encounters.slice(11, 14);
  };

  return (
    <Card color='blue'>
      <Card.Content>
        <Card.Header>
        <Icon name='globe' /> Current Location
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Item.Group divided>
          <Item>
            <Item.Image size='tiny' rounded src={vermilion} />
            {(locationData && locationData?.data?.location?.name)
              ?
              <Item.Content>
                <Item.Header>
                  {formatText(locationData.data.location.name)}
                </Item.Header>
                <Item.Meta>
                  A southern city that is bathed in orange by the setting sun.
                </Item.Meta>
                <Item.Description>
                  <Label as='a' color='yellow' size='mini' image>
                    <img alt='thunder badge' src={thunderbadge} />
                    Thunder Badge
                  </Label>
                </Item.Description>
              </Item.Content>
              :
              <Loader size='mini'>Fetching Location Data...</Loader>
            }
          </Item>
          <Item>
            <Item.Content>
              <Item.Description>
              <Icon name='exclamation' size='small' />{locationData?.data?.pokemon_encounters?.length} species of Pokémon can be found here, including:
                <List>
                  {pokemonEncounters && pokemonEncounters?.map((p, index) =>
                    <List.Item key={index}>
                      <LocationPokemon url={p.pokemon.url}></LocationPokemon>
                    </List.Item>
                  )}
                </List>
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Card.Content>
    </Card>
  )
};

export default CurrentLocation;
