import React from "react";



const Chart =(props)=>{
    const dataPointValues = props.dataPoint.map(dataPoint=>dataPoint.value);
const totalMaximum = Math.max(...dataPointValues);
return(
    <>
    <div className="chart">

    </div>
    </>
)
}
export default Chart