import {
  GetBySuppliersRequest,
  GetBySuppliersResponse,
  GetOverviewRequest,
  GetOverviewResponse,
} from '../type/data/dashboard/dashboard';
import { GetTopProductsRequest, GetTopProductsResponse } from '../type/data/dashboard/dashboard';
import axiosInstance from './axiosInstance';

export const getOverviewData = async (payload: GetOverviewRequest) => {
  try {
    const response = await axiosInstance.post<GetOverviewResponse>(
      'api/dashboard/overview',
      payload
    );
    return response;
  } catch (error) {
    console.error('Error fetching overview data:', error);
    throw error;
  }
};

export const getTopProductsData = async (payload: GetTopProductsRequest) => {
  try {
    const response = await axiosInstance.post<GetTopProductsResponse>(
      'api/dashboard/top-products',
      payload
    );
    return response;
  } catch (error) {
    console.error('Error fetching top-products data:', error);
    throw error;
  }
};
export const getBySuppliersData = async (payload: GetBySuppliersRequest) => {
  try {
    const response = await axiosInstance.post<GetBySuppliersResponse>(
      'api/dashboard/by-suppliers',
      payload
    );
    return response;
  } catch (error) {
    console.error('Error fetching by-suppliers data:', error);
    throw error;
  }
};