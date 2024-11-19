// Define an interface for the request config and responses
export interface ErrorResponse {
  message: string;
  code: string;
  description: string;
  timeStamp: string;
}

export interface ApiResponse<T> {
  [x: string]: any;
  email(arg0: string, email: any): unknown;
  data?: T;
  status: string;
  error?: ErrorResponse;
}
