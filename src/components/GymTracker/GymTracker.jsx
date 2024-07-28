import { Bar } from 'react-chartjs-2';
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend
} from 'chart.js';

import GymData from "./GymData.json"
import './GymTracker.module.css'; // Import the CSS file


// Register the Chart.js components 
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  
const GymTracker = () => {
    const chartData  = {
        labels: GymData.map(item => item.x),
        datasets: [
            {
                label: "Monthly Gym Attendance",
                data: GymData.map(item => item.y), 
                backgroundColor: 'rgb(75, 192, 192)',
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Monthly Count Bar Chart',
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Count',
            }
          },
        },
    }
    return <Bar data={chartData} options={options} />;

};

export default GymTracker;
