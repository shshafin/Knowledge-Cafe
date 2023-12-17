import { useState } from "react";
import "./App.css";

import Blogs from "./components/Blogs/blogs";
import Header from "./components/Header/header";
import Bookmarks from "./components/bookmarks/bookmarks";

function App() {
  // bookmark state
  const [bookmarks, setBookmarks] = useState([]);
  // mark as read state
  const [mark, setMark] = useState(0);

  // handle bookmark
  const handleBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  // handle mark as read
  const handleMarkAsRead = (id, time) => {
    const newMark = mark + time;
    setMark(newMark);
    // remove bookmarks
    const removeBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(removeBookmarks);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleBookmarks={handleBookmarks}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} mark={mark}></Bookmarks>
      </div>
    </>
  );
}

export default App;
