import React from 'react';
import { connect } from 'react-redux';
import { List as UiList, Header, Grid } from 'semantic-ui-react';
// list key word in semantic dupe the name of the component
//change name of the import and give it an alias

const List = ({ songs, genre }) => {
  <Grid.Column mobile={16} tablet={8} computer={4}>
    <Header as="h3"> {genre} </Header>
    <UiList divided>
      { songs.map( (song, i) => <UiList.Content> {song.name} </UiList.Content> )}
    </UiList>
  </Grid.Column>
}

const mapStateToProps = (state, props) => {
  return { songs: state.songs.filter( s => s.genre === props.genre)}
}

export default connect(mapStateToProps)(List);
