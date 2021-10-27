import {combineReducers, createStore} from 'redux';
import {ADR_REST, RESOURCES_NAME} from '../config/config';

export const PRODUCTS_ACTIONS = Object.freeze({
  ADD_PRODUCTS: 'ADD_PRODUCTS',
  INIT: 'INIT',
  SET_SEARCH: 'SET_SEARCH',
});

const initialState = {
  products: [],
  filteredProducts: [],
  searchText: '',
};

const reducerProduct = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_ACTIONS.ADD_PRODUCTS:
      return {
        ...state,
        products: action.values,
        filteredProducts: action.values,
      };
    case PRODUCTS_ACTIONS.INIT:
      fetch(`${ADR_REST}${RESOURCES_NAME.products}`)
        .then(f => f.json())
        .then(a =>
          store.dispatch({type: PRODUCTS_ACTIONS.ADD_PRODUCTS, values: a}),
        );
      return state;
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

const initialStateNav = {
  window: null,
};

const reducerNav = (state = initialStateNav, action) => {
  switch (action.type) {
    case 'SET_WINDOW':
      return {window: action.value};
    default:
      return state;
  }
};

export const store = createStore(
  combineReducers({datas: reducerProduct, nav: reducerNav}),
);

store.dispatch({type: PRODUCTS_ACTIONS.INIT});
