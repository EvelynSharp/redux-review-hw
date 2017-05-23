const filters = ( state = [], action ) => {
  switch ( action.type ){
    case 'UPDATE_FILTERS':
      let { name } = action;
      if (state.includes(name))
        return state.filter( f => f !== name )
      return [...state, name]
    default:
      return state;
  }
}

export default filters;
