"use client";

import { useEffect, useState } from "react";
import Main from "./Main";

export default function Home() {
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
  return <Main posts={bloList} />;
}
