"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div>
      Something went wrong...
      <Link href="/">
        <h1 className="p-2 font-bold text-xl">Go home</h1>
      </Link>
    </div>
  );
}
