import React from 'react';

import './Snippet.css';

const Snippet = (props) => (
    <div className="snippet">
        <pre className="prettyprint">
            {
`<a class="link" href="${props.link}">
    <div class="fb"> 
        <div class="img--container">
            <img scr="${props.image}">
        </div>
        <div class="text-block">
            <h1 class="title">${props.title}</h1>
            <p>${props.description}</p>
        </div>
    </div>
</a>`
            }
        </pre>
    </div>
)

export default Snippet;