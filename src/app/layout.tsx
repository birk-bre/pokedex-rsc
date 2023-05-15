import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ClientContext } from "./client-context";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pokedex",
  description: "Catch and collect pokemon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-pink-100">
      <body className={inter.className}>
        <div className="flex flex-col">
          <div className="flex gap-4 items-center justify-center">
            <Link href="/pokemon">
              <h1 className="text-xl font-bold p-2 bg-slate-200 rounded-md">
                My Collection
              </h1>
            </Link>
            <Link href="/catch">
              <h1 className="text-xl font-bold p-2 bg-slate-200 rounded-md">
                Catch more
              </h1>
            </Link>
          </div>
          <ClientContext>{children}</ClientContext>
        </div>
      </body>
    </html>
  );
}
