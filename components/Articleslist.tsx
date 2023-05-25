import { IArticle } from "@/types";
import React from "react";
import BlogCard from "./Blogcard";

interface IProptype {
  articles: IArticle[];
}

function ArticlesList({ articles }: IProptype) {
  return (
    <div className="grid lg: grid-cols-2 grid-gap gap-16 mt-16">
      {articles.map((article) => {
        return <BlogCard article={article} key={article.id} />;
      })}
    </div>
  );
}

export default ArticlesList;
