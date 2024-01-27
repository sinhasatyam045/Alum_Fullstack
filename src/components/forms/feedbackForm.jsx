import React from "react";

const FeedbackForm = () => {
  return (
    <section className="h-screen bg-[#1f2e44]">
      <div className="grid grid-rows-1 h-screen justify-center items-center md:h-90">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="container type1" style={{ backgroundColor: "#1E2D43" }}>
            <div className="mt-20 text-center">
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
                --RATE OUR SERVICES
              </p>
              <h1 className="sm:text-3xl text-5xl font-extrabold title-font mb-4 text-white">
                Fill the form to submit your feedback
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci vel odit, nam ea doloribus distinctio ad hic aperiam
                quia explicabo rerum minus a harum provident quidem nobis est
                at! Ex.
              </p>
            </div>
          </div>
          <div className="container type2" style={{ backgroundColor: "#1E2D43" }}>
            <section className="text-gray-700 body-font form relative">
              <div className="container rounded-3xl bg-white mt-11 mb-11 w-full md:w-3/4 px-5 py-6 mx-auto">
                <div className="mx-auto">
                  {/* ... rest of your form code ... */}
                  <div className="flex flex-wrap -m-2">
                     <div className="p-2 w-1/2">
                      <div className="relative">
                      <label
                          for="name"
                          className="leading-7 text-lg text-gray-600 font-semibold"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder ="Jhon Carter"
                          className="w-full bg-gray-100 rounded-2xl border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label
                          for="email"
                          className="leading-7 text-lg text-gray-600 font-semibold"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email Address"
                          className="w-full bg-gray-100 rounded-2xl border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label
                          for="email"
                          className="leading-7 text-lg text-gray-600 font-semibold"
                        >
                          Phone Number
                        </label>
                        <input
                          type="phone"
                          id="phone"
                          name="phone"
                          placeholder="98765 43210"
                          className="w-full  rounded-2xl border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <div className="relative">
                        <label
                          for="message"
                          className="leading-7 text-lg  text-gray-600 font-semibold"
                        >
                          Your service rating
                        </label>
                        <div className="flex items-center">
                          <svg
                            className="w-8 h-8 ms-3 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-8 h-8 ms-3 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-8 h-8 ms-3 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-8 h-8 ms-3 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-8 h-8 ms-3 text-gray-300 dark:text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <div className="relative">
                        <label
                          for="message"
                          className="leading-7 text-lg   text-gray-600 font-semibold"
                        >
                          Additional feedback
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          className="w-full bg-gray-100 rounded-2xl border  border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                      </div>
                    </div>
                    <label className="text-sm mt-3 block flex align-middle">
            <div className="inline-block  shadow-inner border-b border-red-200  rounded h-4 w-4">
                <input className="appearance-none" type="checkbox" />
            </div>
            <span className="ml-2 font-semibold">send me occasional promotional emails</span>
        </label>
                    <div className="p-2 w-full">
                      <button className="flex mx-auto bg-[#1f2e44] text-white  border-0 py-2 px-8 focus:outline-none  rounded text-lg">
                        Submit feedback
                      </button>
                    </div>
                  </div>
                  
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="h-20">
          <div className="m-3 py-5 px-5 inline-block flex flex-row-reverse">
            <div className="flex justify-between mb-3">
              <input
                className="mr-3 shadow-inner text-white rounded px-3 text-sm border-b border-blue-700"
                placeholder="Enter your email"
                type="text"
              />
              <button className="border-t border-teal-300 shadow-2xl bg-teal-600 text-white font-bold text-sm rounded px-3 py-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
