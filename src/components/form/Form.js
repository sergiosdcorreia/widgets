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

    const icon = props.icon;

    const createWidgetForm = ( title, description, image, link ) => {

        return (
            <div className="block">
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

    const createUserNotificationForm = ( title, description, image ) => {

        return (
            <div className="block">
                <label>Title</label>
                <input type="text" name="title" id="title" value={title} onChange={onChangeTitle} />

                <label>Description</label>
                <textarea rows="3" cols="50" name="description" id="description" placeholder="This is the article description" value={description} onChange={onChangeDescription}></textarea>

                <label>Image</label>
                <input type="url" name="image" placeholder="Image URL" id="image" value={image} onChange={onChangeImage} />
            </div>
        )
    }

    const createWidgetList = ( icon, description ) => {

        return (
            <div className="block">
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
                <textarea rows="3" cols="50" name="description" id="description" placeholder="Add a description" value={description} onChange={onChangeDescription} ></textarea>

                <button type="submit"> Add Item </button>
            </div>
        )
    }

    const { title, value, description, image, link, submit } = props;

    return (

        <form onSubmit={submit}>
            <div className="container">
                {
                    value === "widgetMedium" && createWidgetForm( title, description, image, link )
                }
                {
                    value === "listWidget" && createWidgetList( icon, description )
                }
                {
                    value === "widgetUserNotification" && createUserNotificationForm( title, description, image )
                }
            </div>
        </form>
    )
}

export default Form;
