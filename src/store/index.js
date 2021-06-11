import { createStore } from 'vuex'
import about from './about'
import movie from './movie'

export default createStore({
  modules: {
    about,
    movie //movie dispatch의 movie
  }
})