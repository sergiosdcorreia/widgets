import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import WidgetLarge from './components/widgets/widgetLarge/WidgetLarge';
import WidgetMedium from './components/widgets/widgetMedium/WidgetMedium';
import WidgetSmall from './components/widgets/widgetSmall/WidgetSmall';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: "This is the widget title",
      description: "This is the widget description",
      image: "",
      link: "https://funeralzone-widgets.herokuapp.com/"
    }
  }

  render() {
    return (
      <div className="App">
        <Header />

        <div className="container">
          <h1 className="heading-title">Widget Generator</h1>
        </div>

        <WidgetSmall title={this.state.title} description={this.state.description} link={this.state.link} image={this.state.image}/>

        <WidgetMedium title={this.state.title} description={this.state.description} link={this.state.link} image={this.state.image}/>

        <WidgetLarge title={this.state.title} description={this.state.description} link={this.state.link} image={this.state.image}/>

        <Footer />
      </div>
    );
  }
}

export default App;
