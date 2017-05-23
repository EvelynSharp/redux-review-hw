export const addSong = (song) => {
  return {type:'ADD_SONG', song}
}

export const removeSong = (name) => {
  return {type:'DELETE_SONG', name}
}
