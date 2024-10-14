export const saveToLocalStorageMiddleware = store => next => action => {
  const result = next(action); 
  const state = store.getState();

  localStorage.setItem('list', JSON.stringify(state.elements));
  return result;
};