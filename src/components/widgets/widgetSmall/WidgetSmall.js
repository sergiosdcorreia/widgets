import React from 'react';
import ImageBlog from '../../../Assets/images/blog-img01.jpg';
import './WidgetSmall.css';

const WidgetSmall = (props) => {

    return (
        <div>
            <div className="widget-sm">
                <a className="link" href={props.link}>
                    <div className="img--container">
                        <img src={ImageBlog} alt={props.title} />
                        <div className="text--block">
                            <p className="title">{props.title}</p>
                            <p className="description">{props.description}</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default WidgetSmall;
