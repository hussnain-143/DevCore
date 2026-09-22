"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, Home, Sparkles, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-1 flex-col items-center justify-center px-4 py-12 text-center overflow-hidden">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#8080800f_1px,transparent_1px),linear-gradient(to_bottom,#8080800f_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)]" />

      {/* Ambient Glowing Orbs */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[100px] animate-pulse duration-1000" />
        <div className="w-[300px] h-[300px] -translate-y-24 translate-x-24 bg-teal-500/10 dark:bg-teal-500/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative w-full max-w-lg mx-auto flex flex-col items-center">
        
        {/* Brand Header */}
        <Link href="/" className="inline-flex items-center gap-2 mb-6 group select-none">
          <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-primary-foreground shadow-sm shadow-emerald-500/25 transition-transform duration-200 group-hover:scale-105">
            <Terminal className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
          <div className="flex items-baseline text-lg font-bold tracking-tight">
            <span className="text-foreground">Dev</span>
            <span className="text-primary font-semibold transition-opacity group-hover:opacity-90 ml-0.5">
              Core
            </span>
          </div>
        </Link>

        {/* Status Chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 mb-4 shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>HTTP 404 // ROUTE_NOT_FOUND</span>
        </div>

        {/* Sculptural 404 Numerals */}
        <div className="relative select-none my-1">
          <h1 className="text-8xl sm:text-9xl font-black tracking-tighter bg-gradient-to-b from-foreground via-foreground/80 to-foreground/20 bg-clip-text text-transparent font-mono leading-none drop-shadow-sm">
            404
          </h1>
        </div>

        {/* Title & Description */}
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mt-2">
          Lost in the Bytecode?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
          The requested endpoint or resource could not be found. It might have been migrated, renamed, or does not exist.
        </p>

        {/* Modern macOS-style Diagnostic Terminal */}
        <div className="mt-6 w-full rounded-xl border border-border/80 bg-card/80 backdrop-blur-xl shadow-lg shadow-black/5 text-left overflow-hidden">
          {/* Terminal Window Bar */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-muted/40 border-b border-border/60">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="font-mono text-[11px] text-muted-foreground font-medium">
              devcore_kernel ~ status.log
            </span>
            <div className="w-8" />
          </div>

          {/* Terminal Content */}
          <div className="p-4 font-mono text-xs space-y-1.5 leading-relaxed">
            <p className="text-foreground/90 flex items-center gap-1.5">
              <span className="text-emerald-500 font-bold">$</span>
              <span>router.resolve(window.location.pathname)</span>
            </p>
            <p className="text-rose-500 dark:text-rose-400 font-medium">
              ✗ [404] Exception: Route segment could not be resolved
            </p>
            <p className="text-muted-foreground/70">
              → Stack: CoreRouter.lookup(target, strict=false) → null
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
          <Link href="/">
            <Button
              size="lg"
              className="w-full sm:w-auto gap-2 cursor-pointer shadow-md shadow-emerald-500/20 text-sm font-medium"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto gap-2 cursor-pointer hover:bg-primary/20 text-sm font-medium"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.history.back();
              }
            }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="w-full sm:w-auto gap-2 cursor-pointer text-muted-foreground hover:text-foreground text-sm font-medium"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.location.reload();
              }
            }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Reload</span>
          </Button>
        </div>

        {/* Quick Nav Suggestions */}
        <div className="mt-8 pt-6 border-t border-border/60 w-full flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
          <span className="font-medium text-foreground/80 flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-primary" />
            Navigation:
          </span>
          <Link href="/dashboard" className="px-2.5 py-1 rounded-md hover:bg-primary/20 hover:text-foreground transition-colors">
            Dashboard
          </Link>
          <span className="text-muted-foreground/40">•</span>
          <Link href="/projects" className="px-2.5 py-1 rounded-md hover:bg-primary/20 hover:text-foreground transition-colors">
            Projects
          </Link>
          <span className="text-muted-foreground/40">•</span>
          <Link href="/settings" className="px-2.5 py-1 rounded-md hover:bg-primary/20 hover:text-foreground transition-colors">
            Settings
          </Link>
        </div>

      </div>
    </div>
  );
}
