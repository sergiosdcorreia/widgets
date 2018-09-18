import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Snippet from './components/snippet/Snippet';
//import WidgetLarge from './components/widgets/widgetLarge/WidgetLarge';
//import WidgetMedium from './components/widgets/widgetMedium/WidgetMedium';
import WidgetSmall from './components/widgets/widgetSmall/WidgetSmall';
//import WidgetList from './components/widgets/widgetList/WidgetList';

class App extends Component {

    constructor(props) {
        super(props);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleLinkChange = this.handleLinkChange.bind(this);
        this.state = {
            title: "This is the widget title",
            description: "This is the widget description",
            image: "",
            link: "https://funeralzone-widgets.herokuapp.com/"
        }
    }

handleTitleChange(title) {
    this.setState({
        title: title
    });
}

handleDescriptionChange(description) {
    this.setState({
        description: description
    });
}

handleImageChange(image) {
    this.setState({
        image: image
    });
}

handleLinkChange(link) {
    this.setState({
        link: link
    });
}

    render() {
        const title = this.state.title;
        const description = this.state.description;
        const image = this.state.image;
        const link = this.state.link;

        return (
            <div className="App">
                <Header />

                <div className="container">
                    <h1 className="heading-title">Widget Generator</h1>
                </div>

                <WidgetSmall title={this.state.title} description={this.state.description} link={this.state.link} image={this.state.image}/>

                <Form 
                    title={title} onTitleChange={this.handleTitleChange}
                    description={description} onDescriptionChange={this.handleDescriptionChange}
                    link={link} onLinkChange={this.handleLinkChange}
                    image={image} onImageChange={this.handleImageChange} 
                />

                <Snippet
                    title={title} onTitleChange={this.handleTitleChange}
                    description={description} onDescriptionChange={this.handleDescriptionChange}
                    link={link} onLinkChange={this.handleLinkChange}
                    image={image} onImageChange={this.handleImageChange}
                />

                <Footer />
            </div>
        );
    }
}

export default App;
