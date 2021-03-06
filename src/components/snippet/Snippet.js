import React from 'react';

import './Snippet.css';

const Snippet = props => {

    const { link, image, title, description, copyRef, onCopyToClipboard, isCopied } = props;

    const widgetSnippetToCopy = 
`<a class="c-card c-card--link block" href="${link}">
    <div class="c-card__media c-card__media--16-9">
        <div class="c-card__primary-title">
            <div class="c-card__primary-text">${title}</div>
            <div class="c-card__subhead-text">${description}</div>
        </div>
        <img src="${image}">
    </div>
</a>`;

    return (
        <div>
            <h4>Embed the code</h4>
            <button className="btn-blue" onClick={onCopyToClipboard}>Copy to clipboard</button>{ isCopied && <span className="alert">Copied!</span> }
            <div className="snippet">
                <pre className="prettyprint">
                    <textarea className="hidden" ref={copyRef} name="widgetSnippet" id="widgetSnippet" value={widgetSnippetToCopy} readOnly ></textarea>
                    {widgetSnippetToCopy}
                </pre>
            </div>
        </div>
    )
}

export default Snippet;
