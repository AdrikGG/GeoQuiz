import './App.css';

import homePage from './pages/home';
import shapesPage from './pages/shapes';
import heatPage from './pages/heat';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={homePage} />
        <Route path="/shapes" component={shapesPage} />
        <Route path="/heat" component={heatPage} />
      </Switch>
    </div>
  );
}

export default App;
