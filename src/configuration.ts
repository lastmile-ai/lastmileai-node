import { AxiosRequestConfig } from "axios";
import packageJson from "../package.json";

export interface ConfigurationParameters {
    apiKey: string;
}

export class Configuration {
    /**
     * LastMileAI API Key
     * @memberof Configuration
     */
    apiKey: string;

    /**
     * Default config for axios requests
     * @memberof Configuration
     */
    defaultAxiosConfig: AxiosRequestConfig;

    constructor(param: ConfigurationParameters) {
        this.apiKey = param.apiKey;
        this.defaultAxiosConfig = {
            baseURL: 'https://lastmileai.dev/api/',
            headers: {
                'User-Agent': `LastMileAI/NodeJS/${packageJson.version}`,
                'content-type': 'application/json',
                'Authorization': `Bearer: ${this.apiKey}`,
            }
        };
    }
}