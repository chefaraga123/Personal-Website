import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale } from 'chart.js';
import 'chartjs-adapter-date-fns';
import wakeupData from "./Tracker_Clean.json"

/*
const wakeupData = [
    {"x":"2023-07-01","y":"15:17:30"},
    {"x":"2023-07-02","y":"08:15:30"},
    {"x":"2023-07-03","y":"08:15:30"}
];*/

// Register the Chart.js components 
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale);

const Chart = () => {
    const data = {
        datasets: [
            {
                label: "Wakeup Times", 
                data: wakeupData,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1        
            }
        ]
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day'
                },
                title: {
                    display: true,
                    text: 'Date'
                }
            },
            y: {
                type: 'time',
                time: {
                    parser: 'HH:mm:ss',
                    unit: 'hour',
                    displayFormats: {
                        hour: 'HH:mm'
                    }
                },
                title: {
                    display: true,
                    text: 'Wake-up Time'
                },
                ticks: {
                    // Format the time display correctly
                    callback: function(value) {
                        const date = new Date(value);
                        const hours = date.getUTCHours().toString().padStart(2, '0');
                        const minutes = date.getUTCMinutes().toString().padStart(2, '0');
                        return `${hours}:${minutes}`;
                    }
                }
            }
        },
        parsing: {
            xAxisKey: 'x',
            yAxisKey: 'y'
        }
    };

    return <Line data={data} options={options} />;
}

export default Chart;
