import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  componentDidMount() {
    window.onpopstate = function(event) {
      console.log(`location: ${document.location}, state: ${event.state}`);
    };
  }
  render() {
    return (
      <div>
        <button onClick={() => window.history.pushState('v1', '', '/page1')}>
          page1
        </button>
        <button onClick={() => window.history.pushState('v2', '', '/page2')}>
          page2
        </button>        
      </div>
    );
  }
}

export default App;
