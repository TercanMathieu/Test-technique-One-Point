import {
  ADD_ELEMENT,
  DELETE_ELEMENT,
  CHANGE_STATE_ELEMENT,
} from "./todoReducer";

type AddElementAction = {
  type: typeof ADD_ELEMENT;
  payload: {
    text: string;
    completed: boolean;
  };
};

type DeleteElementAction = {
  type: typeof DELETE_ELEMENT;
  payload: string;
};

type ChangeStateElementAction = {
  type: typeof CHANGE_STATE_ELEMENT;
  payload: string;
};
export type ElementActionTypes =
  | AddElementAction
  | DeleteElementAction
  | ChangeStateElementAction;
