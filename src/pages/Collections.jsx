import React, { useState, useEffect } from "react";
import CollectionsGrid from "../components/CollectionsGrid";
import "../collections.css";

const Collections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const loadCollections = async () => {
      try {
        // Load actual collection data from JSON files
        const collectionIds = [
          "Collection-1",
          "Collection-2",
          "Collection-3",
          "Collection-4",
          "Collection-5",
          "Collection-6",
        ];

        const collectionsData = [];

        for (const id of collectionIds) {
          try {
            const response = await fetch(`/Collections/${id}/info.json`);
            const info = await response.json();
            collectionsData.push({
              folder: id,
              ...info,
              coverImage: `/Collections/${id}/Cover.jpg`,
            });
          } catch (error) {
            console.error(`Error loading collection ${id}:`, error);
          }
        }

        setCollections(collectionsData);
        console.log("Collections loaded:", collectionsData);
      } catch (error) {
        console.error("Error loading collections:", error);
      }
    };

    loadCollections();
  }, []);

  return (
    <section id="collections" className="collections">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Find Your Perfect Fit</h2>
          <p className="section-description">
            Discover our full range of clothing collections, crafted to match
            every style, mood, and occasion. From minimal everyday essentials to
            bold statement outfits, explore unique designs that combine comfort,
            quality, and trend. Find the perfect collection that speaks to your
            individuality and upgrade your wardrobe effortlessly.
          </p>
        </div>

        <CollectionsGrid collections={collections} />
      </div>
    </section>
  );
};

export default Collections;
