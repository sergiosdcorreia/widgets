import React from 'react';

import './WidgetListItem.css';
import Location from '../../../icons/Location';
import IconError from '../../../icons/IconError';
import IconRemove from '../../../icons/IconRemove';

const WidgetListItem = props => {

    const itemIcon = props.itemIcon;
    const itemDescription = props.itemDescription;
    const onDelete = props.onDelete;

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
                <button type="button" onClick={onDelete}><IconRemove /></button>
            </div>
        </li>
    )
}

export default WidgetListItem;
