import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Detail from './Detail';
import ItemCard from './ItemCard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/items" component={ItemCard} />
        <Route path="/items/Detail/" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
