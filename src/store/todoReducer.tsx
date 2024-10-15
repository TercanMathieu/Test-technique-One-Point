import { RootState } from "../component/type";
import { ElementActionTypes } from "./type";
import { v4 as uuidv4 } from 'uuid';
export const ADD_ELEMENT = "ADD_ELEMENT";
export const DELETE_ELEMENT = "DELETE_ELEMENT";

export const CHANGE_STATE_ELEMENT = "CHANGE_STATE_ELEMENT";

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("list");
    let array = serializedState ? JSON.parse(serializedState) : [];
    return array;
  } catch (e) {
    console.warn("Can't load data", e);
    return [];
  }
};

const initialState: RootState = {
  elements: loadFromLocalStorage(),
};

export function elementReducer(
  state = initialState,
  action: ElementAcls tionTypes,
): RootState {
  switch (action.type) {
    case ADD_ELEMENT:
      return {
        elements: [
          ...state.elements,
          {
            id: uuidv4(),
            text: action.payload.text,
            completed: action.payload.completed,
          },
        ],
      };
    case DELETE_ELEMENT:
      const elementId = action.payload;
      return {
        elements: state.elements.filter((item) => item.id !== elementId),
      };
    case CHANGE_STATE_ELEMENT:
      return {
        elements: state.elements.map((item) =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item,
      )}
    default:
      return state;
  }
}
