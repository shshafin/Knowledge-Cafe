import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
  // use state
  const [blogs, setBlogs] = useState([]);
  //   use effect
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-2/3">
      <h1>Blogs: {blogs.length}</h1>
    </div>
  );
};

export default Blogs;
