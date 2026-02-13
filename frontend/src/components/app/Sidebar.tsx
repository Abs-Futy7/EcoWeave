'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  AlertTriangle, 
  FileText, 
  Settings,
  BarChart3,
  Database,
  Upload
} from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/data-upload', label: 'Data Upload', icon: Upload },
  { href: '/batches', label: 'Batches', icon: Database },
  { href: '/alerts', label: 'Alerts', icon: AlertTriangle },
  { href: '/sample-report', label: 'Reports', icon: FileText },
  { href: '/settings', label: 'Settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-card border-r border-border flex flex-col h-full">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <Link href="/dashboard" className="flex items-center gap-2">
          <BarChart3 className="w-8 h-8 text-primary" />
          <div>
            <h2 className="font-bold text-lg">EcoWeave</h2>
            <p className="text-xs text-foreground/60">Compliance Monitor</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground/70 hover:bg-accent hover:text-foreground'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="text-xs text-foreground/60 text-center">
          <p>EcoWeave Dashboard v1.0</p>
          <p className="mt-1">Demo Mode</p>
        </div>
      </div>
    </aside>
  );
}
