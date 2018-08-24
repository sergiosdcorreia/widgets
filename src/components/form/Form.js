import React from 'react';

const Form = () => (

    <div className="form">
        <div class="container">
            <h2>Create a new widget</h2>

            <ul className="widget-selector">
                <li>
                    <label for="widget-small">Small Widget</label>
                    <input type="radio" name="widgetSize" id="widget-small" value="small" checked/>
                </li>
                <li>
                    <label for="widget-medium">Medium Widget</label>
                    <input type="radio" name="widgetSize" id="widget-medium" value="medium"/>
                </li>
                <li>
                    <label for="widget-large">Large Widget</label>
                    <input type="radio" name="widgetSize" id="widget-large" value="large"/>
                </li>
            </ul>

            <p>Widget title</p>
            <input type="text" name="title" value="Article Title" id="title"/>

            <p>Description</p>
            <textarea rows="3" cols="50" name="description" placeholder="This is the article description" value="Some description" id="description"></textarea>

            <p>Image</p>
            <input type="url" name="image" id="image" list="imagesList"/>

            <select id="imagesList">
                <option value="https://www.funeralzone.co.uk/assets/img/your-legacy/benefits/freeze-costs_2.svg">Freeze Costs</option>
                <option value="https://www.funeralzone.co.uk/assets/img/your-legacy/benefits/acceptance-guaranteed.svg">Acceptance Guaranteed</option>
                <option value="https://www.funeralzone.co.uk/assets/img/your-legacy/benefits/payment-option_2.svg">Payment Option</option>
            </select>

            <p>Link</p>
            <input type="url" name="link" value="http://www.funeralzone.co.uk" id="link"/>
            <input type="submit" value="Submit" id="add-widget"/>
        </div>
    </div>
)

export default Form;
