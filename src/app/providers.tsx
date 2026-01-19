// src/app/providers.tsx
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

import { mantineTheme } from "./provider/mantine.theme";
import { toasterConfig } from "./provider/toaster.config";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={mantineTheme}>
        <Toaster {...toasterConfig} />
        {children}
      </MantineProvider>
    </QueryClientProvider>
  );
}
