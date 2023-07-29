import { RouteObject } from "react-router-dom";
import Creature from "../../pages/creature/Creature";
import CratureCard from "../../pages/CreatureCard/CreatureCard";

export const fish: RouteObject[] = [
  {
    path: "/fish",
    element: <Creature name="Fish" creatureType="fish" />,
  },
  {
    path: "/fish/:id",
    element: <CratureCard creatureType='fish' />,
  },
];
