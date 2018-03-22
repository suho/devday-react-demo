import React from 'react';
import './index.css';
import AddButton from './add-button';
import Cards from './cards';

class Content extends React.Component {

  constructor(params) {
    super(params);
    this.state = {
      cards: [{}, {}, {}, {}]
    }
  }

  addMoreCards = () => {
    const newCards = [{}, {}, {}, {}];
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