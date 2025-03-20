export interface ThreatAlert {
  id: string;
  timestamp: Date;
  level: 'low' | 'medium' | 'high';
  description: string;
  source: string;
}

export interface LogEntry {
  id: string;
  timestamp: Date;
  action: string;
  status: 'success' | 'failure' | 'pending';
  details: string;
}

export interface MetricData {
  timestamp: string;
  threats: number;
  blocked: number;
}