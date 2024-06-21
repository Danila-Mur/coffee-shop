import Vue from 'vue';
import Vuex from 'vuex';

import links from '@/store/links';
import products from '@/store/products';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    links,
    products,
  },
});

export default store;
