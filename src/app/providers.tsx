import { MantineProvider } from "@mantine/core";
// import { Notifications } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        theme={{
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto',
          fontSizes: {
            sm: "14px",
            md: "16px",
          },
          spacing: {
            xs: "8px",
            sm: "12px",
            md: "16px",
            lg: "20px",
          },
          radius: {
            sm: "8px",
            md: "12px",
          },
          colors: {
            gray: [
              "#F9FAFB",
              "#F3F4F6",
              "#E5E7EB",
              "#D1D5DB",
              "#9CA3AF",
              "#6B7280",
              "#4B5563",
              "#374151",
              "#1F2937",
              "#111827",
            ],
          },
          components: {
            Button: {
              defaultProps: {
                color: "#0D52AF",
                radius: "md",
                size: "md",
              },
            },
            TextInput: {
              defaultProps: {
                size: "md",
                styles: {
                  input: {
                    borderColor: "#E5E7EB",
                  },
                },
              },
            },
            NumberInput: {
              defaultProps: {
                size: "md",
                styles: {
                  input: {
                    borderColor: "#E5E7EB",
                  },
                },
              },
            },
            PasswordInput: {
              defaultProps: {
                visibilityToggleIcon: ({ reveal }: { reveal: boolean }) =>
                  reveal ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-eye-off-icon lucide-eye-off"
                      style={{ width: 20, height: 20 }}
                    >
                      <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                      <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                      <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                      <path d="m2 2 20 20" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-eye-icon lucide-eye"
                      style={{ width: 20, height: 20 }}
                    >
                      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  ),
                size: "md",
                styles: {
                  input: {
                    borderColor: "#E5E7EB",
                  },
                },
              },
            },
            Badge: {
              defaultProps: {
                variant: "light",
                radius: "xl",
                size: "sm",
              },
            },
            Tabs: {
              styles: {
                tabLabel: {
                  color: "#6B7280",
                  fontWeight: 600,
                },
              },
            },
          },
        }}
      >
        <Toaster
          position="top-center"
          gutter={8}
          toastOptions={{
            duration: 2500,
            style: {
              fontSize: "13px",
              lineHeight: 1.4,
              padding: "10px 14px",
              borderRadius: "10px",
              maxWidth: "70vw",
              background: "rgba(15, 23, 42, 0.92)", // 👈 subtle transparency
              color: "#F8FAFC",
              backdropFilter: "blur(8px)", // 👈 glass effect
              WebkitBackdropFilter: "blur(8px)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
            },
            success: {
              style: {
                background: "#16A34A",
              },
            },
            error: {
              style: {
                background: "#DC2626",
              },
            },
          }}
        />
        {children}
      </MantineProvider>
    </QueryClientProvider>
  );
}
