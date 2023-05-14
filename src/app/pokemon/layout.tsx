export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-between p-4">
      <h1 className="text-3xl font-bold pb-2">My Collection</h1>
      {children}
    </div>
  );
}
