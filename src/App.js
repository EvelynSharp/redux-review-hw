import React from 'react';
import { Container } from 'semantic-ui-react';
import Genres from './components/Genres';
import Songs from './components/Songs';

const App = () => (
  <Container>
    <Genres />
    <Songs />
  </Container>
)

export default App;
