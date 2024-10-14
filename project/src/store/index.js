import { createStore, applyMiddleware } from 'redux';
import { saveToLocalStorageMiddleware } from '../middleware/localeStorageMiddleware'; 
import { elementReducer } from './todoReducer';

export default createStore(
  elementReducer,
  applyMiddleware(saveToLocalStorageMiddleware) 
);