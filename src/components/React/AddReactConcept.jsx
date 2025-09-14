import { useState, useEffect } from "react";
import axios from "axios";

export default function ReactConceptsCRUD() {
  const [concepts, setConcepts] = useState([]);
  const [name, setName] = useState("");
  const [route, setRoute] = useState("");
  const [editingId, setEditingId] = useState(null);

  // ✅ Fetch Data
  const fetchConcepts = async () => {
    const res = await axios.get("http://localhost:5000/api/reactconcepts");
    setConcepts(res.data);
  };

  useEffect(() => {
    fetchConcepts();
  }, []);

  // ✅ Add / Update Concept
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        // 🔹 Update
        await axios.put(
          `http://localhost:5000/api/reactconcepts/${editingId}`,
          {
            name,
            route,
          }
        );
        setEditingId(null);
      } else {
        // 🔹 Add
        await axios.post("http://localhost:5000/api/reactconcepts", {
          name,
          route,
        });
      }

      setName("");
      setRoute("");
      fetchConcepts();
    } catch (error) {
      console.error(error);
    }
  };

  // ✅ Delete Concept
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this concept?")) {
      await axios.delete(`http://localhost:5000/api/reactconcepts/${id}`);
      fetchConcepts();
    }
  };

  // ✅ Edit Concept
  const handleEdit = (concept) => {
    setName(concept.name);
    setRoute(concept.route);
    setEditingId(concept._id);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">React Concepts (CRUD)</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-6">
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
          {editingId ? "Update Concept" : "Add Concept"}
        </button>
      </form>

      {/* List */}
      <ul>
        {concepts.map((concept) => (
          <li
            key={concept._id}
            className="flex justify-between items-center border p-2 mb-2"
          >
            <span>
              <b>{concept.name}</b> - {concept.route}
            </span>
            <div>
              <button
                onClick={() => handleEdit(concept)}
                className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(concept._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
