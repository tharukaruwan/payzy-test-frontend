"use client";

import { useSelector } from 'react-redux';
import { useState } from "react";
import axios from "axios";

export default function PasswordForm() {
  const { data: user, status, isLogin, token } = useSelector((state) => state.user);

  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const resetForm = () => {
    setPassword("");
    setOldPassword("");
    setError([]);
    setSuccess(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError([]);
    setSuccess(false);

    const body = {
      oldPassword: oldPassword,
      password: password,
    };

    try {
      await axios.patch(`http://localhost:3001/users/change-password/${user.id}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      resetForm();
      setError(["Password changed!"]);
    } catch (error) {
      if (error?.response?.data) {
        setError(
          Array.isArray(error.response.data.message)
            ? error.response.data.message
            : [error.response.data.message]
        );
      } else {
        setError([
          error.message
            ? error.message
            : "An unknown error occured! Please try again",
        ]);
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
          <label htmlFor="oldPassword">Old Password</label>
          <input
            onChange={(e) => setOldPassword(e.target.value)}
            value={oldPassword}
            type="password"
            id="oldPassword"
            placeholder=""
          />
        </div>

        <div>
          <label htmlFor="password">New Password</label>
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
