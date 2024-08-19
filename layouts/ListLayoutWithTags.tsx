/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";

import { usePathname } from "next/navigation";
import { formatDate } from "pliny/utils/formatDate";
import Link from "@/components/Link";
import Tag from "@/components/Tag";
import siteMetadata from "@/data/siteMetadata";
import { useEffect, useState } from "react";

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
            Previous
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
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button
            className="cursor-auto disabled:opacity-50"
            disabled={!nextPage}
          >
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  );
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: {
  posts: any[];
  title?: string;
  initialDisplayPosts?: any[];
  pagination?: any;
}) {
  const pathname = usePathname();
  const [tagList, setTagsList] = useState<any>([]);
  const [blogList, setBlogList] = useState<any>([]);
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
  const displayPosts =
    initialDisplayPosts.length > 0 ? initialDisplayPosts : posts;

  return (
    <>
      <div>
        <div className="pb-6 pt-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
        </div>
        <div className="flex sm:space-x-24">
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
              {tagList.map((t) => {
                return (
                  <li key={t.id} className="my-3">
                    {pathname.split("/tags/")[1] == t.id ? (
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
            </div>
          </div>
          <div>
            <ul>
              {displayPosts.length > 0 ? (
                displayPosts.map((post) => {
                  const { id, date, title, introduce, label, label_id } = post;
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
                              <Tag key={label} text={label} url={label_id} />
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {introduce}
                          </div>
                        </div>
                      </article>
                    </li>
                  );
                })
              ) : (
                <div className="text-center text-gray-500 dark:text-gray-400">
                  No posts found
                </div>
              )}
            </ul>
            {pagination && pagination.totalPages > 1 && (
              <Pagination
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
