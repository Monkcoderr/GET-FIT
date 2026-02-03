import React, { useState } from 'react';
import { Dumbbell, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic
        window.location.href = "/dashboard";
    };

    return (
        <div className="min-h-screen bg-[#0b0f14] grid lg:grid-cols-2">
            {/* Left Side - Form */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-20 text-white">
                <div className="flex items-center gap-3 mb-12">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 shadow-lg shadow-blue-500/20">
                        <Dumbbell className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-xl font-bold">FitFlow Pro</span>
                </div>

                <div className="w-full max-w-sm mx-auto space-y-8">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
                        <p className="text-slate-400">Enter your credentials to access the admin panel.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email address</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@company.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-11 bg-white/5 border-white/10 text-white focus-visible:ring-blue-500/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <a href="#" className="text-sm font-medium text-blue-400 hover:text-blue-300">Forgot password?</a>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="h-11 bg-white/5 border-white/10 text-white focus-visible:ring-blue-500/50"
                            />
                        </div>
                        <Button type="submit" className="w-full h-11 bg-[#2F6BFF] hover:bg-[#2558d4] text-white">
                            Sign in to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-white/10" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-[#0b0f14] px-2 text-slate-500">Secure Admin Portal</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Image/Promo */}
            <div className="hidden lg:block relative bg-[#0b1220] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 mix-blend-overlay" />
                {/* Abstract Shapes */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[100px]" />

                <div className="relative z-10 h-full flex flex-col items-center justify-center p-20 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Manage your gym like a pro</h2>
                    <p className="text-lg text-slate-300 max-w-md">
                        Track members, payments, and attendance in real-time. Automated insights to help you grow.
                    </p>
                    {/* Mock UI Element visual */}
                    <div className="mt-12 w-full max-w-md bg-[#0b0f14]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-12 w-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                <UserCheck className="h-6 w-6 text-emerald-400" />
                            </div>
                            <div className="text-left">
                                <p className="text-white font-bold">New Check-in</p>
                                <p className="text-slate-400 text-sm">Alice Johnson • Active</p>
                            </div>
                        </div>
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-3/4 bg-emerald-500 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Icon for the mock UI
function UserCheck({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <polyline points="16 11 18 13 22 9" />
        </svg>
    )
}
