"use client";
import { useEffect, useState } from "react";

export default function BlogIndex() {
  const [bloList, setBlogList] = useState<any>([]);
  useEffect(() => {
    const getBlogList = async () => {
      const { data } = await fetch("http://localhost:3001/api/v1/article").then(
        (res) => res.json()
      );
      console.log("🚀 ~ getBlogList ~ data:", data);
      setBlogList(data);
    };
    getBlogList();
  }, []);

  return (
    <div>
      {bloList.map((item: any) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
}
