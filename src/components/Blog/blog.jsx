import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleBookmarks, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    reading_time,
    hashtags,
    posted_date,
  } = blog;
  return (
    <div className="space-y-4 ">
      <img
        className="w-[845px] h-[450px]  "
        src={cover}
        alt={`cover picture of the ${title}`}
      />

      <div className="flex justify-between ">
        <div className="flex gap-2">
          <img className="w-14  rounded-full  " src={author_img} alt="" />
          <h1 className="text-2xl font-bold">
            {author}
            <span className="text-base font-semibold text-gray-500">
              {posted_date}
            </span>
          </h1>
        </div>

        <div>
          <span className="text-xl font-medium flex items-center text-gray-500">
            {reading_time} min read
            <button
              onClick={() => handleBookmarks(blog)}
              className="w-6 h-6 hover:text-purple-700  "
            >
              <CiBookmark></CiBookmark>
            </button>
          </span>
        </div>
      </div>
      <h1 className="text-4xl font-bold">{title} </h1>
      <p className="text-xl font-medium text-gray-500 ">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(id, reading_time)}
        className="text-purple-600 text-xl font-semibold underline "
      >
        Mark as read
      </button>
      <hr className="pb-6" />
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
