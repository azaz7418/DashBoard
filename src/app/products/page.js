'use client';
import { productsData } from "@/components/data/DummyData";
import { EditIcon } from "lucide-react";
import React, { useMemo, useState } from "react";

export default function ProductsPage() {
const [categoryFilter, setCategoryFilter] = useState("");

const filteredProducts = useMemo(() => {

    return productsData.filter((product) => {

      return true;
    });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Products</h1>
      <div>
        <p className="text-muted-foreground mb-6">Manage and view your products here.</p>
        <div className="flex justify-between mb-4">
          <div>
            <div>
              <label className="text-sm font-medium text-foreground mr-2">Category:</label>
              <select 
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-3 py-2 border border-border rounded-md bg-background text-foreground">
                <option value="">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Home & Living">Home & Living</option>
                <option value="Groceries">Groceries</option>
              </select>
            </div>
          </div>

          <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80">Add New Product</button>
        </div>
      </div>
      <div className="bg-white/50 dark:bg-black/20 p-6 rounded-xl border border-border shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="text-left p-2 border-b border-border">Product Image</th>
              <th className="text-left p-2 border-b border-border">Name</th>
              <th className="text-left p-2 border-b border-border">Category</th>
              <th className="text-left p-2 border-b border-border">Price</th>
              <th className="text-left p-2 border-b border-border">Stock</th>
              <th className="text-left p-2 border-b border-border">Status</th>
              <th className="text-left p-2 border-b border-border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {productsData.map((product) => (
              <tr key={product.id} className="hover:bg-muted/10">
                <td className="p-2 border-b border-border">
                  {/* <Image src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md" /> */}
                </td>
                <td className="p-2 border-b border-border">{product.name}</td>
                <td className="p-2 border-b border-border">{product.category}</td>
                <td className="p-2 border-b border-border">${product.price.toFixed(2)}</td>
                <td className="p-2 border-b border-border">{product.stock}</td>
                <td className="p-2 border-b border-border">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      product.status === "Active"
                        ? "bg-success-light text-success"
                        : product.status === "Low Stock"
                        ? "bg-warning-light text-warning"
                        : "bg-error-light text-error"
                    }`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="p-2 border-b border-border">
                  <button className="px-3 py-1 bg-primary text-white rounded-md text-sm hover:bg-primary/80">
                    <EditIcon className="inline-block w-4 h-4 mr-1" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
