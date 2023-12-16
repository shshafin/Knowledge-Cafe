import "./App.css";
import Blogs from "./components/Blogs/blogs";
import Header from "./components/Header/header";
import Bookmark from "./components/bookmark/bookmark";

function App() {
  return (
    <>
      <Header></Header>
      <div className="md:flex">
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </div>
    </>
  );
}

export default App;
