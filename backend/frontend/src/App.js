import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ScreenHome from './Components/ScreenHome';
import ScreenIdentity from './Components/ScreenIdentity';
import ScreenGame from './Components/ScreenGame';
import ScreenWish from './Components/ScreenWish';
import ScreenOtherUser from './Components/ScreenOtherUser';
import ScreenteamAdmin from './Components/ScreenteamAdmin';
import ScreenteamView from './Components/ScreenteamView';
import ScreenUser from './Components/ScreenUser';
import ScreenMatchPage from './Components/ScreenMatchPage';

function App() {
  return (

    <Router>
      <Switch>
        <Route component={ScreenHome} path="/" exact />
        <Route component={ScreenIdentity} path="/screenidentity" exact />
        <Route component={ScreenGame} path="/screengame" exact />
        <Route component={ScreenWish} path="/screenwish" exact />
        <Route component={ScreenMatchPage} path="/screenmatchpage" exact />
        <Route component={ScreenOtherUser} path="/screenotheruser" exact />
        <Route component={ScreenteamAdmin} path="/screenteamadmin" exact />
        <Route component={ScreenteamView} path="/screenteamview" exact />
        <Route component={ScreenUser} path="/screenuser" exact />
      </Switch>
    </Router>

  );
}

export default App;
