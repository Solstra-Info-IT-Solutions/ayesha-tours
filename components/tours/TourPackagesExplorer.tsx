"use client";

import { useState } from "react";
import TourCategories from "@/components/tours/TourCategories";
import TourPackagesGrid from "@/components/tours/TourPackagesGrid";

/** Holds the selected category so the filter chips actually filter the grid. */
export default function TourPackagesExplorer() {
  const [category, setCategory] = useState("all");

  return (
    <>
      <TourCategories active={category} onChange={setCategory} />
      <TourPackagesGrid category={category} />
    </>
  );
}
