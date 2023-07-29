import { RouteObject } from "react-router-dom";
import Creature from "../../pages/creature/Creature";
import CreatureCard from "../../pages/CreatureCard/CreatureCard";

  export const seaCreatures: RouteObject[] = [
  {
    path: "/sea",
    element: <Creature name="Sea Creature" creatureType="sea" />,
  },
  {
    path: "/sea/:id",
    element: <CreatureCard creatureType='sea'/>,
  }
];
