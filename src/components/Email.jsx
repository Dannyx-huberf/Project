import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 🔁 Import
import { emailProps } from "../constants/properties";

function Email() {
  const navigate = useNavigate(); // 🧭 Setup navigation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailPattern.test(email)) {
      navigate("/success"); // 👈 Redirect to Success page
    } else {
      setError("Please enter a valid email address.");
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <section className="mt-5 sm:mt-10">
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-6">
        <div className="flex justify-between items-center">
          <p className="font-roboto font-[900] text-[16px] sm:text-3xl">
            {emailProps.heading}
          </p>

          {error && (
            <p className="text-red-500 text-2xl lg:text-[20px]">{error}</p>
          )}
        </div>

        <input
          type="text"
          name="email"
          id="emails"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={emailProps.placeHolder}
          className={`w-full px-2 py-3 border-2 rounded-[5px] sm:text-3xl sm:px-3.5 sm:py-4.5
            ${error ? "border-red-500 bg-red-100 placeholder-red-600" : "border-gray-500"}
          `}
        />

        <button
          type="submit"
          className="w-full text-center sm:text-3xl px-2 py-3.5 bg-dBlue rounded-[5px] text-white font-[700] font-roboto sm:px-3.5 sm:py-5.5 mb-2"
        >
          {emailProps.buttonTxt}
        </button>
      </form>
    </section>
  );
}

export default Email;
