import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Widgets from "../widgets";
import {
  HomeArticlesWrapper,
  Article,
  Right,
  Left,
  Img,
  Title,
  WidgetWrapper,
  ArticlesWrapper,
  LinkR,
  Loading,
  HeaderText,
} from "./homeArticles";
import NumberLine from "./number-pages";

const HomeArticles = ({ page, setPage, activeIndex, setActiveIndex }) => {
  let { section } = useParams();

  const myRef = useRef(null);

  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setData(json.response.results);
    };
    fetchData();
  }, [section, page]);

  useEffect(() => {
    sessionStorage.setItem("page", page);
  }, [page]);

  function executeScroll() {
    let headerOffset = -75;
    let elementPosition = myRef.current.getBoundingClientRect();
    let offsetPosition = elementPosition.y + window.pageYOffset + headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }

  let url = `https://content.guardianapis.com/search?q=1&section=${
    section ? section : "world"
  }&page-size=10&page=${page}&order-by=newest&type=article&show-fields=trailText,thumbnail&api-key=${
    process.env.REACT_APP_GUARDIAN
  }`;

  return data ? (
    <>
      <HeaderText ref={myRef}>{section}</HeaderText>
      <HomeArticlesWrapper>
        <ArticlesWrapper>
          {data.map((article, i) => {
            return (
              <Article key={i}>
                <Left>
                  <LinkR to={`/${article.id}`}>
                    <Img src={article.fields.thumbnail}></Img>
                  </LinkR>
                </Left>
                <Right>
                  <LinkR to={`/${article.id}`}>
                    <Title>{article.webTitle}</Title>
                  </LinkR>
                </Right>
              </Article>
            );
          })}
        </ArticlesWrapper>
        <WidgetWrapper>
          <Widgets></Widgets>
        </WidgetWrapper>
      </HomeArticlesWrapper>
      <NumberLine
        setPage={setPage}
        executeScroll={executeScroll}
        page={page}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </>
  ) : (
    <Loading />
  );
};

export default HomeArticles;
