import React, { useContext, useState } from "react";
import { COUNTRY_LIST } from "./utils";
import AuthContext from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const { handleRegister } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    form.password !== form.confirmPassword &&
      setError("Passwords do not match");

    form.age === false &&
      setError("You must be 13 years or older to register for an account");

    if (error !== null) return;

    try {
      const res = await handleRegister(
        form.username,
        form.password,
        form.email
      );
      if (res) {
        setSuccess(true);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  return (
    <div
      style={{
        background:
          "radial-gradient(30% 40% at 40% 30%, rgba(33, 36, 41, .5) 0%, rgba(33, 36, 41, 0) 100%) no-repeat, url(https://store.cloudflare.steamstatic.com/public/shared/images/joinsteam/acct_creation_bg.jpg) -45vw 0 no-repeat, #212429",
      }}
    >
      <div className="w-[940px] mx-auto">
        <div className="p-[50px] min-h-[600px] max-w-[700px] mb-[250px]">
          {error ||
            (success && (
              <div
                id="error-dispay"
                className="border-[2px] border-[#b44040] p-[10px] text-[15px] bg-[#00000080] text-white mb-8"
              >
                {error ? error : success && "Account created successfully!"}
              </div>
            ))}
          <div id="account-container">
            <form>
              <div id="form-box">
                <div id="join-form">
                  <div
                    id="title"
                    className="uppercase text-[34px] text-white mb-[30px] font-extralight leading-[2px]"
                  >
                    Create Your Account
                  </div>
                  <div className="flex items-center flex-wrap my-[25px]">
                    <div className="w-[292px] float-none">
                      <label className="text-[14px] text-[#b8b6b4] align-top">
                        Email Address
                      </label>
                      <input
                        value={form.email || ""}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="bg-[#32353C] rounded-[3px] text-[#E9E9E9] py-2 px-[6px] block w-full font-normal"
                      ></input>
                    </div>
                  </div>
                  <div className="flex items-center flex-wrap my-[25px]">
                    <div className="w-[292px] float-none">
                      <label className="text-[14px] text-[#b8b6b4] align-top">
                        Username
                      </label>
                      <input
                        value={form.username || ""}
                        onChange={(e) =>
                          setForm({ ...form, username: e.target.value })
                        }
                        className="bg-[#32353C] rounded-[3px] text-[#E9E9E9] py-2 px-[6px] block w-full font-normal"
                      ></input>
                    </div>
                  </div>
                  <div className="flex items-center flex-wrap my-[25px]">
                    <div className="w-[292px] float-none">
                      <label className="text-[14px] text-[#b8b6b4] align-top">
                        Password
                      </label>
                      <input
                        value={form.password || ""}
                        onChange={(e) =>
                          setForm({ ...form, password: e.target.value })
                        }
                        type="password"
                        className="bg-[#32353C] rounded-[3px] text-[#E9E9E9] py-2 px-[6px] block w-full font-normal"
                      ></input>
                    </div>
                  </div>
                  <div className="flex items-center flex-wrap my-[25px]">
                    <div className="w-[292px] float-none">
                      <label className="text-[14px] text-[#b8b6b4] align-top">
                        Confirm your Password
                      </label>
                      <input
                        type="password"
                        value={form.confirmPassword || ""}
                        onChange={(e) =>
                          setForm({ ...form, confirmPassword: e.target.value })
                        }
                        className="bg-[#32353C] rounded-[3px] text-[#E9E9E9] py-2 px-[6px] block w-full font-normal"
                      ></input>
                    </div>
                  </div>
                  <div className="flex items-center flex-wrap my-[25px]">
                    <div className="w-[292px] float-none">
                      <label className="text-[14px] text-[#b8b6b4] align-top">
                        Country of Residence
                      </label>
                      <select className="bg-[#32353C] rounded-[3px] text-[#E9E9E9] py-2 px-[6px] block w-full font-normal">
                        {COUNTRY_LIST.map((country) => (
                          <option key={country.value} value={country.value}>
                            {country.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div id="age" className="my-[25px]">
                    <div>
                      <label className="text-[14px] text-[#b8b6b4] align-top">
                        <input
                          className="inline w-[18px] h-[18px] bg-[#32352C] rounded-[3px] text-[#E9E9E9] py-2 px-[6px] font-normal mr-2"
                          type="checkbox"
                          value={form.age || false}
                          onChange={() =>
                            setForm({ ...form, age: form.age ? false : true })
                          }
                        />
                        I am 13 years of age or older and I agree to the
                        <a className="text-[white] hover:text-[#57cbde] text-[14px] cursor-pointer">
                          {" "}
                          Steam Subscriber Agreement{" "}
                        </a>
                        and the
                        <a className="text-[white] hover:text-[#57cbde] text-[14px] cursor-pointer">
                          {" "}
                          Valve Privacy Policy
                        </a>
                        .
                      </label>
                    </div>
                    <div className="mt-[35px]">
                      <button
                        onClick={handleSubmit}
                        className="rounded-sm border-none p-[1px] inline-block cursor-pointer text-[#c3e1f8]"
                      >
                        <span
                          style={{
                            background:
                              "linear-gradient( to right, #47bfff 5%, #1a44c2 60%)",
                            backgroundPositionX: "25%",
                            backgroundSize: "330% 100%",
                            boxShadow: "2px 2px 5px #00000080",
                          }}
                          className="text-[15px] leading-[30px] py-[3px] px-[50px] rounded-sm block hover:text-white transition-all duration-300 ease-in-out hover:scale-105"
                        >
                          Continue
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
