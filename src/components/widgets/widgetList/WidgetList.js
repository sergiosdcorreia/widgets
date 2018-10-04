import React from 'react';
import './WidgetList.css';

import WidgetListItem from './widgetListItem/WidgetListItem';

import Location from '../../icons/Location';
import IconError from '../../icons/IconError';

const WidgetList = props => {

    const description = props.description;
    const icon = props.icon;
    const message=props.message;
    const widgetData = props.widgetData;
    const onDelete = props.onDelete;
    const listWidget = widgetData.map((widgetData, id) => (
            <WidgetListItem
                key={id}
                index={id}
                itemDescription={widgetData.itemDescription} onItemDescriptionChange={this.handleItemDescriptionChange}
                itemIcon={widgetData.itemIcon} onIconChange={this.handleIconChange}
                onDelete={onDelete}
            />
        )
    );

    return (
        <div className="widgetList">
            <h4>Preview</h4>
            <ul>
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
                            <p>{description}</p>
                        </div>
                    </div>
                </li>
                <hr />
                {widgetData.length === 0 ? <p className="messageList">{message}</p> : listWidget}
            </ul>
        </div>
    )
}

export default WidgetList;
