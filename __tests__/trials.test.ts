import * as dotenv from "dotenv";
import { LastMile } from "../api";
dotenv.config();

const lastMileAIApi = new LastMile({apiKey: process.env.LASTMILEAI_API_KEY ?? ""});

describe("Trials API Methods", () => {
  test("createTrial", async () => {
    const name = "Test Trial Node API";
    const modelId = "cldf8cet50004qss7ieqt3amo"; // stable diffusion
    const trial = await lastMileAIApi.createTrial({
      name,
      modelId,
    });
    const model = await lastMileAIApi.readModel(modelId);
    expect(model.id).toEqual(modelId);
    expect(trial.id).not.toBeNull();
    expect(trial.name).toEqual(name);
    expect(trial.playgroundModelId).toEqual(modelId);
    expect(trial.createdAt).not.toBeNull();
    expect(trial.updatedAt).not.toBeNull();
  });
});
