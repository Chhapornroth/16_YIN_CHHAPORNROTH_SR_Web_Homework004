import React, { useState } from "react";
import { Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import { learningMaterials } from '../data/learningMaterials';

export default function LearningMaterialsComponent() {
  const [materials, setMaterials] = useState(learningMaterials);

  const toggleFavorite = (id) => {
    const updatedMaterials = materials.map((material) =>
      material.id === id ? { ...material, isFavorite: !material.isFavorite } : material
    );
    setMaterials(updatedMaterials);
    console.log(updatedMaterials)
  };

  const handleSort = (sortOrder) => {
    const sortedMaterials = [...materials].sort((a, b) => {
      if (sortOrder === "A-Z") {
        return a.title.localeCompare(b.title);
      } else if (sortOrder === "Z-A") {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });
    setMaterials(sortedMaterials);
    console.log(sortOrder)
  };

  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh] hide-scrollbar">
      <FilterComponent onSort={handleSort}/>

      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      <div className="space-y-3">
        {materials.map((material) => (
          <div key={material.id} className="bg-light-gray px-4 py-2 flex gap-5 items-center">
            <img
              src={material.image}
              alt={material.title}
              width={50}
              height={50}
              className="rounded-xl"
            />

            <div className="w-full">
              <div className="flex justify-between items-center">
                <p className="text-base font-medium">{material.title}</p>
                <Star
                  size={24}
                  onClick={() => toggleFavorite(material.id)}
                  className={material.isFavorite ? "fill-custom-yellow-500 text-custom-yellow-500" : "text-gray-400"}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <p className="text-gray-400 text-sm">Posted at: {new Date(material.postedAt).toLocaleDateString('en', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
