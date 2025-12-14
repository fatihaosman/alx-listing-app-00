import React from "react";
import PropertyCard from "@/components/layout/PropertyCard";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {PROPERTYLISTINGSAMPLE.map((property, index) => (
        <PropertyCard key={index} property={property} />
      ))}
    </div>
  );
};

export default Home;   



// How your pages and components work together

// pages/index.tsx

// Your home page

// Uses PROPERTYLISTINGSAMPLE to display a list of properties

// Renders <PropertyCard /> for each property

// components/layout/Layout.tsx

// Wraps every page with Header + Footer

// children is the content of the page

// components/layout/Header.tsx & Footer.tsx

// Just the top and bottom UI

// components/layout/PropertyCard.tsx

// Shows single property info (image, name, price, rating)

// constants/index.ts

// Provides mock property data with proper image paths

// interfaces/index.ts

// Provides TypeScript type definitions for your data
