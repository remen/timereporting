import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    const dates = [26, 27, 28];
    for (var i = 1; i <= 31; i++) {
      dates.push(i);
    }
    dates.push(1);

    const divs = dates.map(date => (<div>{date}</div>));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div className="Calendar">
          {divs}
        </div>
      </div>
    );
  }
}

export default App;
