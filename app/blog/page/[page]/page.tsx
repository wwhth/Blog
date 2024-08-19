"use client";
import { getAllPosts } from "@/data/datas";
import ListLayout from "@/layouts/ListLayoutWithTags";
import { useEffect, useState } from "react";

const POSTS_PER_PAGE = 5;

export default function Page({ params }: { params: { page: string } }) {
  const [blogList, setBlogList] = useState<any>([]);
  useEffect(() => {
    const getBlogList = async () => {
      const { data } = await getAllPosts();
      setBlogList(data);
    };

    getBlogList();
  }, []);
  const posts = blogList;
  const pageNumber = parseInt(params.page as string);
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
