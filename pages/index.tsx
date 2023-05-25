import Image from "next/image";
import { Inter } from "next/font/google";
import { GetServerSideProps } from "next";
import { fetchArticles, fetchCategories } from "@/http";
import { AxiosResponse } from "axios";
import {
  ICategory,
  ICategoryAttribute,
  ICollectionResponse,
  IArticle,
} from "@/types";
import Tabs from "@/components/Tabs";
import ArticlesList from "@/components/Articleslist";
import qs from "qs";

interface IPropTypes {
  categories: {
    items: ICategory[];
  };
  articles: {
    items: IArticle[];
  };
}

const inter = Inter({ subsets: ["latin"] });

export default function Home({ categories, articles }: IPropTypes) {
  // console.log("categories", categories);

  return (
    <div>
      <head>
        <title>Coder's Blog Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Tabs categories={categories.items} />
      <ArticlesList articles={articles.items} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<IPropTypes> = async () => {
  const options = {
    populate: ["author.avatar"],
    sort: ["id:desc"],
  };
  const queryString = qs.stringify(options);
  console.log("Stringify");
  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
    await fetchArticles(queryString);

  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> =
    await fetchCategories();
  //console.log("categories", categories);

  return {
    props: {
      categories: {
        items: categories.data,
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination,
      },
    },
  };
};
