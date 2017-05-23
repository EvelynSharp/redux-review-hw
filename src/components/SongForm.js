import React from 'react';
import { connect } from 'react-redux';
import { addSong } from '../actions/songs';
import { Form, Select, Button } from 'semantic-ui-react';

class SongForm extends React.Component {
  defaultData = { name: '', genre: '' }
  state = { ...this.defaultData }


  handleSubmit = (e) => {
    e.preventDefault();
    let { dispatch } = this.props;
    let { name, genre } = this.state;
    let song = { name, genre }
    dispatch(addSong(song));
    this.setState({ ...this.defaultData });
  }

  options = () => {
    return this.props.genres.map( g => {
      return { key: g, text: g, value: g }
    });
  }

  render() {
    let { name, genre } = this.state;
    let { genres } = this.props;
    return (
      <div>
       { genres.length ?
         <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Name"
            value={name}
            onChange={ e => this.setState({ name: e.target.value }) }
            id="name"
          />
          <Form.Field
            control={Select}
            label="Genre"
            value={genre}
            onChange={ (e, data) => this.setState({ genre: data.value }) }
            id="genre"
            options={this.options()}
          />
         { genre && name && <Button basic>Add Song</Button> }
       </Form>
       :
       <span>Add a Genre</span>
     }
   </div>
  )
 }
}

const mapStateToProps = (state) => {
  return { genres: state.genres }
}

export default connect(mapStateToProps)(SongForm);
