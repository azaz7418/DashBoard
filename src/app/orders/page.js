"use client";

import React, { useState, useMemo } from "react";
import { ordersData } from "../../components/data/DummyData";

export default function OrdersPage() {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedOrders, setSelectedOrders] = useState([]);

  const filteredOrders = useMemo(() => {
    return ordersData.filter((order) => {
      const orderDate = new Date(order.createdAt);
      const fromDate = dateFrom ? new Date(dateFrom) : null;
      const toDate = dateTo ? new Date(dateTo) : null;

      if (fromDate && orderDate < fromDate) return false;
      if (toDate && orderDate > toDate) return false;
      if (statusFilter && order.orderStatus !== statusFilter) return false;

      return true;
    });
  }, [dateFrom, dateTo, statusFilter]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Orders</h1>

      <div className="bg-white/50 dark:bg-black/20 p-6 rounded-xl border border-border shadow-sm">
        <p className="text-muted-foreground mb-6">Manage and view your orders here.</p>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-foreground mb-1">Date From</label>
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="px-3 py-2 border border-border rounded-md bg-background text-foreground"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-foreground mb-1">Date To</label>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="px-3 py-2 border border-border rounded-md bg-background text-foreground"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-foreground mb-1">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-border rounded-md bg-background text-foreground"
            >
              <option value="">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        {/* Bulk Actions */}
        {selectedOrders.length > 0 && (
          <div className="mb-4 p-3 bg-secondary rounded-md flex items-center justify-between">
            <span className="text-sm font-medium">{selectedOrders.length} orders selected</span>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-success text-white rounded-md text-sm hover:bg-success/80">
                Mark as Shipped
              </button>
              <button className="px-3 py-1 bg-info text-white rounded-md text-sm hover:bg-info/80">Export CSV</button>
            </div>
          </div>
        )}

        {filteredOrders.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/20 dark:bg-muted/30">
                  <th className="py-2 px-4 border-b border-border">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedOrders(filteredOrders.map((o) => o.id));
                        } else {
                          setSelectedOrders([]);
                        }
                      }}
                      checked={selectedOrders.length === filteredOrders.length && filteredOrders.length > 0}
                    />
                  </th>
                  <th className="py-2 px-4 border-b border-border">Order ID</th>
                  <th className="py-2 px-4 border-b border-border">Customer Name</th>
                  <th className="py-2 px-4 border-b border-border">Order Date</th>
                  <th className="py-2 px-4 border-b border-border">Total Amount</th>
                  <th className="py-2 px-4 border-b border-border">Payment Status</th>
                  <th className="py-2 px-4 border-b border-border">Order Status</th>
                  <th className="py-2 px-4 border-b border-border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-muted/10">
                    <td className="py-3 px-4 border-b border-border">
                      <input
                        type="checkbox"
                        checked={selectedOrders.includes(order.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedOrders([...selectedOrders, order.id]);
                          } else {
                            setSelectedOrders(selectedOrders.filter((id) => id !== order.id));
                          }
                        }}
                      />
                    </td>
                    <td className="py-3 px-4 border-b border-border">{order.id}</td>
                    <td className="py-3 px-4 border-b border-border">{order.customerName}</td>
                    <td className="py-3 px-4 border-b border-border">{order.createdAt}</td>
                    <td className="py-3 px-4 border-b border-border">${order.totalAmount}</td>
                    <td className="py-3 px-4 border-b border-border">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          order.paymentStatus === "Paid" ? "bg-success-light text-success" : "bg-error-light text-error"
                        }`}
                      >
                        {order.paymentStatus}
                      </span>
                    </td>
                    <td className="py-3 px-4 border-b border-border">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          order.orderStatus === "Delivered"
                            ? "bg-success-light text-success"
                            : order.orderStatus === "Pending"
                            ? "bg-warning-light text-warning"
                            : "bg-error-light text-error"
                        }`}
                      >
                        {order.orderStatus}
                      </span>
                    </td>
                    <td className="py-3 px-4 border-b border-border">
                      <div className="flex gap-2">
                        <button className="px-2 py-1 bg-primary text-white rounded text-xs hover:bg-primary/80">
                          View
                        </button>
                        <select className="px-2 py-1 border border-border bg-background rounded text-xs">
                          <option>Update Status</option>
                          <option value="Pending">Pending</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                        <button className="px-2 py-1 bg-error text-white rounded text-xs hover:bg-error/80">
                          Cancel
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="mt-8 h-64 bg-muted/50 rounded-lg border border-dashed border-border flex items-center justify-center">
            <span className="text-muted-foreground">Orders data will appear here</span>
          </div>
        )}
      </div>
    </div>
  );
}
