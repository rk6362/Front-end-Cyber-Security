import React from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';
import type { LogEntry } from '../types';

interface ResponseLogsProps {
  logs: LogEntry[];
}

const ResponseLogs: React.FC<ResponseLogsProps> = ({ logs }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'failure':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-yellow-500" />;
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-100">Response Logs</h2>
      <div className="space-y-3">
        {logs.map((log) => (
          <div
            key={log.id}
            className="p-4 rounded-lg bg-gray-800 border border-gray-700 flex items-start gap-3"
          >
            {getStatusIcon(log.status)}
            <div>
              <p className="text-gray-100">{log.action}</p>
              <p className="text-sm text-gray-400 mt-1">{log.details}</p>
              <div className="text-sm text-gray-500 mt-2">
                {new Date(log.timestamp).toLocaleString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponseLogs;