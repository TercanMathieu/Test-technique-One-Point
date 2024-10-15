import Liste from './component/liste';
import { Provider } from 'react-redux';
import store from './store/index'
import React from 'react';

function App() { 
  return (
    <Provider store={store}>
      <Liste/>
    </Provider>

  );
};

export default App;
