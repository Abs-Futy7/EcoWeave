'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Topbar from '@/components/app/Topbar';
import { ArrowLeft, Save, Bell, Lock, User, Database, Mail, Shield, Eye, EyeOff } from 'lucide-react';

export default function SettingsPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [settings, setSettings] = useState({
    // Account Settings
    name: 'John Doe',
    email: 'john.doe@example.com',
    company: 'EcoWeave Textiles',
    
    // Notification Settings
    emailNotifications: true,
    alertNotifications: true,
    weeklyReports: true,
    
    // Data Settings
    autoSave: true,
    dataRetention: '90',
    
    // Security Settings
    twoFactorAuth: false,
    sessionTimeout: '30',
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (field: string, value: any) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Save settings logic here
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-full bg-background p-4">
      <Topbar />
      <div className="min-h-full bg-[#F7F7F7] rounded-2xl p-4 mt-4">
        {/* Header */}
        <div className="px-6 py-4 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-medium tracking-tight">Settings</h1>
              <p className="text-md text-foreground/60 mt-1">
                Manage your account, notifications, and preferences
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="rounded-full" onClick={() => router.push('/dashboard')}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <Button 
                variant="primary" 
                className="rounded-full bg-gradient-to-b from-[#004737] to-green-700 hover:from-green-500 hover:to-green-700 text-white" 
                onClick={handleSave}
              >
                <Save className="w-4 h-4 mr-2" />
                {saved ? 'Saved!' : 'Save Changes'}
              </Button>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Account Settings */}
            <div className="lg:col-span-2 space-y-4">
              {/* Profile Information */}
              <div className="bg-white rounded-xl p-6 shadow-sm/3">
                <div className="flex items-center gap-2 mb-4">
                  <User className="w-5 h-5 text-[#004737]" />
                  <h2 className="text-2xl tracking-tight font-semibold text-gray-900">Profile Information</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground/80 mb-1 block">Full Name</label>
                    <input
                      type="text"
                      value={settings.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground/80 mb-1 block">Email Address</label>
                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground/80 mb-1 block">Company Name</label>
                    <input
                      type="text"
                      value={settings.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Notification Settings */}
              <div className="bg-white rounded-xl p-6 shadow-sm/3">
                <div className="flex items-center gap-2 mb-4">
                  <Bell className="w-5 h-5 text-[#004737]" />
                  <h2 className="text-2xl tracking-tight font-semibold text-gray-900">Notifications</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Email Notifications</div>
                      <div className="text-sm text-foreground/60">Receive email updates about your batches</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.emailNotifications}
                        onChange={(e) => handleChange('emailNotifications', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Alert Notifications</div>
                      <div className="text-sm text-foreground/60">Get notified about high-risk batches</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.alertNotifications}
                        onChange={(e) => handleChange('alertNotifications', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Weekly Reports</div>
                      <div className="text-sm text-foreground/60">Receive weekly compliance summary</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.weeklyReports}
                        onChange={(e) => handleChange('weeklyReports', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Data Management */}
              <div className="bg-white rounded-xl p-6 shadow-sm/3">
                <div className="flex items-center gap-2 mb-4">
                  <Database className="w-5 h-5 text-[#004737]" />
                  <h2 className="text-2xl tracking-tight font-semibold text-gray-900">Data Management</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Auto-Save Data</div>
                      <div className="text-sm text-foreground/60">Automatically save changes to localStorage</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.autoSave}
                        onChange={(e) => handleChange('autoSave', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground/80 mb-1 block">Data Retention Period (days)</label>
                    <select
                      value={settings.dataRetention}
                      onChange={(e) => handleChange('dataRetention', e.target.value)}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-[#F7F7F7] cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="30">30 days</option>
                      <option value="60">60 days</option>
                      <option value="90">90 days</option>
                      <option value="180">180 days</option>
                      <option value="365">1 year</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Security Settings */}
              <div className="bg-white rounded-xl p-6 shadow-sm/3">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-[#004737]" />
                  <h2 className="text-xl tracking-tight font-semibold text-gray-900">Security</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-sm">Two-Factor Auth</div>
                      <div className="text-xs text-foreground/60">Extra security layer</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.twoFactorAuth}
                        onChange={(e) => handleChange('twoFactorAuth', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground/80 mb-1 block">Session Timeout (min)</label>
                    <select
                      value={settings.sessionTimeout}
                      onChange={(e) => handleChange('sessionTimeout', e.target.value)}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-[#F7F7F7] cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="15">15 minutes</option>
                      <option value="30">30 minutes</option>
                      <option value="60">1 hour</option>
                      <option value="120">2 hours</option>
                    </select>
                  </div>

                  <Button variant="outline" className="w-full rounded-full">
                    Change Password
                  </Button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl p-6 shadow-sm/3">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full rounded-full text-left justify-start">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Support
                  </Button>
                  <Button variant="outline" className="w-full rounded-full text-left justify-start">
                    <Database className="w-4 h-4 mr-2" />
                    Export All Data
                  </Button>
                  <Button variant="outline" className="w-full rounded-full text-left justify-start text-red-600 border-red-200 hover:bg-red-50">
                    <Lock className="w-4 h-4 mr-2" />
                    Delete Account
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
