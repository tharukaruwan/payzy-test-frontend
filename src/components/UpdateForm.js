"use client";

import { useState } from "react";
import axios from 'axios';

export default function UpdateForm() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const resetForm = () => {
    setPassword("");
    setEmail("");
    setError([]);
    setSuccess(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError([]);
    setSuccess(false);

    const body = {
        email: email,
        password: password
    }

    try {
        await axios.post('http://localhost:3001/users/login', body);
        resetForm();
        setError(['Login sucessful!']);
    } catch (error) {
        if (error?.response?.data) {
            setError(Array.isArray(error.response.data.message) ? error.response.data.message : [error.response.data.message]);
        } else {
            setError([error.message ? error.message : 'An unknown error occured! Please try again']);
        }
    }

  };

  return (
    <div className="p-12 max-w-3xl mx-auto nav-margin">
      <p>Change password</p>
      <form
        onSubmit={handleSubmit}
        className="py-4 mt-4 border-t flex flex-col gap-5"
      >
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder=""
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
            placeholder=""
          />
        </div>

        <button className="bg-green-700 p-3 text-white font-bold" type="submit">
          Submit
        </button>
      </form>

      <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e, index) => (
            <div
              key={index}
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>
    </div>
  );
}
