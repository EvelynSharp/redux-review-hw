import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';
import { updateFilters } from '../actions/filters';
import { deleteGenre } from '../actions/genres';

const Genre = ({ name, dispatch, isActive }) => {
  const color = isActive ? { color: 'green'} : {};
  //nice way to work with disabled: pick object by condition, then destructureing object in the element

  return (
    <div>
      <Button
        basic
        onClick={ () => dispatch(updateFilters(name))}
        {...color}
      >
        {name}
      </Button>
      <Icon
        corner
        color="red"
        name="remove"
        onClick={ () => dispatch(deleteGenre(name))}
      />
    </div>
  )

}

//connect pass all props to child,
//connect needs to know the "name" props
//can pass in a second parameter, which is all the props of this component
const mapStateToProps = (state, props) => {
  return { isActive: state.filters.includes(props.name) }
}


export default connect(mapStateToProps)(Genre);
