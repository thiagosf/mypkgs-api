import {
  Module,
  ModuleBootstrap
} from '../../types/modules.types'
import routes from './routes'

const userModule: Module = {
  async bootstrap (): Promise<ModuleBootstrap> {
    return {
      name: 'user',
      dependencies: [
        // 'generic',
        // 'setting',
      ],
      installRoutes: routes
      // @todo: add middlewares, tasks, etc, all structure
    }
  }
}

export default userModule
