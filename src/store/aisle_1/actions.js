import axios from "axios";

export async function theShips ({ commit }){
  axios
    .get(process.env.VUE_APP_MY_API+'starships/')
      .then(response => {
        commit('ships', response.data)
      })
    .catch(err=>{
      console.log('err: ', err)
    })
}

export async function theCharacters ({ commit }){
  axios
    .get(process.env.VUE_APP_MY_API+'people/')
      .then(response => {
        console.log(response.data.results)
        commit('characters', response.data)
      })
    .catch(err=>{
      console.log('err: ', err)
    })
}


export async function thePlanets ({ commit }){
  axios
    .get(process.env.VUE_APP_MY_API+'planets/')
      .then(response => {
        commit('planets', response.data)
      })
    .catch(err=>{
      console.log('err: ', err)
    })

}

