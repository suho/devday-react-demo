import React, { Component } from 'react';
import './marker.css';

class Marker extends Component {
    render() {
        let className = 'marker'
        if (this.props.selected) {
            className += ' selected'
        }
        return (
            <div className={className}>
                {this.props.title}$
            </div>
        );
    }
}

export default Marker;