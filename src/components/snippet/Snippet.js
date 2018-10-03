import React from 'react';

import './Snippet.css';

const Snippet = props => {

    const { link, image, title, description, copyRef, onCopyToClipboard } = props;

    const widgetSnippetToCopy = 
`<a class="c-card c-card--link block" href="${link}">
    <div class="c-card__media c-card__media--16-9"> 
        <img scr="${image}">
        </div>
        <div class="c-card__primary-title">
            <div class="c-card__primary-title">${title}</div>
            <div class="c-card__subhead-text">${description}</div>
        </div>
    </div>
</a>`;

    return (
    <div className="snippet">
        <pre className="prettyprint">
            <textarea className="hidden" ref={copyRef} name="widgetSnippet" id="widgetSnippet" value={widgetSnippetToCopy}></textarea>
            {widgetSnippetToCopy}
        </pre>
    </div>
)
}

export default Snippet;
