import express from 'express'
import routes from './routes'

class App {
  express: any;

  constructor () {
    this.init()
  }

  init () {
    this.express = express()
    this.setMiddlewares()
    this.setRoutes()
  }

  setRoutes () {
    routes(this)
  }

  setMiddlewares () {
    // @todo
  }

  listen (port: number, fn: any) {
    return this.express.listen(port, fn)
  }

  async stopServices (): Promise<any> {
    // @todo
    console.log('stopping services')
    return true
  }
}

export default App
