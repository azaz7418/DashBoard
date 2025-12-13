"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingCart, Package, Users, BarChart3, Settings, LogOut, Menu } from "lucide-react";

const SideNav = ({ collapsed, theme }) => {
  const pathname = usePathname();

  return (
    <div
      className={`h-full text-sidebar-text flex flex-col p-4 font-sans
                  border-r border-sidebar-border transition-all duration-300 ${collapsed ? "w-16" : "w-64"}`}
      style={{
        background:
          theme === "dark"
            ? "linear-gradient(180deg, #0b1023 0%, #0e1430 100%)"
            : "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
      }}
    >
      {/* Header / Logo */}
      <div className="flex items-center justify-between mb-8 px-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="text-white font-bold text-xl">X</span>
          </div>
          {!collapsed && (
            <span className="text-sidebar-text dark:text-white text-xl font-bold tracking-tight">Dashnext</span>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {/* Main Navigation */}
        <section className="mb-6 pt-4">
          <nav className="space-y-1">
            <NavItem
              icon={<Home size={18} />}
              label="Dashboard"
              href="/"
              active={pathname === "/"}
              collapsed={collapsed}
            />
            <NavItem
              icon={<ShoppingCart size={18} />}
              label="Orders"
              href="/orders"
              active={pathname === "/orders"}
              collapsed={collapsed}
            />
            <NavItem
              icon={<Package size={18} />}
              label="Products"
              href="/products"
              active={pathname === "/products"}
              collapsed={collapsed}
            />
            <NavItem
              icon={<Users size={18} />}
              label="Customers"
              href="/customers"
              active={pathname === "/customers"}
              collapsed={collapsed}
            />
            <NavItem
              icon={<BarChart3 size={18} />}
              label="Analytics"
              href="/analytics"
              active={pathname === "/analytics"}
              collapsed={collapsed}
            />
          </nav>
        </section>

        {/* Auth Section */}
        <section className="mb-6 border-t border-sidebar-border pt-4">
          {!collapsed && (
            <p className="text-[10px] font-bold uppercase tracking-widest text-sidebar-text opacity-50 mb-4 px-2">
              Auth
            </p>
          )}
          <nav className="space-y-1">
            <NavItem
              icon={<Settings size={18} />}
              label="Settings"
              href="/settings"
              active={pathname === "/settings"}
              collapsed={collapsed}
            />
            <NavItem icon={<LogOut size={18} />} label="Logout" href="/logout" danger collapsed={collapsed} />
          </nav>
        </section>
      </div>
    </div>
  );
};

/* --------------------------------
   Nav Item Component
--------------------------------- */
const NavItem = ({ icon, label, badge, sublabel, active, danger, href, collapsed }) => {
  const content = (
    <div
      className={`
        flex items-center ${collapsed ? "justify-center" : "gap-3"} px-3 py-2 rounded-lg cursor-pointer
        transition-all duration-200 group
        ${
          active
            ? "bg-sidebar-item text-sidebar-activeItem "
            : danger
            ? "text-sidebar-text hover:bg-error/10 hover:text-error"
            : "text-sidebar-text hover:bg-sidebar-hover hover:text-sidebar-text-hover"
        }
      `}
    >
      <div className="transition-colors group-hover:text-sidebar-text-hover">{icon}</div>

      {!collapsed && (
        <div className="flex flex-col">
          <span className="text-sm font-medium transition-colors">{label}</span>
          {sublabel && <span className="text-[10px] opacity-70 leading-none">{sublabel}</span>}
        </div>
      )}

      {badge}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
};

export default SideNav;
