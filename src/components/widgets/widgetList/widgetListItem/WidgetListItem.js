import React from 'react';

import './WidgetListItem.css';
import Location from '../../../icons/Location';
import IconError from '../../../icons/IconError';
import IconRemove from '../../../icons/IconRemove';

const WidgetListItem = (props) => {

    let icon = props.icon;
    let itemDescription = props.itemDescription;

    return (
        <li className="WidgetListItem">
            <div className="fb">
                <div className="icon--container">
                    {
                        icon === "iconLocation" && <Location />
                    }
                    {
                        icon === "iconError" && <IconError />
                    }
                </div>
                <div className="text--block">
                    <p>{itemDescription}</p>
                </div>
                <button><IconRemove /></button>
            </div>
        </li>
    )
}

export default WidgetListItem;
