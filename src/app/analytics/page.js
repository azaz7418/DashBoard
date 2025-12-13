import React from 'react';

export default function AnalyticsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Analytics</h1>
      <div className="bg-white/50 dark:bg-black/20 p-6 rounded-xl border border-border shadow-sm">
        <p className="text-muted-foreground">Detailed insights and performance metrics.</p>
        <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="h-64 bg-muted/50 rounded-lg border border-dashed border-border flex items-center justify-center">
                <span className="text-muted-foreground">Chart Area 1</span>
            </div>
            <div className="h-64 bg-muted/50 rounded-lg border border-dashed border-border flex items-center justify-center">
                <span className="text-muted-foreground">Chart Area 2</span>
            </div>
        </div>
      </div>
    </div>
  );
}
