import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Nav from './components/Nav'
import SmurfList from './components/SmurfList'
import Smurf from './components/Smurf'
import AddSmurf from './components/forms/AddSmurf'
import UpdateSmurf from './components/forms/UpdateSmurf'

function App() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path='/' component={SmurfList} />
          <Route path='/smurf/:id' component={Smurf} />
          <Route path='/add-smurf' component={AddSmurf} />
          <Route path='/update-smurf' component={UpdateSmurf} />
        </div>
      </Router>
    );
}

export default App;
