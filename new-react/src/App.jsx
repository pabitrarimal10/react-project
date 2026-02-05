import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dogapi.dog/api/v2/breeds")
      .then((res) => res.json())
      .then((json) => {
        setBreeds(json.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching breeds:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className="loading">Loading dog breeds...</h2>;

  return (
    <div className="container">
      <h1 className="title">🐶 Dog Breeds</h1>

      <div className="card-grid">
        {breeds.map((breed) => {
          const { attributes } = breed;

          return (
            <div className="card" key={breed.id}>
              {/* 🐕 Dog Image */}
              <img
                src={`https://placedog.net/500/280?id=${breed.id}`}
                alt={attributes.name}
                className="dog-img"
              />

              <div className="card-header">
                <h2>{attributes.name}</h2>
              </div>

              <div className="card-body">
                <p className="description">
                  {attributes.description || "No description available."}
                </p>

                <div className="info">
                  <span>
                    <strong>Life:</strong>{" "}
                    {attributes.life?.min}–{attributes.life?.max} yrs
                  </span>
                  <span>
                    <strong>Male:</strong>{" "}
                    {attributes.male_weight?.min}–{attributes.male_weight?.max} kg
                  </span>
                  <span>
                    <strong>Female:</strong>{" "}
                    {attributes.female_weight?.min}–{attributes.female_weight?.max} kg
                  </span>
                </div>
              </div>

              <div className="card-footer">
                {attributes.hypoallergenic ? (
                  <span className="badge yes">Hypoallergenic</span>
                ) : (
                  <span className="badge no">Not Hypoallergenic</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
