import React from 'react';
import './WidgetUserNotification.css';

import IconUserNotification from '../../icons/IconUserNotification';

const WidgetUserNotification = props => {

    const { image, title, description } = props;

    return (
        <div className="widget-user-notification">
            <div className="widget-container">
                <div className="flex-notification">
                    <div className="img--container">
                        {
                            image && <img src={image} alt="" />
                        }
                        {
                            image.length === 0 && <IconUserNotification />
                        }
                    </div>
                    <div className="text--block">
                        <p className="title">{title}</p>
                        <p className="description">{description}</p>
                    </div>
                </div>
                {/* <div className="card__actions">
                    <a href="">Read More</a>
                </div> */}
            </div>
        </div>
    )
}

export default WidgetUserNotification;
