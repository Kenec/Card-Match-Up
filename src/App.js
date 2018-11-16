import React, { Component } from 'react';
import Header from './components/header/Header';
import Card from './components/card/Card';

import './styles/main.css';

class App extends Component {

  state = { 
    isFlipped: Array(16).fill(false)
  }

  handleClick = event => {
    event.preventDefault();
    const cardId = event.target.id;
    const newFlipps = this.state.isFlipped.slice();
    newFlipps[cardId] = !newFlipps[cardId];

    this.setState(prevState => ({ 
      isFlipped: newFlipps
    }));
  }

  render() {
    return (
     <div>
       <Header />
       <div className="grid-container">
          <Card id={0} isFlipped={this.state.isFlipped[0]} handleClick={this.handleClick} />
          <Card id={1} isFlipped={this.state.isFlipped[1]} handleClick={this.handleClick} />
          
        </div>
     </div>
    );
  }
}

export default App;
