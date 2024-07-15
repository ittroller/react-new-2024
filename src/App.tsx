import './App.css';
import { Provider } from 'react-redux';
import store from '@src/stores';

import { router } from '@src/routers';
import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  );
}

export default App;
