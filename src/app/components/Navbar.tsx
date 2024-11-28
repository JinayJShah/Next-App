"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { id: 1, name: "Products", href: "/products" },
    { id: 2, name: "Custom List", href: "/customlist" },
  ];

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className=" flex flex-wrap items-center justify-center p-4">
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex ">
            {navItems.map((item) => (
              <li key={item?.id}>
                <Link
                  href={item?.href}
                  className={`px-4 py-2  ${
                    pathname === item.href ? "text-blue-500" : "text-gray-800"
                  }`}
                >
                  {item?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
