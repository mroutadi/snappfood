import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {createAxiosConfig} from './initialize';
import {isFunction} from "../../../utils";

const GET_REQUEST = 'get';
const POST_REQUEST = 'post';

type ApiResultTransformer = (response: AxiosResponse<any>) => any;
type ApiInputTransformer = (data: any) => any;

interface ApiRequest {
  url: string;
  type?: typeof GET_REQUEST | typeof POST_REQUEST;
  config?: AxiosRequestConfig;
  responseTransformer?: ApiResultTransformer;
  inputTransformer?: ApiInputTransformer;
}

const {get, post} = createAxiosConfig({
  configuration: {
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 30_000,
    headers: {},
    withCredentials: true,
  }
});

const apiRequest = (
  {
    url,
    type = GET_REQUEST,
    config,
    responseTransformer,
    inputTransformer,
  }: ApiRequest): ((apiData?: object) => Promise<any>) => {
  const requestConfig: AxiosRequestConfig = {
    ...config,
    method: type
  };
  return (apiData?: object) => {
    const data = inputTransformer ? inputTransformer(apiData) : apiData;
    const finalUrl = isFunction(url) ? url(data) : url;
    try {
      let promise;
      if (type === GET_REQUEST) {
        promise = get({
          url: finalUrl,
          config: {
            params: data,
            ...requestConfig
          },
        }).then(responseTransformer || ((result) => result));
      } else {
        promise = post({
          url: finalUrl,
          data,
          config: requestConfig
        }).then(responseTransformer || ((result) => result));
      }
      return promise;
    } catch (error) {
      throw error;
    }
  };
};

export { apiRequest };
