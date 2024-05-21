import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </div>
  );
};

export default App;
