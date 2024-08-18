"use client";

import { useEffect, useState } from "react";
import siteMetadata from "@/data/siteMetadata";

import { formatDate } from "pliny/utils/formatDate";
import Tag from "@/components/Tag";
import Link from "next/link";
export default function BlogDetail({ params }: { params: { slug: string[] } }) {
  const [article, setArticle] = useState<any>({});
  const id = decodeURI(params.slug.join("/"));
  useEffect(() => {
    async function fetchData() {
      const { data } = await fetch(
        `http://localhost:3001/api/v1/article/${id}`
      ).then((res) => res.json());
      console.log("data: ", data);
      setArticle(data[0]);
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="pt-6 xl:pb-6">
        <h1 className="flex justify-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          {article.title}
        </h1>
        <div className="flex  justify-center">
          <time dateTime={article.date}>
            {formatDate(article.date, siteMetadata.locale)}
          </time>
        </div>
      </div>
      <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mb-6"></div>
      <div className="flex">
        <div className="w-1/3">
          <div className="">
            {article.category && (
              <div className="py-4 xl:py-8">
                <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Category
                </h2>
                <div className="flex flex-wrap">
                  <Tag key={article.category} text={article.category} />
                </div>
              </div>
            )}
            {article.label && (
              <div className="py-4 xl:py-8">
                <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Tag
                </h2>
                <div className="flex flex-wrap">
                  <Tag key={article.label} text={article.label} />
                </div>
              </div>
            )}
            <div className="pt-4 xl:pt-8">
              <Link
                href={`/blog`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="Back to the blog"
              >
                &larr; 返回博客列表
              </Link>
            </div>
          </div>
        </div>
        <div
          className="w-2/3"
          dangerouslySetInnerHTML={{ __html: article.content }}
        ></div>
      </div>
    </>
  );
}
