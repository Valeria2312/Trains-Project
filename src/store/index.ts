import {combineReducers} from "redux";
import {trainReducer} from "./reducers";
import {TTrainActions} from "./actions";

export const rootReducer = combineReducers({
    Train: trainReducer,
})
export type TApplicationActions = TTrainActions;