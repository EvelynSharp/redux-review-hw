//these are the things i can dispatch, client side API
export const addGenre = (genre) => {
  return { type: 'ADD_GENRE', genre}
}

export const deleteGenre = (genre) => {
  return {type:'DELETE_GENRE', genre}
}
