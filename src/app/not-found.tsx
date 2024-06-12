import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found Page</h2>
      <p>{`Page doesn't exist`}</p>
      <Link href="/">Go to Home</Link>
    </div>
  );
}
