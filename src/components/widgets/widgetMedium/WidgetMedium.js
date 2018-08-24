import React from 'react';
import ImageBlog from '../../../Assets/images/blog-img01.jpg';
import './WidgetMedium.css';

import Form from '../../form/Form';
import Snippet from '../../snippet/Snippet';

const WidgetMedium = (props) => (
<div>
    <div class="widget">
        <a class="link" href={props.link}>
            <div class="fb">
                <div class="img--container">
                    <img src={ImageBlog} alt={props.title} />
                </div>
                <div class="text-block">
                    <h1 class="title">{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
        </a>
    </div>

    <Snippet title={props.title} description={props.description} link={props.link} image={props.image} />
    <Form title={props.title} description={props.description} link={props.link} image={props.image} />
</div>
)

export default WidgetMedium;
