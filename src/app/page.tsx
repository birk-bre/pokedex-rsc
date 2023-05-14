import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/pokemon">
        <h1>My collection</h1>
      </Link>
      <Link href="/catch">
        <h1>Catch more</h1>
      </Link>
    </main>
  );
}
