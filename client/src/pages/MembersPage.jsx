import React, { useState } from 'react';
import { Search, Filter, Plus, User, MoreHorizontal, Phone, Calendar } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

// Mock Data
const initialMembers = [
    { id: 1, name: "Alice Johnson", phone: "555-0123", status: "Active", plan: "Annual Gold", expiryDate: "2025-05-15", lastCheckIn: "2 hours ago" },
    { id: 2, name: "Bob Smith", phone: "555-0198", status: "Expired", plan: "Monthly Silver", expiryDate: "2024-01-20", lastCheckIn: "5 days ago" },
    { id: 3, name: "Charlie Brown", phone: "555-0222", status: "Active", plan: "Quarterly", expiryDate: "2024-08-10", lastCheckIn: "1 day ago" },
];

import { useNavigate } from 'react-router-dom';

export default function MembersPage() {
    const navigate = useNavigate();
    const [members, setMembers] = useState(initialMembers);
    const [search, setSearch] = useState("");
    const [isAddOpen, setIsAddOpen] = useState(false);

    // New Member state
    const [newMember, setNewMember] = useState({ name: '', phone: '', plan: 'Monthly Silver' });

    const filteredMembers = members.filter(m =>
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.phone.includes(search)
    );

    const handleAddMember = () => {
        const member = {
            id: members.length + 1,
            name: newMember.name,
            phone: newMember.phone,
            status: 'Active',
            plan: newMember.plan,
            expiryDate: '2024-11-25', // Mock logic
            lastCheckIn: 'Never'
        };
        setMembers([member, ...members]);
        setIsAddOpen(false);
        setNewMember({ name: '', phone: '', plan: 'Monthly Silver' });
    };

    return (
        <AppShell>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-white">Members</h1>
                    <p className="text-slate-400 mt-1">Manage all your gym members</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="border-white/10 text-slate-300 hover:bg-white/5 hover:text-white">
                        <Filter className="h-4 w-4 mr-2" /> Filter
                    </Button>

                    <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                        <DialogTrigger asChild>
                            <Button className="bg-[#2F6BFF] hover:bg-[#2558d4] text-white">
                                <Plus className="h-4 w-4 mr-2" /> Add Member
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-[#0b1220] border-white/10 text-white sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Add New Member</DialogTitle>
                                <DialogDescription className="text-slate-400">
                                    Create a new member profile. They will be Active immediately.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">Name</Label>
                                    <Input
                                        id="name"
                                        value={newMember.name}
                                        onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                                        className="col-span-3 bg-white/5 border-white/10 text-white"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="phone" className="text-right">Phone</Label>
                                    <Input
                                        id="phone"
                                        value={newMember.phone}
                                        onChange={(e) => setNewMember({ ...newMember, phone: e.target.value })}
                                        className="col-span-3 bg-white/5 border-white/10 text-white"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="plan" className="text-right">Plan</Label>
                                    <Select
                                        value={newMember.plan}
                                        onValueChange={(val) => setNewMember({ ...newMember, plan: val })}
                                    >
                                        <SelectTrigger className="w-[180px] col-span-3 bg-white/5 border-white/10 text-white">
                                            <SelectValue placeholder="Select a plan" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-[#0b1220] border-white/10 text-white">
                                            <SelectItem value="Monthly Silver">Monthly Silver</SelectItem>
                                            <SelectItem value="Quarterly Gold">Quarterly Gold</SelectItem>
                                            <SelectItem value="Annual Platinum">Annual Platinum</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit" onClick={handleAddMember} className="bg-blue-600 hover:bg-blue-700 text-white">
                                    Create Member
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl w-full md:w-fit border border-white/10">
                <div className="relative flex-1 md:w-[300px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                    <Input
                        placeholder="Search by name or phone..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-9 bg-transparent border-0 focus-visible:ring-0 text-white placeholder:text-slate-500 h-9"
                    />
                </div>
            </div>

            {/* Members Table Card */}
            <div className="rounded-xl border border-white/10 bg-[#0b0f14]/50 backdrop-blur-sm overflow-hidden">
                <Table>
                    <TableHeader className="bg-white/5">
                        <TableRow className="border-white/10 hover:bg-transparent">
                            <TableHead className="text-slate-400">Name</TableHead>
                            <TableHead className="text-slate-400">Status</TableHead>
                            <TableHead className="text-slate-400">Phone</TableHead>
                            <TableHead className="text-slate-400">Plan</TableHead>
                            <TableHead className="text-slate-400">Expiry</TableHead>
                            <TableHead className="text-slate-400 text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredMembers.map((member) => (
                            <TableRow
                                key={member.id}
                                className="border-white/10 hover:bg-white/5 cursor-pointer"
                                onClick={() => navigate(`/members/${member.id}`)}
                            >
                                <TableCell className="font-medium text-white">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-8 w-8 bg-white/10 border border-white/10">
                                            <AvatarFallback className="text-xs text-slate-300 bg-transparent">
                                                {member.name.split(' ').map(n => n[0]).join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                        {member.name}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant="outline" className={
                                        member.status === "Active"
                                            ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                                            : "border-rose-500/20 bg-rose-500/10 text-rose-400"
                                    }>
                                        {member.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-slate-400">
                                    <div className="flex items-center gap-2 text-xs">
                                        <Phone className="h-3 w-3" /> {member.phone}
                                    </div>
                                </TableCell>
                                <TableCell className="text-slate-300">{member.plan}</TableCell>
                                <TableCell className="text-slate-300">
                                    <div className="flex items-center gap-2 text-xs">
                                        <Calendar className="h-3 w-3 text-slate-500" /> {member.expiryDate}
                                    </div>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white hover:bg-white/10">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {filteredMembers.length === 0 && (
                    <div className="p-12 text-center text-slate-500">
                        No members found matching "{search}"
                    </div>
                )}
            </div>
        </AppShell>
    );
}
