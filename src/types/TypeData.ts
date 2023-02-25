import {rootReducer, TApplicationActions} from "../store";
import {TypedUseSelectorHook, useDispatch, useSelector as selectorHook} from "react-redux";
import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {store} from "../index";

export interface ITrain {
    name: string
    description: string
    speedLimits: Array<ITrainSpeed>
}

export interface ITrainSpeed {
    name: string
    speedLimit: number
}

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook;

export type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, Action, RootState, TApplicationActions>>;

export const useAppDispatch: () => AppDispatch | AppThunk = useDispatch;