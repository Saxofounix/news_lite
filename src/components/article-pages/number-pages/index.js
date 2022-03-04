import React, { useEffect, useState } from "react";
import { LineWrapper, Page } from "./numberElements";

const NumberLine = ({
  setPage,
  executeScroll,
  section,
  activeIndex,
  setActiveIndex,
}) => {
  const [pages, setPages] = useState([1, 2, 3, 4, 5]);

  // const [activeIndex, setActiveIndex] = useState(() => {
  //   const saved = sessionStorage.getItem("index");
  //   const initialValue = JSON.parse(saved);
  //   return initialValue || 0;
  // });

  useEffect(() => {
    sessionStorage.setItem("index", activeIndex);
  }, [activeIndex]);

  function handleClick(e) {
    setPage(e.target.innerHTML);
    executeScroll();

    if (e.target.innerHTML == Math.max(...pages) && e.target.innerHTML < 30) {
      let arr = [];
      pages.forEach((page) => {
        arr.push(page + 2);
      });
      setPages(arr);
    } else if (
      e.target.innerHTML == Math.min(...pages) &&
      e.target.innerHTML > 1
    ) {
      let arr = [];
      pages.forEach((page) => {
        arr.push(page - 2);
      });
      setPages(arr);
    }
  }

  function handleActive(i, e) {
    if (e.target.innerHTML == "1") {
      setActiveIndex(0);
      return;
    } else if (e.target.innerHTML == "31") {
      setActiveIndex(pages.length - 1);
      return;
    } else if (i + 1 == pages.length || i == 0) {
      setActiveIndex(2);
      return;
    } else {
      setActiveIndex(i);
    }
  }

  return (
    <LineWrapper>
      {pages.map((page, i) => {
        return (
          <Page
            key={i}
            onClick={(e) => {
              handleClick(e);
              handleActive(i, e);
            }}
            activeIndex={activeIndex == i ? 1 : 0}
          >
            {page}
          </Page>
        );
      })}
    </LineWrapper>
  );
};

export default NumberLine;
