import { RouteObject} from 'react-router-dom'
import Creature from '../../pages/creature/Creature'
import CreatureCard from '../../pages/CreatureCard/CreatureCard'

export const bugs: RouteObject[] = [
  {
    path: "/bugs",
    element: <Creature name="Bugs" creatureType="bugs" />,
  },
  {
    path: "/bugs/:id",
    element: <CreatureCard creatureType='bugs' />,
  }
]