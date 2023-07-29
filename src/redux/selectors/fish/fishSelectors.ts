import { RootState } from "../../store/types";

export const selectAllFish = (state: RootState) => state.fish.fish
export const getFishStatus = (state: RootState) => state.fish.status
export const getFishError = (state: RootState) => state.fish.error