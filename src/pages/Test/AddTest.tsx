// import React from "react";
import TestAddCard from "../../pages/Test/TestAddCard";
import SecondaryHeader from "../../layouts/AppShell/SecondaryHeader";
import { TextInput } from "@mantine/core";
import { Search } from "lucide-react";
const AddTest = () => {
  const tests = [
    {
      title: "Complete Blood Count (CBC)",
      description:
        "Comprehensive blood analysis including RBC, WBC, platelets, and hemoglobin levels",
      originalPrice: "₹800",
      discountedPrice: "₹600",
    },
    {
      title: "Thyroid Function Test (TSH, T3, T4)",
      description:
        "Check thyroid hormone levels for thyroid disorders and metabolic issues",
      originalPrice: "₹1,200",
      discountedPrice: "₹900",
    },
    {
      title: "Liver Function Test (LFT)",
      description: "Measure liver enzymes and proteins to assess liver health",
      originalPrice: "₹1,000",
      discountedPrice: "₹750",
    },
    {
      title: "Kidney Function Test (Creatinine, BUN)",
      description: "Evaluate kidney health through blood and urine analysis",
      originalPrice: "₹800",
      discountedPrice: "₹600",
    },
    {
      title: "Blood Sugar Fasting Test",
      description:
        "Measure glucose levels after fasting for diabetes screening",
      originalPrice: "₹300",
      discountedPrice: "₹200",
    },
    {
      title: "Lipid Profile Test",
      description:
        "Check cholesterol and triglyceride levels for cardiovascular health",
      originalPrice: "₹600",
      discountedPrice: "₹450",
    },
  ];

  return (
    <div className="space-y-3 ">
      <SecondaryHeader>
        <TextInput
          leftSection={<Search size={18} />}
          radius="lg"
          placeholder="Search Test"
          className="w-full"
          styles={{
            input: {
              borderRadius: "16px",
              padding: "12px 40px",
            },
          }}
        />
      </SecondaryHeader>

      {tests.map((test, index) => (
        <TestAddCard
          key={index}
          title={test.title}
          description={test.description}
          originalPrice={test.originalPrice}
          discountedPrice={test.discountedPrice}
          onAdd={() => console.log(`Add clicked for ${test.title}`)}
        />
      ))}
    </div>
  );
};

export default AddTest;
