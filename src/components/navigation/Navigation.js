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
                
                <div className={`select-widget ${value === "widgetMedium" ? "nav-selected" : null}`}>
                    <label>Card</label>
                    <input className="input-card" type="radio" value="widgetMedium" checked={value === "widgetMedium"} onChange={onChangeWidget} />
                </div>
                <div className={`select-widget ${value === "listWidget" ? "nav-selected" : null}`}>
                    <label>List</label>
                    <input className="input-list" type="radio" value="listWidget" checked={value === "listWidget"} onChange={onChangeWidget} />
                </div>
                <div className={`select-widget-notification ${value === "widgetUserNotification" ? "nav-selected" : null}`}>
                    <label>User Notification</label>
                    <input className="input-user-notification" type="radio" value="widgetUserNotification" checked={value === "widgetUserNotification"} onChange={onChangeWidget} />
                </div>
            </div>
        </div>
    )
} 

export default Navigation;
