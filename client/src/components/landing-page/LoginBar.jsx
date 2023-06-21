import { Link } from "react-router-dom";

const LoginBar = () => {
  return (
    <div className="bottom-0 mb-0 mt-20 bg-black py-[25px] relative w-full">
      <div className="relative w-[940px] mx-auto">
        <div
          id="more-content-title"
          className=" text-[24px] text-[#67c1f5] text-center"
        >
          <span className="px-[10px]">Looking for recommendations?</span>
        </div>
        <div className="relative w-[940px] mx-auto">
          <div
            id="sign-in-small"
            className="h-[130px] w-auto bg-[rgba(0,0,0,0.2)] p-4 text-center text-[15px] text-[#8f98a0] "
          >
            <p className="mt-[5px]">
              Sign in to view personalized recommendations
            </p>
            <div id="sign-in-button" className="mt-[15px]">
              <Link
                style={{
                  background:
                    "linear-gradient( to bottom, #a4d007 5%, #536904 95%)",
                }}
                className="rounded-sm border-[2px] border-[#172030] p-[1px] inline-block cursor-pointer text-[#D2E885] hover:text-white"
                to="/login"
              >
                <span className="px-[15px] text-[15px] leading-[30px]">
                  Sign In
                </span>
              </Link>
              <br />
              <br />
              or
              <Link className="text-white hover:text-[#67c1f5]" to="/signup">
                {" "}
                sign up{" "}
              </Link>
              and join Steam for free
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginBar;
