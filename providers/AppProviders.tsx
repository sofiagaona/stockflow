"use client";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MuiProvider } from "./MuiProvider";

const queryClient = new QueryClient();

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <MuiProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </MuiProvider>
  );
}
