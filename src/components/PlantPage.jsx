import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // Store all the plants fetched from the backend
  const [plants, setPlants] = useState([]);

  // Store what the user types into the search bar
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch plants when the component first loads
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  // Filter plants according to the search query
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;