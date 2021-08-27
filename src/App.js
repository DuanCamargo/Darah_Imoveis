import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/index.js'
import FormUser from './Components/FormUser/index'
import FormImov from './Components/FormImov/index'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path ="/cadastroUser" component={FormUser} exact/>
        <Route path="/anuncioImovel" component={FormImov} exact/>
      </Switch>
    </Router>
  );
}

export default App;
