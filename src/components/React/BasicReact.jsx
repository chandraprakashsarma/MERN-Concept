import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReactConcepts } from "../features/reactConceptSlice";
import { Link } from "react-router-dom";
import AddReactConcept from "../React/AddReactConcept";

export default function BasicReact() {
  const dispatch = useDispatch();
  const {
    data: reactConcepts,
    loading,
    error,
  } = useSelector((state) => state.reactConcepts);

  useEffect(() => {
    dispatch(fetchReactConcepts()); // API call
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <>
      <AddReactConcept /> {/* Form to insert data */}
      {/* नीचे आपका list rendering वाला code रहेगा */}
      <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
        React Basic Concept
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {reactConcepts.map((concept, index) => (
          <Link
            to={concept.route}
            key={index}
            className="p-2 rounded-md border border-gray-500 hover:bg-gray-200"
          >
            <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
              {concept.name}
            </h1>
          </Link>
        ))}
      </div>
    </>
  );
}
