"use client";
import { useEffect, useState } from "react";

export default function Tags() {
  const [tagsList, setTagsList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await fetch("http://localhost:3001/api/v1/label").then(
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
        <div key={tag.id}>{tag.name}</div>
      ))}
    </>
  );
}
