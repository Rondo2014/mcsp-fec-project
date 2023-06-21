import { Link } from "react-router-dom";

const LoginCard = () => {
  return (
    <div className="px-[2%] py-[20px]">
      <div className="relative w-[940px] my-0 mx-auto block">
        <div
          style={{ background: "rgba( 0, 0, 0, 0.2 )" }}
          className="h-[160px] w-auto p-4 text-center text-[15px] text-[#8f98a0] font-normal"
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
  );
};

export default LoginCard;
