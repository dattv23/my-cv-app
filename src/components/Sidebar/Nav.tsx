import { Link, useLocation } from "react-router-dom";

import { MenuItem } from "@/types";
import { cn } from "@/lib/utils";

type NavProps = {
  menu: MenuItem[];
};

function Nav(props: NavProps) {
  const { menu } = props;
  const location = useLocation();
  const { pathname } = location;

  return (
    <div>
      <div className="hidden lg:block bg-white rounded-[24px] py-2">
        <nav>
          <ul>
            {menu.map((item) => (
              <li className="p-4 flex justify-center items-center">
                <Link
                  to={item.link}
                  className={cn(
                    "text-[#121219] hover:text-[#04b4e0]",
                    pathname === item.link && "text-[#04b4e0]"
                  )}
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
