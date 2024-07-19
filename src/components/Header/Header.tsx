import SocialIcons from "./SocialIcons";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <div className="hidden lg:flex w-full max-w-[380px] py-14 flex-col items-center gap-4 text-[#fff]">
      <div className="w-[180px] h-[180px]">
        <img
          src={"https://lmpixels.com/demo/breezycv/light/1/img/main_photo.jpg"}
          alt="avatar"
          className="w-full h-full rounded-full"
        />
      </div>
      <h2>Truong Van Dat</h2>
      <h4 className="opacity-80 font-light">Frontend Developer</h4>
      <SocialIcons />
      <Button className="bg-transparent border-[#fff] border-2 mt-6 px-8 py-4 hover:bg-[#fff] hover:text-[#04b4e0]">Download CV</Button>
    </div>
  );
}

export default Header;
