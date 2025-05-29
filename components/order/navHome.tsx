export default function NavHome({ navMenu = [], navActive = "", setNavActive = () => { } }: CardNavHomeProps) {

  return (
    <nav className="flex items-start justify-between mt-10">
      {navMenu.map((item: string, index: number) => (
        <div className="w-[100px]" key={`nav-${index}`}>
          <span className={`${navActive == item ? 'text-bego' : 'text-white'} text-lg cursor-pointer`} onClick={() => setNavActive(item)}>{item}</span>
          {navActive == item && <span className="block mt-1 border border-bego w-1/3"></span>}
        </div>
      ))}
    </nav>
  );
}