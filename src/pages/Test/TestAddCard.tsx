import React from "react";
import { Plus } from "lucide-react";
import { Button } from "@mantine/core";
interface TestAddCardProps {
  title: string;
  description: string;
  originalPrice?: string; // crossed price
  discountedPrice: string;
  onAdd: () => void;
  addLabel?: string; // default: "Add"
}

const TestAddCard: React.FC<TestAddCardProps> = ({
  title,
  description,
  originalPrice,
  discountedPrice,
  onAdd,
  addLabel = "Add",
}) => {
  return (
    <div className="w-full rounded-xl border border-[#F3F4F6] shadow-sm bg-white p-4">
      {/* Title & description */}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{description}</p>

      {/* Bottom row */}
      <div className="mt-4 flex items-center justify-between">
        {/* Prices */}
        <div className="flex items-center gap-2">
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {originalPrice}
            </span>
          )}
          <span className="text-lg font-semibold text-green-600">
            {discountedPrice}
          </span>
        </div>

        {/* Add button */}
        <Button onClick={onAdd} px={16} py={4} leftSection={<Plus size={20} />}>
          {addLabel}
        </Button>
      </div>
    </div>
  );
};

export default TestAddCard;
