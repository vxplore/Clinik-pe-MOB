import React from "react";

interface FloatingCartOverlayProps {
  itemCount: number;
  totalAmount: number;
  onClick?: () => void;
}

const FloatingCartOverlay: React.FC<FloatingCartOverlayProps> = ({
  itemCount,
  totalAmount,
  onClick,
}) => {
  if (itemCount === 0) return null;

  return (
    <div
      onClick={onClick}
      style={{
        position: "fixed",
        bottom: 80,
        left: "50%",
        transform: "translateX(-50%)",
        background: "#0c831f", // Blinkit green
        color: "#fff",
        padding: "12px 16px",
        borderRadius: 999,
        display: "flex",
        alignItems: "center",
        gap: 12,
        cursor: "pointer",
        boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
        zIndex: 1000,
        animation: "slideUp 200ms ease-out",
      }}
    >
      {/* Count bubble */}
      <div
        style={{
          background: "#fff",
          color: "#0c831f",
          borderRadius: "50%",
          width: 28,
          height: 28,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: 14,
        }}
      >
        {itemCount}
      </div>

      {/* Text */}
      <div style={{ fontWeight: 600 }}>
        View Cart · ₹{totalAmount}
      </div>
    </div>
  );
};

export default FloatingCartOverlay;
