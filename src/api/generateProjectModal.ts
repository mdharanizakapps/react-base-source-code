
import { GenerateProjectReq } from "../type/data/generateProject";
import axiosInstance from "./axiosInstance";


export const getProjectDetailsApi = async (projectId: number) => {
  try {
    const response = await axiosInstance.get(
      `/ui-library/api/project/${projectId}`,

    );

    // const responseData= response.data; // Adjust based on actual API response

    return response;

  } catch (error) {
    console.error('Error fetching overview data:', error);
    throw error;
  }
};

export const generateProjectApi = async (payload: GenerateProjectReq) => {
  try {
    const response = await axiosInstance.post(
      '/ui-library/api/project',
      payload, {
      responseType: 'arraybuffer', // Handle both binary and JSON responses
    }
    );
    console.log("generateProjectApi - response:  ", response)

    
    return response
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
