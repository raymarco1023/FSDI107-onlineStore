import { useState } from "react";

const About = () => {
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);

  const handleShowName = () => {
    setName("Ray Garcia");
    setVisible(true);
  };

  const getMyInfo = () => {
    if (visible) {
      return (
        <div className="myInfo">
          <h1>Ray Garcia</h1>;<h2>raymarco1023@gmail</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            officiis totam, quaerat aliquid odio illum quos ipsam doloribus quam
            eveniet ea voluptas sed veniam velit laboriosam inventore. Tempore,
            veritatis eius!
          </p>
        </div>
      );
    } else return "";
  };
  return (
    <div className="about-page">
      {getMyInfo()}
      <button onClick={handleShowName}>Click to see my name</button>
    </div>
  );
};

export default About;
