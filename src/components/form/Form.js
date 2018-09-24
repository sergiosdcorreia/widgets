import React from 'react';

import Location from '../icons/Location';
import IconError from '../icons/IconError';

const Form = props => {
    let onChangeTitle = (e) => {
        props.onTitleChange(e.target.value);
    }
    let onChangeDescription = (e) => {
        props.onDescriptionChange(e.target.value);
    }
    let onChangeImage = (e) => {
        props.onImageChange(e.target.value);
    }
    let onChangeIcon = (e) => {
        props.onIconChange(e.target.value);
    }
    let onChangeLink = (e) => {
        props.onLinkChange(e.target.value);
    }
    let onChangeWidget = (e) => {
        props.onWidgetChange(e.target.value);
    }

    let createWidgetForm = ( title, description, image, link ) => {

        console.log("form");

        return (
            <div>
                <label>Widget title</label>
                <input type="text" name="title" id="title" value={title} onChange={onChangeTitle} />

                <label>Description</label>
                <textarea rows="3" cols="50" name="description" id="description" placeholder="This is the article description" value={description} onChange={onChangeDescription}></textarea>

                <label>Image</label>
                <input type="url" name="image" placeholder="Image URL" id="image" value={image} onChange={onChangeImage} />

                <label>Link</label>
                <input type="url" name="link" id="link" placeholder="Link URL" value={link} onChange={onChangeLink} />
            </div>
        )
    }

    let createWidgetList = (value, description) => {

        return (
            <div>
                <label><Location /> Location</label>
                <input type="radio" value="iconLocation" checked={value === "iconLocation"} onChange={onChangeIcon} />

                <label><IconError /> Icon Error</label>
                <input type="radio" value="iconError" checked={value === "iconError"} onChange={onChangeIcon} />

                <label>Description</label>
                <textarea rows="3" cols="50" name="description" id="description" value={description} onChange={onChangeDescription} ></textarea>

                <button type="submit"> Add Item </button>
            </div>
        )
    }

    const { title, value, description, image, link, submit } = props;

    console.log(props)

    return (

        <form onSubmit={submit}>
            <div className="container">
                <h2>Edit widget</h2>

                <label>Widget Small</label>
                <input type="radio" value="widgetSmall" checked={value === "widgetSmall"} onChange={onChangeWidget} />

                <label>Widget</label>
                <input type="radio" value="widgetMedium" checked={value === "widgetMedium"} onChange={onChangeWidget} />

                <label>List Widget</label>
                <input type="radio" value="listWidget" checked={value === "listWidget"} onChange={onChangeWidget} />

                {
                    (value === "widgetMedium" || value === "widgetSmall") && createWidgetForm( title, description, image, link )
                }

                {
                    value === "listWidget" && createWidgetList(value, description)
                }
            </div>
        </form>
    )
}

export default Form;
