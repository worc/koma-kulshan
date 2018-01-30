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
            case 'all':
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
        return (
            <div>
                <MinorMagicItem
                    prefix={ this.state.firstProperty.prefix }
                    suffix={ this.state.secondProperty.suffix }
                    name={ this.state.name }
                    firstDescription={ this.state.firstProperty.description }
                    secondDescription={ this.state.secondProperty.description }
                />
                <div onClick={ this.reshuffleHandler.bind(this) }>
                    <div>prefix</div>
                    <div>type</div>
                    <div>suffix</div>
                    <div>all</div>
                </div>
            </div>
        )
    }
}
