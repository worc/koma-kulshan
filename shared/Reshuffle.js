import React from 'react';

const containerStyle = {
    cursor: 'pointer',
    display: 'flex',
    flex: '0 0 auto',
    flexFlow: 'row wrap',
    fontVariantCaps: 'all-small-caps',
    letterSpacing: '0.2rem',
    margin: '0 -10px',
};

const buttonStyle = {
    alignItems: 'center',
    border: '1px solid black',
    display: 'flex',
    flex: '1 0 auto',
    height: '4rem',
    justifyContent: 'center',
    padding: '0 20px'
};

const reshuffleStyle = {
    backgroundColor: '#8d88df',
    boxSizing: 'border-box',
    color: '#fff',
    flex: '1 0 100%'
};

const subShufflesGroupStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    width: '100%'
};

const subShuffleButtonStyle = {
    backgroundColor: '#ace',
};

export default ({reshuffleHandler, subShuffles}) => {
    return (
        <div style={ containerStyle } onClick={ reshuffleHandler }>
            <div style={{ ...buttonStyle, ...reshuffleStyle }}><span>reshuffle</span></div>
            <div style={ subShufflesGroupStyle }>
                {
                    subShuffles.map((sub, i) => {
                        return (<div
                                    key={i}
                                    style={{ ...buttonStyle, ...subShuffleButtonStyle }}>
                                    <span>{sub}</span>
                                </div>)
                    })
                }
            </div>
        </div>
    )
}