import Liste from './component/liste.js';
import { Provider } from 'react-redux';
import store from './store/index.js'

function App() { 
  return (
    <Provider store={store}>
      <Liste/>
    </Provider>

  );
};

export default App;
