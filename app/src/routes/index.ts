import { Router } from 'express'
import { ModuleBootstrap } from '../types/modules.types'

export default async (app: any) => {
  const routes: Router = Router()
  const modules = await app.getModules()
  modules.forEach((item: ModuleBootstrap) =>
    item.installRoutes(routes)
  )
  app.express.use('/', routes)
}
