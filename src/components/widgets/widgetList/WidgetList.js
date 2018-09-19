import React from 'react';
import './WidgetList.css';

import WidgetListItem from './widgetListItem/WidgetListItem';

const WidgetList = (props) => {

    const widgetData = props.widgetData;
    const listWidget = widgetData.map((widgetData, key) => (
            <WidgetListItem
                key={key}
                description={widgetData.description} onDescriptionChange={this.handleDescriptionChange}
                link={widgetData.link} onLinkChange={this.handleLinkChange}
                image={widgetData.image} onImageChange={this.handleImageChange}
            />
        )
    );

    return (
        <div className="widgetList">
            <ul>
                {listWidget}
            </ul>
        </div>
    )
}

export default WidgetList;
