import React from "react";
import "./Home.css"; 
import {ReactComponent as CodeThinking} from "../Assets/CodeThinking.svg"

const Home = () => {
  return (
    <>
    <br/>
      <CodeThinking/>
    <section>
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi there! I'm Emanuel Molina, a passionate developer and problem solver.
          This is my portfolio, where you can explore my projects and learn more
          about me.
        </p>
    </section>
    </>
  );
};

export default Home;
