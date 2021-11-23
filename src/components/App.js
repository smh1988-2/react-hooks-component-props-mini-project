import React from "react";
import blogData from "../data/blog";

import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList"

// console.log(blogData);

function App() {
  return (
    <div>
      <Header name={blogData.name} />
      <About text = {blogData.about} />
      <ArticleList articles={blogData} />
    </div>
  );
}

export default App;


