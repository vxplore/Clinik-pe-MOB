// import React from 'react'
import { useState } from "react";
import FilterChips from "./components/FilterChips";
import { AssignmentPageCard } from "./components/AssignmentPageCard";
import SecondaryHeader from "../../layouts/AppShell/SecondaryHeader";
const AssignmentPage = () => {
  const [activeTab, setActiveTab] = useState("today");

  const categoryFilters = [
    { label: "Today", value: "today" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Tomorrow", value: "tomorrow" },
    { label: "Old", value: "old" },
    { label: "new", value: "new" },
  ];

  const assignments = [
    {
      id: "1",
      name: "Ayan paul",
      age: 32,
      gender: "Male",
      address: "123 Oak Street, Downtown",
      latitude: "40.7128",
      longitude: "-74.0060",
      collectedCount: 2,
      totalCount: 3,
      testsCount: 3,
      samples: ["Blood", "Urine", "Saliva"],
    },
    {
      id: "2",
      name: "Ayan paul",
      age: 32,
      gender: "Male",
      address: "123 Oak Street, Downtown",
      latitude: "40.7128",
      longitude: "-74.0060",
      collectedCount: 2,
      totalCount: 3,
      testsCount: 3,
      samples: ["Blood", "Urine", "Saliva"],
    },
  ];

  const handleCategoryChange = (value: string) => setActiveTab(value);

  return (
    <div>
      <div className="fixed top-15 left-0 right-0 z-40 bg-white/70 backdrop-blur-md ">
        <SecondaryHeader>
          <h2 className="text-lg font-semibold text-gray-900">
            <FilterChips
              filters={categoryFilters}
              activeTab={activeTab}
              onCategoryChange={handleCategoryChange}
            />
          </h2>
        </SecondaryHeader>
      </div>
      <div>
        <div className="h-16" />
      </div>
      <div className="flex flex-col gap-4">
        {assignments.map((assignment) => (
          <AssignmentPageCard
            key={assignment.id}
            id={assignment.id}
            name={assignment.name}
            age={assignment.age}
            gender={assignment.gender}
            address={assignment.address}
            latitude={assignment.latitude}
            longitude={assignment.longitude}
            collectedCount={assignment.collectedCount}
            totalCount={assignment.totalCount}
            testsCount={assignment.testsCount}
            samples={assignment.samples}
          />
        ))}
      </div>
    </div>
  );
};

export default AssignmentPage;
