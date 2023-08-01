import { RootState } from "../../store/types";

export const selectAllFossils = (state: RootState) => state.fossils.fossils;
export const getFossilsStatus = (state: RootState) => state.fossils.status;
export const getFossilsError = (state: RootState) => state.fossils.error;