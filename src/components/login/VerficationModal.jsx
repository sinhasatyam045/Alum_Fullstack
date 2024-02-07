import React, { useEffect, useRef, useState } from "react";

const VerficationModal = ({ length, onOtpSubmit = () => {} }) => {
  const [isLoading, setLoading] = useState(false);
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);
  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }
  const handleChange = (index, e) => {
    const val = e.target.value;
    if (isNaN(val)) return;

    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = val.substring(val.length - 1);
    setOtp(newOtp);

    // Submit Trigger
    const combineOtp = newOtp.join("");
    if (combineOtp.length == length) {
      setLoading(true);
      someRequest().then(() => {
        setLoading(!isLoading);
        const loaderElement = document.querySelector(".loader-container");
        if (loaderElement && combineOtp === "1234") {
          loaderElement.remove();
          onOtpSubmit();
        } else {
          alert("Invalid OTP");
          setOtp(new Array(length).fill(""));
          inputRefs.current[0].focus();
        }
      });
    }

    // Move to next input field automatically
    if (val && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    // if skipped any previous field it will go back to the empty field
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };
  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      // Moving focus to the previous input field
      inputRefs.current[index - 1].focus();
    }
  };
  return (
    <>
      <div className="otp-box flex gap-4">
        {otp.map((val, index) => {
          return (
            <input
              ref={(input) => (inputRefs.current[index] = input)}
              key={index}
              type="text"
              value={val}
              onChange={(e) => handleChange(index, e)}
              onClick={() => handleClick(index)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="otpInput border-4 border-solid w-[40px] h-[40px] md:w-[50px] md:h-[50px] text-center text-[1.2rem]"
            />
          );
        })}
      </div>
      {isLoading && (
        <div className="loader-container">
          <div className="loader border-4 rounded-full border-solid border-gray-200 border-t-blue-500 w-[2rem] h-[2rem] spin-animation"></div>
        </div>
      )}
    </>
  );
};

export default VerficationModal;
