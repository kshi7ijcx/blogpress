import Link from "next/link";
import { FaBrain } from "react-icons/fa";
import Button from "./Button";

const checkAuthentication = () => {
  return false;
};

const Navbar = () => {
  const authenticated = checkAuthentication();

  return (
    <nav className="w-full px-10 pt-4 sm:textsm">
      <div className="bg-[#3E3232] flex justify-between items-center px-10 py-3 max-sm:px-8 rounded-full shadow-xl">
        <div className="flex gap-x-3">
          <Link href="/">
            <FaBrain className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-bold tracking-wide">BlogPress</h1>
        </div>
        <div>
          {authenticated ? (
            <Link href="/api/logout">
              <Button value="Logout" />
            </Link>
          ) : (
            <div className="flex gap-3">
              <Link href="/login">
                <Button value="Login" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
