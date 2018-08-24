import React, { Component } from 'react';
import ImageBlog from '../../../Assets/images/blog-img01.jpg';
import './WidgetLarge.css';

import Form from '../../form/Form';
import Snippet from '../../snippet/Snippet';

class WidgetLarge extends Component {
  
    constructor(props) {
      super(props);
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handleImageChange = this.handleImageChange.bind(this);
      this.handleLinkChange = this.handleLinkChange.bind(this);
      this.state = {
        description: "This is the widget description",
        image: ImageBlog,
        link: "https://funeralzone-widgets.herokuapp.com/"
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
  
    render() {

        const description = this.state.description;
        const image = this.state.image;
        const link = this.state.link;

        return (
        <div>
            <div className="widget-lg">
                <a className="link" href={this.state.link}>
                    <div className="img--container">
                        <img src={ImageBlog} alt="widget" />
                    </div>
                    <div className="text--block">
                        <p>{this.state.description}</p>
                    </div>
                </a>
            </div>
            <Snippet
                description={description} onDescriptionChange={this.handleDescriptionChange}
                link={link} onLinkChange={this.handleLinkChange}
                image={image} onImageChange={this.handleImageChange}
            />
            <Form
                description={description} onDescriptionChange={this.handleDescriptionChange}
                link={link} onLinkChange={this.handleLinkChange}
                image={image} onImageChange={this.handleImageChange}
            />
        </div>
        )
    };
}

export default WidgetLarge;
