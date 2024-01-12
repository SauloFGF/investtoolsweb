import { AxiosError } from 'axios';

export interface ISendRequest {
    url: string;
    payload?: any;
    headers?: Record<string, string>;
};

export interface IApiResponse<T = any | undefined> {
    data?: T;
    error?: AxiosError;
    isValid: boolean;
    errorMessage?: string;
};

export class ApiResponseModel<T = any> implements IApiResponse<T> {
    constructor(arg: IApiResponse<T>) {
        this.data = arg.data || {} as T;
        this.isValid = arg.isValid;
        this.errorMessage = arg.errorMessage;
    }

    isValid: boolean;
    errorMessage?: string;
    data: T;
};

export class HelperModel<T = any | undefined> {
    constructor(isValid: boolean, errorMessage?: string[], element?: T) {
        this.isValid = isValid;
        this.errorMessage = errorMessage;
        this.element = element;
    }
    
    isValid: boolean;
    errorMessage?: string[];
    element?: T
};

export interface IJsonWebToken {
    accessToken: string;
    refreshToken: string;
    userEmail: string;
};

export interface IPayload {
    exp: number;
    iat: number;
    nbf: number;
    role: string;
};