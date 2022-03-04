import { useState, useEffect } from "react";
import Navbar from "./components/navBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home-page";
import Article from "./components/article-template";
import HomeArticles from "./components/article-pages";
import Footer from "./components/footer";

function App() {
  const [page, setPage] = useState(() => {
    const saved = sessionStorage.getItem("page");
    const initialValue = JSON.parse(saved);
    return initialValue || 1;
  });

  const [activeIndex, setActiveIndex] = useState(() => {
    const saved = sessionStorage.getItem("index");
    const initialValue = JSON.parse(saved);
    return initialValue || 0;
  });

  return (
    <>
      <BrowserRouter>
        <Navbar setPage={setPage} setActiveIndex={setActiveIndex} />
        <Switch>
          <Route exact path="/">
            <Home
              page={page}
              setPage={setPage}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </Route>

          <Route path="/section/:section">
            <HomeArticles
              page={page}
              setPage={setPage}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </Route>

          <Route path="/:id">
            <Article />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
