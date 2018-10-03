import React from 'react';

import './Snippet.css';

const SnippetSmall = props => {

    const { image, title, description, link, onCopyToClipboard, widgetSmallRef } = props;

    const widgetSmallSnippetToCopy =
    `
    <div class="c-card-block">
        <div class="c-card__media c-card__media--80x80">
            <img scr="${image}">
        </div>
        <div class="c-card__primary-title">
            <div class="c-card__primary-text">
                ${title}
            </div>
            <div class="c-card__subhead-text">
                ${description}
            </div>
        </div>
        <div class="c-card__actions">
            <a href="${link}" class="btn btn--ghost grey">
                Read more
            </a>
        </div>
    </div>
    `

    return (
        <div>
            <h4>Embed the code</h4>
            <button onClick={onCopyToClipboard}>Copy to clipboard</button>
            <div className="snippet">
                <pre className="prettyprint">
                    <textarea className="hidden" ref={widgetSmallRef} name="widgetSnippet" id="widgetSnippet" value={widgetSmallSnippetToCopy} readOnly ></textarea>
                    {widgetSmallSnippetToCopy}
                </pre>
            </div>
        </div>
    )
} 

export default SnippetSmall;
