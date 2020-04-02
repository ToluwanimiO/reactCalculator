import React, { Component } from 'react';
import Nav from './components/nav';
import Panel from './components/panel'
class App extends Component {
  state = {
   }
  render() { 
    return ( 
      <React.Fragment>
        <Nav /><br /><br /><br />
        <div className="container-fluid"><Panel /></div>
      </React.Fragment>
     );
  }
}
 
export default App;