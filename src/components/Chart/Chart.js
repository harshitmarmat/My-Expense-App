import React from "react";
import ChartBar from "./ChartBar";

import './Chart.css';

const Chart = props =>{
    const dataPointsValue = props.dataPoints.map(dataPoint=> dataPoint.value);
    console.log(dataPointsValue);
    const TotalMax = Math.max(...dataPointsValue);
    console.log(TotalMax);
    return(
        <div className="chart">
            {props.dataPoints.map(dataPoint =>( 
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={TotalMax}
                    label = {dataPoint.label}
                />
            ))}
        </div>
    )   
}

export default Chart