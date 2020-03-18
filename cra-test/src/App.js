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

// class App extends Component {
//   state = {
//     selectedName: 'mike',
//   };
//   onClick = e => {
//     const selectedName = e.currentTarget.dataset.name;
//     this.setState({ selectedName });
//   };
//   render() {
//     const { selectedName } = this.state;
//     return (
//       <div>
//         <button onClick={this.onClick} data-name="mike">mike</button>
//         <button onClick={this.onClick} data-name="john">john</button>
//         {`selectedName is ${selectedName}`}
//       </div>
//     )
//   }
// }


// 2020-03-18 UseEffect

function Module() {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  useEffect(() => {
    console.log('렌더링이 완료되었습니다!');
    console.log({
      name,
      nickname
    });
  }, [name]);

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

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
        <div>
          <Module></Module>
        </div>
      </div>
    )
  }
}

export default App;
