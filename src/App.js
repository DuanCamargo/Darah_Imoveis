import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
<<<<<<< HEAD
import Home from './pages/index.js'
import FormUser from './Components/FormUser/index'
import FormImov from './Components/FormImov/index'
=======
import Home from './Pages/Home.js'
import Home2 from './Pages/CadastroHome.js'




>>>>>>> 4aeae2b608d623ac25241b330907f9e1842d3e40

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
<<<<<<< HEAD
        <Route path ="/cadastroUser" component={FormUser} exact/>
        <Route path="/anuncioImovel" component={FormImov} exact/>
=======
        <Route path="/homeCadastro" component={Home2} exact />
        
>>>>>>> 4aeae2b608d623ac25241b330907f9e1842d3e40
      </Switch>
    </Router>
  );
}

export default App;
