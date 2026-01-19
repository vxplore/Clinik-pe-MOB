// src/app/providers/toaster.config.ts
import type { ToasterProps } from "react-hot-toast";

export const toasterConfig: ToasterProps = {
  position: "top-center",
  gutter: 8,
  toastOptions: {
    duration: 2500,
    style: {
      fontSize: "13px",
      lineHeight: 1.4,
      padding: "10px 14px",
      borderRadius: "10px",
      maxWidth: "70vw",
      background: "rgba(15, 23, 42, 0.92)",
      color: "#F8FAFC",
      backdropFilter: "blur(8px)",
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
  },
};
