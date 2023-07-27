import { combinedReducer } from "../combinreReducer"
import { ActionType } from "./type"

export const rootReducer = (state: any, action: ActionType) => {
  return combinedReducer(state, action)
}