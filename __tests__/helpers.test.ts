import * as dotenv from 'dotenv'
import { LastMile } from '../api';
dotenv.config()

const lastMileAIApi = new LastMile({apiKey: process.env.LASTMILEAI_API_KEY ?? "",});

describe('Helper API Methods', () => {
    test('apiHealth', async () => {
        const health = await lastMileAIApi.apiHealth();
        expect(health.status).toEqual('OK');
    });
});