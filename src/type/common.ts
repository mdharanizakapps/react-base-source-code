// Define an interface for the request config and responses
export interface ErrorResponse {
  message: string;
  code: string;
  description: string;
  timeStamp: string;
}

export interface ApiResponse<T> {
  data?: T;
  status: string;
  error?: ErrorResponse;
}
