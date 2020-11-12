import {
  UserBase,
  UserLogin,
  UserSignUpPayload,
  UserLoginPayload
} from './user_service.types'

declare class UserService {
  signUp (data: UserSignUpPayload): Promise<UserBase>;
  login (data: UserLoginPayload): Promise<UserLogin>;
}
