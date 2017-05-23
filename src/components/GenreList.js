import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import Genre from './Genre';

const GenreList = ({ dispatch, genres }) => (
  <Grid columns={16}>
    <Grid.Row>
      { genres.map( (genre, index) => {
          return(
            <Grid.Column key={index} mobile={16} computer={2} tablet={4} >
              <Genre name={genre} />
            </Grid.Column>
          )
        })
      }
    </Grid.Row>
  </Grid>
)

const mapStateToProps = (state) => {
  return { genres: state.genres }
}

export default connect(mapStateToProps)(GenreList);
