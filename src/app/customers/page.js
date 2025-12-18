"use client";

import React, { useState, useMemo } from "react";
import { customersData, ordersData } from "../../components/data/DummyData";

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const filteredCustomers = useMemo(() => {
    return customersData.filter((customer) => {
      const matchesSearch =
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === "All" || customer.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  const getCustomerOrders = (customerId) => {
    return ordersData.filter((order) => order.customerId === customerId);
  };

  const getSpendingTrend = (customerId) => {
    const orders = getCustomerOrders(customerId);
    // Simple trend: if more than 5 orders, "High", else "Low"
    return orders.length > 5 ? "High" : "Low";
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Customers</h1>
      <div className="bg-white/50 dark:bg-black/20 p-6 rounded-xl border border-border shadow-sm">
        <p className="text-muted-foreground mb-4">View and manage customer details.</p>

        {/* Search and Filter */}
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border border-border rounded-lg bg-background"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-border rounded-lg bg-background"
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Customers Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted/50">
                <th className="border border-border px-4 py-2 text-left">Name</th>
                <th className="border border-border px-4 py-2 text-left">Email</th>
                <th className="border border-border px-4 py-2 text-left">City</th>
                <th className="border border-border px-4 py-2 text-left">Total Orders</th>
                <th className="border border-border px-4 py-2 text-left">Total Spent</th>
                <th className="border border-border px-4 py-2 text-left">Status</th>
                <th className="border border-border px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-muted/20">
                  <td className="border border-border px-4 py-2">{customer.name}</td>
                  <td className="border border-border px-4 py-2">{customer.email}</td>
                  <td className="border border-border px-4 py-2">{customer.city}</td>
                  <td className="border border-border px-4 py-2">{customer.totalOrders}</td>
                  <td className="border border-border px-4 py-2">${customer.totalSpent.toFixed(2)}</td>
                  <td className="border border-border px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded ${
                        customer.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>
                  <td className="border border-border px-4 py-2">
                    <button
                      onClick={() => setSelectedCustomer(customer)}
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customer Profile Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">{selectedCustomer.name} Profile</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p>
                  <strong>Email:</strong> {selectedCustomer.email}
                </p>
                <p>
                  <strong>City:</strong> {selectedCustomer.city}
                </p>
                <p>
                  <strong>Total Orders:</strong> {selectedCustomer.totalOrders}
                </p>
                <p>
                  <strong>Total Spent:</strong> ${selectedCustomer.totalSpent.toFixed(2)}
                </p>
                <p>
                  <strong>Status:</strong> {selectedCustomer.status}
                </p>
                <p>
                  <strong>Last Login:</strong> {selectedCustomer.lastLogin}
                </p>
              </div>
              <div>
                <p>
                  <strong>Spending Trend:</strong> {getSpendingTrend(selectedCustomer.id)}
                </p>
                <p>
                  <strong>Joined At:</strong> {selectedCustomer.joinedAt}
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2">Order History</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border px-2 py-1 text-left">Order ID</th>
                    <th className="border border-border px-2 py-1 text-left">Product</th>
                    <th className="border border-border px-2 py-1 text-left">Amount</th>
                    <th className="border border-border px-2 py-1 text-left">Status</th>
                    <th className="border border-border px-2 py-1 text-left">Payment Method</th>
                    <th className="border border-border px-2 py-1 text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {getCustomerOrders(selectedCustomer.id).map((order) => (
                    <tr key={order.id}>
                      <td className="border border-border px-2 py-1">{order.id}</td>
                      <td className="border border-border px-2 py-1">{order.products.join(", ")}</td>
                      <td className="border border-border px-2 py-1">${order.totalAmount.toFixed(2)}</td>
                      <td className="border border-border px-2 py-1">{order.orderStatus}</td>
                      <td className="border border-border px-2 py-1">{order.paymentMethod}</td>
                      <td className="border border-border px-2 py-1">{order.createdAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button
              onClick={() => setSelectedCustomer(null)}
              className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
