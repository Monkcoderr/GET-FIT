import React from 'react';
import { Search, Bell, MessageSquare, Menu, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export function Topbar() {
    return (
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between gap-4 border-b border-white/5 bg-[#0b0f14]/80 px-6 backdrop-blur-xl transition-all">

            {/* Search Bar */}
            <div className="flex flex-1 items-center gap-4 md:gap-8">
                <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground">
                    <Menu className="h-5 w-5" />
                </Button>
                <div className="relative hidden md:block max-w-md w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search members, trainers..."
                        className="pl-9 bg-white/5 border-white/10 rounded-xl focus-visible:ring-blue-500/50 text-white placeholder:text-slate-500"
                    />
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
                {/* Theme Toggle Placeholder */}
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/5 rounded-full">
                    <Moon className="h-5 w-5" />
                </Button>

                {/* Add Member Button - Primary */}
                <Button className="hidden md:flex bg-[#2F6BFF] hover:bg-[#2558d4] text-white rounded-xl shadow-lg shadow-blue-500/20">
                    + Add Member
                </Button>

                {/* Notifications */}
                <div className="relative">
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/5 rounded-full">
                        <Bell className="h-5 w-5" />
                    </Button>
                    <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-[#0b0f14]" />
                </div>

                {/* Messages */}
                <div className="relative">
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/5 rounded-full">
                        <MessageSquare className="h-5 w-5" />
                    </Button>
                    <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-[#0b0f14]" />
                </div>

                {/* User Profile */}
                <div className="pl-2 border-l border-white/10">
                    <Avatar className="h-9 w-9 border-2 border-white/10 cursor-pointer hover:border-blue-500 transition-colors">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </header>
    );
}
