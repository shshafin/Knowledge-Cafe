import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  console.log(bookmark);
  const { title } = bookmark;
  return (
    <div>
      <h1 className="text-lg font-semibold bg-white p-4 my-4 rounded-lg ">{title}</h1>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
};

export default Bookmark;
