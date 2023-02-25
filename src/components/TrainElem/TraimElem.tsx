import style from "./TrainElem.module.css"
import {ITrain, useAppDispatch} from "../../types/TypeData";
import {SHOW_DETAILS_CURRENT_TRAIN} from "../../store/actions";

type TElementProps = {
    train: ITrain;
};

export const TrainElem = ({train}: TElementProps) => {
    const dispatch = useAppDispatch();

    const HandelOpenDetails = () => {
        dispatch({
            type: SHOW_DETAILS_CURRENT_TRAIN,
            currentTrain: train,
        })
    }

    return (
        <div className={`${style.train_text}`}>
            <h1 onClick={HandelOpenDetails}>{train.name}</h1>
            <span>{train.description}</span>
        </div>
    )
}