import init from 'startupjs/init'
import orm from './model'
import startupjsServer from 'startupjs/server'

// Init startupjs ORM.
init({ orm })

// Check '@startupjs/server' readme for the full API
startupjsServer({ getHead }, ee => {
  ee.on('routes', expressApp => {
    expressApp.get('/api', async (req, res) => {
      let { model } = req
      let $todolist = model.at('todolist')
      await $todolist.subscribeAsync()
      res.json({ name: 'Test API', counter: $todolist.get() })
    })
  })
})

function getHead (appName) {
  return `
    <title>HelloWorld</title>
    <!-- Put vendor JS and CSS here -->
  `
}
