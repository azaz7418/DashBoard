import React from 'react';
import Link from 'next/link';

export default function LogoutPage() {
  return (
    <div className="p-8 flex items-center justify-center min-h-[50vh]">
      <div className="text-center bg-white/50 dark:bg-black/20 p-8 rounded-xl border border-border shadow-sm max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-foreground">Signed Out</h1>
        <p className="text-muted-foreground mb-8">You have been successfully logged out of your session.</p>
        <Link 
            href="/"
            className="inline-flex items-center justify-center px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
            Return to Login
        </Link>
      </div>
    </div>
  );
}
