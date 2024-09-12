"use client";
import ListLayout from "@/layouts/ListLayoutWithTags";
import { genPageMetadata } from "app/seo";
import { useEffect, useState } from "react";

const POSTS_PER_PAGE = 5;

const metadata = genPageMetadata({ title: "Blog" });

export default function BlogPage() {
  // const posts = allCoreContent(sortPosts(allBlogs));
  const [posts, setPosts] = useState<any>([]);
  useEffect(() => {
    const getBlogList = async () => {
      const { data } = await fetch("http://101.200.232.30:3001/api/v1/article").then(
        (res) => res.json()
      );
      console.log("🚀 ~ getBlogList ~ data:", data);
      setPosts(data);
    };
    getBlogList();
  }, []);

  const pageNumber = 1;
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  );
}
