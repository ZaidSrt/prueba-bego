
import Image from "next/image";
import Breadcrumb from "@/assets/img/Breadcrumb.png";

export default function BreadcrumbHome({ className = "", width = 0 }: CardBreadcrumbHomeProps) {
  return (
    <div className={`absolute ${className}`}>
      <Image src={Breadcrumb} alt="Breadcrumb" width={width} />
    </div>
  );
}