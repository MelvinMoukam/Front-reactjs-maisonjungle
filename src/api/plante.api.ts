import { CreatePlanteDTO } from "./dto/createplante.dto";
import { PlanteDTO } from "./dto/plant.dto";

export class PlanteApi {
  public static async getAll(): Promise<PlanteDTO[]> {
    const resp = await fetch("http://localhost:3001/plante", {
      method: "GET",
    });

    const data = await resp.json();

    return data;
  }

  public static async createOne(createRequest: CreatePlanteDTO) {
    const resp = await fetch("http://localhost:3001/plante", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(createRequest)
    })
    const data = await resp.json();
    return data;
  };

  public static async deleteOne(PlanteId: number) {
    await fetch(`http://localhost:3001/plante/${PlanteId}`, {
        method:"DELETE"
    })
  }
}
