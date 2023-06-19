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
            <a
              style={{
                background:
                  "linear-gradient( to bottom, #a4d007 5%, #536904 95%)",
              }}
              className="rounded-sm border-[2px] border-[#172030] p-[1px] inline-block cursor-pointer text-[#D2E885] hover:text-white"
              href="https://store.steampowered.com/login/?snr=1_4_4__more-content-login"
            >
              <span className="px-[15px] text-[15px] leading-[30px]">
                Sign In
              </span>
            </a>
            <br />
            <br />
            or
            <a
              className="text-white hover:text-[#67c1f5]"
              href="https://store.steampowered.com/join/?snr=1_4_4__more-content-login"
            >
              {" "}
              sign up{" "}
            </a>
            and join Steam for free
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
