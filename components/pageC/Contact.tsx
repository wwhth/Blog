import Link from "next/link";
import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}
const Contact: FC<IProps> = memo(() => {
  return (
    <div>
      <Link href="/blog">博客</Link>
    </div>
  );
});

export default Contact;
