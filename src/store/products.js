const products = {
  state: {
    bestsellers: [
      {
        id: 0,
        image: 'coffee-1.jpg',
        name: 'Solimo Coffee Beans 2kg',
        price: 10.73,
      },
      {
        id: 1,
        image: 'coffee-2.jpg',
        name: 'Presto Coffee Beans 1kg',
        price: 15.99,
      },
      {
        id: 2,
        image: 'coffee-3.jpg',
        name: 'AROMISTICO Coffee 1kg',
        price: 6.99,
      },
    ],
    coffee: [
      {
        id: 0,
        image: 'coffee-1.jpg',
        name: 'Solimo Coffee Beans 2kg',
        price: 10.73,
      },
      {
        id: 1,
        image: 'coffee-1.jpg',
        name: 'Solimo Coffee Beans 2kg',
        price: 10.73,
      },
      {
        id: 2,
        image: 'coffee-2.jpg',
        name: 'Presto Coffee Beans 1kg',
        price: 15.99,
      },
      {
        id: 3,
        image: 'coffee-3.jpg',
        name: 'AROMISTICO Coffee 1kg',
        price: 6.99,
      },
      {
        id: 4,
        image: 'coffee-3.jpg',
        name: 'AROMISTICO Coffee 1kg',
        price: 6.99,
      },
    ],
    goods: [
      {
        id: 0,
        image: 'good-1.jpg',
        name: 'Solimo Coffee Beans 2kg',
        price: 10.73,
      },
      {
        id: 1,
        image: 'good-1.jpg',
        name: 'Solimo Coffee Beans 2kg',
        price: 10.73,
      },
      {
        id: 2,
        image: 'good-1.jpg',
        name: 'Presto Coffee Beans 1kg',
        price: 15.99,
      },
      {
        id: 3,
        image: 'good-1.jpg',
        name: 'AROMISTICO Coffee 1kg',
        price: 6.99,
      },
      {
        id: 4,
        image: 'good-1.jpg',
        name: 'AROMISTICO Coffee 1kg',
        price: 6.99,
      },
    ],
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
