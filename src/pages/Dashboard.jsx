import React, { useState } from 'react';
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  const [dummyData, setDummyData] = useState([
    { id: 1, name: 'Server 1', status: 'Running', players: 5, uptime: '99.9%' },
    { id: 2, name: 'Server 2', status: 'Stopped', players: 0, uptime: '0%' },
    { id: 3, name: 'Server 3', status: 'Running', players: 12, uptime: '97.8%' },
  ]);

  return (
    <div className="dashboard-container">
      <h1>Hosting Dashboard</h1>
      <p>Welcome to your Minecraft server management dashboard.</p>
      <div className="note">
        <strong>Note:</strong> This section is actively being developed. Some features may not be fully available yet.
      </div>

      {/* Dummy Data Table */}
      <table>
        <thead>
          <tr>
            <th>Server Name</th>
            <th>Status</th>
            <th>Players Online</th>
            <th>Uptime</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map(server => (
            <tr key={server.id}>
              <td>{server.name}</td>
              <td>{server.status}</td>
              <td>{server.players}</td>
              <td>{server.uptime}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="footer-message">We’re working hard to bring you more features. Stay tuned for updates!</p>
    </div>
  );
};

export default Dashboard;
