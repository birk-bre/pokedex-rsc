export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-between p-4">
      {children}
    </div>
  );
}
