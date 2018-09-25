import React from 'react';

import './Snippet.css';

const Snippet = props => (
    <div className="snippet">
        <pre className="prettyprint">
            {
`<a class="c-card c-card--link block" href="${props.link}">
    <div class="c-card__media c-card__media--16-9"> 
        <img scr="${props.image}">
        </div>
        <div class="c-card__primary-title">
            <div class="c-card__primary-title">${props.title}</div>
            <div class="c-card__subhead-text">${props.description}</div>
        </div>
    </div>
</a>`
            }
        </pre>
    </div>
)

export default Snippet;
