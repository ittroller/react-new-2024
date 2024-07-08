import './App.css';
import HomePage from '@src/pages/home';
import { Provider } from 'react-redux';
import store, { history } from '@src/stores';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
