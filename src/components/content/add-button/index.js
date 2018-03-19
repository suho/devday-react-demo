import React from 'react';
import './index.css';

class AddButton extends React.Component {

  onClick = () => {
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  render() {
    return (
      <div className='add-button-com'>
        <button className='add-button' onClick={this.onClick}>Add More</button>
      </div>
    );
  }
}

export default AddButton;