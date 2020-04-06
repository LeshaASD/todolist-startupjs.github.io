import Todolist from './TodolistModel'

export default function (racer) {
  racer.orm('todolist.*', Todolist)
}
