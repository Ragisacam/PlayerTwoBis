import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//routes
import ScreenHome from './Components/ScreenHome';
import ScreenIdentity from './Components/ScreenIdentity';
import ScreenGame from './Components/ScreenGame';
import ScreenWish from './Components/ScreenWish';
import ScreenOtherUser from './Components/ScreenOtherUser';
import ScreenteamAdmin from './Components/ScreenteamAdmin';
import ScreenteamView from './Components/ScreenteamView';
import ScreenUser from './Components/ScreenUser';
import ScreenMatchPage from './Components/ScreenMatchPage';
<<<<<<< HEAD
import Header from './Components/header';
import Footer from './Components/footer'
=======
 
>>>>>>> f6f7c3ecf9154645356755f3c8c6acd391b0d385

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route component={ScreenHome} path="/" exact/>
        <Route component={ScreenIdentity} path="/screenidentity"  />
        <Route component={ScreenGame} path="/screengame"  />
        <Route component={ScreenWish} path="/screenwish"  />
        <Route component={ScreenMatchPage} path="/screenmatchpage"  />
        <Route component={ScreenOtherUser} path="/screenotheruser"  />
        <Route component={ScreenteamAdmin} path="/screenteamadmin"  />
        <Route component={ScreenteamView} path="/screenteamview"  />
        <Route component={ScreenUser} path="/screenuser"  />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
