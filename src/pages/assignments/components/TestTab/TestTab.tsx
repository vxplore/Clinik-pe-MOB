// import React from 'react'
import TestCard from "./TestCard";

interface Test {
  id: string;
  title: string;
  description: string;
  status: "Active" | "Completed";
}

const TestTab = () => {
  const tests: Test[] = [
    {
      id: "1",
      title: "Complete Blood Count (CBC)",
      description: "Full blood count to check for anemia and infections",
      status: "Active",
    },
    {
      id: "2",
      title: "Liver Function Test (LFT)",
      description: "Tests to check liver health and function",
      status: "Completed",
    },
  ];

  const handleDelete = (id: string) => {
    console.log("Delete test:", id);
  };

  return (
    <div className="space-y-4">
      {tests.map((test) => (
        <TestCard
          key={test.id}
          title={test.title}
          description={test.description}
          status={test.status}
          onDelete={() => handleDelete(test.id)}
        />
      ))}
    </div>
  );
};

export default TestTab;
