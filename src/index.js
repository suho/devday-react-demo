import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
