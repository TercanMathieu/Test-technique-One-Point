"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveToLocalStorageMiddleware = void 0;
const saveToLocalStorageMiddleware = store => next => (action) => {
    const result = next(action);
    const state = store.getState();
    localStorage.setItem('list', JSON.stringify(state.elements));
    return result;
};
exports.saveToLocalStorageMiddleware = saveToLocalStorageMiddleware;
