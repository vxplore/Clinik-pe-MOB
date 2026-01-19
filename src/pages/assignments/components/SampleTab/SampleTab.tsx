import SampleStatCard from "./SampleStatCard";
import SampleCard from "./SampleCard";

interface Sample {
  id: string;
  title: string;
  subtitle: string;
  statusText: string;
  note: string;
}

interface SampleTabProps {
  handleMarkCollected?: () => Promise<void>;
}

const SampleTab = ({ handleMarkCollected = async () => {} }: SampleTabProps) => {
  const stats = [
    { label: "Total", value: "8", type: "total" as const },
    { label: "Collected", value: "5", type: "collected" as const },
    { label: "Pending", value: "3", type: "pending" as const },
  ];

  const samples: Sample[] = [
    {
      id: "1",
      title: "Sample - 001",
      subtitle: "Blood Test",
      statusText: "Collected",
      note: "Sample collected on 15 Jan 2024 at 09:30 AM",
    },
    {
      id: "2",
      title: "Sample - 002",
      subtitle: "Urine Test",
      statusText: "Pending",
      note: "Awaiting collection from patient",
    },
  ];

  return (
    <div className="space-y-4">
      <SampleStatCard stats={stats} />
      {samples.map((sample) => (
        <SampleCard
          handleMarkCollected={handleMarkCollected}
          key={sample.id}
          title={sample.title}
          subtitle={sample.subtitle}
          statusText={sample.statusText}
          note={sample.note}
        />
      ))}
    </div>
  );
};

export default SampleTab;