import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square.js';
import Componente from './Componente.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      position: Array(18).fill(null),
      objects: [{
        item: "bomb",
        status: false
      }, {
        item: "bomb",
        status: false
      }, {
        item: "bomb",
        status: false
      },
      {
        item: "bomb",
        status: false
      },
      {
        item: "field",
        status: false
      },
      {
        item: "field",
        status: false
      },
      {
        item: "field",
        status: false
      },
      {
        item: "field",
        status: false
      },
      {
        item: "field",
        status: false
      },
      {
        item: "bomb",
        status: false
      }, {
        item: "bomb",
        status: false
      }, {
        item: "bomb",
        status: false
      },
      {
        item: "bomb",
        status: false
      },
      {
        item: "field",
        status: false
      },
      {
        item: "field",
        status: false
      },
      {
        item: "field",
        status: false
      },
      {
        item: "field",
        status: false
      },
      {
        item: "field",
        status: 'Tudobem'
      }

      ],
      status: []
    }
  }

  startGame = () => {
    const statusElements = this.state.objects.map(i => i.status);
    this.setState({
      status: statusElements
    })
  }


  render() {
    return (
      <div>
        <div id="game">
          <Componente objects={this.state.objects} />
          <button onClick={this.startGame}> START GAME </button>
          <div id="board">
            {this.state.position.map((item, index) => <Square objects={this.state.objects} status={this.state.status} index={index}>
              {props => (<span>{props}</span>)}
            </Square>)}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
