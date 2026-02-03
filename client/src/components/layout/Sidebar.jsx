import React from 'react';
import { LayoutDashboard, Users, UserCog, Dumbbell, Calendar, CreditCard, BarChart3, MessageSquare, Settings, ChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard', active: false },
    { icon: Users, label: 'Members', href: '/members', active: false },
    { icon: UserCog, label: 'Trainers', href: '/trainers', active: false },
    { icon: Dumbbell, label: 'Workouts', href: '/workouts', active: false },
    { icon: Calendar, label: 'Schedule', href: '/schedule', active: false },
    { icon: CreditCard, label: 'Payments', href: '/payments', active: false },
    { icon: BarChart3, label: 'Analytics', href: '/analytics', active: true }, // Mock active state
    { icon: MessageSquare, label: 'Messages', href: '/messages', active: false },
    { icon: Settings, label: 'Settings', href: '/settings', active: false },
];

export function Sidebar() {
    return (
        <div className="flex h-screen w-64 flex-col border-r bg-[#0b0f14] border-white/10 text-white fixed left-0 top-0 hidden md:flex">
            {/* Branding */}
            <div className="flex h-20 items-center px-6 border-b border-white/5">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 shadow-lg shadow-blue-500/20">
                        <Dumbbell className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold leading-tight">FitFlow Pro</h1>
                        <p className="text-xs text-white/50">Gym Management</p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
                {navItems.map((item) => (
                    <Button
                        key={item.label}
                        variant="ghost"
                        className={cn(
                            "w-full justify-start gap-3 px-3 py-6 rounded-xl hover:bg-white/5 hover:text-white transition-all",
                            item.active && "bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.05)] border border-white/5"
                        )}
                    >
                        <item.icon className={cn("h-5 w-5", item.active ? "text-blue-400" : "text-slate-400")} />
                        <span className={cn("font-medium", item.active ? "text-white" : "text-slate-400")}>{item.label}</span>
                        {item.label === "Messages" && (
                            <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold">7</span>
                        )}
                    </Button>
                ))}
            </div>

            {/* Bottom Promo Card */}
            <div className="p-4">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-5 text-white shadow-xl">
                    <div className="relative z-10">
                        <p className="text-xs font-medium text-blue-100 mb-1">Thus Month</p>
                        <h3 className="text-2xl font-bold mb-1">$12,847</h3>
                        <div className="inline-flex items-center rounded-full bg-white/20 px-2 py-0.5 text-[10px] backdrop-blur-sm">
                            +23% vs last month
                        </div>
                    </div>
                    {/* Decor */}
                    <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
                    <div className="absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-black/10 blur-2xl" />
                </div>
            </div>
        </div>
    );
}
