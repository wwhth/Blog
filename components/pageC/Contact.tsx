import Link from "../Link";

export default function Contact({testZ}:{testZ:any}) {
  return (
    <div>
      <Link href={"/blog"}>博客</Link>
      {testZ}
    </div>
  );
}
