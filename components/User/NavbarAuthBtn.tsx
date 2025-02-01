import Link from "next/link";

function NavbarAuthBtn() {
  return (
    <div className="hidden md:relative md:block">
      <Link
        className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
        href="/login"
      >
        Login
      </Link>
    </div>
  );
}

export default NavbarAuthBtn;
