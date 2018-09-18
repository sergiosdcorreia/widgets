import React from 'react';

import './WidgetListItem.css';

const WidgetListItem = (props) => (
    <li className="WidgetListItem">
        <a className="link" href={props.link}>
            <div className="icon--container">
            </div>
            <div className="text--block">
                <p>{props.description}</p>
            </div>
        </a>
    </li>
)

export default WidgetListItem;