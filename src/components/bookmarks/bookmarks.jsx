import PropTypes from "prop-types";
import Bookmark from "../bookmark/bookmark";

const Bookmarks = ({ bookmarks, mark }) => {
  return (
    <div className="w-1/3 ">
      <div className="p-4 mx-4 bg-indigo-50 rounded-lg border border-indigo-700 ">
        <h1 className="text-2xl font-bold text-indigo-700">
          Spent time on read : {mark} min
        </h1>
      </div>
      <div className=" bg-gray-100 rounded-lg p-4 m-4  ">
        <h1 className="text-2xl font-bold ">
          Bookmarked Blogs: {bookmarks.length}
        </h1>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  mark: PropTypes.number.isRequired,
};

export default Bookmarks;
