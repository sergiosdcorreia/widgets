import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import WidgetLarge from './components/widgets/widgetLarge/WidgetLarge';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      image: "",
      link: ""
    }
  }

  render() {
    return (
      <div className="App">
        <Header />

        <div className="container">
          <h1 className="heading-title">Widget Generator</h1>
        </div>

        <WidgetLarge title={this.state.title} description={this.state.description} link={this.state.link} image={this.state.image}/>

        <Footer />
      </div>
    );
  }
}

export default App;
