

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[1, 2, 3, 4].map((i) => (
             <div key={i} className="h-32 bg-white/50 dark:bg-black/20 rounded-xl border border-border shadow-sm p-4 flex flex-col justify-between">
                <span className="text-sm text-muted-foreground font-medium">Metric {i}</span>
                <span className="text-2xl font-bold text-foreground">1,234</span>
             </div>
          ))}
      </div>
      <div className="bg-white/50 dark:bg-black/20 p-6 rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold mb-4 text-foreground">Overview</h2>
        <div className="h-64 bg-muted/50 rounded-lg border border-dashed border-border flex items-center justify-center">
            <span className="text-muted-foreground">Dashboard Overview Chart</span>
        </div>
      </div>
    </div>
  );
}
