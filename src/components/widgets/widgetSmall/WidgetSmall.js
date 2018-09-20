import React from 'react';
import ImageBlog from '../../../Assets/images/blog-img01.jpg';
import './WidgetSmall.css';

const WidgetSmall = (props) => {

    return (
        <div className="widget-sm">
            <div className="img--container">
                <img src={ImageBlog} alt={props.title} />
            </div>
            <h1 className="title">{props.title}</h1>
            <p className="subhead">Subhead text</p>
            <ul className="description">
                <li>{props.description}</li>
            </ul>
            <div className="card__actions">
                <a href="">Read More</a>
            </div>

        </div>
    )
}

export default WidgetSmall;
