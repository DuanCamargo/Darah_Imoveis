import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home.js'
import CadastroUser from './Pages/CadastroHome.js'
import Anuncios from './Pages/Anuncios.js'





function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/homeCadastro" component={CadastroUser} exact />
        <Route path="/anuncios" component={Anuncios} exact />
        
      </Switch>
    </Router>
  );
}

export default App;
