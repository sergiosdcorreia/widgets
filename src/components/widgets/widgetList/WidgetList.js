import React from 'react';
import './WidgetList.css';

import WidgetListItem from './widgetListItem/WidgetListItem';

import Location from '../../icons/Location';
import IconError from '../../icons/IconError';

const WidgetList = (props) => {

    let description = props.description;
    let icon = props.icon;
    let widgetData = props.widgetData;
    let listWidget = widgetData.map((widgetData, key) => (
            <WidgetListItem
                key={key}
                itemDescription={widgetData.itemDescription} onItemDescriptionChange={this.handleItemDescriptionChange}
                itemIcon={widgetData.itemIcon} onIconChange={this.handleIconChange}
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
