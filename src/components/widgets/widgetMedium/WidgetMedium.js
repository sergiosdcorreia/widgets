import React from 'react';
import './WidgetMedium.css';

const WidgetMedium = props => {

    return (
        <div>
            <div className="widget">
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

export default WidgetMedium;
