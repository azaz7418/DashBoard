"use client";

import { dashboardOverview, analyticsData, productsData } from "../components/data/DummyData";

import {
  LineChart,
  Line,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  XAxis,
} from "recharts";

export default function Home() {
  const { kpis, recentOrders, lowStockAlerts } = dashboardOverview;
  const { salesOverTime, ordersByStatus } = analyticsData;

  const topSellingProducts = [...productsData].sort((a, b) => b.price - a.price).slice(0, 5);

  const kpiData = [
    { label: "Total Revenue", value: `$${kpis.totalRevenue.toLocaleString()}` },
    { label: "Total Orders", value: kpis.totalOrders.toLocaleString() },
    { label: "Total Customers", value: kpis.totalCustomers.toLocaleString() },
    { label: "Conversion Rate", value: `${kpis.conversionRate}%` },
  ];

  const pieColors = ["var(--primary-500)", "var(--success-500)", "var(--warning-500)", "var(--error-500)"];

  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">E-Commerce Dashboard</h1>
        <p className="text-sm text-muted">Business performance overview</p>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 col-span-2 h-fit gap-5">
          {kpiData.map((kpi, index) => (
            <div key={index} className="rounded-2xl border border-border bg-background p-5 shadow-sm">
              <p className="text-xs text-muted font-medium">{kpi.label}</p>
              <p className="mt-2 text-2xl font-bold text-primary">{kpi.value}</p>
            </div>
          ))}
        </div>
        {/* Sales Chart */}
        <div className="xl:col-span-3 rounded-2xl border border-border bg-background p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-foreground mb-4">Sales Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesOverTime}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="var(--info-500)" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Orders Status */}
      </div>
      <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
        <h2 className="text-sm font-semibold text-foreground mb-4">Orders by Status</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={ordersByStatus} cx="50%" cy="50%" outerRadius={90} dataKey="value" label>
              {ordersByStatus.map((_, index) => (
                <Cell key={index} fill={pieColors[index % pieColors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="xl:col-span-2 rounded-2xl border border-border bg-background p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-foreground mb-4">Recent Orders</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-muted">
                <th className="text-left py-2">Order ID</th>
                <th className="text-left py-2">Customer</th>
                <th className="text-left py-2">Amount</th>
                <th className="text-left py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b border-border/50">
                  <td className="py-2">{order.id}</td>
                  <td className="py-2">{order.customer}</td>
                  <td className="py-2 font-medium">${order.amount}</td>
                  <td className="py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium
                        ${
                          order.status === "Delivered"
                            ? "text-success bg-success-light"
                            : order.status === "Pending"
                            ? "text-warning bg-warning-light"
                            : "text-error bg-error-light"
                        }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Low Stock */}
          <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-foreground mb-4">Low Stock Alerts</h2>
            <div className="space-y-3">
              {lowStockAlerts.map((alert) => (
                <div key={alert.productId} className="flex justify-between items-center p-3 rounded-lg bg-error-light">
                  <div>
                    <p className="text-sm font-medium">{alert.name}</p>
                    <p className="text-xs text-muted">ID: {alert.productId}</p>
                  </div>
                  <span className="text-error font-bold">{alert.stock} left</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Products */}
          <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-foreground mb-4">Top Selling Products</h2>
            <div className="space-y-3">
              {topSellingProducts.map((product) => (
                <div key={product.id} className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">{product.name}</p>
                    <p className="text-xs text-muted">{product.category}</p>
                  </div>
                  <span className="font-bold text-primary">${product.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
