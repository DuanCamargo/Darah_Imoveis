import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/index.js'
import FormUser from './Components/FormUser/index'
import testeHome from './Components/SectionHome/index'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path ="/cadastroUser" component={FormUser} exact/>
        <Route path="/testeHome" component={testeHome} exact />
       
      </Switch>
    </Router>
  );
}

export default App;
