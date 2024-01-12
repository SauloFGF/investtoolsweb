import { useCallback } from 'react';
import axios, { AxiosError } from 'axios';
import { ApiResponseModel, ISendRequest } from './model';

const ERROR_MESSAGE = 'Ocorreu um erro, tente novamente.';

const useHoookApiController = () => {

    function createAxios(baseURL: string) {
        return axios.create({
            baseURL
        })
    }

    const get = useCallback(async <TResponse extends any>(request: ISendRequest): Promise<ApiResponseModel<TResponse>> => {
        const { url } = request;
        const axiosInstance = createAxios('https://localhost:7128/v1/Investimento');

        const response: ApiResponseModel<TResponse> = await axiosInstance
            .get(url)
            .then((resp) => {
                return new ApiResponseModel({
                    data: resp.data,
                    error: undefined,
                    isValid: true
                })
            })
            .catch((error: AxiosError) => {
                const data = error.response && error.response.data as any;
                return new ApiResponseModel({
                    data: {} as TResponse,
                    error: error,
                    errorMessage: data ? `${data.detail}` : ERROR_MESSAGE,
                    isValid: false
                })
            })

        return response
    }, []);

    const post = useCallback(async <TResponse extends any>(request: ISendRequest): Promise<ApiResponseModel<TResponse>> => {
        const { url, payload, headers } = request;
        const axiosInstance = createAxios('https://localhost:7128');

        const response: ApiResponseModel<TResponse> = await axiosInstance
            .post(url, payload, {
                headers: headers || {}, // Use headers se estiver definido, caso contrário, use um objeto vazio
            })
            .then((resp) => {
                return new ApiResponseModel({
                    data: resp.data,
                    error: undefined,
                    isValid: true
                });
            })
            .catch((error: AxiosError) => {
                const data = error.response && error.response.data as any;
                return new ApiResponseModel({
                    data: {} as TResponse,
                    error: error,
                    errorMessage: data ? `${data.detail}` : ERROR_MESSAGE,
                    isValid: false
                });
            });

        return response;
    }, []);

    return { get, post }
};

export default useHoookApiController;
