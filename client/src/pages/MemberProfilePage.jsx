import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Phone, Calendar, CreditCard, Clock, Edit } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

// Mock Data (In real app, fetch by ID)
const mockMember = {
    id: 1,
    name: "Alice Johnson",
    phone: "555-0123",
    status: "Active",
    plan: "Annual Gold",
    joinDate: "2024-05-15",
    expiryDate: "2025-05-15",
    notes: "Prefer morning workouts. Knee injury history.",
    attendance: [
        { id: 1, date: "2024-10-24 08:30 AM", method: "Check-in" },
        { id: 2, date: "2024-10-22 08:15 AM", method: "Check-in" },
        { id: 3, date: "2024-10-20 09:00 AM", method: "Check-in" },
    ],
    payments: [
        { id: 1, date: "2024-05-15", amount: "$499.00", plan: "Annual Gold", method: "Credit Card", status: "Paid" },
    ]
};

export default function MemberProfilePage() {
    const { id } = useParams();
    const navigate = useNavigate();

    // In real app: const [member, setMember] = useState(null); useEffect(() => fetch member...)
    const member = mockMember;

    return (
        <AppShell>
            {/* Header / Back */}
            <div className="flex items-center gap-4 mb-2">
                <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="hover:bg-white/10 text-slate-300">
                    <ArrowLeft className="h-5 w-5" />
                </Button>
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-white mb-1">{member.name}</h1>
                    <div className="flex items-center gap-3 text-sm text-slate-400">
                        <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> {member.phone}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><User className="h-3 w-3" /> Member #{id}</span>
                    </div>
                </div>
                <div className="ml-auto flex gap-3">
                    <Button variant="outline" className="border-white/10 text-slate-300 hover:bg-white/5 hover:text-white">
                        <Edit className="h-4 w-4 mr-2" /> Edit Profile
                    </Button>
                    {member.status === 'Active' ? (
                        <Button className="bg-[#2F6BFF] hover:bg-[#2558d4] text-white">
                            Check-in
                        </Button>
                    ) : (
                        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                            Renew Membership
                        </Button>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column: Info Card */}
                <div className="space-y-6">
                    <Card className="bg-[#0b1220] border-white/10">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <Avatar className="h-20 w-20 bg-white/10 border border-white/10 text-2xl">
                                    <AvatarFallback className="bg-transparent text-slate-300">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </AvatarFallback>
                                </Avatar>
                                <Badge className={
                                    member.status === "Active"
                                        ? "bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20"
                                        : "bg-rose-500/20 text-rose-400 hover:bg-rose-500/20"
                                }>
                                    {member.status}
                                </Badge>
                            </div>
                            <CardTitle className="mt-4 text-white">Current Membership</CardTitle>
                            <CardDescription className="text-slate-400">{member.plan}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-slate-500">JOIN DATE</p>
                                <p className="text-sm text-white">{member.joinDate}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-slate-500">EXPIRY DATE</p>
                                <p className="text-sm text-white font-medium flex items-center gap-2">
                                    {member.expiryDate}
                                    <span className="text-xs text-amber-500 bg-amber-500/10 px-1.5 py-0.5 rounded ml-2">210 days left</span>
                                </p>
                            </div>
                            <Separator className="bg-white/10" />
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-slate-500">NOTES</p>
                                <p className="text-sm text-slate-300 italic">{member.notes}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column: History Tabs */}
                <div className="lg:col-span-2">
                    <Tabs defaultValue="attendance" className="w-full">
                        <TabsList className="bg-[#0b1220] border border-white/10 h-10 p-0.5 rounded-lg mb-4">
                            <TabsTrigger value="attendance" className="rounded-md data-[state=active]:bg-white/10 data-[state=active]:text-white text-slate-400">
                                Attendance History
                            </TabsTrigger>
                            <TabsTrigger value="payments" className="rounded-md data-[state=active]:bg-white/10 data-[state=active]:text-white text-slate-400">
                                Payment History
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="attendance">
                            <Card className="bg-[#0b1220] border-white/10">
                                <CardHeader>
                                    <CardTitle className="text-lg text-white">Recent Check-ins</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {member.attendance.map((record) => (
                                            <div key={record.id} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 rounded-full bg-white/5 text-blue-400">
                                                        <Clock className="h-4 w-4" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium text-white">{record.date}</p>
                                                        <p className="text-xs text-slate-500">{record.method}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="payments">
                            <Card className="bg-[#0b1220] border-white/10">
                                <CardHeader>
                                    <CardTitle className="text-lg text-white">Payment History</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {member.payments.map((record) => (
                                            <div key={record.id} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 rounded-full bg-white/5 text-emerald-400">
                                                        <CreditCard className="h-4 w-4" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium text-white">{record.plan}</p>
                                                        <p className="text-xs text-slate-500">{record.date} • {record.method}</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm font-bold text-white">{record.amount}</p>
                                                    <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded uppercase tracking-wider">
                                                        {record.status}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </AppShell>
    );
}
