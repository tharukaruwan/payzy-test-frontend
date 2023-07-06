"use client";

import { useState } from "react";
import Link from 'next/link';
import axios from 'axios';

export default function SignupForm() {
  const [password, setPassword] = useState("");
  const [date_of_birth, setDateofbirth] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const resetForm = () => {
    setPassword("");
    setDateofbirth("");
    setMobile("");
    setEmail("");
    setError([]);
    setSuccess(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError([]);
    setSuccess(false);

    const body = {
        mobile: `+94${mobile}`,
        email: email,
        date_of_birth: date_of_birth,
        password: password
    }

    try {
        await axios.post('http://localhost:3001/users', body);
        resetForm();
        setError(['Signup sucessful! Please login']);
    } catch (error) {
        if (error?.response?.data) {
            setError(Array.isArray(error.response.data.message) ? error.response.data.message : [error.response.data.message]);
        } else {
            setError([error.message ? error.message : 'An unknown error occured! Please try again']);
        }
    }

  };

  return (
    <div className="p-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Signup</h1>
      <Link href='/login'>
        <p>Cleck here to login</p>
      </Link>
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

        <div>
          <label htmlFor="date_of_birth">Date of birth</label>
          <input
            onChange={(e) => setDateofbirth(e.target.value)}
            value={date_of_birth}
            type="date"
            id="date_of_birth"
            placeholder=""
          />
        </div>

        <div>
          <label htmlFor="mobile">Phone No</label>
          <input
            onChange={(e) => setMobile(e.target.value)}
            value={mobile}
            type="number"
            id="mobile"
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
