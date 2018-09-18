import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeLink = this.onChangeLink.bind(this);
        this.onChangeWidget = this.onChangeWidget.bind(this);
    }

    onChangeTitle(e) {
        this.props.onTitleChange(e.target.value);
    }
    onChangeDescription(e) {
        this.props.onDescriptionChange(e.target.value);
    }
    onChangeImage(e) {
        this.props.onImageChange(e.target.value);
    }
    onChangeLink(e) {
        this.props.onLinkChange(e.target.value);
    }
    onChangeWidget(e) {
        this.props.onWidgetChange(e.target.value);
    }

    render() {
        const value = this.props.value;
        const title = this.props.title;
        const description = this.props.description;
        const image = this.props.image;
        const link = this.props.link;

        return (

            <form>
                <div className="container">
                    <h2>Edit widget</h2>

                    <label>Widget Small</label>
                    <input type="radio" value="widgetSmall" checked={value === "widgetSmall"} onChange={this.onChangeWidget} />

                    <label>Widget Medium</label>
                    <input type="radio" value="widgetMedium" checked={value === "widgetMedium"} onChange={this.onChangeWidget} />

                    <label>Widget title</label>
                    <input type="text" name="title" id="title" value={title} onChange={this.onChangeTitle} />

                    <label>Description</label>
                    <textarea rows="3" cols="50" name="description" id="description" placeholder="This is the article description" value={description} onChange={this.onChangeDescription}></textarea>

                    <label>Image</label>
                    <input type="url" name="image" id="image" value={image} onChange={this.onChangeImage}/>

                    <label>Link</label>
                    <input type="url" name="link" id="link" value={link} onChange={this.onChangeLink}/>
                </div>
            </form>
        )
    }
}

export default Form;
