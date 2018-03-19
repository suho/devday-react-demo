import React from 'react';
import './index.css';

class Cards extends React.Component {
  render() {
    return (
      <div className='cards'>
        {this.props.cards.map(card => {
          return <div className='card'></div>
        })}
      </div>
    );
  }
}

export default Cards;