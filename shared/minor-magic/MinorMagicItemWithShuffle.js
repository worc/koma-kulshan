import React, { useState, useEffect } from 'react'
import { getFromShuffled } from "../../util/Generators";
import MinorMagicItem from './MinorMagicItem';
import Reshuffle from '../Reshuffle';

const propertyInitialState = { prefix: '', suffix: '', description: '' }

export default ({ objects, properties, bookmark }) => {
  const [firstProperty, setFirstProperty] = useState(propertyInitialState)
  const [secondProperty, setSecondProperty] = useState(propertyInitialState)
  const [name, setName] = useState('')
  const [propertiesGenerator, setPropertiesGenerator] = useState()
  const [objectsGenerator, setObjectsGenerator] = useState()

  useEffect(() => {
    setPropertiesGenerator(getFromShuffled(properties))
    setObjectsGenerator(getFromShuffled(objects))
  }, [objects, properties])

  // initialize properties only after the generator has been instantiated
  useEffect(() => {
    if (propertiesGenerator) {
      const prefix = bookmark.prefix
        ? properties.find(property => property.prefix.toLowerCase() === bookmark.prefix.toLowerCase())
        : propertiesGenerator.next().value

      const suffix = bookmark.suffix
        ? properties.find(property => property.suffix.toLowerCase() === bookmark.suffix.toLowerCase())
        : propertiesGenerator.next().value

      setFirstProperty(prefix)
      setSecondProperty(suffix)
    }
  }, [propertiesGenerator, bookmark])

  // likewise only try to initiate the name if the object generator has been instantiated
  useEffect(() => {
    if (objectsGenerator) {
      const name = bookmark.name
        ? objects.find(object => object.name.toLowerCase() === bookmark.name.toLowerCase()).name
        : objectsGenerator.next().value.name

      setName(name)
    }
  }, [objectsGenerator])

  useEffect(() => {

  }, [bookmark])

  function reshuffleHandler (event) {
    switch (event.target.textContent) {
      case 'prefix':
        setFirstProperty(propertiesGenerator.next().value)
        break
      case 'suffix':
        setSecondProperty(propertiesGenerator.next().value)
        break
      case 'type':
        setName(objectsGenerator.next().value.name)
        break
      case 'reshuffle':
        setFirstProperty(propertiesGenerator.next().value)
        setSecondProperty(propertiesGenerator.next().value)
        setName(objectsGenerator.next().value.name)
        break
      default:
        console.error(`shuffle event type wasn't handled!`)
    }
  }

  return (
    <div style={{ display: 'flex', flex: '1 0 auto', flexFlow: 'column'}}>
      <MinorMagicItem
        style={{ flex: '1 0 auto' }}
        prefix={ firstProperty.prefix }
        suffix={ secondProperty.suffix }
        name={ name }
        firstDescription={ firstProperty.description }
        secondDescription={ secondProperty.description }
      />
      <Reshuffle
        reshuffleHandler={ reshuffleHandler }
        subShuffles={[ 'prefix', 'type', 'suffix' ]}
      />
    </div>
  )
}
