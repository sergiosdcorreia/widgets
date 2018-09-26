import React from 'react';

import Location from '../icons/Location';
import IconError from '../icons/IconError';

const Form = props => {
    const onChangeTitle = (e) => {
        props.onTitleChange(e.target.value);
    }
    const onChangeDescription = (e) => {
        props.onDescriptionChange(e.target.value);
    }
    const onChangeImage = (e) => {
        props.onImageChange(e.target.value);
    }
    const onChangeIcon = (e) => {
        props.onIconChange(e.target.value);
    }
    const onChangeLink = (e) => {
        props.onLinkChange(e.target.value);
    }
    const onChangeWidget = (e) => {
        props.onWidgetChange(e.target.value);
    }

    const icon = props.icon;

    const createWidgetForm = ( title, description, image, link ) => {

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

    const createWidgetList = (icon, description) => {



        return (
            <div>
                <label><Location /> Location</label>
                <input type="radio" value="iconLocation" checked={icon === "iconLocation"} onChange={onChangeIcon} />

                <label><IconError /> Icon Error</label>
                <input type="radio" value="iconError" checked={icon === "iconError"} onChange={onChangeIcon} />

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
                    value === "listWidget" && createWidgetList(icon, description)
                }
            </div>
        </form>
    )
}

export default Form;
