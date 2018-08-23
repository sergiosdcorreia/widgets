import React from 'react';
import ImageBlog from '../../../Assets/images/blog-img01.jpg';

const WidgetLarge = () => (
    <div className="widget-lg">
        <a className="link" href="https://www.funeralzone.co.uk/">
            <div className="img--container">
                <img src={ImageBlog} alt="widget" />
            </div>
            <div className="text--block">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </a>
    </div>
)

export default WidgetLarge;
