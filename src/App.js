import React, { Component } from 'react';
import './App.css';
import WidgetLarge from './components/widgets/widgetLarge/WidgetLarge';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <WidgetLarge />
        <Footer />
      </div>
    );
  }
}

export default App;
