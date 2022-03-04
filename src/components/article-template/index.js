import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./article.css";
import Widgets from "../widgets";
import {
  ArticleBody,
  WidgetWrapper,
  Wrapper,
  Loading,
} from "./ArticleElements";

const Article = () => {
  const [data, setData] = useState();

  let { id } = useParams();
  id = window.location.pathname;

  let url = `https://content.guardianapis.com/${id}?api-key=${process.env.REACT_APP_GUARDIAN}&show-fields=body`;

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setData(json.response.content);
    };
    fetchData();
  }, [id]);

  return (
    <>
      {data ? (
        <Wrapper>
          <ArticleBody>
            <h1>{data.webTitle}</h1>
            <div
              className="article"
              dangerouslySetInnerHTML={{ __html: data.fields.body }}
            ></div>
          </ArticleBody>
          <WidgetWrapper>
            <Widgets></Widgets>
          </WidgetWrapper>
        </Wrapper>
      ) : (
        <Loading></Loading>
      )}
    </>
  );
};

export default Article;
