// import { User } from '../models'
import {
  UserBase,
  UserLogin,
  UserSignUpPayload,
  UserLoginPayload
} from './user_service.types'

class UserService {
  async signUp (data: UserSignUpPayload): Promise<UserBase> {
    const user: UserBase = {
      name: 'Fulano',
      email: 'f@d.cc'
    }
    return user
  }

  async login (data: UserLoginPayload): Promise<UserLogin> {
    const user: UserLogin = {
      name: 'Fulano',
      email: 'f@d.cc',
      token: 'abc'
    }
    return user
  }
}
