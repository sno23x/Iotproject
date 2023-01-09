import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [sensorData, setSensorData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/sensor-data');
      const data = await response.json();
      setSensorData(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading sensor data...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Sensor ID</th>
              <th>Temperature</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {sensorData.map(sensor => (
              <tr key={sensor.id}>
                <td>{sensor.id}</td>
                <td>{sensor.temperature}</td>
                <td>{sensor.humidity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
