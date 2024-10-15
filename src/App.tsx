import List from "./component/list";
import { Provider } from "react-redux";
import store from "./store/index";
import React from "react";

function App() {
  return (
    <Provider store={store}>
      <List />
    </Provider>
  );
}

export default App;
