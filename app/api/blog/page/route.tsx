// pages/api/hello/route.tsx
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(1111);
  // 只允许GET请求
  if (req.method === "GET") {
    // 返回JSON响应
    res.status(200).json({ name: "John Doe" });
  } else {
    // 如果请求方法不是GET，则返回405 Method Not Allowed
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
