import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import homepage from './Components/homepage';
import ScreenIdentity from './Components/ScreenIdentity';
import ScreenGame from './Components/ScreenGame';
import ScreenWish from './Components/ScreenWish';
import ScreenOtherUser from './Components/ScreenOtherUser';
import ScreenteamAdmin from './Components/ScreenteamAdmin';
import ScreenteamView from './Components/ScreenteamView';
import userpage from './Components/userpage';

function App() {
  return (

    <Router>
      <Switch>
        <Route component={homepage} path="/" exact />
        <Route component={ScreenIdentity} path="/screenidentity" exact />
        <Route component={ScreenGame} path="/screengame" exact />
        <Route component={ScreenWish} path="/screenwish" exact />
        <Route component={ScreenOtherUser} path="/screenotheruser" exact />
        <Route component={ScreenteamAdmin} path="/screenteamadmin" exact />
        <Route component={ScreenteamView} path="/screenteamview" exact />
        <Route component={userpage} path="/userpage" exact />
      </Switch>
    </Router>

  );
}

export default App;
