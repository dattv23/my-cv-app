import { Link, useLocation } from "react-router-dom";

import { MenuItem } from "@/types";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";

type ArrowsNavProps = {
  menu: MenuItem[];
};

function ArrowsNav(props: ArrowsNavProps) {
  const { menu } = props;
  const location = useLocation();
  const currentIndex = menu.findIndex(
    (item) => item.link === location.pathname
  );

  return (
    <div className="bg-white rounded-[24px] py-2 flex flex-col">
      <Link
        to={menu[currentIndex === menu.length - 1 ? 0 : currentIndex + 1].link}
        className="p-4 text-[#121219] hover:text-[#04b4e0]"
      >
        <ArrowLeftIcon />
      </Link>
      <Link
        to={menu[currentIndex === 0 ? menu.length - 1 : currentIndex - 1].link}
        className="p-4 text-[#121219] hover:text-[#04b4e0]"
      >
        <ArrowRightIcon />
      </Link>
    </div>
  );
}

export default ArrowsNav;
