import { BASE_URL } from '@env'
import init from 'startupjs/init'
import orm from './model'
import React, { useState } from 'react'
import {
  View,
  Text
} from 'react-native'
import {
  observer
} from 'startupjs'
import './Root.styl'
import { Todolist } from './components/index'

// Init startupjs connection to server and the ORM.
// baseUrl option is required for the native to work - it's used
// to init the websocket connection and axios.
// Initialization must start before doing any subscribes to data.
init({ baseUrl: BASE_URL, orm })

export default observer(function Root () {
  let [stateTab, setStateTab] = useState('All')

  const changeTab = ($event) => {
    setStateTab($event)
  }

  return pug`
    View.wrapper
      Text.greeting todos
      Todolist(tab=stateTab, change=changeTab)
  `
})
