import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import List from './List';

const SongLists = ({ filters }) => (
  <Grid columns={16}>
    <Grid.Row>
      { filters.map( f => <List key={f} genre={f} /> )}
    </Grid.Row>
  </Grid>
)

const mapStateToProps = (state) => {
  return { filters: state.filters }
}

export default connect(mapStateToProps)(SongLists);
