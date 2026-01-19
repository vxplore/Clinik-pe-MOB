// src/app/providers/mantine.theme.ts
import type { MantineThemeOverride } from "@mantine/core";

export const mantineTheme: MantineThemeOverride = {
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
          input: { borderColor: "#E5E7EB" },
        },
      },
    },

    NumberInput: {
      defaultProps: {
        size: "md",
        styles: {
          input: { borderColor: "#E5E7EB" },
        },
      },
    },

    PasswordInput: {
      defaultProps: {
        size: "md",
        styles: {
          input: { borderColor: "#E5E7EB" },
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
};
