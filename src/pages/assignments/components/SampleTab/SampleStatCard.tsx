import { getStatColor } from "../../../../shared/ColorHelper";

interface StatItem {
  label: string;
  value: string | number;
  type: "total" | "collected" | "pending";
}

const SampleStatCard = ({ stats }: { stats: StatItem[] }) => {
  return (
    <div className="flex gap-2 items-center justify-between">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white border border-[#E5E7EB] w-full flex items-center justify-between shadow-sm rounded-lg py-2 px-2"
        >
          <h3 className="text-sm text-gray-600">{stat.label}</h3>
          <h2
            className="font-extrabold text-xl "
            style={{ color: getStatColor(stat.type) }}
          >
            {stat.value}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default SampleStatCard;
