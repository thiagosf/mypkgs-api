import express, { Express } from 'express'
import routes from './routes'
import modules from './modules'
import { ModuleBootstrap } from './types/modules.types'

class App {
  express?: Express;
  modules?: ModuleBootstrap[];

  constructor () {
    this.init()
  }

  async init () {
    this.express = express()
    await this.installModules()
    await this.setMiddlewares()
    await this.setRoutes()
  }

  async setRoutes () {
    await routes(this)
  }

  async setMiddlewares () {
    // @todo
  }

  listen (port: number, fn: any) {
    return this.express!.listen(port, fn)
  }

  async installModules () {
    this.modules = await Promise.all(
      modules.enabled.map(_module => _module.bootstrap())
    )
    this.checkModuleDependencies()
  }

  getModules (): ModuleBootstrap[] {
    return this.modules!
  }

  checkModuleDependencies () {
    const allLoaded = this.modules!.map(_item => _item.name)
    for (const item of this.modules!) {
      if (item.dependencies.length > 0) {
        const hasAll = item.dependencies.every((name: string) => {
          return allLoaded.includes(name)
        })
        if (!hasAll) {
          throw new Error(`Module ${item.name} requires: ${item.dependencies.join(', ')}`)
        }
      }
    }
  }

  async stopServices (): Promise<any> {
    // @todo
    console.log('stopping services')
    return true
  }
}

export default App
