import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  return (
    <div className="formContainer">
      <h1 className="sign-in">Sign In</h1>
      <form onSubmit={handleSubmit} className="form">
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          Email
        </label>
        <br />
        <input
          className="input"
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
        <br />
        <label>
          Password
        </label>
        <br />
        <input
          className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit" className="button">Sign In</button>
      </form>
    </div>
  );
}

export default LoginForm;
