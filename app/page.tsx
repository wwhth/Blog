"use client";

import { useEffect, useState } from "react";
import Main from "./Main";

export default function Home() {
  const [bloList, setBlogList] = useState<any>([]);
  useEffect(() => {
    const getBlogList = async () => {
      const { data } = await fetch("http://101.200.232.30:3001/api/v1/article").then(
        (res) => res.json()
      );

      let reData = data.reverse()
      setBlogList(reData);
    };
    getBlogList();
  }, []);
  return <Main posts={bloList} />;
}
