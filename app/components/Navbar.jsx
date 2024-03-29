import Link from "next/link";
import { FaBrain } from "react-icons/fa";
import LogoutButton from "./LogoutButton";

const checkAuthentication = () => {
  return true;
};

const Navbar = () => {
  const authenticated = checkAuthentication();
  return (
    <nav className="w-full px-10 pt-4 sm:textsm">
      <div className="bg-[#3E3232] flex justify-between items-center px-10 py-3 max-sm:px-4 rounded-full shadow-xl">
        <div className="flex gap-x-3 max-sm:gap-x-2 items-center">
          <Link href="/">
            <FaBrain className="w-5 h-5" />
          </Link>
          <h1 className="text-xl font-bold tracking-wide">BlogPress</h1>
        </div>
        <div>
          {authenticated ? (
            <div>
              <LogoutButton />
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
