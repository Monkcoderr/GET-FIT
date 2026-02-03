import React, { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const initialPlans = [
    { id: 1, name: "Monthly Silver", duration: 30, price: 1500, description: "Access to gym floor 6 AM - 10 PM. Basic locker." },
    { id: 2, name: "Quarterly Gold", duration: 90, price: 4000, description: "Full access + group classes. Free shake per week." },
    { id: 3, name: "Annual Platinum", duration: 365, price: 12000, description: "VIP access, personal trainer session monthly, sauna." },
];

export default function PlansPage() {
    const [plans, setPlans] = useState(initialPlans);
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [newPlan, setNewPlan] = useState({ name: '', duration: '', price: '', description: '' });

    const handleAddPlan = () => {
        const plan = {
            id: plans.length + 1,
            ...newPlan,
            duration: parseInt(newPlan.duration),
            price: parseInt(newPlan.price)
        };
        setPlans([...plans, plan]);
        setIsAddOpen(false);
        setNewPlan({ name: '', duration: '', price: '', description: '' });
    };

    return (
        <AppShell>
            <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-white">Membership Plans</h1>
                    <p className="text-slate-400 mt-1">Configure your gym's pricing tiers</p>
                </div>
                <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                    <DialogTrigger asChild>
                        <Button className="bg-[#2F6BFF] hover:bg-[#2558d4] text-white">
                            <Plus className="h-4 w-4 mr-2" /> Add Plan
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#0b1220] border-white/10 text-white sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Create New Plan</DialogTitle>
                            <DialogDescription className="text-slate-400">Add a new membership tier.</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">Name</Label>
                                <Input id="name" value={newPlan.name} onChange={e => setNewPlan({ ...newPlan, name: e.target.value })} className="col-span-3 bg-white/5 border-white/10 text-white" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="days" className="text-right">Days</Label>
                                <Input id="days" type="number" value={newPlan.duration} onChange={e => setNewPlan({ ...newPlan, duration: e.target.value })} className="col-span-3 bg-white/5 border-white/10 text-white" placeholder="e.g. 30" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="price" className="text-right">Price</Label>
                                <Input id="price" type="number" value={newPlan.price} onChange={e => setNewPlan({ ...newPlan, price: e.target.value })} className="col-span-3 bg-white/5 border-white/10 text-white" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="desc" className="text-right">Desc</Label>
                                <Input id="desc" value={newPlan.description} onChange={e => setNewPlan({ ...newPlan, description: e.target.value })} className="col-span-3 bg-white/5 border-white/10 text-white" />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit" onClick={handleAddPlan} className="bg-blue-600 hover:bg-blue-700">Save Plan</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {plans.map(plan => (
                    <Card key={plan.id} className="bg-[#0b1220] border-white/10 flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-xl text-white">{plan.name}</CardTitle>
                            <CardDescription className="text-slate-400">{plan.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-bold text-white">${plan.price}</span>
                                <span className="text-slate-500">/ {plan.duration} days</span>
                            </div>
                        </CardContent>
                        <CardFooter className="border-t border-white/5 pt-4 flex gap-2">
                            <Button variant="outline" className="w-full border-white/10 text-slate-300 hover:bg-white/5 hover:text-white">
                                <Edit className="h-4 w-4 mr-2" /> Edit
                            </Button>
                            <Button variant="ghost" size="icon" className="text-rose-500 hover:text-rose-400 hover:bg-rose-500/10">
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </AppShell>
    );
}
