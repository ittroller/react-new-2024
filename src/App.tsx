import './App.css';
import HomePage from '@src/pages/home';
import { Provider } from 'react-redux';
import store from '@src/stores';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
