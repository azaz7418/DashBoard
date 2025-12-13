"use client";

import React from "react";
import { Menu, Search, Moon, Bell, LayoutGrid } from "lucide-react";
import Image from "next/image";

const Header = ({ onToggle }) => {
  return (
    <header
      className="h-16 w-full flex items-center justify-between px-6
                 border-b border-sidebar-border"
      style={{
        background: "linear-gradient(180deg, #0b1023 0%, #0e1430 100%)",
      }}
    >
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button onClick={onToggle} className="text-sidebar-text hover:text-white transition-colors">
          <Menu size={20} />
        </button>

        {/* Search */}
        <div className="relative hidden md:block">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-sidebar-text" />
          <input
            type="text"
            placeholder="Search"
            className="
              w-64 pl-10 pr-4 py-2 rounded-lg
              bg-[#0f1733]
              text-sm text-white placeholder:text-sidebar-text
              border border-sidebar-border
              focus:outline-none focus:ring-2 focus:ring-primary/40
            "
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Theme */}
        <button className="text-sidebar-text hover:text-white transition-colors">
          <Moon size={18} />
        </button>

        {/* Language */}
        <div className="flex items-center gap-1 cursor-pointer">
          {/* <Image
            src="https://www.freepik.com/free-photos-vectors/person"
            alt="EN"
            width={20}
            height={14}
            className="rounded-sm"
          /> */}
        </div>

        {/* Notifications */}
        <button className="relative text-sidebar-text hover:text-white transition-colors">
          <Bell size={18} />
          <span className="absolute -top-1 -right-1 h-2 w-2 bg-primary rounded-full" />
        </button>

        {/* Apps */}
        <button className="text-sidebar-text hover:text-white transition-colors">
          <LayoutGrid size={18} />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 pl-3 border-l border-sidebar-border">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-white leading-none">Azaz Ahamed</p>
            <span className="text-[11px] text-sidebar-text">Business</span>
          </div>
          <Image
            src="/image/person.png"
            alt="User"
            width={36}
            height={36}
            className="rounded-full border border-sidebar-border"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
