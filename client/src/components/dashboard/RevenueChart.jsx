import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { chartData } from '@/data/mockDashboard';

export function RevenueChart() {
    return (
        <Card className="col-span-1 lg:col-span-2 bg-[#0b0f14]/50 border-white/5 backdrop-blur-sm">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="text-white">Revenue Analytics</CardTitle>
                        <CardDescription className="text-slate-400">Monthly growth trends</CardDescription>
                    </div>
                    <Tabs defaultValue="revenue" className="w-[200px]">
                        <TabsList className="grid w-full grid-cols-2 bg-white/5">
                            <TabsTrigger value="revenue">Revenue</TabsTrigger>
                            <TabsTrigger value="members">Members</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </CardHeader>
            <CardContent>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData}>
                            <XAxis
                                dataKey="name"
                                stroke="#94a3b8"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                            />
                            <YAxis
                                stroke="#94a3b8"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `$${value}`}
                            />
                            <Tooltip
                                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                contentStyle={{
                                    backgroundColor: '#1e293b',
                                    borderColor: 'rgba(255,255,255,0.1)',
                                    borderRadius: '8px',
                                    color: '#fff'
                                }}
                            />
                            <Bar
                                dataKey="revenue"
                                fill="#2F6BFF"
                                radius={[4, 4, 0, 0]}
                                barSize={40}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
