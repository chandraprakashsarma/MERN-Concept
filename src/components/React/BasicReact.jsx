import { Link } from "react-router-dom";

const users = [
  {
    name: "State",
    route: "/state",
  },
  {
    name: "Props",
    route: "/props",
  },
  {
    name: "Context API",
    route: "/context_api",
  },
  {
    name: "Redux - RTK",
    route: "/redux_rtk",
  },
  {
    name: "Event Handling",
    route: "/event_handling",
  },
  {
    name: "API",
    route: "/api",
  },
  {
    name: "Router",
    route: "/UIComponent",
  },
  {
    name: "Hooks",
    route: "/hooks",
  },

  {
    name: "Lifecycle Methods",
    route: "/lifecycle_methods",
  },
  {
    name: "Conditional Rendering",
    route: "/UIComponent",
  },
  {
    name: "Key - React",
    route: "/react_key",
  },
  {
    name: "Conditional Rendering",
    route: "/UIComponent",
  },
];

export default function BasicReact() {
  return (
    <>
      <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
        React Basic Concept
      </h1>

      <div className="grid grid-cols-4 gap-4 ">
        {users.map((user, index) => (
          <Link
            to={user.route}
            key={index}
            className=" p-2 rounded-md border border-gray-500 hover:bg-gray-200"
          >
            {/*<img src={user.src} alt={user.alt} className="h-auto max-w-full rounded-lg" />*/}
            <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
              {user.name}
            </h1>
            {/*<h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">{user.position}</h1>*/}
          </Link>
        ))}
      </div>
    </>
  );
}
