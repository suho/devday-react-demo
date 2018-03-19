import React from 'react';
import './index.css';
import AddButton from './add-button';
import Cards from './cards';

class Content extends React.Component {

  constructor(params) {
    super(params);
    this.state = {
      cards: []
    }
  }

  addMoreCards = () => {
    const lastIndex = this.state.length;
    let newCards = [];
    for (let index = 0; index < 4; index++) {
      newCards.push({ id: lastIndex + index + 1 })
    }
    this.setState({ cards: [...this.state.cards, ...newCards] });
  }

  render() {
    return (
      <div className='content'>
        <Cards cards={this.state.cards} />
        <AddButton onClick={this.addMoreCards} />
      </div>
    );
  }
}

export default Content;