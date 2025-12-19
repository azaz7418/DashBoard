"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { productsData } from "@/components/data/DummyData";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default function ProductsPage() {
  const router = useRouter();
  const [categoryFilter, setCategoryFilter] = useState("");

  const filteredProducts = useMemo(() => {
    return productsData.filter((p) => {
      if (categoryFilter && p.category !== categoryFilter) return false;
      return true;
    });
  }, [categoryFilter]);

  return (
    <div className="p-8">
      {/* ================= HEADER CARD ================= */}
      <div className="bg-white/50 dark:bg-black/20 border border-border rounded-xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 px-6 py-5 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">All Product List</h2>

          <div className="flex items-center gap-3">
            <button  onClick={()=> router.push(`/products/create`)} className="px-4 py-2 bg-primary text-white rounded-md text-sm">Add Product</button>
            <select className="px-3 py-2 border border-border rounded-md bg-background text-sm">
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Year</option>
            </select>
          </div>
        </div>

        {/* ================= TABLE ================= */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-muted-foreground">
              <tr className="border-b border-border">
                <th className="px-6 py-4">
                  <input type="checkbox" />
                </th>
                <th className="text-left px-6 py-4">Product Name & Size</th>
                <th className="text-left px-6 py-4">Price</th>
                <th className="text-left px-6 py-4">Stock</th>
                <th className="text-left px-6 py-4">Category</th>
                <th className="text-left px-6 py-4">Rating</th>
                <th className="text-center px-6 py-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className="border-b border-border hover:bg-muted/10">
                  {/* Checkbox */}
                  <td className="px-6 py-5">
                    <input type="checkbox" />
                  </td>

                  {/* Product */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                        {/* image placeholder */}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{product.name}</p>
                        <p className="text-xs text-muted-foreground">Size: S, M, L</p>
                      </div>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="px-6 py-5 font-medium">${product.price.toFixed(2)}</td>

                  {/* Stock */}
                  <td className="px-6 py-5">
                    <p className="font-medium">{product.stock} Item Left</p>
                    <p className="text-xs text-muted-foreground">{product.sold ?? 0} Sold</p>
                  </td>

                  {/* Category */}
                  <td className="px-6 py-5">{product.category}</td>

                  {/* Rating */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 rounded-md bg-muted text-xs font-medium">
                        ★ {product.rating ?? "4.5"}
                      </span>
                      <span className="text-xs text-muted-foreground">{product.reviews ?? 55} Review</span>
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-5">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => router.push(`/products/${product.id}`)}
                        className="p-2 rounded-md bg-muted hover:bg-muted/70"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-md bg-muted hover:bg-muted/70">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-md bg-muted hover:bg-muted/70">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredProducts.length === 0 && (
            <div className="py-16 text-center text-muted-foreground">Products data will appear here</div>
          )}
        </div>
      </div>
    </div>
  );
}
