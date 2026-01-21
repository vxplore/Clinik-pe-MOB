// import React from "react";
import { useState, useEffect } from "react";
import TestAddCard from "../../pages/Test/TestAddCard";
import TestAddCardSkeleton from "../../pages/Test/TestAddCardSkeleton";
import SecondaryHeader from "../../layouts/AppShell/SecondaryHeader";
import { TextInput } from "@mantine/core";
import { Search } from "lucide-react";
import { useOtherTests } from "./hooks/useOtherTests";
import { useParams } from "react-router-dom";
const AddTest = () => {
  
  const { id } = useParams<{ id: string }>();
  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search value
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchValue);
    }, 500); // 500ms debounce

    return () => clearTimeout(timer);
  }, [searchValue]);

  const { tests, isLoading, error } = useOtherTests(
    id!,
    100000,
    1,
    debouncedSearch,
  );
  console.log("Other Tests Data:", tests);
  return (
    <div className="space-y-3 ">
      <SecondaryHeader>
        <TextInput
          leftSection={<Search size={18} />}
          radius="lg"
          placeholder="Search Test"
          className="w-full"
          value={searchValue}
          onChange={(e) => setSearchValue(e.currentTarget.value)}
          styles={{
            input: {
              borderRadius: "16px",
              padding: "12px 40px",
            },
          }}
        />
      </SecondaryHeader>

      {error && (
        <div className="text-red-500 text-sm font-medium">
          Error: {error.message}
        </div>
      )}

      {isLoading ? (
        <>
          {Array.from({ length: 5 }).map((_, index) => (
            <TestAddCardSkeleton key={index} />
          ))}
        </>
      ) : (
        <>
          {tests?.map((test) => (
            <TestAddCard
              key={test.uid}
              uid={test.uid}
              display_name={test.display_name || ""}
              slug={test.slug}
              type={test.type}
              sub_type={test.sub_type}
              mrp={test.mrp}
              price={test.price}
              discount_available={test.discount_available}
              discount_percentage={test.discount_percentage}
              home_collection_possible={test.home_collection_possible}
              home_collection_fee={test.home_collection_fee}
              is_exist_in_booking={test.is_exist_in_booking}
              description={test.description || undefined}
              onAdd={() => console.log(`Add clicked for ${test.display_name}`)}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default AddTest;
