import React from "react";

export default function PaymentsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Payments</h1>
      <div className="bg-white/50 dark:bg-black/20 p-6 rounded-xl border border-border shadow-sm">
        <p className="text-muted-foreground">Manage and view your payments here.</p>
        <div className="mt-8 h-64 bg-muted/50 rounded-lg border border-dashed border-border flex items-center justify-center">
          <span className="text-muted-foreground">Payments data will appear here</span>
        </div>
      </div>
    </div>
  );
}
