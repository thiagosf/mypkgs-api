export interface Module {
  bootstrap: Function
}

export interface ModuleBootstrap {
  name: string
  dependencies: string[]
  installRoutes?: any
}
