import React from 'react';
import ImageBlog from '../../../Assets/images/blog-img01.jpg';
import './WidgetLarge.css';

import Form from '../../form/Form';
import Snippet from '../widgetLarge/snippet/Snippet';

const WidgetLarge = (props) => (
    <div>
        <div className="widget-lg">
            <a className="link" href={props.link}>
                <div className="img--container">
                    <img src={ImageBlog} alt="widget" />
                </div>
                <div className="text--block">
                    <p>{props.description}</p>
                </div>
            </a>
        </div>
        <Snippet description={props.description} link={props.link} image={props.image} />
        <Form description={props.description} link={props.link} image={props.image} />
    </div>
)

export default WidgetLarge;
