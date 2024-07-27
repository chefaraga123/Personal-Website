import { Line } from 'react-chartjs-2';
import { Chart as 
    ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Title, 
    Tooltip, 
    Legend, 
    TimeScale
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import Wakeup_Data from "./Tracker_Clean.json"


//Register the Chart.js components 
ChartJS.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Title, 
    Tooltip, 
    Legend,
    TimeScale
);



const Chart = () => {
    const data = {
        datasets: [
            {
                label: "Wakeup Times", 
                data: Wakeup_Data,
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
              unit: 'month'
            }
          },
          y: {
            beginAtZero: true
          }
        }
      };

    return <Line data={data} options={options} />;

}

export default Chart;
