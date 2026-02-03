import React from 'react';
import { DollarSign, Users, Activity, Target, RotateCw } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { StatCard } from '@/components/dashboard/StatCard';
import { RevenueChart } from '@/components/dashboard/RevenueChart';
import { ExpiringList } from '@/components/dashboard/ExpiringList';
import { Button } from '@/components/ui/button';
import { kpis } from '@/data/mockDashboard';

export default function DashboardPage() {
    return (
        <AppShell>
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
                    <p className="text-slate-400 mt-1">Welcome back, Sarah 👋</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-300 cursor-pointer hover:bg-white/10 transition-colors">
                        This Month
                    </div>
                    <Button variant="outline" size="icon" className="border-white/10 text-slate-300 hover:bg-white/5 hover:text-white">
                        <RotateCw className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Overview Section */}
            <div className="space-y-6">
                <div>
                    <h2 className="text-xl font-semibold text-white">Overview</h2>
                    <p className="text-sm text-slate-500">Track your gym's performance and growth</p>
                </div>

                {/* KPI Grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <StatCard
                        title="Total Revenue"
                        value={`$${kpis.revenue.toLocaleString()}`}
                        delta={kpis.revenueDelta}
                        icon={DollarSign}
                        gradient="bg-gradient-to-br from-[#1d4ed8]/30 via-white/5 to-white/0"
                    />
                    <StatCard
                        title="Active Members"
                        value={kpis.activeMembers}
                        delta={kpis.activeMembersDelta}
                        icon={Users}
                        gradient="bg-gradient-to-br from-[#10b981]/20 via-white/5 to-white/0"
                    />
                    <StatCard
                        title="Retention Rate"
                        value={`${kpis.retentionRate}%`}
                        delta={kpis.retentionRateDelta}
                        icon={Target}
                        gradient="bg-gradient-to-br from-[#f59e0b]/20 via-white/5 to-white/0"
                    />
                    <StatCard
                        title="Daily Check-ins"
                        value={kpis.dailyCheckins}
                        delta={kpis.dailyCheckinsDelta}
                        icon={Activity}
                        gradient="bg-gradient-to-br from-[#8b5cf6]/25 via-white/5 to-white/0"
                    />
                </div>

                {/* Main Content Grid */}
                <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                    <RevenueChart />

                    {/* Right Column Stack */}
                    <div className="space-y-4">
                        <ExpiringList />

                        {/* Placeholder for Schedule or Quick Actions */}
                        <div className="border border-white/10 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center bg-white/5 h-[200px]">
                            <p className="text-slate-400 text-sm mb-2">Today's Schedule UI Placeholder</p>
                            <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
                                + Add Session
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}
