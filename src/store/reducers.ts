import {ITrain} from "../types/TypeData";
import {SHOW_DETAILS_CURRENT_TRAIN, TTrainActions, UPDATE_DATA_TRAIN,} from "./actions";

export type TData = {
    name: string,
    speedLimit: number
}
type TInitialState = {
    initialTrain: ITrain | null,
    currentTrain: ITrain | null,
    Update: Array<TData>
};

export const initialState: TInitialState = {
    initialTrain: null,
    currentTrain: null,
    Update: []
}
export const trainReducer = (state = initialState, action: TTrainActions) => {
    switch (action.type) {
        case SHOW_DETAILS_CURRENT_TRAIN: {
            return {
                ...state,
                initialTrain: action.currentTrain,
                currentTrain: action.currentTrain,
            }
        }
        case UPDATE_DATA_TRAIN: {
            if (state.currentTrain) {
                return {
                    ...state,
                    currentTrain: {
                        ...state.currentTrain,
                        speedLimits: [...state.currentTrain.speedLimits.map((e) => {
                            if (e.name === action.updateForm.name) {
                                return {
                                    name: action.updateForm.name,
                                    speedLimit: Number(action.updateForm.speedLimit),
                                }
                            }
                            return e
                        })]
                    },
                    Update: [
                        ...state.Update,
                        {...action.updateForm}
                    ],
                }
            }
            return state
        }
        default: {
            return state;
        }
    }
}