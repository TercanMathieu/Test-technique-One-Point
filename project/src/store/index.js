import { createStore} from 'redux';
import {elementReducer} from './todoReducer'

export default createStore(
      elementReducer
);

