import { useState } from "react";

const About = () => {
  const [name, setName] = useState("");

  const handleShowName = () => {
    setName("Ray Garcia");
  };
  return (
    <div className="about-page">
      <h1>{name}</h1>
      <button onClick={handleShowName}>Click to see my name</button>
    </div>
  );
};

export default About;
