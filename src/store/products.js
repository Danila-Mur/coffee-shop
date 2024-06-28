const products = {
  state: {
    bestsellers: [],
    coffee: [],
    goods: [],
    searchValue: '',
    sortValue: '',
  },
  mutations: {
    setCoffeeData(state, data) {
      state.coffee = data;
    },
    setBestsellersData(state, data) {
      state.bestsellers = data;
    },
    setGoodsData(state, data) {
      state.goods = data;
    },
    setSearchValue(state, value) {
      state.searchValue = value;
    },
    setSortValue(state, value) {
      state.sortValue = value;
    },
  },
  actions: {
    setCoffeeData({ commit }, data) {
      commit('setCoffeeData', data);
    },
    setBestsellersData({ commit }, data) {
      commit('setBestsellersData', data);
    },
    setGoodsData({ commit }, data) {
      commit('setGoodsData', data);
    },
    setSearchValue({ commit }, value) {
      commit('setSearchValue', value);
    },
    setSortValue({ commit }, value) {
      commit('setSortValue', value);
    },
  },
  getters: {
    getBestsellers(state) {
      return state.bestsellers;
    },
    getCoffee(state) {
      // return state.coffee
      //   .filter((item) => item.name.toLowerCase().includes(state.searchValue.toLowerCase()))
      //   .filter((item) => item.country.toLowerCase().includes(state.sortValue.toLowerCase()));
      return state.coffee;
    },
    getGoods(state) {
      return state.goods;
    },
    getSearchValue(state) {
      return state.searchValue;
    },
    getCoffeeById(state) {
      return (id) => {
        return state.coffee.find((card) => card.id === +id);
      };
    },
    getGoodsById(state) {
      return (id) => {
        return state.goods.find((card) => card.id === +id);
      };
    },
  },
};

export default products;
