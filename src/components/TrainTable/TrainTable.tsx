import React from 'react';
import {TrainElem} from "../TrainElem/TraimElem";
import {data} from "../../utils/data";
import {ITrain} from "../../types/TypeData";
import style from "./TrainTable.module.css"

export const TrainTable = () => {
    return (
        <div className={`${style.container}`}>
            {
                data?.map((train: ITrain) => <TrainElem train={train} key={train.name}/>)}
        </div>
    )
}