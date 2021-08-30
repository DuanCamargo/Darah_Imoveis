import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home.js'
import CadastroUser from './Pages/CadastroHome.js'






function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/homeCadastro" component={CadastroUser} exact />
        
      </Switch>
    </Router>
  );
}

export default App;
