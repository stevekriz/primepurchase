import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './views/Layout';
import FeaturedProducts from './views/FeaturedProducts';
import SearchedProducts from './views/SearchedProducts';
import ProductDetails from './views/ProductDetails';
import NotFound from './views/NotFound';

const App = () => (
  <Layout>
    <Switch>
      <Route path='/' exact component={FeaturedProducts} />
      <Route path='/products/:id' component={ProductDetails} />
      <Route path='/products' component={SearchedProducts} />
      <Route component={NotFound} />
    </Switch>
  </Layout>
);

export default App;
