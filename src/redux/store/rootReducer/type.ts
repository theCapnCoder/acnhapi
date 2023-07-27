export type Keys = {
  [key: string]: string
}

export type ActionType = {
  type: string;
  payload: Keys | undefined;
}