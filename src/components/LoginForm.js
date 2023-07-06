"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '@/store/userSlice';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';

export default function SignupForm() {
  const dispatch = useDispatch();
  const { data: user, status, isLogin, msg } = useSelector((state) => state.user);
  const router = useRouter();

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

  useEffect(() => {
    if (isLogin == true) {
      router.push('/');
    }
  }, [isLogin]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError([]);
    setSuccess(false);

    const body = {
        email: email,
        password: password
    }

    try {
        dispatch(loginUser(body));
        // await axios.post('http://localhost:3001/users/login', body);
        // resetForm();
        // setError(['Login sucessful!']);
    } catch (error) {
        // if (error?.response?.data) {
        //     setError(Array.isArray(error.response.data.message) ? error.response.data.message : [error.response.data.message]);
        // } else {
        //     setError([error.message ? error.message : 'An unknown error occured! Please try again']);
        // }
    }

  };

  return (
    <div className="p-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Login</h1>
      <Link href='/signup'>
        <p>Cleck here to signup</p>
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

        <button className="bg-green-700 p-3 text-white font-bold" type="submit">
          Submit
        </button>
      </form>

      <div className="bg-slate-100 flex flex-col">
        {msg &&
          msg.map((e, index) => (
            <div
              key={index}
              className='text-red-600'
              // className={`${
              //   success ? "text-green-800" : "text-red-600"
              // } px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>
    </div>
  );
}
