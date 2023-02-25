import {ITrain} from "../types/TypeData";
import {TData} from "./reducers";

export const SHOW_DETAILS_CURRENT_TRAIN: "SHOW_DETAILS_CURRENT_TRAIN" = "SHOW_DETAILS_CURRENT_TRAIN";
export const UPDATE_DATA_TRAIN: "UPDATE_DATA_TRAIN" = "UPDATE_DATA_TRAIN";

export interface IUPDATE_DATA_TRAIN {
    type: typeof UPDATE_DATA_TRAIN;
    updateForm: TData;
}

export interface ISHOW_DETAILS_CURRENT_TRAIN {
    type: typeof SHOW_DETAILS_CURRENT_TRAIN;
    currentTrain: ITrain;
}

export type TTrainActions = ISHOW_DETAILS_CURRENT_TRAIN | IUPDATE_DATA_TRAIN;


// export function updateTrain(Update: Array<TData>) {
//     // fetch(requestAddress , {
//     //     method: 'POST',
//     //     body: JSON.stringify({Update}),
//     //     headers: {
//     //         'Content-Type': 'application/json'
//     //     }
//     // })
// }