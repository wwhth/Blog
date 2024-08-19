"use client";
import ListLayout from "@/layouts/ListLayoutWithTags";
import { useEffect, useState } from "react";

export default function tagPost({ params }: { params: { slug: number[] } }) {
  const id = params.slug[0];
  const [filteredPosts, setFilteredPosts] = useState([]);
  useEffect(() => {
    async function getPostsByTagId() {
      const { data } = await fetch(
        `http://localhost:3001/api/v1/article/label/${id}`
      ).then((res) => res.json());
      setFilteredPosts(data);
    }
    getPostsByTagId();
  }, []);
  return <ListLayout posts={filteredPosts} />;
}
