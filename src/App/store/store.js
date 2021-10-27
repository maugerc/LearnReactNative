import React from 'react';
import {combineReducers, createStore} from 'redux';
import Main from '../components/Main/Main';
import ProductEditor from '../components/ProductEditor/ProductEditor';
import ProductListWithSearch from '../components/ProductListWithSearch/ProductListWithSearch';
import {ADR_REST, RESOURCES_NAME} from '../config/config';

export const PRODUCTS_ACTIONS = Object.freeze({
  ADD_PRODUCTS: 'ADD_PRODUCTS',
  SAVE_PRODUCT: 'SAVE_PRODUCT',
  INIT: 'INIT',
  SET_SEARCH: 'SET_SEARCH',
});

const initialState = {
  products: [],
  filteredProducts: [],
  searchText: '',
  selectedProduct: {
    name: '',
    price: 0,
    imgSrc: '',
  },
};

let interv = undefined;
const reducerProduct = (state = initialState, action) => {
  const type = action.type.includes('@@redux/INIT')
    ? 'START_PULLING'
    : action.type;
  switch (type) {
    case PRODUCTS_ACTIONS.ADD_PRODUCTS:
      return reducerProduct(
        {
          ...state,
          products: action.values,
        },
        {type: PRODUCTS_ACTIONS.SET_SEARCH, value: state.searchText},
      );
    case PRODUCTS_ACTIONS.SAVE_PRODUCT:
      console.log(action.value);
      fetch(
        `${ADR_REST}${RESOURCES_NAME.products}${
          undefined !== action.value.id ? '/' + action.value.id : ''
        }`,
        {
          method: `${undefined !== action.value.id ? 'PUT' : 'POST'}`,
          headers: {'Content-Type': 'appplication/json'},
          body: JSON.stringify(action.value),
        },
      )
        .then(f => f.json())
        .then(a => {
          // store.dispatch({type: 'UPDATE_PRODUCT', values: a});
          store.dispatch({type: PRODUCTS_ACTIONS.INIT});
        });
      return state;
    case 'UPDATE_PRODUCT':
      let position = state.findIndex(p => p.id === action.value.id);
      if (position >= 0) {
        let products = [
          ...state.products.slice(0, position),
          action.value,
          ...state.products.slice(position + 1),
        ];
        return reducerProduct(
          {...state, products: products},
          {type: PRODUCTS_ACTIONS.SET_SEARCH, value: state.searchText},
        );
      } else {
        return reducerProduct(
          {...state, products: [...state.products, action.value]},
          {type: PRODUCTS_ACTIONS.SET_SEARCH, value: state.searchText},
        );
      }
    case PRODUCTS_ACTIONS.INIT:
      fetch(`${ADR_REST}${RESOURCES_NAME.products}`)
        .then(f => f.json())
        .then(a =>
          store.dispatch({type: PRODUCTS_ACTIONS.ADD_PRODUCTS, values: a}),
        );
      return state;
    case 'START_PULLING':
      interv = interv
        ? interv
        : setInterval(() => {
            store.dispatch({type: PRODUCTS_ACTIONS.INIT});
          }, 10000);
      return state;
    case 'STOP_PULLING':
      interv = interv ? clearInterval(interv) : null;
      return state;
    case PRODUCTS_ACTIONS.SET_SEARCH:
      let products;
      if (action.value.length === 0) {
        products = state.products;
      } else {
        products = state.products.filter(p =>
          p.name.toLocaleLowerCase().includes(action.value.toLocaleLowerCase()),
        );
      }
      return {
        ...state,
        searchText: action.value,
        filteredProducts: products,
      };
    default:
      return state;
  }
};

const initialStateNav = {
  window: <Main />,
};

const reducerNav = (state = initialStateNav, action) => {
  switch (action.type) {
    case 'SET_WINDOW':
      return {window: action.value};
    case 'GO_HOME':
      return {window: <Main />};
    case 'GO_EDITOR':
      return {window: <ProductEditor />};
    case 'GO_LIST':
      return {window: <ProductListWithSearch />};
    default:
      return state;
  }
};

export const store = createStore(
  combineReducers({datas: reducerProduct, nav: reducerNav}),
);

store.dispatch({type: PRODUCTS_ACTIONS.INIT});
