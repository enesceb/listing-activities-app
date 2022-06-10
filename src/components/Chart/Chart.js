import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css'

const Chart = props => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaxium = Math.max(...dataPointsValues)

    return (
      <div className="chart">
        {props.dataPoints.map((dataPoints) => (
          <ChartBar
            key={dataPoints.label}    
            value={dataPoints.value}
            maxValue={totalMaxium}
            label={dataPoints.label}
          />
        ))}
      </div>
    );
    
};

export default Chart;