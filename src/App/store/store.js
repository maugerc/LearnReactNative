const initialState = {
  products: [],
  filteredProducts: [],
  searchText: '',
};

const PRODUCTS_ACTIONS = Object.freeze({
  ADD_PRODUCTS: 'ADD_PRODUCTS',
  INIT: 'INIT',
  SET_SEARCH: 'SET_SEARCH',
});

const reducerProduct = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_ACTIONS.ADD_PRODUCTS:
      return {
        ...state,
        products: action.values,
        filteredProducts: action.values,
      };
    case PRODUCTS_ACTIONS.SET_SEARCH:
      return {
        ...state,
        searchText: action.value,
        filteredProducts: state.products.filter(p =>
          p.name.toLocaleLowerCase().includes(action.value.toLocaleLowerCase()),
        ),
      };
    default:
      return state;
  }
};

let state = reducerProduct(undefined, {
  type: PRODUCTS_ACTIONS.ADD_PRODUCTS,

  values: [
    {id: 0, name: 'au', prix: '', img: ''},
    {id: 2, name: 'ox', prix: '', img: ''},
    {id: 1, name: 'ua', prix: '', img: ''},
  ],
});

console.log(state);

state = reducerProduct(state, {
  type: PRODUCTS_ACTIONS.SET_SEARCH,
  value: 'u',
});

console.log(state);
