import React from 'react';
import './WidgetList.css';

import WidgetListItem from './widgetListItem/WidgetListItem';

import Location from '../../icons/Location';
import IconError from '../../icons/IconError';

const WidgetList = props => {

    const description = props.description;
    const icon = props.icon;
    const widgetData = props.widgetData;
    const onDelete = props.onDelete;
    const listWidget = widgetData.map((widgetData, id) => (
            <WidgetListItem
                key={id}
                itemDescription={widgetData.itemDescription} onItemDescriptionChange={this.handleItemDescriptionChange}
                itemIcon={widgetData.itemIcon} onIconChange={this.handleIconChange}
                onDelete={onDelete}
            />
        )
    );

    return (
        <div className="widgetList">
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
                {listWidget}
            </ul>
        </div>
    )
}

export default WidgetList;
