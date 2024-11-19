export interface userLoginRequest {
  email: string;
  password: string;
}

export interface userLoginResponse {
  email: string,
  messge: string;
}

export interface UserProfileResponse {
  messge?: string;
}