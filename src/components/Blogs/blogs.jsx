import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/blog";
import PropTypes from "prop-types";

const Blogs = ({ handleBookmarks, handleMarkAsRead }) => {
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
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          handleBookmarks={handleBookmarks}
          handleMarkAsRead={handleMarkAsRead}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleBookmarks: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func,
};

export default Blogs;
