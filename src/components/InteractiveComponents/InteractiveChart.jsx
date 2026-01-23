import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const chartTypes = {
    line: Line,
    bar: Bar,
    pie: Pie,
    doughnut: Doughnut,
};

const InteractiveChart = ({
    type = 'line',
    data,
    options = {},
    title,
    height = 300,
}) => {
    const ChartComponent = chartTypes[type] || Line;

    const defaultOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: !!title,
                text: title,
            },
        },
    };

    const mergedOptions = { ...defaultOptions, ...options };

    return (
        <div style={{
            height: height,
            margin: '24px 0',
            padding: '16px',
            backgroundColor: '#fafafa',
            borderRadius: '8px',
        }}>
            <ChartComponent data={data} options={mergedOptions} />
        </div>
    );
};

export default InteractiveChart;
