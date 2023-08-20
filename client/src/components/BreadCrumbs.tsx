import { Link } from "react-router-dom";

interface BreadCrumb {
  name: string;
  link: string;
}

interface BreadCrumbsProps {
  data: BreadCrumb[];
}

export default function BreadCrumbs({ data }: BreadCrumbsProps) {
  return (
    <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap">
      {data.map((item, index) => (
        <div key={index} className="text-black opacity-50 text-xs md:text-sm md:font-roboto">
          <Link to={item.link}>{item.name}</Link>
          {index !== data.length - 1 && <span className="mx-1">/</span>}
        </div>
      ))}
    </div>
  );
}
