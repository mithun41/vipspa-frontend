import Link from "next/link";

export default function Menu() {
  return (
    <>
      <ul className="navigation">
        <li className="current ">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/page-about">About</Link>
        </li>
        <li>
          <Link href="/page-services">Services</Link>
        </li>
        <li>
          <Link href="/page-pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/news-grid">Blog</Link>
        </li>
        <li>
          <Link href="/page-contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
