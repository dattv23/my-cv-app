import Nav from "./Nav";
import ArrowsNav from "./ArrowsNav";
import {
  DocumentIcon,
  FlashIcon,
  HomeIcon,
  MailIcon,
  UserIcon,
} from "@/components/icons";
import routes from "@/config/routes";

function Sidebar() {
  const menu = [
    { icon: <HomeIcon />, link: routes.home },
    { icon: <UserIcon />, link: routes.about },
    { icon: <DocumentIcon />, link: routes.resume },
    { icon: <FlashIcon />, link: routes.projects },
    { icon: <MailIcon />, link: routes.contact },
  ];
  return (
    <div className="flex flex-col items-center justify-between">
      <Nav menu={menu} />
      <ArrowsNav menu={menu} />
    </div>
  );
}

export default Sidebar;
