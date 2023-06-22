import React from "react";
import { Link } from "react-router-dom";

const LoginBottom = () => {
  return (
    <div className="flex flex-row pt-[48px] items-center mx-auto w-full justify-center bg-[#181a21] h-[320px]">
      <div className=" flex-1 flex flex-col justify-center text-center max-w-[200px] mt-[20px]">
        <div className="text-[14px] text-[#b8b6b4]">
          Join Steam and discover thousands of games to play.
        </div>
        <a
          href=""
          className="w-full text-center text-[14px] mt-[10px] text-[#FFFFFF]"
        >
          Learn More
        </a>
      </div>
      <img
        src="https://store.cloudflare.steamstatic.com/public/shared/images/login/join_pc.png?v=1"
        alt=""
        className="flex-1 flex flex-col justify-center text-center max-w-[200px] overflow-clip"
      />
      <div className=" flex-1 flex flex-col justify-center text-center max-w-[200px] mt-[20px]">
        <Link
          to="/signup"
          className="mx-[40px] block text-center rounded-sm border-none p-[1px] cursor-pointer text-[#fff] bg-transparent"
        >
          <span className="block bg-transparent border-[1px] border-[#ffffff66] text-center">
            Join Steam
          </span>
        </Link>
        <div className="text-[14px] text-[#b8b6b4] mt-[10px]">
          It's Free and easy to use.
        </div>
      </div>
    </div>
  );
};

export default LoginBottom;
