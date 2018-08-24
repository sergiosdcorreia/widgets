import React, { Component } from 'react';
import ImageBlog from '../../../Assets/images/blog-img01.jpg';
import './WidgetMedium.css';

import Form from '../../form/Form';
import Snippet from '../../snippet/Snippet';

class WidgetMedium extends Component {

    constructor(props) {
        super(props);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleLinkChange = this.handleLinkChange.bind(this);
        this.state = {
            title: "This is the title",
            description: "This is the widget description",
            image: ImageBlog,
            link: "https://funeralzone-widgets.herokuapp.com/"
        }
    };

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

            <div>
                <div class="widget">
                    <a class="link" href={this.state.link}>
                        <div class="fb">
                            <div class="img--container">
                                <img src={ImageBlog} alt={this.state.title} />
                            </div>
                            <div class="text-block">
                                <h1 class="title">{this.state.title}</h1>
                                <p>{this.state.description}</p>
                            </div>
                        </div>
                    </a>
                </div>
                <Snippet 
                    title={title} onTitleChange={this.handleTitleChange}
                    description={description} onDescriptionChange={this.handleDescriptionChange}
                    link={link} onLinkChange={this.handleLinkChange}
                    image={image} onImageChange={this.handleImageChange}
                />
                <Form 
                    title={title} onTitleChange={this.handleTitleChange}
                    description={description} onDescriptionChange={this.handleDescriptionChange}
                    link={link} onLinkChange={this.handleLinkChange}
                    image={image} onImageChange={this.handleImageChange}
                />
            </div>
        )
    };
}

export default WidgetMedium;
