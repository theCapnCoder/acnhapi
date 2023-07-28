type Availability = {
  availability: {
    "month-northern": string;
    "month-southern": string;
    time: string;
    isAllDay: boolean;
    isAllYear: boolean;
    location: string;
    rarity: string;
    "month-array-northern": number[];
    "month-array-southern": number[];
    "time-array": number[];
  };
}

export type Fish = {
  id: number;
  "file-name": string;
  name: {
    [key: string]: string;
  };
  availability: Availability;
  shadow: string;
  price: number;
  "price-cj": number;
  "catch-phrase": string;
  "museum-phrase": string;
  image_uri: string;
  icon_uri: string;
}
