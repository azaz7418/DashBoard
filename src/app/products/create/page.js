"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateProductPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    brand: "",
    gender: "",
    weight: "",
    price: "",
    discount: "",
    tax: "",
    stock: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Create Product:", formData);
    router.push("/products");
  };

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 xl:grid-cols-[320px_1fr] gap-6">
        {/* ================= LEFT PREVIEW ================= */}
        <div className="bg-white/50 dark:bg-black/20 border border-border rounded-xl p-5 space-y-5 h-fit">
          {/* Product Image */}
          <div className="rounded-xl bg-muted p-6 flex items-center justify-center">
            {/* Replace with next/image later */}
            <div className="h-40 w-full bg-muted rounded-lg" />
          </div>

          {/* Product Info */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground text-base">
              Men Black Slim Fit T-shirt <span className="text-sm text-muted-foreground">(Fashion)</span>
            </h3>
          </div>

          {/* Price */}
          <div className="text-sm space-y-1">
            <p className="text-muted-foreground">Price :</p>
            <p className="font-medium text-foreground">
              <span className="line-through text-muted-foreground mr-2">$100</span>
              $80 <span className="text-xs text-muted-foreground ml-1">(30% Off)</span>
            </p>
          </div>

          {/* Size */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Size :</p>
            <div className="flex gap-2">
              {["S", "M", "XL", "XXL"].map((size) => (
                <span
                  key={size}
                  className="px-3 py-1 rounded-md border border-border text-xs font-medium cursor-pointer hover:bg-muted"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Colors :</p>
            <div className="flex gap-2">
              {["bg-slate-300", "bg-yellow-400", "bg-white", "bg-red-400"].map((c, i) => (
                <span key={i} className={`w-6 h-6 rounded-full border border-border ${c}`} />
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button className="flex-1 px-4 py-2 border border-border rounded-md bg-background text-sm">
              Create Product
            </button>
            <button className="flex-1 px-4 py-2 bg-primary text-white rounded-md text-sm">Cancel</button>
          </div>
        </div>

        {/* ================= RIGHT FORM ================= */}
        <form onSubmit={handleSubmit} className="bg-white/50 dark:bg-black/20 border border-border rounded-xl">
          {/* Image Upload */}
          <div className="p-6 border-b border-border">
            <p className="text-sm font-medium text-foreground mb-3">Add Product Photo</p>
            <div className="h-40 border border-dashed border-border rounded-lg flex items-center justify-center text-sm text-muted-foreground">
              Drop your images here, or click to browse
            </div>
          </div>

          {/* Product Info */}
          <div className="p-6 space-y-5">
            <h3 className="font-semibold text-foreground">Product Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Product Name" name="name" value={formData.name} onChange={handleChange} />
              <Select label="Product Category" name="category" value={formData.category} onChange={handleChange}>
                <option value="">Choose category</option>
                <option>Fashion</option>
                <option>Electronics</option>
              </Select>

              <Input label="Brand" name="brand" value={formData.brand} onChange={handleChange} />
              <Select label="Gender" name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
              </Select>

              <Input label="Weight" name="weight" value={formData.weight} onChange={handleChange} />
              <Input label="Stock Quantity" name="stock" value={formData.stock} onChange={handleChange} />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-border rounded-md bg-background"
                placeholder="Short description about the product"
              />
            </div>
          </div>

          {/* Pricing */}
          <div className="p-6 border-t border-border space-y-4">
            <h3 className="font-semibold text-foreground">Pricing Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input label="Price" name="price" value={formData.price} onChange={handleChange} />
              <Input label="Discount" name="discount" value={formData.discount} onChange={handleChange} />
              <Input label="Tax" name="tax" value={formData.tax} onChange={handleChange} />
            </div>
          </div>

          {/* Actions */}
          <div className="p-6 border-t border-border flex justify-end gap-4">
            <button
              type="button"
              onClick={() => router.push("/products")}
              className="px-6 py-2 border border-border rounded-md bg-background"
            >
              Cancel
            </button>
            <button type="submit" className="px-6 py-2 bg-primary text-white rounded-md">
              Create Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ================= REUSABLE INPUT ================= */
function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground mb-2 block">{label}</label>
      <input {...props} className="w-full px-3 py-2 border border-border rounded-md bg-background" />
    </div>
  );
}

/* ================= REUSABLE SELECT ================= */
function Select({ label, children, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground mb-2 block">{label}</label>
      <select {...props} className="w-full px-3 py-2 border border-border rounded-md bg-background">
        {children}
      </select>
    </div>
  );
}
