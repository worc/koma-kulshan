import React from 'react';

import shuffle from '../../shuffle.mjs';

import MinorMagicItem from './MinorMagicItem';

export default class MinorMagicItemWithShuffle extends React.Component {
    constructor(props) {
        super(props);

        this.propertiesGenerator = this.getFromShuffled(this.props.properties);
        this.objectsGenerator = this.getFromShuffled(this.props.objects);

        this.state = {
            firstProperty: {},
            secondProperty: {},
            name: '',
            objectsIndex: 0,
            propertiesIndex: 0
        };
    }

    componentDidMount() {
        this.setState({
            firstProperty: this.propertiesGenerator.next().value,
            secondProperty: this.propertiesGenerator.next().value,
            name: this.objectsGenerator.next().value.name,
        });
    }

    componentWillReceiveProps() {
        this.setState({
            firstProperty: this.propertiesGenerator.next().value,
            secondProperty: this.propertiesGenerator.next().value,
            name: this.objectsGenerator.next().value.name,
        });
    }

    reshuffleHandler(event) {
        let newState = {};

        switch (event.target.textContent) {
            case 'prefix':
                newState = { firstProperty: this.propertiesGenerator.next().value };
                break;
            case 'type':
                newState = { name: this.objectsGenerator.next().value.name };
                break;
            case 'suffix':
                newState = { secondProperty: this.propertiesGenerator.next().value };
                break;
            case 'reshuffle':
                newState = {
                    firstProperty: this.propertiesGenerator.next().value,
                    secondProperty: this.propertiesGenerator.next().value,
                    name: this.objectsGenerator.next().value.name,
                };
                break;
            default:
                console.warn('wtf...');
        }

        this.setState(newState);
    }

    // todo move generator to a util class with other static functions?
    *getFromShuffled(list) {
        let index = 0;
        shuffle(list);

        while(list) {
            if(index >= list.length) {
                shuffle(list);
                index = 0;
            }

            yield list[index++];
        }
    }

    render() {
        let buttonCommonStyle = {
            boxSizing: 'border-box',
            height: '4rem'
        };

        let threeButtonStyle = {
            alignItems: 'center',
            border: '1px solid black',
            display: 'flex',
            flex: '1 0 auto',
            height: '100%',
            justifyContent: 'center'
        };

        return (
            <div style={{ display: 'flex', flex: '1 0 auto', flexFlow: 'column'}}>
                <MinorMagicItem
                    style={{ flex: '1 0 auto' }}
                    prefix={ this.state.firstProperty.prefix }
                    suffix={ this.state.secondProperty.suffix }
                    name={ this.state.name }
                    firstDescription={ this.state.firstProperty.description }
                    secondDescription={ this.state.secondProperty.description }
                />
                <div
                    style={{
                        display: 'flex',
                        flex: '0 0 auto',
                        flexFlow: 'row wrap',
                        fontVariantCaps: 'all-small-caps',
                        letterSpacing: '0.2rem',
                        margin: '0 -10px'
                    }}
                    onClick={ this.reshuffleHandler.bind(this) }
                >
                    <div style={{
                        border: '1px solid black',
                        ...buttonCommonStyle,
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#8d88df',
                        color: '#fff',
                        flex: '1 0 100%',
                        justifyContent: 'center'
                    }}>
                        <div>reshuffle</div>
                    </div>
                    <div
                        style={{
                            alignItems: 'center',
                            ...buttonCommonStyle,
                            backgroundColor: '#ace',
                            display: 'flex',
                            flex: '1 0 100%',
                            flexFlow: 'row wrap',
                            justifyContent: 'space-around'
                        }}
                    >
                        <div style={threeButtonStyle}><span>prefix</span></div>
                        <div style={threeButtonStyle}><span>type</span></div>
                        <div style={threeButtonStyle}><span>suffix</span></div>
                    </div>
                </div>
            </div>
        )
    }
}
