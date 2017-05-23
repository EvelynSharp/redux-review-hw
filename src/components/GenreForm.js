import React from 'react';
import { connect } from 'react-redux';
import { addGenre } from '../actions/genres';
import { Form, Button } from 'semantic-ui-react';

//for performance reason, object should be created outside of render
//we also have not decided clientside API
//make action folder to make the objects so it wont create each time render is called



class GenreForm extends React.Component {
  state={ name: ''};

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let {
      state: { name },
      props: { dispatch },
    } = this;
    // let { name } = this.state;
    //let {dispatch} = this.props
    dispatch(addGenre(name));
    this.setState({name:''});

  }

  render() {

    return (
      <Form onSubmit = {this.handleSubmit}>
        <Form.Input
          onChange={this.handleChange}
          value={this.state.name}
          label="Genre"
        />
        <Button basic color="pink">Add Genre</Button>
      </Form>
    )
  }
}

export default connect()(GenreForm);
