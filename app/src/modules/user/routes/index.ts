import { v5 as uuidv5 } from 'uuid'
import { Request, Response, NextFunction, Router } from 'express'
import { JSONResponse } from '../../../types/response.types'
import config from '../../../config'

export default (router: Router) => {
  // router.get('/users',
  //   filters.requiresAuth,
  //   list({ model: 'User' })
  // )
  router.get('/admin/users', (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: any[] = [
        {
          uuid: uuidv5('1', config.appNamespace),
          username: 'fulano'
        }
      ]
      // @todo: add event AdminUserListEvent (data)
      const response: JSONResponse = {
        success: true,
        data
      }
      res.send(response)
    } catch (error) {
      next(error)
    }
  })
}
