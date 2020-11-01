import React from 'react';
import FeedCard from './components/FeedCard';
import CurrentLocation from './components/CurrentLocation';
import Stats from './components/Stats';
import Team from './components/Team';
import { Grid, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

function App() {

  return (
    <div className="App">
      <Grid centered container stackable columns={3}>
        <Grid.Row relaxed>
          <Grid.Column width={12}>
            <Header as='h1'><span className="dashboard-header">Pokémon Dashboard</span></Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row relaxed>
          <Grid.Column width={4}>
            <FeedCard></FeedCard>
          </Grid.Column>
          <Grid.Column width={4}>
            <CurrentLocation></CurrentLocation>
            <Stats></Stats>
          </Grid.Column>
          <Grid.Column width={4}>
            <Team></Team>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
