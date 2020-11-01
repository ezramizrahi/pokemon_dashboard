import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { pokemonTeam } from '../pokemonteam';
import { Card, Dropdown, Icon, Item, Label } from 'semantic-ui-react';

const Team = () => {
  const [selectedData, setSelectedData] = useState([]);
  const [pokemonName, setPokemonName] = useState(pokemonTeam[0].value);
  console.log(selectedData);

  useEffect(() => {
    const getSelectedData = async (pokemonName) => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        setSelectedData(response);
      } catch (err) {
        console.log(err);
      }
    };
    getSelectedData(pokemonName);
  }, [pokemonName]);

  const handleOnChange = (e, data) => {
    setPokemonName(data.value);
  };

  return (
    <Card color='blue'>
      <Card.Content>
        <Card.Header>
          <Icon name='group' /> 手持ちポケモン
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Item.Group divided>
          <Item>
            <Item.Content>
              <Dropdown
                placeholder='Select Pokémon'
                fluid
                search
                selection
                defaultValue={pokemonTeam[0].value}
                options={pokemonTeam}
                onChange={handleOnChange}
              />
            </Item.Content>
          </Item>
          {(selectedData && selectedData?.data)
            ?
            <React.Fragment>
              <Item>
                <Item.Image size='tiny' rounded src={selectedData?.data?.sprites?.front_shiny} />
                  <Item.Content>
                    <Item.Header>
                      {selectedData?.data?.name.toUpperCase()}
                    </Item.Header>
                    <Item.Description>
                      <Label as='a' color='grey' size='mini'>
                        Type(s): {selectedData?.data?.types?.map((t, index) =>
                          <span key={index}>{t.type.name} </span>
                        )}
                      </Label>
                    </Item.Description>
                  </Item.Content>
                </Item>
              <Item>
                <Item.Content>
                  <Item.Description>
                    <Label as='a' color='green' size='mini'>
                      {selectedData?.data?.stats[0]?.stat?.name}
                      <Label.Detail>
                        {selectedData?.data?.stats[0]?.base_stat}
                      </Label.Detail>
                    </Label>
                    <Label as='a' color='green' size='mini'>
                      {selectedData?.data?.stats[1]?.stat?.name}
                      <Label.Detail>
                        {selectedData?.data?.stats[1]?.base_stat}
                      </Label.Detail>
                    </Label>
                    <Label as='a' color='green' size='mini'>
                      {selectedData?.data?.stats[2]?.stat?.name}
                      <Label.Detail>
                        {selectedData?.data?.stats[2]?.base_stat}
                      </Label.Detail>
                    </Label>
                    <Label as='a' color='green' size='mini'>
                      {selectedData?.data?.stats[5]?.stat?.name}
                      <Label.Detail>
                        {selectedData?.data?.stats[5]?.base_stat}
                      </Label.Detail>
                    </Label>
                  </Item.Description>
                </Item.Content>
              </Item>
            </React.Fragment>
            :
            'hi'
        }
        </Item.Group>
      </Card.Content>
    </Card>
  )
};

export default Team;
