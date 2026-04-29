import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie 
} from 'recharts';
import { 
  Users, 
  Key, 
  ShieldCheck, 
  Activity,
  UserPlus,
  AlertCircle
} from 'lucide-react';

const riskData = [
  { name: 'Low', value: 340, color: '#6366f1' },
  { name: 'Medium', value: 55, color: '#818cf8' },
  { name: 'High', value: 12, color: '#fbbf24' },
  { name: 'Critical', value: 5, color: '#ef4444' },
];

const lifecycleData = [
  { month: 'Jan', joiners: 45, leavers: 12 },
  { month: 'Feb', joiners: 32, leavers: 15 },
  { month: 'Mar', joiners: 58, leavers: 22 },
  { month: 'Apr', joiners: 41, leavers: 18 },
  { month: 'May', joiners: 65, leavers: 25 },
];

const KPI_CARDS = [
  { title: 'Total Identities', value: '4,120', trend: '+12% YoY', color: 'indigo', icon: Users },
  { title: 'Certification Completion', value: '98.2%', trend: 'Target: 100%', color: 'emerald', icon: ShieldCheck },
  { title: 'Privileged Accounts', value: '142', trend: '-5 this week', color: 'amber', icon: Key },
  { title: 'Avg Approval Time', value: '4.2h', trend: '-1.1h', color: 'indigo', icon: Activity },
];

const ExecutiveDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Identity Governance Overview</h1>
          <p className="text-slate-400">Strategic visibility into workforce lifecycle and access risk.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Export Audit Log
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Launch Campaign
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-${card.color}-500/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-${card.color}-500`} />
              </div>
              <div className="text-xs font-medium text-slate-400">
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lifecycle Trends */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl lg:col-span-2">
          <h3 className="text-lg font-bold text-white mb-6">Identity Lifecycle Trends</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={lifecycleData}>
                <defs>
                  <linearGradient id="colorJoiners" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="joiners" stroke="#6366f1" strokeWidth={2} fillOpacity={1} fill="url(#colorJoiners)" name="Joiners" />
                <Area type="monotone" dataKey="leavers" stroke="#fbbf24" strokeWidth={2} fillOpacity={0} name="Leavers" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Risk Distribution */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl lg:col-span-1">
          <h3 className="text-lg font-bold text-white mb-6">Access Risk Distribution</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riskData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {riskData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
              <div className="flex items-center gap-3">
                <UserPlus className="text-indigo-500 w-5 h-5" />
                <span className="text-sm font-medium">Pending Requests</span>
              </div>
              <span className="text-xs text-indigo-400">24 New</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl">
              <div className="flex items-center gap-3">
                <AlertCircle className="text-amber-500 w-5 h-5" />
                <span className="text-sm font-medium">SoD Violations</span>
              </div>
              <span className="text-xs text-amber-400">3 Critical</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveDashboard;
