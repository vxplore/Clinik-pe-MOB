import { Clock, FlaskConical } from "lucide-react";
import clsx from "clsx";
import Badge from "../../../shared/ui/Badge";

export type AssignmentStatus = "pending" | "completed";

interface AssignmentCardProps {
  name: string;
  id: string;
  time: string; // e.g. "09:30 AM"
  completedSamples: number;
  totalSamples: number;
  status: AssignmentStatus;
}

export default function AssignmentCard({
  name,
  id,
  time,
  completedSamples,
  totalSamples,
  status,
}: AssignmentCardProps) {
  const progress =
    totalSamples === 0 ? 0 : (completedSamples / totalSamples) * 100;

  return (
    <div className="bg-white rounded-lg shadow-sm border p-3 space-y-2">
      {/* Top row */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-base font-semibold text-gray-900">{name}</p>
          <p className="text-xs text-[#828A94]">ID: {id}</p>
        </div>

        <Badge
          color={status === "pending" ? "orange" : "green"}
          variant="light"
          size="xs"
        >
          {status === "pending" ? "Pending" : "Completed"}
        </Badge>
      </div>

      {/* Meta row */}
      <div className="flex items-center gap-4 text-xs text-[#828A94]">
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>{time}</span>
        </div>

        <div className="flex items-center gap-1">
          <FlaskConical size={14} />
          <span>
            {completedSamples} of {totalSamples} Samples
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className={clsx(
            "h-full rounded-full",
            status === "completed" ? "bg-primary" : "bg-muted"
          )}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
