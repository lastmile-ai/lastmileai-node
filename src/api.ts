import axios from "axios";
import { Configuration } from "./configuration";

/**
 * LastMileAIApi - API for interfacing with LastMileAI
 * @export
 * @class LastMileAIApi
 */
export class LastMileAIApi {
    protected configuration: Configuration | undefined;

    constructor(configuration?: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * 
     * @summary Returns status of API layer
     * @memberof LastMileAIApi
     */
    public async apiHealth(): Promise<{ status: string }> {
        const res = await axios.get('https://lastmileai.dev/api/health');
        return res.data.json();
    }
};