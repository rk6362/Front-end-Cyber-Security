import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ThreatMonitor from './components/ThreatMonitor';
import MetricsGraph from './components/MetricsGraph';
import ResponseLogs from './components/ResponseLogs';
import type { ThreatAlert, LogEntry, MetricData } from './types';

// Simulated data - In a real app, this would come from your backend
const generateMockData = () => {
  const alerts: ThreatAlert[] = [
    {
      id: '1',
      timestamp: new Date(),
      level: 'high',
      description: 'Suspicious login attempt detected from unknown IP',
      source: 'Authentication System',
    },
    {
      id: '2',
      timestamp: new Date(Date.now() - 300000),
      level: 'medium',
      description: 'Unusual file access pattern detected',
      source: 'File Monitor',
    },
    {
      id: '3',
      timestamp: new Date(Date.now() - 600000),
      level: 'low',
      description: 'System update available',
      source: 'Update Service',
    },
  ];

  const logs: LogEntry[] = [
    {
      id: '1',
      timestamp: new Date(),
      action: 'Blocked suspicious IP address',
      status: 'success',
      details: 'IP: 192.168.1.100 added to blocklist',
    },
    {
      id: '2',
      timestamp: new Date(Date.now() - 300000),
      action: 'Malware scan initiated',
      status: 'pending',
      details: 'Scanning system files...',
    },
    {
      id: '3',
      timestamp: new Date(Date.now() - 600000),
      action: 'Failed to update firewall rules',
      status: 'failure',
      details: 'Permission denied',
    },
  ];

  const metrics: MetricData[] = Array.from({ length: 24 }, (_, i) => ({
    timestamp: new Date(Date.now() - i * 3600000).toLocaleTimeString(),
    threats: Math.floor(Math.random() * 10),
    blocked: Math.floor(Math.random() * 8),
  })).reverse();

  return { alerts, logs, metrics };
};

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [data, setData] = useState(generateMockData());

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateMockData());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="ml-64 p-8">
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ThreatMonitor alerts={data.alerts} />
              <ResponseLogs logs={data.logs} />
            </div>
            <MetricsGraph data={data.metrics} />
          </div>
        )}
        
        {activeTab === 'logs' && (
          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">System Logs</h2>
            <ResponseLogs logs={[...data.logs, ...data.logs]} />
          </div>
        )}
        
        {activeTab === 'settings' && (
          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Settings</h2>
            <p className="text-gray-400">Settings panel coming soon...</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;