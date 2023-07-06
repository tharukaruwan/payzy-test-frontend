"use client";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import statusCodes from "@/util/StatusCodes";

const Profile = () => {
  const { data: user, status, isLogin } = useSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (isLogin == false) {
      router.push('/login');
    }
  }, [isLogin]);

  if (status === statusCodes.LOADING) {
    return <div>Loading ...</div>;
  }

  if (status === statusCodes.ERROR) {
    return <div>Something went wroung!!! Please try again</div>;
  }

  if (isLogin != true) {
    return <div>Please login!</div>;
  }

  return (
    <div>
      <div className="flex justify-center items-center py-4"></div>
      <h1 className="text-neutral-700 font-bold text-3xl text-center">
        {user.email}
      </h1>
      <p className="font-normal uppercase text-base text-neutral-700 text-center pb-4">
        {user.frist_name} {user.last_name}
      </p>
      <h3 className="font-semibold text-md uppercase text-center py-2">
        {user.mobile}
      </h3>
      <p className="text-sm text-neutral-600 text-center mx-10">
        {user.date_of_birth}
      </p>
      <div className="flex justify-center items-center gap-6 py-6"></div>
      <div className="flex justify-center items-center gap-6 py-6"></div>
    </div>
  );
};

export default Profile;
