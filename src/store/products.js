const products = {
  state: {
    bestsellers: [],
    coffee: [],
    goods: [],
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
  },
  getters: {
    getBestsellers(state) {
      return state.bestsellers;
    },
    getCoffee(state) {
      return state.coffee;
    },
    getGoods(state) {
      return state.goods;
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
