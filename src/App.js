import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import WidgetLarge from './components/widgets/widgetLarge/WidgetLarge';
import Form from './components/form/Form';
import Snippet from './components/widgets/widgetLarge/snippet/Snippet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div className="container">
          <h1 className="heading-title">Widget Generator</h1>
        </div>

        <WidgetLarge description="This is a description" />

        <Snippet title="Widget Title" description="This is a description" link="https://www.funeralzone.co.uk/" image="" />

        <Form />

        <Footer />
      </div>
    );
  }
}

export default App;
