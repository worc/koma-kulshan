import React from 'react';

import { getFromShuffled } from "../../util/Generators";

import MinorMagicItem from './MinorMagicItem';
import Reshuffle from '../Reshuffle';

export default class MinorMagicItemWithShuffle extends React.Component {
    constructor(props) {
        super(props);

        this.propertiesGenerator = getFromShuffled(this.props.properties);
        this.objectsGenerator = getFromShuffled(this.props.objects);

        this.state = {
            firstProperty: {},
            secondProperty: {},
            name: '',
            objectsIndex: 0,
            propertiesIndex: 0,
            search: {
                prefix: this.props.search.get('prefix'),
                type: this.props.search.get('type'),
                suffix: this.props.search.get('suffix')
            }
        };
    }

    componentDidMount() {
      let prefix = (this.state.search.prefix) ? this.props.properties.find(prop => {
          return prop.prefix.toLowerCase() === this.state.search.prefix.toLowerCase();
      }) : this.propertiesGenerator.next().value;

      let type = (this.state.search.type) ? this.props.objects.find(thing => {
          return thing.name.toLowerCase() === this.state.search.type.toLowerCase();
      }) : this.objectsGenerator.next().value;

      let suffix = (this.state.search.suffix) ? this.props.properties.find(prop => {
          return prop.suffix.toLowerCase() === this.state.search.suffix.toLowerCase();
      }) : this.propertiesGenerator.next().value;

        this.setState({
            firstProperty: prefix,
            secondProperty: suffix,
            name: type.name,
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

    render() {
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
                <Reshuffle
                    reshuffleHandler={ this.reshuffleHandler.bind(this) }
                    subShuffles={[ 'prefix', 'type', 'suffix' ]}
                />
            </div>
        )
    }
}
