// import { User } from '../models'
import {
  UserBase,
  UserLogin,
  UserSignUpPayload,
  UserLoginPayload
} from './user_service.types'

class UserService {
  constructor (
    private model: any,
    // private eventEmitter: EventEmitter
  ) {}

  async signUp (data: UserSignUpPayload): Promise<UserBase> {
    const user: UserBase = {
      name: 'Fulano',
      email: 'f@d.cc'
    }
    // this.eventEmmiter.emit('user:sign_up', { user })
    return user
  }

  async login (data: UserLoginPayload): Promise<UserLogin> {
    const user: UserLogin = {
      name: 'Fulano',
      email: 'f@d.cc',
      token: 'abc'
    }
    // this.eventEmmiter.emit('user:login', { user })
    return user
  }
}
