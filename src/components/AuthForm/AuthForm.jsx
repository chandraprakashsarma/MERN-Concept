import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser, logout } from "../features/authSlice";

export default function AuthForm() {
  const dispatch = useDispatch();
  const { user, token, loading, error } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(loginUser({ email: form.email, password: form.password }));
    } else {
      dispatch(registerUser(form));
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        {isLogin ? "Login" : "Register"}
      </h2>

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border p-2 mb-2 w-full"
            />
            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="border p-2 mb-2 w-full"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </>
        )}
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          {loading ? "Loading..." : isLogin ? "Login" : "Register"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <button
        onClick={() => setIsLogin(!isLogin)}
        className="text-blue-500 underline mt-4"
      >
        {isLogin
          ? "Need an account? Register"
          : "Already have an account? Login"}
      </button>

      {token && (
        <div className="mt-4">
          <p>
            Welcome, {user?.name} ({user?.role})
          </p>
          <button
            onClick={() => dispatch(logout())}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
