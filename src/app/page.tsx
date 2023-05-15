import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-between">
      <Link href="/pokemon">
        <div className="bg-slate-400 h-[50vh] flex items-center justify-center w-screen">
          <h1>My collection</h1>
        </div>
      </Link>
      <Link href="/catch">
        <div className="bg-blue-400 h-[50vh] items-center justify-center flex w-screen">
          <h1>Catch more</h1>
        </div>
      </Link>
    </main>
  );
}
