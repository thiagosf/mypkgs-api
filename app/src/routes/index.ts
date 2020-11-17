import { Router } from 'express'

export default (app: any) => {
  // @todo: load every route of modules
  const routes: Router = Router()
  const mock = (req: any, res: any) => {
    res.send({ message: 'hello' })
  }
  routes.get('/', mock)
  app.express.use('/', routes)
}
