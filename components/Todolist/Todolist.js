import React, { useState } from 'react'
import { Button, Text, TextInput, View, FlatList } from 'react-native'
import { observer, useDoc } from 'startupjs'
import { TodoItem } from '../index'
import './Todolist.styl'

// tab consts names
const ALL_TASKS = 'All'
const ACTIVE_TASKS = 'Active'
const COMPLETED_TASKS = 'Completed'

export default observer(function Todolist (props) {
  const [todolist, $todolist] = useDoc('todolist', 'root')
  const [stateText, setStateText] = useState(null)
  if (!todolist) {
    $todolist.addSelf()
  }

  let proccesedTasks = Object.values({ ...todolist }).filter(task => typeof task !== 'string').map(task => ({ ...task, model: $todolist }))
  if (props.tab === ACTIVE_TASKS) proccesedTasks = [...proccesedTasks].filter(task => !task.completed)
  else if (props.tab === COMPLETED_TASKS) proccesedTasks = [...proccesedTasks].filter(task => task.completed)

  const uncompletedTaskCount = proccesedTasks.filter(task => !task.completed).length

  const addTask = () => {
    if (stateText === null || !stateText.length) {
      return
    }
    $todolist.addTask(stateText)
  }
  const setTaskName = (text) => {
    setStateText(text)
  }

  const clearCompleted = () => {
    proccesedTasks.filter(task => task.completed).map(task => {
      task.model.del(task.id)
    })
  }

  return (
    pug`
      View.list
        TextInput.input.setStateText(onChangeText = setTaskName, placeholder = 'Task placeholder')
        View.btn-block
          Button.btn.add(onPress=addTask, title = 'ADD')
        FlatList.tasks.data(data = proccesedTasks, renderItem = TodoItem)
        View.footer
          Text.count #{uncompletedTaskCount} tasks left
          View.tabs
            Text.tab(onPress=(() => props.change(ALL_TASKS))) #{ALL_TASKS}
            Text.tab(onPress=(() => props.change(ACTIVE_TASKS))) #{ACTIVE_TASKS}
            Text.tab(onPress=(() => props.change(COMPLETED_TASKS))) #{COMPLETED_TASKS}
          Text.tab(onPress=clearCompleted) Clear done
    `
  )
})
