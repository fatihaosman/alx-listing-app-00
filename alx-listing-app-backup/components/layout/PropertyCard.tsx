import React from "react";
import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <article className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="h-48 w-full bg-gray-200">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.name}</h3>
        <p className="text-gray-600 text-sm">
          {property.address.city}, {property.address.country}
        </p>
        <div className="flex items-center justify-between mt-3">
          <div className="text-yellow-500 font-semibold">⭐ {property.rating}</div>
          <div className="text-lg font-bold">${property.price}</div>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
