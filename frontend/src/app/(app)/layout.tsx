import type { Metadata } from 'next';
import Sidebar from '@/components/app/Sidebar';

export const metadata: Metadata = {
  title: 'Dashboard - EcoWeave',
  description: 'EcoWeave Compliance Dashboard - Monitor wastewater treatment compliance in real-time',
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
