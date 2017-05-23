import React from 'react';
import SongForm from './SongForm';
import SongLists from './SongLists';
import { Divider } from 'semantic-ui-react';

const Songs = () => (
  <div>
    <SongForm />
    <Divider />
    <SongLists />

  </div>
)

export default Songs;
