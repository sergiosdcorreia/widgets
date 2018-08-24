import React from 'react';

const Form = () => (

    <div className="form">
        <div class="container">
            <h2>Edit widget</h2>

            <p>Widget title</p>
            <input type="text" name="title" value="Article Title" id="title"/>

            <p>Description</p>
            <textarea rows="3" cols="50" name="description" placeholder="This is the article description" value="Some description" id="description"></textarea>

            <p>Image</p>
            <input type="url" name="image" id="image" list="imagesList"/>

            <p>Link</p>
            <input type="url" name="link" value="http://www.funeralzone.co.uk" id="link"/>
            <input type="submit" value="Submit" id="add-widget"/>
        </div>
    </div>
)

export default Form;
