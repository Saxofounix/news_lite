import React from "react";
import HomeArticles from "../article-pages";
import Hero from "./hero";

const Home = ({ page, setPage, activeIndex, setActiveIndex }) => {
  return (
    <>
      <Hero />
      <HomeArticles
        page={page}
        setPage={setPage}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </>
  );
};

export default Home;
