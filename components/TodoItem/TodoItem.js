import React from 'react'
import { Button, Text, View } from 'react-native'
import './TodoItem.styl'

export default function TodoItem ({ item }) {
  const markAsCompleted = () => {
    item.model.set(item.id, { name: item.name, id: item.id, completed: !item.completed })
  }

  const deleteTask = () => {
    item.model.del(item.id)
  }

  return (
    pug`
      View.task-line
        Button.complete-btn.complete(onPress=markAsCompleted, title = item.completed ? 'Undo' : 'Done')
        if item.completed
          Text.task-text.completed #{item.name}
        else
          Text.task-text #{item.name}
        Button.delete-btn.complete(onPress=deleteTask, title = 'Delete')
    `
  )
}
