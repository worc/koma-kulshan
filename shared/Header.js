import React from 'react';

export default () => {
    let style = {
        fontSize: '0.8rem',
        fontVariantCaps: 'all-small-caps',
        letterSpacing: '0.1rem',
        padding: '1px 10px',
        textAlign: 'justify',
    };

    // this takes the place of an :after pseudo class that would trigger
    // text-align: justify to work correctly

    // after content to trigger justify:
    // https://stackoverflow.com/a/43728929/769780

    // pseudo classes in react:
    // https://stackoverflow.com/questions/28269669/css-pseudo-elements-in-react
    let hack = {
        display: 'inline-block',
        width: '100%'
    };

    return (
        <header style={ style }>
            <div>
                Thunder Rolling to Higher Mountainsides
                <div style={ hack } />
            </div>
        </header>
    )
}