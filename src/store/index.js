import Vue from 'vue';
import Vuex from 'vuex';

import aisle_1 from './aisle_1';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
      aisle_1
    },
  })



  // export const store = new Vuex.Store({
  //   modules: {
  //     aisle_1
  //   },

  // })



