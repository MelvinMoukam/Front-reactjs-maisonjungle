import { useState, useEffect } from "react";
import { PlanteDTO } from "../../api/dto/plant.dto";
import { PlanteApi } from "../../api/plante.api";
import PlantItem from "./PlantItem";
import "../../styles/PlantList.css";

function PlantList() {
  const [plants, setPlants] = useState<PlanteDTO[]>([]);

  useEffect(() => {
    async function fetchPlants() {
      const response = await PlanteApi.getAll();

      setPlants(response);
    }
    fetchPlants();
  }, []);

  return (
    <div>
      <ul className="lmj-plant-list">
        {plants.map(({ id, cover, name, water, light }) => (
          <div>
            <PlantItem
              id={id}
              cover={cover}
              name={name}
              water={water}
              light={light}
            />
            <button >Ajouter</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default PlantList;
