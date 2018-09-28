import React from 'react';

import './Snippet.css';

const SnippetUserNotification = props => (
    <div className="snippet">
        <pre className="prettyprint">
            {
`<div class="user-notification-message">
    <div class="media">
        <div class="media__left">
            <img src="${props.image}" />
        </div>
        <div class="media__body">
            <h2 class="long-primer kirk">${props.title}</h2>
            <p>${props.description}</p>
        </div>
    </div>
</div>`
            }
        </pre>
    </div>
)

export default SnippetUserNotification;
