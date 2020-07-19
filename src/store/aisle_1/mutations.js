
export function ships (state, data){ state.ships = data }
export function characters (state, data){ state.characters = data }
export function planets (state, data){ state.planets = array_chunks(data.results,3)}
export function myUrl (state, data){ state.url = data }
const array_chunks = (array, chunk_size) => Array(Math.ceil(array.length / chunk_size)).fill().map((_, index) => index * chunk_size).map(begin => array.slice(begin, begin + chunk_size));
// function theChunk(arr){
//   const array_chunks = (array, chunk_size) => Array(Math.ceil(array.length / chunk_size)).fill().map((_, index) => index * chunk_size).map(begin => array.slice(begin, begin + chunk_size));
//   return array_chunks(arr,3)
// }

