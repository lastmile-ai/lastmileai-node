import * as dotenv from 'dotenv'
import { LastMile, Visibility } from '../api';
dotenv.config()

const lastMileAIApi = new LastMile({apiKey: process.env.LASTMILEAI_API_KEY ?? ""});

describe('Embeddings API Methods', () => {
    test('createEmbeddingCollection', async () => {
        const name = 'Test';
        const description = 'Test EmbeddingCollection from node API';
        const embeddingCollection = await lastMileAIApi.createEmbeddingCollection({
            name,
            description,
        });
        expect(embeddingCollection.id).not.toBeNull();
        expect(embeddingCollection.name).toEqual(name);
        expect(embeddingCollection.description).toEqual(description);
        expect(embeddingCollection.createdAt).not.toBeNull();
        expect(embeddingCollection.updatedAt).not.toBeNull();
        expect(embeddingCollection.error).toBeNull();
        expect(embeddingCollection.visibility).toBe(Visibility.MEMBER);
    });
});