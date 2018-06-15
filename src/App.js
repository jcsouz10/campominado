import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
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
        status: false
      }

      ],
      itemSquare: [],
    }
  }

  startGame = () => {
    for (let i = 0; i < this.state.objects.length; i++) {
      let randomItems = this.state.objects[Math.floor(Math.random() * this.state.objects.length)];
      this.state.itemSquare.push(randomItems)
    }


  }

  teste = () =>{
    const {itemSquare} = this.state;

    this.setState({
      itemSquare: this.state.itemSquare[0].status = false ? true : false
    })

   console.log(this.state.itemSquare[0].status)
  }


  render() {
    return (
      <div>
        <div id="game">
        <button onClick={this.teste}> teste </button>

          <button onClick={this.startGame}> START GAME </button>
          <div id="board">
            {this.state.objects.map((item, index) => <Square itemSquare={this.state.itemSquare} index={index} board={this.state.board} />)}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
