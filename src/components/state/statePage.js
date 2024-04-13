import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale } from 'chart.js/auto';


import { Bar, Pie } from 'react-chartjs-2';
import stateData from './stateData'; // Import stateData object
import './statePage.css';
import Back from "../common/back/Back";
ChartJS.register(CategoryScale);
const StateDataVisualization = () => {
    const selectedState='Uttarakhand';
    const [chartType, setChartType] = useState('bar');
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        if (!selectedState) return;

        // Extract data for the selected state
        const dataForSelectedState = stateData[selectedState];

        // Create chart data object
        const datasets = Object.keys(dataForSelectedState).map(category => {
            const categoryData = dataForSelectedState[category];
            return {
                label: category,
                data: categoryData.map(item => item.waterFootprint),
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            };
        });

        const labels = dataForSelectedState.industriesData.map(item => item.name); // Assuming industriesData exists

        setChartData({
            labels: labels,
            datasets: datasets
        });
    }, [selectedState]);

    const handleChartTypeChange = (type) => {
        setChartType(type);
    };

    return (
        <div className='cont'>
            <div className="state-data-visualization">
            <h2>{selectedState} Data Visualization</h2>
            <div className="chart-container">
                {chartData && (
                    chartType === 'bar' ? (
                        <Bar data={chartData} />
                    ) : (
                        <Pie data={chartData} />
                    )
                )}
            </div>
            <div className="chart-toggle">
                <button onClick={() => handleChartTypeChange('bar')}>Bar Chart</button>
                <button onClick={() => handleChartTypeChange('pie')}>Pie Chart</button>
            </div>
        </div>
        </div>
        
    );
};

export default StateDataVisualization;
