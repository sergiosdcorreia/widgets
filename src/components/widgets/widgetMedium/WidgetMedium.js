import React from 'react';
import ImageBlog from '../../../Assets/images/blog-img01.jpg';
import './WidgetMedium.css';

const WidgetMedium = (props) => {

    return (
        <div>
            <div className="widget">
                <a className="link" href={props.link}>
                    <div className="img--container">
                        <div className="text--block">
                            <p className="title">{props.title}</p>
                            <p className="description">{props.description}</p>
                        </div>
                        <img src={ImageBlog} alt={props.title} />
                    </div>
                    <div className="card__actions">
                        <a href="">Read More</a>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default WidgetMedium;
