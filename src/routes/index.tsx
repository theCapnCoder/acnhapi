import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import { fish } from "./fish/fish";
import { seaCreatures } from "./seaCreatures/seaCreatures";
import { bugs } from "./bugs/bugs";
import { art } from "./art/art";
import { bgm } from "./bgm/bgm";
import { fossils } from "./fossils/fossils";
import { hourlyMusic } from "./hourlyMusic/hourlyMusic";
import { icons } from "./icons/icons";
import { images } from "./images/images";
import { items } from "./items/items";
import { songs } from "./songs/songs";
import { villagers } from "./villagers/villagers";
import { music } from "./music/music";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      children: [
        ...art,
        ...bgm,
        ...bugs,
        ...fish,
        ...fossils,
        ...hourlyMusic,
        ...icons,
        ...images,
        ...items,
        ...music,
        ...seaCreatures,
        ...songs,
        ...villagers,
      ],
    },
  ],
  {
    basename: "/acnhapi",
  }
);

export default router;
