const songs = ( state = [], action) => {
  switch (action.type) {
    case 'ADD_SONG':
      return [...state, action.song]
    case 'DELETE_SONG':
      return state.filter( s => s.name !== action.name )
    default:
      return state;
  }
}

export default songs;
