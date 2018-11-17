import React, { PureComponent } from 'react';
import Header from './components/header/Header';
import Card from './components/card/Card';

import './styles/main.css';

class App extends PureComponent {

  state = { 
    isFlipped: Array(16).fill(false),
    shuffledCard: App.duplicateCard().sort(() => Math.random() - 0.5)
  };

  static duplicateCard = () => {
    return [0,1,2,3,4,5,6,7].reduce((preValue, current, index, array) => {
      return preValue.concat([current, current])
    },[]);
  };

  handleClick = event => {
    event.preventDefault();
    const cardId = event.target.id;
    const newFlipps = this.state.isFlipped.slice();
    newFlipps[cardId] = !newFlipps[cardId];

    this.setState(prevState => ({ 
      isFlipped: newFlipps
    }));
  };

  render() {
    console.log(this.state.shuffledCard);
    return (
     <div>
       <Header />
       <div className="grid-container">
          {
            this.state.shuffledCard.map((cardNumber, index) => 
              <Card
                key={index} 
                id={index} 
                cardNumber={cardNumber} 
                isFlipped={this.state.isFlipped[index]} 
                handleClick={this.handleClick}     
              />
            )
          }
        </div>
     </div>
    );
  }
}

export default App;
