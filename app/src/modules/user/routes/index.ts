import { Request, Response, NextFunction, Router } from 'express'

export default (router: Router) => {
  // router.get('/users',
  //   filters.requiresAuth,
  //   list({ model: 'User' })
  // )
  router.get('/users', (req: Request, res: Response, next: NextFunction) => {
    res.send({ success: true })
  })
}
