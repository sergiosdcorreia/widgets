import React from 'react';

import './SnippetWidgetList.css';

const SnippetWidgetList = props => {

    const iconLocationCode = 
    `
        <svg width="24" height="24" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1152 640q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm256 0q0 109-33 179l-364 774q-16 33-47.5 52t-67.5 19-67.5-19-46.5-52l-365-774q-33-70-33-179 0-212 150-362t362-150 362 150 150 362z"></path>
        </svg>
    `;

    const iconErrorCode =
    `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
        </svg>
    `

    const snippetWidget = () => {
        return (props.widgetData.map((widget) => (
        `
    <li class="0-list__item o-list__item--article">
        <div class="o-list-item__icon">
            ${widget.itemIcon === "iconLocation" && iconLocationCode}
            ${widget.itemIcon === "iconError" && iconErrorCode}
        </div>
        <div class="o-list-item__text">
            <p>${widget.itemDescription}</p>
        </div>
    </li>
        `
    )
)
)}

    return (
    <div className="snippet">
        <pre className="prettyprint">
            {
`<ul class="o-list o-list--article">
    ${snippetWidget().join(" ")}
</ul>`
            }
        </pre>
    </div>
)}

export default SnippetWidgetList;
