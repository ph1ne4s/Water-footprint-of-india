import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale } from 'chart.js/auto';


import { Bar, Pie } from 'react-chartjs-2';
import stateData from './stateData'; // Import stateData object
import './statePage.css';
import Back from "../common/back/Back";
ChartJS.register(CategoryScale);
const StateDataVisualization = () => {
    const selectedState='Uttrakhand';
    const [chartType, setChartType] = useState('bar');
    const [stateDataForSelectedState, setStateDataForSelectedState] = useState([]);
    // console.log);
    useEffect(() => {
        // Set state data based on selected state
        setStateDataForSelectedState(stateData[selectedState] || []);
    }, [selectedState]);

    const handleChartTypeChange = (type) => {
        setChartType(type);
    };

    const chartData = {
        labels: stateDataForSelectedState.map(item => item.name),
        datasets: [{
            label: 'Water Footprint',
            data: stateDataForSelectedState.map(item => item.waterFootprint),
            backgroundColor: 'rgba(54, 162, 235, 0.6)', // Change color as needed
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    return (
        
        <div className="state-data-visualization">
            {/* <Back title="Contact us" /> */}
            <h2>{selectedState} Data Visualization</h2>
            <div className="chart-container">
                {chartType === 'bar' ? (
                    <Bar data={chartData} />
                ) : (
                    <Pie data={chartData} />
                )}
            </div>
            <div className="chart-toggle">
                <button onClick={() => handleChartTypeChange('bar')}>Bar Chart</button>
                <button onClick={() => handleChartTypeChange('pie')}>Pie Chart</button>
            </div>
        </div>
    );
};

export default StateDataVisualization;
