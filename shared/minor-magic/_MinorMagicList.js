import React from 'react';

import shuffle from '../../shuffle.mjs';

class MinorMagicList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { list: [] };
    }

    // todo, hm, so it's static, so maybe this should be factored out?
    static generateList({ objects, properties, number = 7 }) {
        let list = [];

        // todo, this feels clunky, but i mean, it works for a deep copy for now
        let shuffledSubsetOfObjects = shuffle(JSON.parse(JSON.stringify(objects)));
        let shuffledSubsetOfProperties = shuffle(JSON.parse(JSON.stringify(properties)));

        for(let i = 0; i < number; i++) {
            // todo, also kind of clunky, but it refills the property and object pools if we run low
            if(shuffledSubsetOfProperties.length < 2) {
                shuffledSubsetOfProperties = shuffle(JSON.parse(JSON.stringify(properties)));
            }

            if(shuffledSubsetOfObjects.length === 0) {
                shuffledSubsetOfObjects = shuffle(JSON.parse(JSON.stringify(objects)));
            }

            let firstProp = shuffledSubsetOfProperties.pop();
            let secondProp = shuffledSubsetOfProperties.pop();
            let localObject = shuffledSubsetOfObjects.pop();

            list.push({
                prefix: firstProp.prefix,
                suffix: secondProp.suffix,
                name: localObject.name,
                firstDescription: firstProp.description,
                secondDescription: secondProp.description
            });
        }

        return list;
    }

    componentDidMount() {
        this.setState({ list: MinorMagicList.generateList(this.props) });
    }

    componentWillReceiveProps(props)    {
        this.setState({ list: MinorMagicList.generateList(props) });
    }

    render() {
        return (
            <ul>
                {
                    this.state.list.map( (item, index) => {
                        return (
                            <li key={index}>
                                <div><h2>{item.prefix} {item.name} {item.suffix}</h2></div>
                                <div>
                                    <p>{item.firstDescription}</p>
                                    <p>{item.secondDescription}</p>
                                </div>
                            </li>
                        )
                    } )
                }
            </ul>
        )
    }
}

export default MinorMagicList;
