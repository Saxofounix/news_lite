import React, { useState, useEffect } from "react";
import { BreakingNews, LinkR, Title, Header } from "./breakingElements";

const Breaking = () => {
  let url = `https://content.guardianapis.com/search?q=1&section=politics&page-size=5&order-by=newest&type=article&show-fields=trailText,thumbnail&api-key=${process.env.REACT_APP_GUARDIAN}`;
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setData(json.response.results);
    };
    fetchData();
  }, []);

  return (
    <>
      {data ? (
        <BreakingNews>
          <Header>Breaking news</Header>
          {data.map((article, i) => {
            return (
              <Title key={i}>
                <LinkR to={`/${article.id}`}>{article.webTitle}</LinkR>
              </Title>
            );
          })}
        </BreakingNews>
      ) : null}
    </>
  );
};

export default Breaking;
