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
  Upload,
  HelpCircle,
  LogOutIcon
} from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/data-upload', label: 'Data Upload', icon: Upload },
  { href: '/batches', label: 'Batches', icon: Database },
  { href: '/alerts', label: 'Alerts', icon: AlertTriangle },
  { href: '/sample-report', label: 'Reports', icon: FileText },
  { href: '/settings', label: 'Settings', icon: Settings },
  {href: '/help', label: 'Help', icon: HelpCircle},
  {href: '/logout', label: 'Logout', icon: LogOutIcon}

];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white flex flex-col h-full p-4 gap-4">
      <div className=' bg-[#f1f1f1] rounded-2xl flex flex-col gap-6 h-full justify-between'>
        {/* Logo */}
      <div className="p-6 flex items-center gap-2">
        <Link href="/dashboard" className="flex items-center gap-2">
          <BarChart3 className="w-8 h-8 text-primary" />
          <div>
            <h2 className="font-bold text-lg">EcoWeave</h2>
            <p className="text-xs text-foreground/60">Compliance Monitor</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 bg-[#f1f1f1] rounded-xl mt-5 p-6">
        <h3 className='text-[#acacac]'>Menu</h3>
        <ul className="space-y-2 mt-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 transition-all border-b-1 ${
                    isActive
                      ? 'text-[#004737] font-bold text-lg tracking-tight'
                      : 'text-foreground/60 hover:text-foreground'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : ''}`} />
                  <span className={`text-left flex-1 ${isActive ? 'font-bold' : 'font-normal'}`}>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 bg-[#f1f1f1] rounded-xl">
        <div className="text-xs text-foreground/60 text-center">
          <p>EcoWeave Dashboard v1.0</p>
          <p className="mt-1">Demo Mode</p>
        </div>
      </div>
      </div>
    </aside>
  );
}
