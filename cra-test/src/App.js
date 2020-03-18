// import React from 'react';
import React, { useState, useEffect } from 'react';
import './App.css';
import { Component } from 'react';

// 4-25 Right usage of calling function

// class App extends Component {
//   state = {
//     selectedName: 'mike',
//   };
//   onClick = selectedName => {
//     this.setState({ selectedName });
//   };
//   render() {
//     const { selectedName } = this.state;
//     return (
//       <div>
//         <button onClick={() => this.onClick('mike')}>mike</button>
//         <button onClick={() => this.onClick('john')}>john</button>
//         {`selectedName is ${selectedName}`}
//       </div>
//     )
//   }
// }


// 4-25(2) Mistake of using Vue style

// class App extends Component {
//   state = {
//     selectedName: 'mike',
//   };
//   onClick = selectedName => {
//     this.setState({ selectedName });
//   };
//   render() {
//     const { selectedName } = this.state;
//     return (
//       <div>
//         {/* <button onClick={this.onClick('mike')}>mike</button> */}
//         <button onClick={this.onClick('john')}>john</button>
//         {`selectedName is ${selectedName}`}
//       </div>
//     )
//   }
// }


// 4-26 DataSet

class App extends Component {
  state = {
    selectedName: 'mike',
  };
  onClick = e => {
    const selectedName = e.currentTarget.dataset.name;
    this.setState({ selectedName });
  };
  render() {
    const { selectedName } = this.state;
    return (
      <div>
        <button onClick={this.onClick} data-name="mike">mike</button>
        <button onClick={this.onClick} data-name="john">john</button>
        {`selectedName is ${selectedName}`}
      </div>
    )
  }
}

export default App;
