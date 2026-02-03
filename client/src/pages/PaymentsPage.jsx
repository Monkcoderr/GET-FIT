import React, { useState } from 'react';
import { Plus, Search, Filter, Receipt } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

// Mock Data
const payments = [
    { id: 101, memberArg: "Alice Johnson", amount: 12000, plan: "Annual Platinum", date: "2024-10-24", method: "Credit Card" },
    { id: 102, memberArg: "Bob Smith", amount: 1500, plan: "Monthly Silver", date: "2024-10-23", method: "Cash" },
    { id: 103, memberArg: "Charlie Brown", amount: 4000, plan: "Quarterly Gold", date: "2024-10-22", method: "UPI/Online" },
];

export default function PaymentsPage() {
    const [isRecordOpen, setIsRecordOpen] = useState(false);

    return (
        <AppShell>
            <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-white">Payments</h1>
                    <p className="text-slate-400 mt-1">Track revenue and record new transactions</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="border-white/10 text-slate-300 hover:bg-white/5 hover:text-white">
                        <Filter className="h-4 w-4 mr-2" /> Filter
                    </Button>
                    <Dialog open={isRecordOpen} onOpenChange={setIsRecordOpen}>
                        <DialogTrigger asChild>
                            <Button className="bg-[#2F6BFF] hover:bg-[#2558d4] text-white">
                                <Plus className="h-4 w-4 mr-2" /> Record Payment
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-[#0b1220] border-white/10 text-white sm:max-w-[500px]">
                            <DialogHeader>
                                <DialogTitle>Record New Payment</DialogTitle>
                                <DialogDescription className="text-slate-400">Log a payment for a member.</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                {/* Member Search/Select Placeholder */}
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label className="text-right">Member</Label>
                                    <Input placeholder="Start typing name..." className="col-span-3 bg-white/5 border-white/10 text-white" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label className="text-right">Plan</Label>
                                    <Select>
                                        <SelectTrigger className="col-span-3 bg-white/5 border-white/10 text-white">
                                            <SelectValue placeholder="Select Plan" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-[#0b1220] border-white/10 text-white">
                                            <SelectItem value="monthly">Monthly Silver ($1500)</SelectItem>
                                            <SelectItem value="yearly">Annual Platinum ($12000)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label className="text-right">Amount</Label>
                                    <Input type="number" className="col-span-3 bg-white/5 border-white/10 text-white" placeholder="Auto-filled from plan" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label className="text-right">Mode</Label>
                                    <Select>
                                        <SelectTrigger className="col-span-3 bg-white/5 border-white/10 text-white">
                                            <SelectValue placeholder="Payment Mode" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-[#0b1220] border-white/10 text-white">
                                            <SelectItem value="cash">Cash</SelectItem>
                                            <SelectItem value="card">Credit/Debit Card</SelectItem>
                                            <SelectItem value="online">UPI / Online</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Confirm Payment</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#0b0f14]/50 backdrop-blur-sm overflow-hidden">
                <Table>
                    <TableHeader className="bg-white/5">
                        <TableRow className="border-white/10 hover:bg-transparent">
                            <TableHead className="text-slate-400">Date</TableHead>
                            <TableHead className="text-slate-400">Member</TableHead>
                            <TableHead className="text-slate-400">Plan</TableHead>
                            <TableHead className="text-slate-400">Amount</TableHead>
                            <TableHead className="text-slate-400">Mode</TableHead>
                            <TableHead className="text-slate-400 text-right">Receipt</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {payments.map((p) => (
                            <TableRow key={p.id} className="border-white/10 hover:bg-white/5">
                                <TableCell className="text-slate-300">{p.date}</TableCell>
                                <TableCell className="font-medium text-white">{p.memberArg}</TableCell>
                                <TableCell className="text-slate-300">{p.plan}</TableCell>
                                <TableCell className="font-bold text-white">${p.amount}</TableCell>
                                <TableCell>
                                    <Badge variant="outline" className="text-xs border-white/10 bg-white/5 text-slate-300">
                                        {p.method}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-400 hover:text-white">
                                        <Receipt className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </AppShell>
    );
}
