import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

import Header from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Indo Movie Quo DB',
    description: 'Indo Movie QuoDB',
};

export default async function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const session = await getSession();
    if (!session) redirect('/admin')
    return (
        <div className="flex">
            <Sidebar />
            <main className="w-full flex-1 overflow-hidden">
                <Header />
                {children}
            </main>
        </div>
    );
}