import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export function StatCard({ title, value, delta, icon: Icon, gradient }) {
    const isPositive = delta >= 0;

    return (
        <Card className={cn("border-0 relative overflow-hidden", gradient)}>
            <CardContent className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md">
                        <Icon className="h-6 w-6 text-white" />
                    </div>
                    {/* Optional: Add sparkline or decoration here */}
                </div>

                <h3 className="text-sm font-medium text-blue-100/70 mb-1">{title}</h3>
                <div className="flex items-end gap-3">
                    <span className="text-3xl font-bold text-white">{value}</span>
                    <div className={cn(
                        "flex items-center px-2 py-0.5 rounded-full text-xs font-medium mb-1 backdrop-blur-sm",
                        isPositive ? "bg-emerald-500/20 text-emerald-300" : "bg-rose-500/20 text-rose-300"
                    )}>
                        {isPositive ? <ArrowUpRight className="h-3 w-3 mr-1" /> : <ArrowDownRight className="h-3 w-3 mr-1" />}
                        {Math.abs(delta)}%
                    </div>
                </div>
            </CardContent>
            {/* Background Grain/Noise or Decor */}
            <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-2xl w-32 h-32 pointer-events-none" />
        </Card>
    );
}
