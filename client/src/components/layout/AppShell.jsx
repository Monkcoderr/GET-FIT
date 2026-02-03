import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";

export function AppShell({ children }) {
    return (
        <div className="min-h-screen bg-[#0b0f14] text-white font-sans antialiased selection:bg-blue-500/30">
            <Sidebar />
            <div className="md:pl-64 flex flex-col min-h-screen">
                <Topbar />
                <main className="flex-1 p-6 space-y-6 overflow-x-hidden">
                    {children}
                </main>
            </div>
        </div>
    )
}
