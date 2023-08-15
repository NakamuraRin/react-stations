// DO NOT DELETE

import * as React from 'react'
import './App.css'

import { Header } from './Header'
import { Description } from './Description'
import { DogListContainer } from './DogListContainer'

/**
 * 
 * @type {React.FC}
 */

const App = () => {

  return (
    <div className='body'>
      <Header />
      <Description />
      <DogListContainer />
    </div>
  )
}

export { App }
