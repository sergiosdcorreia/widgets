import React from 'react';
import ImageBlog from '../../../Assets/images/blog-img01.jpg';
import './WidgetMedium.css';

const WidgetMedium = (props) => {

    return (
        <div>
            <div className="widget">
                <a className="link" href={props.link}>
                    <div className="fb">
                        <div className="img--container">
                            <img src={ImageBlog} alt={props.title} />
                        </div>
                        <div className="text-block">
                            <h1 className="title">{props.title}</h1>
                            <p>{props.description}</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default WidgetMedium;
