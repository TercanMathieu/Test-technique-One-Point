
import { Middleware } from 'redux';
import { AnyAction } from 'redux';


export const saveToLocalStorageMiddleware: Middleware<{}> = store => next => (action: any) => { // a changer le any
  const result = next(action); 
  const state = store.getState();

  localStorage.setItem('list', JSON.stringify(state.elements));
  return result;
};