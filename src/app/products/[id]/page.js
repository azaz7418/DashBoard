"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { productsData } from "@/components/data/DummyData";
import { ArrowLeft, Star, Minus, Plus } from "lucide-react";

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const product = productsData.find((p) => p.id === id);

  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-semibold text-foreground mb-4">
          Product Not Found
        </h1>
        <button
          onClick={() => router.push("/products")}
          className="px-4 py-2 bg-primary text-white rounded-md"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-8">

      {/* Back */}
      <button
        onClick={() => router.push("/products")}
        className="flex items-center gap-2 px-4 py-2 border border-border rounded-md bg-background hover:bg-muted w-fit"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Products
      </button>

      {/* ================= TOP SECTION ================= */}
      <div className="grid grid-cols-1 xl:grid-cols-[420px_1fr] gap-8 bg-white/50 dark:bg-black/20 border border-border rounded-xl p-6">

        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="rounded-xl bg-muted h-[420px] flex items-center justify-center">
            Product Image
          </div>

          <div className="flex gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-20 w-20 rounded-lg bg-muted border border-border"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-5">
          <span className="inline-block px-3 py-1 text-xs rounded-md bg-success-light text-success">
            New Arrival
          </span>

          <h1 className="text-2xl font-semibold text-foreground">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviews} Reviews)
            </span>
          </div>

          {/* Price */}
          <div className="space-y-1">
            <p className="text-3xl font-bold text-foreground">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="line-through mr-2">$100.00</span>
              <span>(20% Off)</span>
            </p>
          </div>

          {/* Colors */}
          <div>
            <p className="text-sm text-muted-foreground mb-2">Colors :</p>
            <div className="flex gap-2">
              {["bg-slate-300", "bg-yellow-400", "bg-white", "bg-green-500"].map(
                (c, i) => (
                  <span
                    key={i}
                    className={`w-6 h-6 rounded-full border border-border ${c}`}
                  />
                )
              )}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <p className="text-sm text-muted-foreground mb-2">Size :</p>
            <div className="flex gap-2">
              {["S", "M", "XL", "XXL"].map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 border border-border rounded-md text-sm cursor-pointer hover:bg-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <p className="text-sm text-muted-foreground mb-2">Quantity :</p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="p-2 border border-border rounded-md"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-10 text-center">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="p-2 border border-border rounded-md"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Stock Info */}
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>✔ In Stock</li>
            <li>✔ Free delivery available</li>
            <li>✔ Sales 10% Off (Use Code: CODE123)</li>
          </ul>

          {/* Actions */}
          <div className="flex gap-4 pt-4">
            <button className="flex-1 px-6 py-3 bg-primary text-white rounded-md">
              Add to Cart
            </button>
            <button className="flex-1 px-6 py-3 border border-border rounded-md bg-background">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM SECTION ================= */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Item Details */}
        <div className="bg-white/50 dark:bg-black/20 border border-border rounded-xl p-6 space-y-3">
          <h3 className="font-semibold text-foreground">Items Detail</h3>
          <p className="text-sm text-muted-foreground">
            Product Dimensions: 53 x 40.6 x 6.4 cm
          </p>
          <p className="text-sm text-muted-foreground">
            Item Weight: 500g
          </p>
          <p className="text-sm text-muted-foreground">
            Department: Men
          </p>
          <p className="text-sm text-muted-foreground">
            Country of Origin: USA
          </p>
        </div>

        {/* Reviews */}
        <div className="bg-white/50 dark:bg-black/20 border border-border rounded-xl p-6 space-y-5">
          <h3 className="font-semibold text-foreground">
            Top Review From World
          </h3>

          {[1, 2].map((r) => (
            <div key={r} className="border-b border-border pb-4">
              <p className="font-medium text-foreground">Excellent Quality</p>
              <div className="flex items-center gap-1 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Great product, fits well and material quality is excellent.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
