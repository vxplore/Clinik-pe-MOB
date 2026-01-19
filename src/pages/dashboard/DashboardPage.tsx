// import React from "react";
import StatCard from "./components/StatCard";
import building from "../../assets/building.svg";
import lab from "../../assets/lab.svg";
import payment from "../../assets/payments.svg";
import AppointmentPreview from "./components/AssignmentPreview";
const DashboardPage = () => {
  const statCardsData = [
    {
      id: 1,
      label: "Today's Tasks",
      value: "12",
      color: "#0D52AF",
      icon: <img src={building} alt="Tasks" className="w-6 h-6" />,
    },
    {
      id: 2,
      label: "Pending Samples",
      value: "48",
      color: "#09986A",
      icon: <img src={lab} alt="Samples" className="w-6 h-6" />,
    },
    {
      id: 3,
      label: "Due Payments",
      value: "₹451.50",
      color: "#D58700",
      icon: <img src={payment} alt="Payments" className="w-6 h-6" />,
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-3  gap-4">
        {statCardsData.map((card) => (
          <StatCard
            key={card.id}
            icon={card.icon}
            label={card.label}
            value={card.value}
            color={card.color}
          />
        ))}
      </div>
      <AppointmentPreview />
    </div>
  );
};

export default DashboardPage;
