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

    const { title, icon, value, description, image, submit } = props;

    const createWidgetForm = ( title, description, image ) => {

        const widgetHasLink = props.value;
        const link = props.link;

        const hasLink = link => (
                <div>
                    <label className="label">Link</label>
                    <input type="url" name="link" id="link" placeholder="Link URL" value={link} onChange={onChangeLink} />
                </div>
            )

        return (
            <div className="block">
                <label className="label">Title</label>
                <input type="text" name="title" id="title" value={title} onChange={onChangeTitle} />

                <label className="label">Description</label>
                <textarea rows="3" cols="50" name="description" id="description" placeholder="This is the article description" value={description} onChange={onChangeDescription}></textarea>

                <label className="label">Image</label>
                <input type="url" name="image" placeholder="Image URL" id="image" value={image} onChange={onChangeImage} />

                {
                    widgetHasLink === "widgetMedium" && hasLink( link )
                }
            </div>
        )
    }

    const createWidgetList = ( icon, description ) => {

        return (
            <div className="block">
                <h4>Icons</h4>
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

                <label className="label">Description</label>
                <textarea rows="3" cols="50" name="description" id="description" placeholder="Add a description" value={description} onChange={onChangeDescription} ></textarea>

                <button type="submit"> Add Item </button>
            </div>
        )
    }

    return (

        <form onSubmit={submit}>
            <div className="container">
                {
                    value === "widgetMedium" && createWidgetForm( title, description, image )
                }
                {
                    value === "listWidget" && createWidgetList( icon, description )
                }
                {
                    value === "widgetUserNotification" && createWidgetForm( title, description, image )
                }
            </div>
        </form>
    )
}

export default Form;
