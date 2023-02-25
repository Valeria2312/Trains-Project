import React, {SyntheticEvent} from 'react';
import style from "./TrainDataCorrection.module.css";
import {ITrainSpeed, useAppSelector} from "../../types/TypeData";
import DetailsSpeed from "../DetailsSpeed/DetailsSpeed";


export const TrainDataCorrection = () => {
    const {currentTrain, Update} = useAppSelector((store) => store.Train)

    Update.sort(function (a, b) {
        return parseInt(String(a.speedLimit)) - parseInt(String(b.speedLimit));
    });
    Update.map(e => Number(e.speedLimit))

    const handleSubmit = (event: SyntheticEvent) => {

        console.log(Update)
        event.preventDefault();
    }

    return (
        <form className={`${style.train_name}`} onSubmit={handleSubmit}>{currentTrain?.name}
            <div className={`${style.train_details}`}>
                {currentTrain?.speedLimits.map((speedLimit: ITrainSpeed) => <DetailsSpeed details={speedLimit}
                                                                                          key={Math.random()}/>)}
            </div>
            <input type="submit" value="Отправить"/>
        </form>

    )
}