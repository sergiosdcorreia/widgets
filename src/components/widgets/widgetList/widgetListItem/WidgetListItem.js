import React from 'react';

import './WidgetListItem.css';
import Location from '../../../icons/Location';
import IconError from '../../../icons/IconError';
import IconRemove from '../../../icons/IconRemove';

const WidgetListItem = (props) => {

    let itemIcon = props.itemIcon;
    let itemDescription = props.itemDescription;

    return (
        <li className="WidgetListItem">
            <div className="fb">
                <div className="icon--container">
                    {
                        itemIcon === "iconLocation" && <Location />
                    }
                    {
                        itemIcon === "iconError" && <IconError />
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
