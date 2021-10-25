import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../redux/auth/auth-operations";

export default function SignUpPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="section">
        <h1>Sing up</h1>
        <form onSubmit={handleSubmit} autoComplete="off" className="form">
          <label className="label">
            Name
            <input
              type="name"
              name="name"
              value={name}
              onChange={handleChange}
              className="input"
            />
          </label>

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
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}
