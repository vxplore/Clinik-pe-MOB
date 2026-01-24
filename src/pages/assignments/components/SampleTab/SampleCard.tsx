import React from "react";
import Badge from "../../../../shared/ui/Badge";
import { Ban, AlertCircle } from "lucide-react";
import { Button } from "@mantine/core";

interface SampleCardProps {
  title: string;
  subtitle: string;
  statusText: string;
  note: string;
  id: string;
  booking_id: string;
  handleMarkCollected: (id: string, booking_id: string) => void;
  isMarkingCollected?: boolean;
}

const SampleCard: React.FC<SampleCardProps> = ({
  title,
  subtitle,
  statusText,
  note,
  id,
  booking_id,
  handleMarkCollected,
  isMarkingCollected = false,
}) => {
  // const isLoading = useUIStore((s) => s.isLoading);
  // const isError = useUIStore((s) => s.error);
  const getBadgeColor = (status: string): "green" | "orange" => {
    return status.toLowerCase() === "collected" ? "green" : "orange";
  };

  const isPending = statusText.toLowerCase() === "pending";

  return (
    <div className="w-full">
      <div className="w-full rounded-xl border border-[#E5E7EB] bg-white p-4">
        {/* Top row */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500">{subtitle}</p>
          </div>

          <Badge color={getBadgeColor(statusText)} size="xs">
            {statusText}
          </Badge>
        </div>

        {/* Note box */}
        <div className="mt-3 rounded-lg bg-blue-50 px-4 py-3">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Note:</span> {note}
          </p>
        </div>
      </div>

      {/* Action buttons for pending status */}
      {isPending && (
        <div className="mt-3 flex gap-3 items-center">
          <Button
            onClick={() => handleMarkCollected(id, booking_id)}
            fullWidth
            color="#09986A"
            size="md"
            loading={isMarkingCollected}
            disabled={isMarkingCollected}
          >
            Mark Collected
          </Button>
          <div className="p-4 bg-gray-100 rounded-xl  hover:bg-gray-200">
            <Ban size={20} />
          </div>
          <div className="p-4 bg-gray-100 rounded-xl hover:bg-gray-200">
            <AlertCircle color="red" size={20} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SampleCard;
