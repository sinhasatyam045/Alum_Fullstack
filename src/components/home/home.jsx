import React from "react";
import img from "../../../public/Images/diploma.png";
import img1 from "../../../public/Images/instagram.png";
import img2 from "../../../public/Images/linkedin.png";
import img3 from "../../../public/Images/facebook.png";
import img4 from "../../../public/Images/background.png"

function Home() {
  return (
    <div
      className="flex flex-col sm:flex-col "
      style={{ backgroundColor: "#1E2D43" }}
    >
      
      <div >
        <img className="w-full h-80" src={img4} alt="" />
      </div>

      <div className="mt-12  lg:pl-24 flex flex-col sm:flex-row pl-8">
        <div className="flex flex-col">
          <div className="w-80 h-40 bg-white rounded-lg overflow-hidden flex items-center justify-center">
            <p className="text-5xl font-bold" style={{ color: "#1E3C4E" }}>
              PRAGYAN <br /> SCHOOL
            </p>
          </div>
          <div className="mt-12 flex ">
            <button className="bg-yellow-500 w-28 text-white px-6 py-3 rounded-3xl">
              Login
            </button>
          </div>
          <div className="mt-8">
            <div className="flex">
              <img
                className="py-4"
                src={img1}
                href="https://www.instagram.com/"
              />
              <p className="mt-4 ml-4 text-white">INSTAGRAM</p>
            </div>
            <div className="flex">
              <img
                className="py-4"
                src={img2}
                href="https://www.instagram.com/"
              />
              <p className="mt-4 ml-4 text-white">LINKEDIN</p>
            </div>
            <div className="flex">
              <img
                className="py-4"
                src={img3}
                href="https://www.facebook.com/pragyanschool"
              />
              <p className="mt-4 ml-4 text-white">FACEBOOK</p>
            </div>
          </div>
        </div>
    
        <div className="lg:mr-12 lg:ml-56">
          <img
            loading="lazy"
            src={img}
            className="aspect-[1.3] object-contain object-center w-full overflow-hidden"
          />
        </div>

        <div className="flex flex-col mt-4 lg:ml-40">
          <h1 className="w-[302px] text-white text-[80px] font-bold font-['Poppins'] leading-10">
            ABOUT.
          </h1>
          <p className="mt-8 text-white">
            Established in 2002 , Pragyan is one <br />
            of the finest schools of Noida - <br />
            Greater Noida. Set on a beautiful <br />
            campus of 10 acres, we are a <br />
            coeducational K-12 school affiliated <br />
            to CBSE. Our extended hours upto 4<br />
            pm allow students to have more time
            <br /> to Study as well as pursue <br />
            wider interests in Sport, Art , Dance
            <br />
            and Music. Pragyan School is
            <br />
            committed to be an educational
            <br />
            institution of excellence which
            <br />
            provides all-round comprehensive
            <br />
            quality education in a safe
            <br />
            environment.
          </p>
          <a className="ml-40 mt-16 text-white text-2xl sm:ml">Read more.</a>
        </div>
    </div>    
      </div>
  );
}

export default Home;
