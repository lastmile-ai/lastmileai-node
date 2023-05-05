import { AxiosRequestConfig } from "axios";

export type Configuration = {
    /**
     * LastMileAI API Key
     * @memberof Configuration
     */
    apiKey: string;

    /**
     * Default config for axios requests
     * @memberof Configuration
     */
    defaultAxiosConfig?: AxiosRequestConfig;
}
