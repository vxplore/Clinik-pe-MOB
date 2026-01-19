import SectionHeader from "./SectionHeader";
import AssignmentCard from "./AssignmentCard";
import { useNavigate } from "react-router-dom";

export default function AssignmentPreview() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg p-0  space-y-3">
      <SectionHeader
        title="Assignments"
        actionLabel="See All"
        onActionClick={() => navigate("/assignments")}
      />

      <AssignmentCard
        name="Ayan Paul"
        id="BC-98521"
        time="09:30 AM"
        completedSamples={0}
        totalSamples={3}
        status="pending"
      />

      <AssignmentCard
        name="Mohan Paul"
        id="BC-98522"
        time="10:30 AM"
        completedSamples={3}
        totalSamples={3}
        status="completed"
      />
      <AssignmentCard
        name="Mohan Paul"
        id="BC-98522"
        time="10:30 AM"
        completedSamples={3}
        totalSamples={3}
        status="completed"
      />
    </div>
  );
}
