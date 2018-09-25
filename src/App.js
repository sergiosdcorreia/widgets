import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Snippet from './components/snippet/Snippet';
import SnippetSmall from './components/snippet/SnippetSmall';
import SnippetWidgetList from './components/snippet/SnippetWidgetList';
//import WidgetLarge from './components/widgets/widgetLarge/WidgetLarge';
import WidgetMedium from './components/widgets/widgetMedium/WidgetMedium';
import WidgetSmall from './components/widgets/widgetSmall/WidgetSmall';
import WidgetList from './components/widgets/widgetList/WidgetList';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            widget: "widgetSmall",
            title: "This is the widget title",
            description: "This is the widget description",
            image: "",
            link: "",
            icon: "iconLocation",
            widgetData: [
                {
                    id: 0,
                    itemDescription: "This is the widget description 1st item",
                    itemIcon: "iconError"
                },
                {
                    id: 1,
                    itemDescription: "This is the widget description 2nd item",
                    itemIcon: "iconLocation"
                }
            ]
        }
    }

    handleTitleChange = title => {
        this.setState({
            title: title
        });
    }

    handleDescriptionChange = description => {
        this.setState({
            description: description
        });
    }

    handleImageChange = image => {
        this.setState({
            image: image
        });
    }

    handleIconChange = icon => {
        this.setState({
            icon: icon
        });
    }

    handleLinkChange = link => {
        this.setState({
            link: link
        });
    }

    handleWidgetChange = widget => {
        this.setState({
            widget: widget 
        });
    }

    handleOnSubmit = (e) => {
        e.preventDefault();

        const newItem = {
                itemDescription: this.state.description,
                itemIcon: this.state.icon
            }

        const widgetData = [...this.state.widgetData, newItem];

        this.setState({widgetData});
    }

    onDelete = (e) => {

        console.log("delete");
        const widgetData = [...this.state.widgetData];
        const index = widgetData.indexOf(e.target.value)
        widgetData.splice(index, 1);
        this.setState({widgetData});
    }

    render() {
        const title = this.state.title;
        const description = this.state.description;
        const image = this.state.image;
        const link = this.state.link;
        const widget = this.state.widget;
        const icon = this.state.icon;
        const widgetData = this.state.widgetData;

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
                    widget === "listWidget" && <WidgetList widgetData={widgetData} description={description} icon={icon} onDelete={this.onDelete} /> 
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

                {
                    widget === "widgetSmall" && <SnippetSmall
                        title={title} onTitleChange={this.handleTitleChange}
                        description={description} onDescriptionChange={this.handleDescriptionChange}
                        link={link} onLinkChange={this.handleLinkChange}
                        image={image} onImageChange={this.handleImageChange}
                    />
                }

                {
                    widget === "widgetMedium" && <Snippet
                        title={title} onTitleChange={this.handleTitleChange}
                        description={description} onDescriptionChange={this.handleDescriptionChange}
                        link={link} onLinkChange={this.handleLinkChange}
                        image={image} onImageChange={this.handleImageChange}
                    />
                }

                {
                    widget === "listWidget" && <SnippetWidgetList widgetData={widgetData} />
                }

                <Footer />
            </div>
        );
    }
}

export default App;
