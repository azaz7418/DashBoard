import React from 'react';

export default function SettingsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Settings</h1>
      <div className="bg-white/50 dark:bg-black/20 p-6 rounded-xl border border-border shadow-sm">
        <p className="text-muted-foreground">Configure your application preferences.</p>
        <div className="mt-8 space-y-4">
             <div className="h-16 bg-muted/30 rounded-lg border border-border flex items-center px-4">
                <span className="text-muted-foreground">General Settings</span>
            </div>
             <div className="h-16 bg-muted/30 rounded-lg border border-border flex items-center px-4">
                <span className="text-muted-foreground">Notification Preferences</span>
            </div>
             <div className="h-16 bg-muted/30 rounded-lg border border-border flex items-center px-4">
                <span className="text-muted-foreground">Security</span>
            </div>
        </div>
      </div>
    </div>
  );
}
