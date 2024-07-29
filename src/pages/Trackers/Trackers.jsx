import React from 'react';
import styles from './Trackers.module.css';
import ReactMarkdown from 'react-markdown';


import Navigation from '../../components/Navigation/Navigation';
import WakeupTimeChart from "../../components/WakeupTimeChart/WakeupTimeChart";
import GymTracker from "../../components/GymTracker/GymTracker";
import InteractiveGraph from '../../components/InteractiveGraph/InteractiveGraph';

const Home = () => {

    const paragraphStyle = {
        lineHeight: '1.2',
        marginBottom: '0em'
    };


    const content = `
        I have been tracking my wakeup time since the end of June 2023, and I have been tracking my gym attendance since November 2023
        the motivation derived from the belief that it is most straightforward to improve that which can be measured I have definitely 
        improved the consistency of my wakeup time since then on both weekday and weekends. 
    `


    return (
        <div className={styles.homeContainer}>
            
            <Navigation />
            <div>
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
            
            <h1>Wakeup Time Tracker</h1>            
            <div style={{ width: '800px', height: '400px' }}>
              <WakeupTimeChart />
            </div>


            <h1>Monthly Gym Attendance Tracker</h1>

            <div style={{ width: '800px', height: '400px' }}>
              <GymTracker />
            </div>

            <div>
                <InteractiveGraph />
            </div>

        </div>
    );
};

export default Home;
