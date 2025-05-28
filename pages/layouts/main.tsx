
export default function Main({ children }: MainProps) {

  return (
    <main className="bg-[#000] h-screen overflow-y-auto">
      <div className="container m-auto py-8 px-5">
        {children}
      </div>
    </main>
  );
};