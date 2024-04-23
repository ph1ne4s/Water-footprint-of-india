import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale } from 'chart.js/auto';
import stateData from './stateData'; // Import stateData object
import './statePage.css';
ChartJS.register(CategoryScale);
const StateDataVisualization = () => {
    const [selectedState, setSelectedState] = useState('Uttarakhand');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [chartType, setChartType] = useState('bar');
    const [chartData, setChartData] = useState(null);
    const [showChart, setShowChart] = useState(false);

    useEffect(() => {
        if (!selectedState || !selectedCategory) return;

        // Extract data for the selected state and category
        const dataForSelectedState = stateData[selectedState];
        const selectedCategoryData = dataForSelectedState[selectedCategory];

        // Create chart data object
        const labels = selectedCategoryData.map(item => item.name);
        const data = selectedCategoryData.map(item => item.waterFootprint);

        // Generate random colors for each data point
        const backgroundColors = Array.from({ length: data.length }, () => getRandomColor());

        setChartData({
            labels: labels,
            datasets: [{
                label: selectedCategory,
                data: data,
                backgroundColor: backgroundColors,
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        });
    }, [selectedState, selectedCategory]);

    const handleChartTypeChange = (type) => {
        setChartType(type);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleDisplayData = () => {
        if (selectedState && selectedCategory) {
            setShowChart(true);
        }
    };

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <div className='cont'>
            <div className="state-data-visualization">
                <h2>{selectedState} Data Visualization</h2>
                <div>
                    <select value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="">Select Category</option>
                        {Object.keys(stateData[selectedState]).map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    <button onClick={handleDisplayData}>Display Data</button>
                </div>
                {showChart && (
                    <div>
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
                )}
            </div>
        </div>
    );
};

export default StateDataVisualization;
