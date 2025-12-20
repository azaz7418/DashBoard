"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { productsData } from "@/components/data/DummyData";
import { ArrowLeft, Star, Minus, Plus, Scooter, Ticket, Gift, Headphones } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Free shipping for all orders over $200",
    description: "Only in this week",
    icon: "Scooter", // or 'TruckIcon' depending on your library
  },
  {
    id: 2,
    title: "Special discounts for customers",
    description: "Coupons up to $ 100",
    icon: "Ticket",
  },
  {
    id: 3,
    title: "Free gift wrapping",
    description: "With 100 letters custom note",
    icon: "Gift",
  },
  {
    id: 4,
    title: "Expert Customer Service",
    description: "8:00 - 20:00, 7 days/wee",
    icon: "Headphones",
  },
];
const iconMap = {
  Scooter: Scooter,
  Ticket: Ticket,
  Gift: Gift,
  Headphones: Headphones,
};

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const product = productsData.find((p) => p.id === id);

  const [qty, setQty] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const selectedImage = product.images?.[currentImageIndex] || product.image;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [product.images.length]);

  if (!product) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-semibold text-foreground mb-4">Product Not Found</h1>
        <button onClick={() => router.push("/products")} className="px-4 py-2 bg-primary text-white rounded-md">
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-6">
      {/* Back */}
      <button
        onClick={() => router.push("/products")}
        className="flex items-center gap-2 px-4 py-2 border border-border rounded-md bg-background hover:bg-muted w-fit"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Products
      </button>

      {/* ================= TOP SECTION ================= */}
      <div className="grid grid-cols-1 xl:grid-cols-[420px_1fr] gap-6 ">
        {/* Image Gallery */}
        <div className="space-y-4 bg-white/50 dark:bg-black/20 border border-border rounded-xl p-6">
          <Image
            key={currentImageIndex}
            src={selectedImage}
            alt={product.name}
            width={400}
            height={420}
            className="rounded-xl object-cover w-full transition-opacity duration-500"
          />

          <div className="flex gap-3 justify-center">
            {product?.images?.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`${product.name} ${i + 1}`}
                width={80}
                height={80}
                className={`h-20 w-20 rounded-lg border object-cover cursor-pointer ${
                  currentImageIndex === i ? "border-primary" : "border-border"
                }`}
                onClick={() => setCurrentImageIndex(i)}
              />
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-4">
            <button className="flex-1 px-6 py-3 bg-primary text-white rounded-md">Add to Cart</button>
            <button className="flex-1 px-6 py-3 border border-border rounded-md bg-background">Buy Now</button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-5 bg-white/50 dark:bg-black/20 border border-border rounded-xl p-6">
          <span className="inline-block px-3 py-1 text-xs rounded-md bg-success-light text-success">New Arrival</span>
          <h1 className="text-2xl font-semibold text-foreground">{product.name}</h1>
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviews} Reviews)
            </span>
          </div>
          {/* Price */}
          {product.offer ? (
            <div className="space-y-1">
              <p className="text-3xl font-bold text-foreground">
                ${(product.price - (product.offer / product.price) * 100).toFixed(2)}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="line-through mr-2">${product.price.toFixed(2)}</span>
                <span className=" text-success">{(product.offer || 0).toFixed(0)}% Off</span>
              </p>
            </div>
          ) : (
            <span className="text-2xl font-semibold text-foreground">${product.price}</span>
          )}

          {/* Colors */}
          <div>
            <p className="text-sm text-muted-foreground mb-2">Colors :</p>
            <div className="flex gap-2">
              {["bg-slate-300", "bg-yellow-400", "bg-white", "bg-green-500"].map((c, i) => (
                <span key={i} className={`w-6 h-6 rounded-full border border-border ${c}`} />
              ))}
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
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-2 border border-border rounded-md">
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-10 text-center">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="p-2 border border-border rounded-md">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Stock Info */}
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>
              <span className="text-success">✔</span> In Stock
            </li>
            <li>
              <span className="text-success">✔</span> Free delivery available
            </li>
            <li>
              <span className="text-success">✔</span> Sales 10% Off (Use Code: CODE123)
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white/50 dark:bg-black/20 border border-border rounded-xl p-6 space-y-3 flex items-center justify-between">
        {features.map((item) => {
          const IconComponent = iconMap[item.icon];
          return (
            <div key={item.id} className="flex items-center gap-4 mb-0">
              {/* Icon Container */}
              <div className="bg-[#2a343d] p-3 rounded-xl flex items-center justify-center">
                <IconComponent className="text-primary w-6 h-6" />
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <h4 className="text-white text-sm font-semibold leading-tight">{item.title}</h4>
                <p className="text-[#7d8b9a] text-xs mt-1">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= BOTTOM SECTION ================= */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Item Details */}
        <div className="bg-white/50 dark:bg-black/20 border border-border rounded-xl p-6 space-y-3">
          <h3 className="font-semibold text-foreground">Items Detail</h3>
          <p className="text-sm text-muted-foreground">Product Dimensions: 53 x 40.6 x 6.4 cm</p>
          <p className="text-sm text-muted-foreground">Item Weight: 500g</p>
          <p className="text-sm text-muted-foreground">Department: Men</p>
          <p className="text-sm text-muted-foreground">Country of Origin: USA</p>
        </div>

        {/* Reviews */}
        <div className="bg-white/50 dark:bg-black/20 border border-border rounded-xl p-6 space-y-5">
          <h3 className="font-semibold text-foreground">Top Review From World</h3>

          {[1, 2].map((r) => (
            <div key={r} className="border-b border-border pb-4">
              <p className="font-medium text-foreground">Excellent Quality</p>
              <div className="flex items-center gap-1 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
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
