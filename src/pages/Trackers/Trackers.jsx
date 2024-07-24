import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import styles from './Trackers.module.css';
import Navigation from '../../components/Navigation/Navigation';

import Wakeup_Data from "./Data/Wakeup_Times.json"

const Home = () => {

    // Assuming your JSON data is stored in a variable called 'data'
        const dates = Wakeup_Data.dates;
        const wakeTimes = Wakeup_Data.time2.map(time => {
        const [hours, minutes] = time.split(':');
        return parseInt(hours) * 60 + parseInt(minutes);
        });

        // Create labels for y-axis (wake-up times)
        const timeLabels = Array.from({length: 24}, (_, i) => {
        const hour = i % 12 || 12;
        const ampm = i < 12 ? 'AM' : 'PM';
        return `${hour}:00 ${ampm}`;
        });


    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


    const data = {
        labels: Wakeup_Data.dates,
        datasets: [
          {
            label: 'Sales',
            data: Wakeup_Data.wakeTimes,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }
        ]
      };
      
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Wakeup Time'
          }
        }
      };

    return (
        <div className={styles.homeContainer}>
            <Navigation />
            <p>I like to track my personal metrics which I am interested in controlling including: </p>
            <p>- when I wake up </p>
            <p>- How long I sleep </p>
            <p>- When I go to sleep </p>

            <Line data={data} options={options} />;

        </div>
    );
};

export default Home;
