
export const ADD_ELEMENT = 'ADD_ELEMENT';
export const DELETE_ELEMENT = 'DELETE_ELEMENT'
let id = 0;


const loadFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem('list');
       let array = serializedState ? JSON.parse(serializedState) : [];
       if (array.length > 0) {
        id = array[array.length - 1].id
       }
       return array
    } catch (e) {
      console.warn("Can't load data", e);
      return [];
    }
  };

  const initialState = {
    elements: loadFromLocalStorage(), 
  };
  
  export function elementReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ELEMENT:
            return {
            elements: [...state.elements, { id: ++id, text: action.payload }],
            };
        case DELETE_ELEMENT: 
            const elementId  = action.payload
            return {
                elements: state.elements.filter(item => item.id !== elementId)
            }

      default:
        return state;
    }
  }