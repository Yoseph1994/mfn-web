import Avatar from "@/components/User/Avatar";
import NavbarAuthBtn from "./NavbarAuthBtn";
import NavbarSheetToggler from "./NavbarSheetToggler";
import Logo from "@/components/User/Logo";
import DeskTopNav from "@/components/User/DeskTopNav";

function Navbar() {
  const isLoggedIn = true;

  return (
    <div className="bg-white shadow-lg sticky top-0 z-50 w-full">
      <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              {/* Logo-svg  */}
              <Logo />
              {/* Logo-svg_end */}
            </div>
            {/* links  */}
            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                {/* navLinks-start */}
                <DeskTopNav />
                {/* navLinks-end */}
              </nav>
              {/* avatar */}
              {isLoggedIn ? <Avatar /> : <NavbarAuthBtn />}
              {/* Avatar-end  */}
              {/* toggle-bar  */}
              <NavbarSheetToggler />
              {/* toggle-bar_end   */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
