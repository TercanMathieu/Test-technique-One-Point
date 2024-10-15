import { Middleware } from "redux";
import { RootState } from "../component/type";


export const saveToLocalStorageMiddleware: Middleware<{},RootState> = store => next => (action: any) => {
    const result = next(action);
    const state = store.getState();

    localStorage.setItem('list', JSON.stringify(state.elements));
    return result;
  };
