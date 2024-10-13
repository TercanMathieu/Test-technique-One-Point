
let id = 0
const initialState = {
    elements: [],
};
export const ADD_ELEMENT = 'ADD_ELEMENT';

export function elementReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_ELEMENT:
            return { 
                ...state,
                elements: [...state.elements, action.payload, ++id],
            };
        default:
            return state;
    }
};

