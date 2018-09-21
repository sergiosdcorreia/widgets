import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Snippet from './components/snippet/Snippet';
//import WidgetLarge from './components/widgets/widgetLarge/WidgetLarge';
import WidgetMedium from './components/widgets/widgetMedium/WidgetMedium';
import WidgetSmall from './components/widgets/widgetSmall/WidgetSmall';
import WidgetList from './components/widgets/widgetList/WidgetList';

class App extends Component {

    constructor(props) {
        super(props);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleIconChange = this.handleIconChange.bind(this);
        this.handleLinkChange = this.handleLinkChange.bind(this);
        this.handleWidgetChange = this.handleWidgetChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.state = {
            widget: "widgetSmall",
            title: "This is the widget title",
            description: "This is the widget description",
            image: "",
            link: "",
            icon: "iconLocation",
            widgetData: [
                {
                    itemDescription: "This is the widget description 1st item",
                    itemIcon: "iconError"
                },
                {
                    itemDescription: "This is the widget description 2nd item",
                    itemIcon: "iconLocation"
                }
            ]
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

    handleIconChange(icon) {
        this.setState({
            icon: icon
        });
    }

    handleLinkChange(link) {
        this.setState({
            link: link
        });
    }

    handleWidgetChange(widget) {
        this.setState({
            widget: widget 
        });
    }

    handleOnSubmit(e, description, icon) {
        e.preventDefault();

        const newItem = {
                itemDescription: this.state.description,
                itemIcon: this.state.icon
            }

        const widgetData = [...this.state.widgetData, newItem];

        this.setState({widgetData})
    }

    render() {
        let title = this.state.title;
        let description = this.state.description;
        let image = this.state.image;
        let link = this.state.link;
        let widget = this.state.widget;
        let icon = this.state.icon;
        let widgetData = this.state.widgetData;

        return (
            <div className="App">
                <Header />

                <div className="container">
                    <h1 className="heading-title">Widget Generator</h1>
                </div>

                {
                    widget === "widgetSmall" && <WidgetSmall title={title} description={description} link={link} image={image}/>
                }

                {
                    widget === "widgetMedium" && <WidgetMedium title={title} description={description} link={link} image={image}/>
                }

                {
                    widget === "listWidget" && <WidgetList widgetData={widgetData} description={description} icon={icon} /> 
                }

                <Form
                    value={widget} onWidgetChange={this.handleWidgetChange}
                    title={title} onTitleChange={this.handleTitleChange}
                    description={description} onDescriptionChange={this.handleDescriptionChange}
                    link={link} onLinkChange={this.handleLinkChange}
                    image={image} onImageChange={this.handleImageChange}
                    icon={icon} onIconChange={this.handleIconChange}
                    submit={this.handleOnSubmit}
                />

                <Snippet
                    title={title} onTitleChange={this.handleTitleChange}
                    description={description} onDescriptionChange={this.handleDescriptionChange}
                    link={link} onLinkChange={this.handleLinkChange}
                    image={image} onImageChange={this.handleImageChange}
                    icon={icon} onIconChange={this.handleIconChange}
                />

                <Footer />
            </div>
        );
    }
}

export default App;
