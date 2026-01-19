export const getColors = ({ color }: { color: string }) => {
  if (color === "orange") {
    return { backgroundColor: "#FFF2DF", color: "#D58700" };
  }
  if (color === "green") {
    return { backgroundColor: "#E6FDF5", color: "#09986A" };
  }
  if (color === "gray") {
    return { backgroundColor: "#F3F4F6", color: "#6B7280" };
  }
  return {};
};

export const getStatColor = (type: string) => {
  switch (type) {
    case "total":
      return "#111827";
    case "collected":
      return "#16A34A";
    case "pending":
      return "#EA580C";
    default:
      return "#111827";
  }
};
