import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home.js'
import CadastroUser from './Pages/CadastroHome.js'
import Anuncios from './Pages/Anuncios.js'
import Login2 from './Pages/Login.js'
import CadastroImovel from './Pages/CadastroImovel.js'
import TelaImovDetalhado from './Pages/ImovDetalhado';
import CadastroImovel2 from './Pages/CadastroImovel2.js'
import { UsuarioLogadoProvider } from './Context/UsuarioLogado';

function App() {
  return (
    <UsuarioLogadoProvider>
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/homeCadastro" component={CadastroUser} exact />
        <Route path="/anuncios" component={Anuncios} exact />
        <Route path="/login" component={Login2} exact />
        <Route path="/imovel" component={CadastroImovel} exact />
        <Route path="/CadImovel" component={CadastroImovel2} exact />
        <Route path="/imovelDetalhado" component={TelaImovDetalhado}/>

      </Switch>
    </Router>
    </UsuarioLogadoProvider>
  );
}

export default App;
