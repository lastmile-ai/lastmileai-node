export interface ConfigurationParameters {
    apiKey?: string;
}

export class Configuration {
    /**
     * LastMileAI API Key
     * @memberof Configuration
     */
    apiKey?: string;

    constructor(param: ConfigurationParameters = {}) {
        this.apiKey = param.apiKey;
    }
}