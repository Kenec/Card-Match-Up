import React, { Component } from 'react';
import Header from './components/header/Header';
import Card from './components/card/Card';

import './styles/main.css';

class App extends Component {
  render() {
    return (
     <div>
       <Header />
       <div className="grid-container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
     </div>
    );
  }
}

export default App;
