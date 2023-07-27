import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults
} from 'axios';

function createAxiosConfig({configuration}: {configuration: CreateAxiosDefaults<unknown>}) {
  const { baseURL, timeout, headers } = configuration;
  const axiosInstance: AxiosInstance = axios.create({
    baseURL,
    timeout,
    headers
  });
  // Request Interceptor
  axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      // You can modify the request config here (e.g., add authentication tokens)
      return config;
    },
    (error) => {
      // Handle request error (if any)
      return Promise.reject(error);
    }
  );
  // Response Interceptor
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      // You can handle successful responses here
      return response;
    },
    (error) => {
      // Handle response error (if any)
      return Promise.reject(error);
    }
  );
  // Get Method
  const get = <T>({url, config}: {
    url: string, config?: object
  }): Promise<T | void> => {
    return axiosInstance
      .get<T>(url, config)
      .then((response: AxiosResponse<T>) => response.data)
      .catch((error) => {
        console.error('Error in request GET:', error.message);
      });
  };
  // Post Method
  const post = <T>({url, data, config}: {
    url: string, data?: object, config?: object
  }): Promise<T | void> => {
    return axiosInstance
      .post<T>(url, data, config)
      .then((response: AxiosResponse<T>) => response.data)
      .catch((error) => {
        console.error('Error in request POST:', error.message);
      });
  };
  return {get, post};
}

export { createAxiosConfig };

