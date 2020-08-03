import React, { useEffect, useState } from "react";

let apiUrl = "https://api.nytimes.com/svc/topstories/v2";
let apiKey = "hG1INbopfzsvP4nivAcxG1RFSiVedeKH";
let type ="world.json";

function News() {
  const [news, setNews] = useState(null);
  useEffect(() => {
    let api = `${apiUrl}/${type}?api-key=${apiKey}`;
    fetch(api).then(response => response.json()).then(data => {
      setNews(data);
    })
  }, []);

  return (
    news && news.results.splice(0,10).map((article, index) => {
      return (
        <article key={article.url}>
          <a href={article.url}>
            <img alt={index} width="200px" src={article.multimedia[0].url} />
            <div className="articleText">
              <h4>{article.title}</h4>
              <p>{article.abstract}</p>
            </div>
          </a>
        </article>
      )
    })
  );
}

export default News;