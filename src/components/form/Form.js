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

        return (
            <div className="block">
                <h2>Card</h2>
                <label>Title</label>
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
            <div className="block">
                <h2>List</h2>
                <p>Icons</p>
                <div className="icons-container">
                    <div className="icon-bg">
                        <label className={`label-icon ${icon === "iconLocation" ? "icon-selected" : null}`}><Location /></label>
                        <input className="select-icon" type="radio" value="iconLocation" checked={icon === "iconLocation"} onChange={onChangeIcon} />
                    </div>
                    <div className="icon-bg">
                        <label className={`label-icon ${icon === "iconError" ? "icon-selected" : null}`}><IconError /></label>
                        <input className="select-icon" type="radio" value="iconError" checked={icon === "iconError"} onChange={onChangeIcon} />
                    </div>
                </div>

                <label>Description</label>
                <textarea rows="3" cols="50" name="description" id="description" value={description} onChange={onChangeDescription} ></textarea>

                <button type="submit"> Add Item </button>
            </div>
        )
    }

    const { title, value, description, image, link, submit } = props;

    return (

        <form onSubmit={submit}>
            <div className="container">
                {/* <label>Widget Small</label>
                <input type="radio" value="widgetSmall" checked={value === "widgetSmall"} onChange={onChangeWidget} /> */}

                <div className="select-widget">
                    <label>Card</label>
                    <input type="radio" value="widgetMedium" checked={value === "widgetMedium"} onChange={onChangeWidget} />
                </div>
                <div className="select-widget">
                    <label>List</label>
                    <input type="radio" value="listWidget" checked={value === "listWidget"} onChange={onChangeWidget} />
                </div>

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
