
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