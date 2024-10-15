
export const ADD_ELEMENT = 'ADD_ELEMENT';
export const DELETE_ELEMENT = 'DELETE_ELEMENT'
import { TodoList, Todo } from '../component/type';
import { Action, ElementActionTypes } from './type';
export const CHANGE_STATE_ELEMENT = 'CHANGE_STATE_ELEMENT';
let id: number = 0;


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

  const initialState: TodoList = {
    elements: loadFromLocalStorage(), 
  };
  
  export function elementReducer(state = initialState, action: ElementActionTypes): TodoList {
    switch (action.type) {
        case ADD_ELEMENT:
            return {
            elements: [
              ...state.elements,
              { id: ++id,
                text: action.payload.text,
                completed: action.payload.completed}
              ],
            };
        case DELETE_ELEMENT: 
            const elementId  = action.payload
            return {
                elements: state.elements.filter(item => item.id !== elementId)
            }
            case CHANGE_STATE_ELEMENT:
              return {
                  elements: state.elements.map(item =>
                      item.id === action.payload
                          ? { ...item, completed: !item.completed }
                          : item
                  )
              };
      default:
        return state;
    }
  }