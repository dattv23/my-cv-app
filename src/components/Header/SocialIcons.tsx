import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

import { FacebookIcon } from "@/components/icons";

function SocialIcons() {
  const socials = [
    { icon: <GitHubLogoIcon width={24} height={24} />, link: "https://github.com/dattv23" },
    {
      icon: <LinkedInLogoIcon width={24} height={24} />,
      link: "https://www.linkedin.com/in/soicodonnn/",
    },
    { icon: <FacebookIcon />, link: "https://www.facebook.com/soiiicodon" },
  ];

  return (
    <div className="flex gap-4">
      {socials.map((item, id) => (
        <Link to={item.link} key={id}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
}

export default SocialIcons;
