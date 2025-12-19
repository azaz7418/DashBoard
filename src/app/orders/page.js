"use client";

import React, { useState, useMemo } from "react";
import { ordersData } from "../../components/data/DummyData";

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");

  /* -------------------------------
     SUMMARY CALCULATIONS
  -------------------------------- */
  const summary = useMemo(() => {
    const total = ordersData.length;
    const processing = ordersData.filter(o => o.orderStatus === "Pending").length;
    const done = ordersData.filter(o => o.orderStatus === "Delivered").length;
    const income = ordersData.reduce((sum, o) => sum + o.totalAmount, 0);

    return { total, processing, done, income };
  }, []);

  /* -------------------------------
     FILTERED ORDERS
  -------------------------------- */
  const filteredOrders = useMemo(() => {
    return ordersData.filter(order => {
      if (activeTab !== "All" && order.orderStatus !== activeTab) return false;
      if (search && !order.id.toString().includes(search)) return false;
      return true;
    });
  }, [activeTab, search]);

  return (
    <div className="p-8 space-y-6">

      {/* ==============================
         TOP SUMMARY CARDS
      ============================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard title="Total Order" value={summary.total} />
        <SummaryCard title="Order on Process" value={summary.processing} />
        <SummaryCard title="Order Done" value={summary.done} />
        <SummaryCard title="Total Income" value={`$${summary.income.toFixed(2)}`} />
      </div>

      {/* ==============================
         ORDER LIST CONTAINER
      ============================== */}
      <div className="bg-white/50 dark:bg-black/20 border border-border rounded-xl p-6 space-y-5">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Order List</h2>
            <p className="text-sm text-muted-foreground">
              View and manage all transactions with details on status, payment, and customer.
            </p>
          </div>

          <input
            type="text"
            placeholder="Search Invoice"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border border-border rounded-md bg-background text-sm w-full lg:w-64"
          />
        </div>

        {/* ==============================
           STATUS TABS
        ============================== */}
        <div className="flex flex-wrap gap-2">
          {["All", "Pending", "On the way", "Delivered"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab === "All" ? "All" : tab)}
              className={`px-4 py-2 rounded-md text-sm border ${
                activeTab === tab ? "border-primary" : "border-border"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ==============================
           TABLE
        ============================== */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border text-muted-foreground">
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Customer</th>
                <th className="py-3 px-4 text-left">Products</th>
                <th className="py-3 px-4 text-center">Qty</th>
                <th className="py-3 px-4 text-left">Total</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map(order => (
                <tr key={order.id} className="border-b border-border hover:bg-muted/10">
                  <td className="py-3 px-4">{order.id}</td>
                  <td className="py-3 px-4">{order.createdAt}</td>
                  <td className="py-3 px-4">{order.customerName}</td>
                  <td className="py-3 px-4">{order.products?.join(", ")}</td>
                  <td className="py-3 px-4 text-center">{order.quantity}</td>
                  <td className="py-3 px-4">${order.totalAmount}</td>
                  <td className="py-3 px-4 text-center">
                    <button className="text-primary text-xs">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredOrders.length === 0 && (
            <div className="py-16 text-center text-muted-foreground">
              Orders data will appear here
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ==============================
   SUMMARY CARD COMPONENT
============================== */
function SummaryCard({ title, value }) {
  return (
    <div className="border border-border rounded-xl p-5 bg-background">
      <p className="text-sm text-muted-foreground">{title}</p>
      <h3 className="text-2xl font-semibold text-foreground mt-1">{value}</h3>
      <p className="text-xs text-muted-foreground mt-2">Compare to yesterday</p>
    </div>
  );
}
