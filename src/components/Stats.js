import React from 'react';
import { Card, Statistic, Icon } from 'semantic-ui-react';

const Stats = () => {

  return (
    <div>
      <Card color='blue'>
        <Card.Content>
          <Card.Header>
          <Icon name='chart pie' /> Stats
          </Card.Header>
        </Card.Content>
        <Card.Content>
        <Statistic.Group horizontal>
          <Statistic>
            <Statistic.Value>17/898</Statistic.Value>
            <Statistic.Label>Pokémon Caught</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>3</Statistic.Value>
            <Statistic.Label>Badges Earned</Statistic.Label>
          </Statistic>
        </Statistic.Group>
        </Card.Content>
      </Card>
    </div>
  )
};

export default Stats;
