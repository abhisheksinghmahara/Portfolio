import React from "react";
const About = () => {
  return (
    <section id="about" className="py-2 bg-stone-200 text-primary-color">
      <div className="container mx-auto">
      <h2 style={{ "fontFamily": "Baskervville SC, system-ui" }} className="text-3xl text-gray-500 font-bold mb-4">Technical Skills</h2>
        <div className="flex flex-wrap justify-center text-bolder p-4">
          <div className="flex-1 min-w-[250px] m-2 bg-blue-200 p-4 text-gray text-center">
            HTML
          </div>
          <div className="flex-1 min-w-[250px] m-2 bg-green-200 p-4 text-gray text-center">
            CSS
          </div>
          <div className="flex-1 min-w-[250px] m-2 bg-red-200 p-4 text-gray text-center">
            JAVASCRIPT
          </div>
          <div className="flex-1 min-w-[250px] m-2 bg-purple-200 p-4 text-gray text-center">
            REACT.JS
          </div>
          <div className="flex-1 min-w-[250px] m-2 bg-blue-200 p-4 text-gray text-center">
            TAILWINDCSS
          </div>
          <div className="flex-1 min-w-[250px] m-2 bg-green-200 p-4 text-gray text-center">
            BOOTSTRAP
          </div>
          <div className="flex-1 min-w-[250px] m-2 bg-red-200 p-4 text-gray text-center">
            GIT
          </div>
          <div className="flex-1 min-w-[250px] m-2 bg-purple-200 p-4 text-gray text-center">
            GitHub
          </div>
        </div>
        
      <h2  style={{ "fontFamily": "Baskervville SC, system-ui" }}className="text-3xl font-bolder text-gray-500 mb-4">Soft Skills</h2>
        <div className="flex flex-wrap justify-center p-4">

          <div className="flex-1 break-words min-w-[250px] m-2 bg-blue-200 p-4 text-gray text-center">
          ANALYTICAL & QUANTITATIVE 
          CONCEPTUALIZATION
          </div>
          <div className="flex-1 min-w-[250px] m-2 bg-green-200 p-4 text-gray text-center">
          ADAPTABILITY
          </div>
          <div className="flex-1 min-w-[250px] m-2 bg-red-200 p-4 text-gray text-center">
          PROBLEM-SOLVING
          </div>
          <div className="flex-1 min-w-[250px] m-2 bg-purple-200 p-4 text-gray text-center">
          CREATIVITY
          </div>
          <div className="flex-1 min-w-[250px] m-2 bg-blue-200 p-4 text-gray text-center">
          STRONG WORK ETHICS
          </div>
          <div className="flex-1 min-w-[250px] m-2 bg-green-200 p-4 text-gray text-center">
            CRITICAL-THINKING
          </div>
          {/* <div className="flex-1 min-w-[250px] m-2 bg-red-200 p-4 text-gray text-center">
            GIT
          </div>
          <div className="flex-1 min-w-[250px] m-2 bg-purple-200 p-4 text-gray text-center">
            REACTJS
          </div> */}
        </div>
      </div>
      {/* <p className="text-lg">I am a capable and progressive minded Front-end developer. Seeking an opportinity to leverage of my passion and 
      commitment for creating responsive user interfaces, delivering high-quality responsive web solutions. I aim to 
      contribute effectively to a dynamic team environment that fosters innovation and professional growth.   </p> */}
    </section>
  );
};

export default About;
