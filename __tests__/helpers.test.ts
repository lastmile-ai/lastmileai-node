import * as dotenv from 'dotenv'
import { LastMileAIApi } from '../api';
import { Configuration } from '../configuration';
dotenv.config()

const configuration = new Configuration({
    apiKey: process.env.LASTMILEAI_API_KEY ?? "",
});

const lastMileAIApi = new LastMileAIApi(configuration);

describe('Helper API Methods', () => {
    test('apiHealth', async () => {
        const health = await lastMileAIApi.apiHealth();
        expect(health.status).toEqual('OK');
    });
});