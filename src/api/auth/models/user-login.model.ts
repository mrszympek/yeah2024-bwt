export interface UserLoginRequest {
  password: string;
  email: string;
}

export interface UserLoginResponse {
  token: string;
}
