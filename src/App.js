import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home.js'
import Home2 from './Pages/CadastroHome.js'





function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/homeCadastro" component={Home2} exact />
        
      </Switch>
    </Router>
  );
}

export default App;
