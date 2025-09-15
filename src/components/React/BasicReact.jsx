import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchConcepts,
  addConcept,
  updateConcept,
  deleteConcept,
} from "../features/reactConceptSlice";
import { useNavigate } from "react-router-dom";

export default function ReactConceptsCRUD() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    items: concepts,
    loading,
    error,
  } = useSelector((state) => state.reactConcepts);

  const [name, setName] = useState("");
  const [route, setRoute] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    dispatch(fetchConcepts());
  }, [dispatch]);

  // ✅ Submit (Add / Update)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      dispatch(
        updateConcept({ id: editingId, updatedConcept: { name, route } })
      );
      setEditingId(null);
    } else {
      dispatch(addConcept({ name, route }));
    }
    setName("");
    setRoute("");
  };

  // ✅ Edit
  const handleEdit = (concept) => {
    setName(concept.name);
    setRoute(concept.route);
    setEditingId(concept._id);
  };

  // ✅ Delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this concept?")) {
      dispatch(deleteConcept(id));
    }
  };

  // ✅ Navigate
  const handleNavigate = (routePath) => {
    navigate(routePath);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">
        React Concepts (CRUD + Redux-RTK)
      </h2>

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

      {/* Loading/Error */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

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
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(concept)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(concept._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
              <button
                onClick={() => handleNavigate(concept.route)}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                Go
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
