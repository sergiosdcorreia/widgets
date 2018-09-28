import React from 'react';
import './WidgetUserNotification.css';

const WidgetUserNotification = props => {

    return (
        <div className="widget">
            <div className="widget-container">
                <div className="img--container">
                    <div className="text--block">
                        <p className="title">{props.title}</p>
                        <p className="description">{props.description}</p>
                    </div>
                    <img src={props.image} alt={props.title} />
                </div>
                {/* <div className="card__actions">
                    <a href="">Read More</a>
                </div> */}
            </div>
        </div>
    )
}

export default WidgetUserNotification;
