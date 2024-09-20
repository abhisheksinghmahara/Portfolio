import React from "react";

const Home = () => {
  return (
    <div className="flex flex-wrap flex- flex-grow md-flex-column">
      <div className="flex-1 ">
        <h1
          style={{ "fontFamily": "Playwrite CU, cursive" }}
          className="pt-40 text-gray-500 text-5xl"
        >
          Welcome
        </h1>
        <hr className="w-40 h-px mx-auto my-4 bg-gray-700 border-0 rounded md:my-1 dark:bg-gray-700"></hr>
        <h1
          className="pt-5 break-words text-xl"
          style={{ "fontFamily": "Baskervville SC, system-ui" }}
        >
          Hello! It's me, <br />
          <span
            className="pl-20 text-2xl"
            style={{ "fontFamily": "Bebas Neue, system-ui", color: "blue" }}
          >
            Abhishek Mahara,
          </span>
          <br />
          a Creative <br/>
          <span
            className="break-words text-2xl"
            style={{ "fontFamily": "Bebas Neue, system-ui", color: "blue" }}
          >
             FRONTEND WEB DEVELOPER.
          </span><br/>
          With a Passion for Crafting Intuitive User Interfaces. Dedicated to Building Responsive and User-Centric Web Applications
        </h1>
      </div>
      <div className="flex-1 bg-blue-100">
        <p
          className="break-words text-2xl m-3  pt-32"
          style={{ "fontFamily": "Rajdhani, system-ui" }}
        >
         I hold a Bachelor of Technology degree and have a strong foundation in frontend development. Previously, I interned as a Full Stack Web Developer, where I gained hands-on experience in building dynamic web applications. I am passionate about transforming ideas into beautiful, functional websites. My journey in web development began with a curiosity for coding, which quickly evolved into a love for creating engaging and intuitive user interfaces.
        </p>
      </div>
    </div>
  );
};
export default Home;
