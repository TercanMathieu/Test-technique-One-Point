import { Todo, TodoList } from "../component/type"
import { ADD_ELEMENT, DELETE_ELEMENT, CHANGE_STATE_ELEMENT } from "./todoReducer";
export type Action = {
    type: string,
    id? :number,
    payload: Todo
}

interface AddElementAction {
    type: typeof ADD_ELEMENT;
    payload: {
      text: string;
      completed: boolean;
    };
  }
  
  interface DeleteElementAction {
    type: typeof DELETE_ELEMENT;
    payload: number; 
  }
  
  interface ChangeStateElementAction {
    type: typeof CHANGE_STATE_ELEMENT;
    payload: number; 
  }
  
  export type ElementActionTypes = AddElementAction | DeleteElementAction | ChangeStateElementAction;
  