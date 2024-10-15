"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHANGE_STATE_ELEMENT = exports.DELETE_ELEMENT = exports.ADD_ELEMENT = void 0;
exports.elementReducer = elementReducer;
exports.ADD_ELEMENT = 'ADD_ELEMENT';
exports.DELETE_ELEMENT = 'DELETE_ELEMENT';
exports.CHANGE_STATE_ELEMENT = 'CHANGE_STATE_ELEMENT';
let id = 0;
const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('list');
        let array = serializedState ? JSON.parse(serializedState) : [];
        if (array.length > 0) {
            id = array[array.length - 1].id;
        }
        return array;
    }
    catch (e) {
        console.warn("Can't load data", e);
        return [];
    }
};
const initialState = {
    elements: loadFromLocalStorage(),
};
function elementReducer(state = initialState, action) {
    switch (action.type) {
        case exports.ADD_ELEMENT:
            return {
                elements: [
                    ...state.elements,
                    { id: ++id,
                        text: action.payload.text,
                        completed: action.payload.completed }
                ],
            };
        case exports.DELETE_ELEMENT:
            const elementId = action.payload;
            return {
                elements: state.elements.filter(item => item.id !== elementId)
            };
        case exports.CHANGE_STATE_ELEMENT:
            return {
                elements: state.elements.map(item => item.id === action.payload
                    ? Object.assign(Object.assign({}, item), { completed: !item.completed }) : item)
            };
        default:
            return state;
    }
}
