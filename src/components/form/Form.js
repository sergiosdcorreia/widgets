import React from 'react';

const Form = (props) => {
    let onChangeTitle = (e) => {
        props.onTitleChange(e.target.value);
    }
    let onChangeDescription = (e) => {
        props.onDescriptionChange(e.target.value);
    }
    let onChangeImage = (e) => {
        props.onImageChange(e.target.value);
    }
    let onChangeLink = (e) => {
        props.onLinkChange(e.target.value);
    }
    let onChangeWidget = (e) => {
        props.onWidgetChange(e.target.value);
    }

    let createWidgetForm = (title, value, description, image, link) => {

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

    let createWidgetList = (image, description) => {

        console.log("list form");

        return (
            <div>
                <label>Icon</label>
                <input type="url" name="icon" id="icon" value={image} onChange={onChangeImage} required />

                <label>Description</label>
                <textarea rows="3" cols="50" name="description" id="description" placeholder="This is the article description" value={description} onChange={onChangeDescription} required></textarea>
            </div>
        )
    }

    //let value = props.value;
    const { title, value, description, image, link } = props;

    console.log(props)

    return (

        <form>
            <div className="container">
                <h2>Edit widget</h2>

                <label>Widget Small</label>
                <input type="radio" value="widgetSmall" checked={value === "widgetSmall"} onChange={onChangeWidget} />

                <label>Widget</label>
                <input type="radio" value="widgetMedium" checked={value === "widgetMedium"} onChange={onChangeWidget} />

                <label>List Widget</label>
                <input type="radio" value="listWidget" checked={value === "listWidget"} onChange={onChangeWidget} />

                {
                    (value === "widgetMedium" || value === "widgetSmall") 
                        ? createWidgetForm(title, value, description, image, link)
                        : createWidgetList(image, description)
                }
            </div>
        </form>
    )
}

export default Form;
