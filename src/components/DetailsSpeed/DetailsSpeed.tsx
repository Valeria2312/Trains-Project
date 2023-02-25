import React, {SyntheticEvent, useState} from 'react';
import {ITrainSpeed, useAppDispatch} from "../../types/TypeData";
import style from "./DetailsSpeed.module.css";
import {UPDATE_DATA_TRAIN} from "../../store/actions";

type TElementProps = {
    details: ITrainSpeed,
}
type TTrainData = {
    name: string,
    speedLimit: number | null
}

function DetailsSpeed({details}: TElementProps) {
    const dispatch = useAppDispatch();
    const [TrainData, setTrainData] = useState<TTrainData>({
        name: details.name,
        speedLimit: details.speedLimit
    })

    const onChange = (e: SyntheticEvent) => {
        setTrainData({
            ...TrainData,
            [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value
        });
    };

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        dispatch({
            type: UPDATE_DATA_TRAIN,
            updateForm: TrainData,
        })
    }

    let valueSpeedLimit;
    if (!TrainData.speedLimit) {
        valueSpeedLimit = 0
    } else {
        valueSpeedLimit = TrainData.speedLimit
    }

    return (
        <div className={`${style.speed_details}`}>
            <span className={`${style.speed_name}`}>{details.name}</span>
            <input onChange={onChange} className={`${style.speed_limit}`} type="number" min="0" step="1"
                   name='speedLimit' value={valueSpeedLimit}/>
            <button type="button" onClick={handleSubmit}>Сохранить</button>
        </div>
    )
}

export default React.memo(DetailsSpeed);