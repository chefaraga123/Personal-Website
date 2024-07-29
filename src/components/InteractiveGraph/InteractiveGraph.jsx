import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const InteractiveGraph = () => {
  const initialDataPoints = [65, 59, 80, 81, 56, 55, 40];
  const [dataPoints, setDataPoints] = useState(initialDataPoints);
  const [newDataPoint, setNewDataPoint] = useState('');
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      label: 'Sales Data',
      data: [],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  });
  
  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Testing' }
    },
    scales: { y: { beginAtZero: true } }
  };

  useEffect(() => {
    updateChartData();
  }, [dataPoints]);

  const updateChartData = () => {
    setChartData({
      labels: dataPoints.map((_, index) => `Month ${index + 1}`),
      datasets: [
        {
          label: 'Sales Data',
          data: dataPoints,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }
      ]
    });
  };

  const handleAddDataPoint = (e) => {
    e.preventDefault();
    if (newDataPoint !== '') {
      setDataPoints([...dataPoints, parseFloat(newDataPoint)]);
      setNewDataPoint('');
    }
  };

  const handleRemoveLastDataPoint = () => {
    if (dataPoints.length > 1) {
      setDataPoints(dataPoints.slice(0, -1));
    }
  };

  const handleReset = () => {
    setDataPoints(initialDataPoints);
  };

  return (
    <div>
      <div style={{ width: '600px', height: '400px' }}>
        {chartData.labels.length > 0 && <Line data={chartData} options={options} />}
      </div>
      <form onSubmit={handleAddDataPoint}>
        <input
          type="number"
          value={newDataPoint}
          onChange={(e) => setNewDataPoint(e.target.value)}
          placeholder="Enter new data point"
        />
        <button type="submit">Add Data Point</button>
      </form>
      <button onClick={handleRemoveLastDataPoint}>Remove Last Data Point</button>
      <button onClick={handleReset}>Reset Data</button>
    </div>
  );
};

export default InteractiveGraph;