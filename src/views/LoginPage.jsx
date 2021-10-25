import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../redux/auth/auth-operations";

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="section">
      <h1>Log in</h1>
      <form onSubmit={handleSubmit} autoComplete="on" className="form">
        <label className="label">
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="input"
            autoComplete="username"
          />
        </label>

        <label className="label">
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="input"
            autoComplete="current-password"
          />
        </label>
        <button type="submit" className="btn">
          Sign in
        </button>
      </form>
    </div>
  );
}
