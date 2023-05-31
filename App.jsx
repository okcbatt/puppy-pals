import "./App.css";
import { puppyList } from "./data";
import { useState } from "react";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log("puppyList: ", puppyList);
  const [featPupId, setFeatPupID] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  return (
    <>
      <div className="App">
        <div className = "puppy-list">
        {puppies.map((puppy) => {
          return (
            <p
              onClick={() => {
                setFeatPupID(puppy.id);
              }}
              key={puppy.id}
              className={`puppy-name ${featPupId === puppy.id ? 'active' : ''}`}
            >
              {puppy.name}
            </p>
          );
        })}
        </div>
        {featPupId && (
          <div className="featured-puppy">
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
