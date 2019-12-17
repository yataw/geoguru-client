import React from 'react';
import './App.css';
import utils from './utils';

class App extends React.Component {
  constructor(props) {
    super(props);

    utils.addScrollToAll();
  }

  render() {
    return ( <div></div> )
  }
}

export default App;
