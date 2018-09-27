import React from 'react';

import './Snippet.css';

const SnippetSmall = props => (
    <div className="snippet">
        <pre className="prettyprint">
            {
`
<div class="c-card-block">
    <div class="c-card__media c-card__media--80x80">
        <img scr="${props.image}">
    </div>
    <div class="c-card__primary-title">
        <div class="c-card__primary-text">
            ${props.title}
        </div>
        <div class="c-card__subhead-text">
            ${props.description}
        </div>
    </div>
    <div class="c-card__actions">
        <a href="${props.link}" class="btn btn--ghost grey">
            Read more
        </a>
    </div>
</div>
`
            }
        </pre>
    </div>
)

export default SnippetSmall;
