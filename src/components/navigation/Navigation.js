import React from 'react';

import './Navigation.css';

const Navigation = props => {

    const onChangeWidget = (e) => {
        props.onWidgetChange(e.target.value);
    }

    const value = props.value;

    return (
        <div className="navigation">
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
            </div>
        </div>
    )
} 

export default Navigation;
