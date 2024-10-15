export type TodoElement = {
  id: string;
  text: string;
  completed: boolean;
};

export type RootState = {
  elements: TodoElement[];
};
