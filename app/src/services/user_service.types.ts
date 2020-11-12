export interface UserSignUpPayload {
  name: string
  email: string
}

export interface UserLoginPayload {
  email: string
  password: string
}

export interface UserBase {
  name: string
  email: string
}

export interface UserLogin extends UserBase {
  token: string
}
