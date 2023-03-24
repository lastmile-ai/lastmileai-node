import * as dotenv from 'dotenv'
import { LastMileAIApi, Visibility } from '../api';
import { Configuration } from '../configuration';
dotenv.config()

const configuration = new Configuration({
    apiKey: process.env.LASTMILEAI_API_KEY ?? "",
});

const lastMileAIApi = new LastMileAIApi(configuration);

describe('Trials API Methods', () => {
    test('createTrial', async () => {
        const name = 'Test Trial Node API';
        const modelId = "cldf8cet50004qss7ieqt3amo"; // stable diffusion
        const trial = await lastMileAIApi.createTrial({
            name,
            modelId,
        });
        expect(trial.id).not.toBeNull();
        expect(trial.name).toEqual(name);
        expect(trial.modelId).toEqual(modelId);
        expect(trial.createdAt).not.toBeNull();
        expect(trial.updatedAt).not.toBeNull();
    });
});