
import Search from "@/assets/img/Search.png";
import Image from "next/image";



export default function SearchHome({ searchValue = "", setSearchValue = () => { } }: CardSarchHomeProps) {
  return (
    <div className="mt-10 flex items-center border border-b-gray-500/50 justify-between gap-4">
      <Image src={Search} alt="Search" />
      <input type="text" className="w-full outline-none text-white text-lg py-2" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
    </div>
  );
}