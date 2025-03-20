import React from 'react';
import { LayoutDashboard, ScrollText, Settings, Shield } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'logs', label: 'Logs', icon: ScrollText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-gray-900 h-screen fixed left-0 top-0 text-gray-100">
      <div className="p-4 flex items-center gap-3 border-b border-gray-800">
        <Shield className="w-8 h-8 text-blue-500" />
        <span className="text-xl font-bold">SecureGuard</span>
      </div>
      <nav className="mt-8">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`w-full flex items-center gap-3 px-6 py-3 hover:bg-gray-800 transition-colors ${
                activeTab === tab.id ? 'bg-gray-800 border-l-4 border-blue-500' : ''
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;