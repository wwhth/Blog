"use client";
import { useEffect, useState } from "react";
import siteMetadata from "@/data/siteMetadata";
import { formatDate } from "pliny/utils/formatDate";
import Link from "@/components/Link";
import Tag from "@/components/Tag";
import { usePathname } from "next/navigation";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname();
  const basePath = pathname.split("/")[1];
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button
            className="cursor-auto disabled:opacity-50"
            disabled={!prevPage}
          >
            上一页
          </button>
        )}
        {prevPage && (
          <Link
            href={
              currentPage - 1 === 1
                ? `/${basePath}/`
                : `/${basePath}/page/${currentPage - 1}`
            }
            rel="prev"
          >
            上一页
          </Link>
        )}
        <span>
          {currentPage} / {totalPages}
        </span>
        {!nextPage && (
          <button
            className="cursor-auto disabled:opacity-50"
            disabled={!nextPage}
          >
            下一页
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            下一页
          </Link>
        )}
      </nav>
    </div>
  );
}
export default function BlogIndex() {
  const [blogList, setBlogList] = useState<any>([]);
  const [tagList, setTagsList] = useState<any>([]);
  const pathname = usePathname();
  useEffect(() => {
    const getBlogList = async () => {
      const { data } = await fetch("http://localhost:3001/api/v1/article").then(
        (res) => res.json()
      );
      console.log("🚀 ~ getBlogList ~ data:", data);
      setBlogList(data);
    };
    const getTagsList = async () => {
      const { data } = await fetch("http://localhost:3001/api/v1/label").then(
        (res) => res.json()
      );
      setTagsList(data);
    };
    getBlogList();
    getTagsList();
  }, []);

  function tagCounts(tagId) {
    return blogList.filter((item: any) => item.label_id === tagId).length;
  }
  return (
    <div className="flex  gap-4">
      <div className="w-1/3">
        {/* {tagList.map((item: any) => {
          return <div key={item.id}>{item.name}</div>;
        })} */}
        <div className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
          <div className="px-6 py-4">
            {pathname.startsWith("/blog") ? (
              <h3 className="font-bold uppercase text-primary-500">
                All Posts
              </h3>
            ) : (
              <Link
                href={`/blog`}
                className="font-bold uppercase text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
              >
                All Posts
              </Link>
            )}
            <ul>
              {tagList.map((t) => {
                return (
                  <li key={t.id} className="my-3">
                    {pathname.split("/tags/")[1] === t.id ? (
                      <h3 className="inline px-3 py-2 text-sm font-bold uppercase text-primary-500">
                        {`${t.name} (${tagCounts(t.id)})`}
                      </h3>
                    ) : (
                      <Link
                        href={`/tags/${t.id}`}
                        className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
                        aria-label={`View posts tagged ${t}`}
                      >
                        {`${t.name} (${tagCounts(t.id)})`}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-2/3">
        <div>
          <ul>
            {blogList.map((post) => {
              const { id, date, title, introduce, label } = post;
              return (
                <li key={id} className="py-5">
                  <article className="flex flex-col space-y-2 xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date} suppressHydrationWarning>
                          {formatDate(date, siteMetadata.locale)}
                        </time>
                      </dd>
                    </dl>
                    <div className="space-y-3">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <Link
                            href={`/blog/${id}`}
                            className="text-gray-900 dark:text-gray-100"
                          >
                            {title}
                          </Link>
                        </h2>
                        <div className="flex flex-wrap">
                          {<Tag key={label} text={label} />}
                        </div>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {introduce}
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
          {blogList && blogList.length > 1 && (
            <Pagination
              currentPage={1}
              totalPages={Math.floor(blogList.length / 5)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
