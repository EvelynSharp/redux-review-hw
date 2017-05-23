//state should not change type once decided, or need another reducer
//only switch on action.type, other things don't work
// because every reducer get called with one dispatch action
//default is state, if not state, when all reducer get called,
//if action happens in reducer 1, reducer 2 will dump everything in the store
//return state keep it the same as before

// new Set and pass an array
//sets is not an array, so (... new set )to get the inside of a set, and turn back into an array by wrapping []
//everytime returning a brand new item to replace the existing state for this branch 

const genres = ( state = [], action) => {
  switch (action.type) {
    case 'ADD_GENRE':
      return [...new Set([...state, action.genre])]
    case 'DELETE_GENRE':
      return state.filter( g => g !== action.genre )
    default:
      return state;
  }
}

export default genres;
