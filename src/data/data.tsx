import { SetMeal, Coronavirus, PestControl, Air, HolidayVillage, CropOriginal, LibraryMusic, MusicNote, ColorLens, SpatialAudio, BarChart, Description } from "@mui/icons-material";
import Art from "../pages/art/Art";

type ListItem = {
  id: number;
  title: string;
  url: string;
  icon: React.ReactNode;
};

type Menu = {
  id: number;
  title: string;
  listItems: ListItem[];
};

export const menu: Menu[] = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Fish",
        url: "/fish",
        icon: <SetMeal />,
      },
      {
        id: 2,
        title: "seaCreatures",
        url: "/seaCreatures",
        icon: <Coronavirus />,
      },
      {
        id: 3,
        title: "Bugs",
        url: "/bugs",
        icon: <PestControl />,
      },
      {
        id: 4,
        title: "Fossils",
        url: "/fossils",
        icon: <Air />,
      },
      {
        id: 5,
        title: "Villagers",
        url: "/villagers",
        icon: <Art />,
      },
      {
        id: 6,
        title: "Icons",
        url: "/icons",
        icon: <HolidayVillage />,
      },
      {
        id: 7,
        title: "Images",
        url: "/images",
        icon: <CropOriginal />,
      },
      {
        id: 8,
        title: "Songs",
        url: "/songs",
        icon: <LibraryMusic />,
      },
      {
        id: 9,
        title: "Music",
        url: "/music",
        icon: <MusicNote />,
      },
      {
        id: 10,
        title: "Art",
        url: "/art",
        icon: <ColorLens />,
      },
      {
        id: 11,
        title: "Hourly Music",
        url: "/hourlyMusic",
        icon: <SpatialAudio />,
      },
      {
        id: 12,
        title: "BGM",
        url: "/bgm",
        icon: <BarChart />,
      },
      {
        id: 13,
        title: "Items",
        url: "/items",
        icon: <Description />,
      },
    ],
  },
];
