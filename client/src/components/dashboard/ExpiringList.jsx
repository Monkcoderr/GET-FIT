import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Clock } from 'lucide-react';
import { expiringMembers } from '@/data/mockDashboard';

export function ExpiringList() {
    return (
        <Card className="bg-[#0b0f14]/50 border-white/5 backdrop-blur-sm h-full">
            <CardHeader className="pb-3">
                <CardTitle className="text-white flex items-center justify-between">
                    <span>Expiring in 7 Days</span>
                    <span className="text-xs font-normal text-amber-500 bg-amber-500/10 px-2 py-1 rounded-full border border-amber-500/20">
                        {expiringMembers.length} Members
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {expiringMembers.map((member) => (
                        <div key={member.id} className="flex items-center justify-between group">
                            <div className="flex items-center gap-3">
                                <Avatar className="h-9 w-9 bg-white/5 border border-white/10">
                                    <AvatarFallback className="text-xs text-slate-400 bg-transparent">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                                        {member.name}
                                    </p>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <Clock className="h-3 w-3 text-amber-500" />
                                        <p className="text-xs text-slate-400">
                                            Expiring in <span className="text-amber-500 font-medium">{member.daysLeft} days</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Button size="sm" variant="outline" className="h-8 text-xs border-white/10 hover:bg-white/5 text-slate-300">
                                Renew
                            </Button>
                        </div>
                    ))}
                    {expiringMembers.length === 0 && (
                        <div className="text-center py-8 text-slate-500 text-sm">
                            No memberships expiring soon.
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
