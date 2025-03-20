import React from 'react';
import { AlertTriangle, Shield, ShieldAlert } from 'lucide-react';
import type { ThreatAlert } from '../types';

interface ThreatMonitorProps {
  alerts: ThreatAlert[];
}

const ThreatMonitor: React.FC<ThreatMonitorProps> = ({ alerts }) => {
  const getAlertIcon = (level: string) => {
    switch (level) {
      case 'high':
        return <ShieldAlert className="w-5 h-5 text-red-500" />;
      case 'medium':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      default:
        return <Shield className="w-5 h-5 text-green-500" />;
    }
  };

  const getAlertColor = (level: string) => {
    switch (level) {
      case 'high':
        return 'bg-red-500/10 border-red-500/20';
      case 'medium':
        return 'bg-yellow-500/10 border-yellow-500/20';
      default:
        return 'bg-green-500/10 border-green-500/20';
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-100">Threat Monitor</h2>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-4 rounded-lg border ${getAlertColor(alert.level)} flex items-start gap-3`}
          >
            {getAlertIcon(alert.level)}
            <div>
              <p className="text-gray-100">{alert.description}</p>
              <div className="flex gap-3 mt-2 text-sm text-gray-400">
                <span>{new Date(alert.timestamp).toLocaleTimeString()}</span>
                <span>•</span>
                <span>{alert.source}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreatMonitor;