import React from "react";
import Link from "next/link";
import { Terminal, UserPlus, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Projects", href: "/projects" },
  { label: "Settings", href: "/settings" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="h-16 w-full flex items-center justify-between px-4 sm:px-8 lg:px-12">
        
        {/* Left: Cyber Emerald Logo */}
        <Link href="/" className="flex items-center gap-2.5 group select-none">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground shadow-sm shadow-emerald-500/25 transition-transform duration-200 group-hover:scale-105">
            <Terminal className="w-4 h-4 stroke-[2.5]" />
          </div>
          <div className="flex items-baseline text-xl font-bold tracking-tight">
            <span className="text-foreground">Dev</span>
            <span className="text-primary font-semibold transition-opacity group-hover:opacity-90 ml-0.5">
              Core
            </span>
          </div>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/15 rounded-lg transition-colors"
                >
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Auth Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/login">
            <Button
              variant="ghost"
              size="sm"
              className="gap-1.5 cursor-pointer text-muted-foreground hover:text-foreground hover:bg-primary/15 font-medium"
            >
              <LogIn className="w-4 h-4" />
              <span>Sign In</span>
            </Button>
          </Link>
          <Link href="/register">
            <Button
              size="sm"
              className="gap-1.5 cursor-pointer shadow-sm shadow-emerald-500/20 font-medium"
            >
              <UserPlus className="w-4 h-4" />
              <span>Register</span>
            </Button>
          </Link>
        </div>

      </div>
    </header>
  );
}