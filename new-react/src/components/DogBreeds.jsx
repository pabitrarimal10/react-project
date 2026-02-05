import React, { useEffect, useState } from "react";

const DogBreeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dogapi.dog/api/v2/breeds")
      .then((response) => response.json())
      .then((data) => {
        setBreeds(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading dog breeds...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>🐶 Dog Breeds</h1>

      {breeds.map((breed) => (
        <div key={breed.id}>
          <h2>{breed.attributes.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default DogBreeds;
