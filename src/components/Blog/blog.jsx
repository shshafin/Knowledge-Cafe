import { useEffect } from "react";
import { useState } from "react";

const Blog = () => {
  // use state
  const [blog, setBlog] = useState([]);
  //   use effect
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  return (
    <div>
      <h1>Hello: </h1>
    </div>
  );
};

export default Blog;
