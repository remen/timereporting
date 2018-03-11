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

    const divs = dates.map(date => (<div className="Calendar-day">{date}</div>));

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
        <div className="Calendar-day">Mon</div>
        <div className="Calendar-day">Tue</div>
        <div className="Calendar-day">Wed</div>
        <div className="Calendar-day">Thu</div>
        <div className="Calendar-day">Fri</div>
        <div className="Calendar-day">Sat</div>
        <div className="Calendar-day">Sun</div>
        {divs}
        </div>
      </div>
    );
  }
}

export default App;
