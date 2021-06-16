import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My New Website", body: "lorem ipsum...", author: "mario", id: 1 },
    {
      title: "Welcome React Dev Tools",
      body: "lorem ipsum...",
      author: "yoshi",
      id: 2,
    },
    {
      title: "Something On github",
      body: "lorem ipsum...",
      author: "punto",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      <h2 style={{textAlign: 'center'}}> Homepage</h2>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;
