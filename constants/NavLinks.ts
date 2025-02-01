export const NavLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
  {
    name: "Discover",
    children: [
      { name: "Our Mission", path: "/mission" },
      { name: "Events", path: "/events" },
      { name: "Sermons", path: "/sermons" },
    ],
  },
];
