import React from 'react';
import Layout from './Layout/Layout';
import Router from './Routes/Router';
import Store from './Redux/Store';
import { Provider } from 'react-redux';
const App = () => {
  return (
    <div>
      <Provider store={Store}>
      <Layout>
        <Router/>
      </Layout>
      </Provider>
    </div>
  );
};

export default App;