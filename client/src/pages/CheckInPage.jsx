import React, { useState } from 'react';
import { Search, UserCheck, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

// Mock Data
const members = [
    { id: 1, name: "Alice Johnson", phone: "5550123", status: "Active", expiry: "2024-11-20", image: null },
    { id: 2, name: "Bob Smith", phone: "5550198", status: "Expired", expiry: "2024-01-20", image: null },
];

export default function CheckInPage() {
    const [query, setQuery] = useState("");
    const [result, setResult] = useState(null);
    const [checkInStatus, setCheckInStatus] = useState(null); // 'success', 'error', null

    const handleSearch = (e) => {
        e.preventDefault();
        const found = members.find(m => m.phone.includes(query) || m.name.toLowerCase().includes(query.toLowerCase()));
        setResult(found || null);
        setCheckInStatus(null);
    };

    const handleCheckIn = () => {
        if (result && result.status === 'Active') {
            setCheckInStatus('success');
            // Log attendance via API here
        }
    };

    return (
        <div className="min-h-screen bg-[#0b0f14] flex flex-col items-center justify-center p-6 text-white">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 shadow-xl shadow-blue-500/20 mb-4">
                        <UserCheck className="h-8 w-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight">Fast Check-in</h1>
                    <p className="text-slate-400 mt-2">Enter phone number or name</p>
                </div>

                <form onSubmit={handleSearch} className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                    <Input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search member..."
                        className="pl-12 h-14 text-lg bg-white/5 border-white/10 rounded-xl focus-visible:ring-blue-500/50"
                        autoFocus
                    />
                </form>

                {result && (
                    <Card className="bg-[#0b1220] border-white/10 animate-in fade-in zoom-in duration-300">
                        <CardContent className="p-6 text-center space-y-4">
                            <Avatar className="h-24 w-24 mx-auto bg-white/5 border-2 border-white/10">
                                <AvatarFallback className="text-2xl text-slate-300 bg-transparent">
                                    {result.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                            </Avatar>

                            <div>
                                <h3 className="text-xl font-bold text-white">{result.name}</h3>
                                <p className="text-slate-400">{result.phone}</p>
                            </div>

                            <div className="flex justify-center">
                                <Badge className={
                                    result.status === "Active"
                                        ? "bg-emerald-500/20 text-emerald-400 px-4 py-1 text-base hover:bg-emerald-500/20"
                                        : "bg-rose-500/20 text-rose-400 px-4 py-1 text-base hover:bg-rose-500/20"
                                }>
                                    {result.status}
                                </Badge>
                            </div>

                            {result.status === "Active" ? (
                                checkInStatus === 'success' ? (
                                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex flex-col items-center gap-2 text-emerald-400">
                                        <CheckCircle2 className="h-8 w-8" />
                                        <span className="font-bold">Checked In!</span>
                                    </div>
                                ) : (
                                    <Button onClick={handleCheckIn} className="w-full h-12 text-lg bg-[#2F6BFF] hover:bg-[#2558d4] text-white">
                                        Confirm Check-in
                                    </Button>
                                )
                            ) : (
                                <div className="space-y-3">
                                    <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-3 flex items-center justify-center gap-2 text-rose-400">
                                        <AlertCircle className="h-5 w-5" />
                                        <span>Membership Expired</span>
                                    </div>
                                    <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/5">
                                        Go to Renewal
                                    </Button>
                                </div>
                            )}

                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}
