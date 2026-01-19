import ExpandableDetails from "./components/ExpandableDetails";
import AssignmentTabs from "./components/AssignmentTabs";

const AssignmentPageDetails = () => {
  const mockData = [
    {
      title: "PATIENT DETAILS",
      items: [
        { label: "Name", value: "Rajesh Kumar" },
        { label: "Age", value: "45 years" },
        { label: "Gender", value: "Male" },
      ],
    },
    {
      title: "BOOKING DETAILS",
      items: [
        { label: "Booking ID", value: "BK987654" },
        { label: "Booking Date", value: "15 Jan 2024" },
      ],
    },
    {
      title: "LOCATION",
      items: [
        { label: "Address", value: "123, MG Road, Sector 14" },
        { label: "City", value: "Gurgaon, Haryana 122001" },
      ],
      hasLocation: true,
    },
    {
      title: "PAYMENT SUMMARY",
      items: [
        { label: "Total Amount", value: "₹2,500", color: "black" },
        { label: "Paid Amount", value: "₹1,500", color: "green" },
        { label: "Due Amount", value: "₹1,000", color: "red" },
      ],
    },
  ];

  const handleLocationClick = () => {
    console.log("Location clicked");
  };

  return (
    <div className="space-y-0 bg-white pb-0">
      <ExpandableDetails
        title="Details"
        sections={mockData}
        defaultOpen={false}
        onLocationClick={handleLocationClick}
      />
      <AssignmentTabs />
    </div>
  );
};

export default AssignmentPageDetails;
