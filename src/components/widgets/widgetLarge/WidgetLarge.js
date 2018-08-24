import React from 'react';
import ImageBlog from '../../../Assets/images/blog-img01.jpg';
import './WidgetLarge.css';

const WidgetLarge = (props) => (
    <div className="widget-lg">
        <a className="link" href="https://www.funeralzone.co.uk/">
            <div className="img--container">
                <img src={ImageBlog} alt="widget" />
            </div>
            <div className="text--block">
                <p>{props.description}</p>
            </div>
        </a>
    </div>
)

export default WidgetLarge;
