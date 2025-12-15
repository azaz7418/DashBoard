"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-primary/20 select-none animate-pulse">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Character Trying and Failing Animation */}
            <div className="relative w-48 h-48">
              {/* Ground/Base */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-muted rounded-full"></div>

              {/* Character */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                {/* Body */}
                <div className="w-6 h-8 bg-gradient-to-b from-primary to-primary/80 rounded-lg relative">
                  {/* Head */}
                  <div className="w-5 h-5 bg-gradient-to-b from-secondary to-secondary/80 rounded-full -mt-3 mx-auto relative">
                    {/* Eyes */}
                    <div className="flex justify-center space-x-1 mt-1">
                      <div className="w-1 h-1 bg-error rounded-full animate-pulse"></div>
                      <div className="w-1 h-1 bg-error rounded-full animate-pulse animation-delay-500"></div>
                    </div>
                    {/* Sad Mouth */}
                    <div className="w-2 h-0.5 bg-error rounded-full mx-auto mt-0.5"></div>
                  </div>

                  {/* Arms - Reaching Up */}
                  <div
                    className="absolute -left-3 top-1 w-3 h-1 bg-secondary rounded animate-bounce"
                    style={{ animationDelay: "0.2s", transform: "rotate(-20deg)" }}
                  ></div>
                  <div
                    className="absolute -right-3 top-1 w-3 h-1 bg-secondary rounded animate-bounce"
                    style={{ animationDelay: "0.4s", transform: "rotate(20deg)" }}
                  ></div>

                  {/* Legs */}
                  <div className="absolute -bottom-2 left-1 w-1 h-3 bg-primary/60 rounded animate-pulse"></div>
                  <div className="absolute -bottom-2 right-1 w-1 h-3 bg-primary/60 rounded animate-pulse animation-delay-1000"></div>
                </div>
              </div>

              {/* Goal/Object to Reach */}
              <div className="absolute top-8 right-8 w-8 h-8 bg-gradient-to-br from-success to-success/60 rounded-full shadow-lg animate-pulse">
                <div className="w-4 h-4 bg-white/20 rounded-full mx-auto mt-2 animate-ping"></div>
              </div>

              {/* Failed Attempts - Falling Elements */}
              <div
                className="absolute top-16 left-8 w-2 h-2 bg-error rounded-full animate-bounce"
                style={{ animationDelay: "1s", animationDuration: "0.8s" }}
              ></div>
              <div
                className="absolute top-20 right-12 w-1.5 h-1.5 bg-warning rounded-full animate-bounce"
                style={{ animationDelay: "2s", animationDuration: "1s" }}
              ></div>
              <div
                className="absolute top-12 left-16 w-2.5 h-2.5 bg-info rounded-full animate-bounce"
                style={{ animationDelay: "1.5s", animationDuration: "0.6s" }}
              ></div>

              {/* Reaching Lines - Attempting to Connect */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 192 192">
                <defs>
                  <linearGradient id="reachGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary-500))" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="hsl(var(--error-500))" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Failed Connection Attempts */}
                <path
                  d="M80 140 Q96 120 112 100"
                  stroke="url(#reachGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                >
                  <animate attributeName="stroke-dashoffset" values="0;10" dur="1.5s" repeatCount="indefinite" />
                </path>

                <path
                  d="M70 145 Q96 115 122 95"
                  stroke="url(#reachGradient)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="4,4"
                  className="animate-pulse animation-delay-1000"
                >
                  <animate attributeName="stroke-dashoffset" values="0;-8" dur="2s" repeatCount="indefinite" />
                </path>

                {/* Broken Connection Indicator */}
                <circle
                  cx="96"
                  cy="80"
                  r="8"
                  fill="none"
                  stroke="hsl(var(--error-500))"
                  strokeWidth="1"
                  opacity="0.3"
                  strokeDasharray="2,2"
                >
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>

              {/* Sweat Drops - Showing Effort */}
              <div
                className="absolute top-6 left-12 w-1 h-1.5 bg-info/60 rounded-full animate-bounce"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute top-8 left-10 w-0.5 h-1 bg-info/60 rounded-full animate-bounce"
                style={{ animationDelay: "1.2s" }}
              ></div>

              {/* Motivation Particles */}
              <div className="absolute top-4 right-4 text-xs animate-bounce" style={{ animationDelay: "0.3s" }}>
                💪
              </div>
              <div className="absolute top-2 left-6 text-xs animate-bounce" style={{ animationDelay: "0.8s" }}>
                🔥
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Oops! Page Not Found</h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Looks like you've ventured into the unknown digital void. The page you're looking for doesn't exist or has
              been moved to another dimension.
            </p>
          </div> */}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/"
              className="group px-8 py-3 bg-primary text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              <span>🏠</span>
              <span>Take Me Home</span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="group px-8 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              <span>⬅️</span>
              <span>Go Back</span>
            </button>
          </div>

          {/* Fun Elements */}
          <div className="pt-8">
            <p className="text-sm text-muted-foreground mb-4">While you're here, why not explore some popular pages?</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/orders"
                className="px-4 py-2 bg-secondary/10 hover:bg-secondary/20 text-secondary rounded-lg transition-colors"
              >
                📦 Orders
              </Link>
              <Link
                href="/products"
                className="px-4 py-2 bg-info/10 hover:bg-info/20 text-info rounded-lg transition-colors"
              >
                🛍️ Products
              </Link>
              <Link
                href="/analytics"
                className="px-4 py-2 bg-success/10 hover:bg-success/20 text-success rounded-lg transition-colors"
              >
                📊 Analytics
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        {/* <div className="absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-16 w-3 h-3 bg-secondary/30 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-info/30 rounded-full animate-ping animation-delay-2000"></div> */}
      </div>
    </div>
  );
}
