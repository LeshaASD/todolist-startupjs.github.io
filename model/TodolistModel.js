import { BaseModel } from 'startupjs/orm'
// import { useDoc } from 'startupjs'

export default class ToDoModel extends BaseModel {
  async addSelf () {
    await this.root.addAsync(this.getCollection(), {
      id: this.getId()
    })
  }

  async addTask (name) {
    await this.addAsync({
      name,
      completed: false,
      deleted: false,
      id: this.id()
    })
  }
}
