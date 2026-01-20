"use client";

import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { STATE } from "../KEY";
import { mantineTheme } from "./provider/mantine.theme";
import { toasterConfig } from "./provider/toaster.config";

// Expose QueryClient only for dev/debug usage
declare global {
  interface Window {
    __TANSTACK_QUERY_CLIENT__?: import("@tanstack/query-core").QueryClient;
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    if (STATE === "development") {
      window.__TANSTACK_QUERY_CLIENT__ = queryClient;
    }
  }, [queryClient]);

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={mantineTheme}>
        <Toaster {...toasterConfig} />
        {children}
      </MantineProvider>
    </QueryClientProvider>
  );
}
