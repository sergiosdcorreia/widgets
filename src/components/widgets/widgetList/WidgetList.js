import React, { Component } from 'react';
import ImageBlog from '../../../Assets/images/blog-img01.jpg';
import './WidgetList.css';

import Form from '../../form/Form';
import Snippet from '../../snippet/Snippet';
import WidgetListItem from './widgetListItem/WidgetListItem';

class WidgetList extends Component {

    constructor(props) {
        super(props);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleLinkChange = this.handleLinkChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.state = {
            description: "This is the widget description",
            image: ImageBlog,
            link: "https://funeralzone-widgets.herokuapp.com/",
            title: "Widget title"
        }
    };

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

    handleTitleChange(title) {
        this.setState({
            title: title
        });
    }

    render() {

        const description = this.state.description;
        const image = this.state.image;
        const link = this.state.link;
        const title = this.state.title;

        return (
        <div>
            <div className="widget-list">
                <h1>{this.state.title}</h1>

                <ul>
                    <WidgetListItem
                        description={description} onDescriptionChange={this.handleDescriptionChange}
                        link={link} onLinkChange={this.handleLinkChange}
                        image={image} onImageChange={this.handleImageChange}
                    />
                </ul>

            </div>
            <Snippet
                description={description} onDescriptionChange={this.handleDescriptionChange}
                link={link} onLinkChange={this.handleLinkChange}
                image={image} onImageChange={this.handleImageChange}
                title={title} onTitleChange={this.handleTitleChange}
            />
            <Form
                description={description} onDescriptionChange={this.handleDescriptionChange}
                link={link} onLinkChange={this.handleLinkChange}
                image={image} onImageChange={this.handleImageChange}
                title={title} onTitleChange={this.handleTitleChange}
            />
        </div>
        )
    };
}

export default WidgetList;
