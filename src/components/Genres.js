import React from 'react';
import { Divider } from 'semantic-ui-react';
import GenreForm from './GenreForm';
import GenreList from './GenreList';

// extra layer, can be an HOC - higher order component
//handle what you need to do when user first load the data
//for example interacting with server

const Genres = () => (
  <div>
    <GenreForm />
    <Divider />
    <GenreList />
  </div>
)

export default Genres;
