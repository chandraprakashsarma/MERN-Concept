import { useState } from "react";
import axios from "axios";

export default function AddReactConcept() {
  const [name, setName] = useState("");
  const [route, setRoute] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/reactconcepts",
        {
          name,
          route,
        }
      );

      console.log("Data Saved:", response.data);
      alert("Concept added successfully!");

      setName("");
      setRoute("");
    } catch (error) {
      console.error("Error adding concept:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md">
      <h2 className="text-xl font-bold mb-2">Add React Concept</h2>
      <input
        type="text"
        placeholder="Concept Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 m-2"
      />
      <input
        type="text"
        placeholder="Route Path"
        value={route}
        onChange={(e) => setRoute(e.target.value)}
        className="border p-2 m-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Concept
      </button>
    </form>
  );
}
