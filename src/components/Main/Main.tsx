import React from 'react';
import style from './Main.module.css'
import {TrainTable} from "../TrainTable/TrainTable";
import {TrainDataCorrection} from "../TrainDataCorrection/TrainDataCorrection";

export const Main = () => {

    return (
        <div className={`${style.constructor}`}>
            <TrainTable/>
            <TrainDataCorrection/>
        </div>
    )
}