import React from 'react';

import './Snippet.css';

const SnippetUserNotification = props => {

    const { image, title, description, onCopyToClipboard, copyRef, isCopied } = props;

    const userNotificationSnippetToCopy =
`<div class="user-notification-message">
    <div class="media">
        <div class="media__left">
            ${
                image &&
            `<img style="width:180px" src="${image}" />`
            }
            ${
                image.length === 0 ?
            `<svg viewBox="0 0 180 135" fill="#1189cb" width="180px">
                <path d="M42.5 60.9c0-4.8.4-9.4 1-13.7-4.4.6-8.2 1-12.9 1h-6.2l-5.1 8.7V65l5.1 8.7h6.2c4.7 0 8.6.3 12.9 1-.7-4.4-1-9-1-13.8zM99.8 50.4c-.2-.2-.5-.6-.9-.6-.3 0-.7.3-.9.6-.4.5-.9 1.3-1.2 2.2-.8 2.2-1.3 5.1-1.3 8.2 0 3.1.5 6 1.3 8.2.4 1 .8 1.7 1.2 2.2.2.2.5.6.9.6.3 0 .7-.3.9-.6.4-.5.9-1.3 1.2-2.2.8-2.2 1.3-5.1 1.3-8.2 0-3.1-.5-6-1.3-8.2-.3-.9-.7-1.7-1.2-2.2zM53.2 80.5l-11.8-2.3 7.5 29.6c.4 1.5 1.9 2.3 3.4 1.7l10.9-4.4c1.5-.6 2.1-2.2 1.3-3.6l-11.3-21z"/><path d="M101.5 27.3h-7.6S76 40.8 50.2 46.1c-.8 4.2-1.3 9.1-1.3 14.9s.5 10.7 1.3 14.9C76 81 93.9 94.5 93.9 94.5h7.5c6.7-.1 12.1-15.1 12.1-33.6s-5.3-33.5-12-33.6zm2.9 54.9c-1 2.5-2.1 4.5-3.2 5.8-.5.5-1.4 1.4-2.3 1.4-.9 0-1.8-.9-2.3-1.4-1.2-1.3-2.3-3.3-3.2-5.8-2.1-5.6-3.3-13.2-3.3-21.3s1.2-15.6 3.3-21.3c1-2.5 2.1-4.5 3.2-5.8.5-.5 1.4-1.4 2.3-1.4.9 0 1.8.9 2.3 1.4 1.2 1.3 2.3 3.3 3.2 5.8 2.1 5.6 3.3 13.2 3.3 21.3s-1.1 15.6-3.3 21.3zM124.1 39.7c-.4-.4-1.1-.4-1.5 0-.4.4-.4 1.1 0 1.5 5.2 5.2 8.1 12.2 8.1 19.5 0 7.4-2.9 14.3-8.1 19.5-.4.4-.4 1.1 0 1.5.2.2.5.3.7.3s.5-.1.7-.3c5.6-5.6 8.7-13.1 8.7-21 .1-7.9-3-15.4-8.6-21z"/><path d="M134.9 32.2c-.6-.6-1.4-.6-2 0-.6.6-.6 1.4 0 2 14.6 14.6 14.6 38.4 0 53.1-.6.6-.6 1.4 0 2 .3.3.6.4 1 .4s.7-.1 1-.4c15.7-15.8 15.7-41.4 0-57.1z"/><path d="M146.6 25.2c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5c8.8 8.8 13.7 20.6 13.7 33 0 12.5-4.9 24.2-13.7 33-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5 9.5-9.5 14.7-22.1 14.7-35.5.1-13.4-5.1-26-14.6-35.5z"/>
            </svg>` : ""
            }
        </div>
        <div class="media__body">
            <h2 class="long-primer kirk">${title}</h2>
            <p>${description}</p>
        </div>
    </div>
</div>`
    
    return (
        <div>
            <h4>Embed the code</h4>
            <button className="btn-blue" onClick={onCopyToClipboard}>Copy to clipboard</button>{ isCopied && <span className="alert">Copied!</span> }
            <div className="snippet">
                <pre className="prettyprint">
                    <textarea className="hidden" ref={copyRef} name="widgetSnippet" id="widgetSnippet" value={userNotificationSnippetToCopy} readOnly ></textarea>
                    {userNotificationSnippetToCopy}
                </pre>
            </div>
        </div>
    )
}

export default SnippetUserNotification;
