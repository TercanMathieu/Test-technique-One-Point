export type TodoElement = {
  id: number;
  text: string;
  completed: boolean;
};

export type RootState = {
  elements: TodoElement[];
};
