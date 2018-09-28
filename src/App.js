import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Navigation from './components/navigation/Navigation';
import Form from './components/form/Form';
import Snippet from './components/snippet/Snippet';
//import SnippetSmall from './components/snippet/SnippetSmall';
import SnippetWidgetList from './components/snippet/SnippetWidgetList';
//import WidgetLarge from './components/widgets/widgetLarge/WidgetLarge';
import WidgetMedium from './components/widgets/widgetMedium/WidgetMedium';
//import WidgetSmall from './components/widgets/widgetSmall/WidgetSmall';
import WidgetList from './components/widgets/widgetList/WidgetList';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            widget: "widgetMedium",
            title: "Title",
            description: "Description",
            image: "https://d24pb0tc2lc7uj.cloudfront.net/iaYdoRdOcDqtKGWFpyTBUyNyPd4=/fit-in/700x0/uploads/public/587/4b2/889/5874b28891302071879692.jpg",
            link: "",
            icon: "iconLocation",
            listMessage: "No items on your list",
            widgetData: [
                // {
                //     itemDescription: "This is the widget description 1st item",
                //     itemIcon: "iconError"
                // },
                // {
                //     itemDescription: "This is the widget description 2nd item",
                //     itemIcon: "iconLocation"
                // }
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

        this.setState({widgetData, description: "", icon: "iconLocation"});
    }

    onDelete = (index) => {
        const widgetData = Object.assign([], this.state.widgetData);

        widgetData.splice(index, 1);
        this.setState({
            widgetData:widgetData
        });
    }

    render() {
        const title = this.state.title;
        const description = this.state.description;
        const image = this.state.image;
        const link = this.state.link;
        const widget = this.state.widget;
        const icon = this.state.icon;
        const widgetData = this.state.widgetData;
        const listMessage = this.state.listMessage;

        return (
            <div className="App">
                <Header />

                <Navigation value={widget} onWidgetChange={this.handleWidgetChange}/>

                <div className="container">
                    <h1 className="heading-title">
                    {
                        widget === "widgetMedium" && <span>Create Card</span>
                    }

                    {
                        widget === "listWidget" && <span>Create List</span>
                    }
                    </h1>
                </div>

                <div className="flex container">

                    <div className="col">
                    
                    <Form
                        value={widget} onWidgetChange={this.handleWidgetChange}
                        title={title} onTitleChange={this.handleTitleChange}
                        description={description} onDescriptionChange={this.handleDescriptionChange}
                        link={link} onLinkChange={this.handleLinkChange}
                        image={image} onImageChange={this.handleImageChange}
                        icon={icon} onIconChange={this.handleIconChange}
                        submit={this.handleOnSubmit}
                    />

                    <h4>Embed the code</h4>
                    <p className="text">Copy and paste the code</p>

                    {/* {
                        widget === "widgetSmall" && <SnippetSmall
                            title={title} onTitleChange={this.handleTitleChange}
                            description={description} onDescriptionChange={this.handleDescriptionChange}
                            link={link} onLinkChange={this.handleLinkChange}
                            image={image} onImageChange={this.handleImageChange}
                        />
                    } */}

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
                
                </div>


                    <div className="col">

                        {/* {
                            widget === "widgetSmall" && <WidgetSmall title={title} description={description} link={link} image={image}/>
                        } */}

                        {
                            widget === "widgetMedium" && <WidgetMedium title={title} description={description} link={link} image={image}/>
                        }

                        {
                            widget === "listWidget" && <WidgetList widgetData={widgetData} description={description} icon={icon} onDelete={this.onDelete} message={listMessage} /> 
                        }

                    </div>

                </div>

                <Footer />
            </div>
        );
    }
}

export default App;
