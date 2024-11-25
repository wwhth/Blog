"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Tags() {
  const [tagsList, setTagsList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await fetch("http://101.200.232.30:3001/api/v1/label").then(
        (res) => res.json()
      );
      console.log("🚀 ~ fetchData ~ data:", data);
      setTagsList(data);
    }
    fetchData();
  }, []);
  return (
    <>
      {tagsList.map((tag: any) => (
        <Link key={tag.id}
          href={`/tags/${tag.id}`}
          className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
          aria-label={`View posts tagged ${tag}`}
        >
          {`${tag.name}`}
        </Link>
      ))}
    </>
  );
}
