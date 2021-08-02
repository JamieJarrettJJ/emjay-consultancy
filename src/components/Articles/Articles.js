import React from "react";

import { ArticlesCard, ArticlesH2, ArticlesP } from "./ArticlesElements";

const ArticleCards = ({ pic_url, article_url, name, description, praise }) => {
  return (
    <a href={article_url} target="_blank">
      <ArticlesCard>
        <img src={pic_url} alt={name} className="a-pic" />
        <ArticlesH2>{name}</ArticlesH2>
        <ArticlesP>{description}</ArticlesP>
      </ArticlesCard>
    </a>
  );
};

export default ArticleCards;
