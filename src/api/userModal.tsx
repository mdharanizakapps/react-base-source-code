import axiosInstance from './axiosInstance';
import { ApiResponse } from '../type/common';
import { UserRequest } from '../type/data/user';


export const userLogin = async (payload: UserRequest) => {
  try {
    const response = await axiosInstance.post(
      '/ui-library/api/login',
      payload
    );
    return response
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const userProfile = async (userId: string) => {
  try {
    const response = await axiosInstance.get<ApiResponse<UserResponse[]>>(
      `/userProfile/user=${userId}`
    );
    return response.data; // TypeScript knows this is of type ApiResponse<User[]>
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

