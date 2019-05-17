import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route to='/' component={SmurfList} />
          <Route to='/smurf/:id' component={Smurf} />
          <Route to='/add-smurf' component={AddSmurf} />
          <Route to='/update-smurf' component={UpdateSmurf} />
        </div>
      </Router>
    );
  }
}

export default App;
