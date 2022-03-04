import React, { useEffect, useState } from "react";
import { Loading } from "../../article-pages/homeArticles";
import {
  HeroWrapper,
  Title,
  Title2,
  MainNews,
  SecondaryNews,
  Secondary,
  Left,
  Right,
  Img,
  P,
  LinkR,
} from "./heroElements";

//cf24131b-ef6b-4f3f-9eb8-edb528ee2cd5

const Hero = () => {
  let url = `https://content.guardianapis.com/search?q=1&section=world&page-size=5&order-by=relevance&type=article&show-fields=trailText,thumbnail&api-key=${process.env.REACT_APP_GUARDIAN}`;
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
        <HeroWrapper>
          <>
            <MainNews key={data[0].id}>
              <Left>
                <Title>
                  <LinkR to={`/${data[0].id}`}>{data[0].webTitle}</LinkR>
                </Title>
                <P>{data[0].fields.trailText}</P>
              </Left>
              <Right>
                <LinkR to={`/${data[0].id}`}>
                  <Img src={data[0].fields.thumbnail}></Img>
                </LinkR>
              </Right>
            </MainNews>

            <SecondaryNews>
              {data.map((article, index) => {
                if (index == 0) return;
                return (
                  <Secondary key={article.id}>
                    <Left>
                      <Title2>
                        <LinkR to={`/${article.id}`}>{article.webTitle}</LinkR>
                      </Title2>
                    </Left>
                    <Right>
                      <LinkR to={`/${article.id}`}>
                        <Img src={article.fields.thumbnail}></Img>
                      </LinkR>
                    </Right>
                  </Secondary>
                );
              })}
            </SecondaryNews>
          </>
        </HeroWrapper>
      ) : (
        <Loading></Loading>
      )}
    </>
  );
};

export default Hero;
