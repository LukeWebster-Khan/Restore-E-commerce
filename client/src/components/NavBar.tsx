import { midLinks, rightLinks } from "@/lib/routes-constants";
import { ModeToggle } from "./mode-toggle";
import { NavLink } from "react-router-dom";
import { ShoppingBasket } from "lucide-react";
import clsx from "clsx";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center my-7 mx-1">
      <div className="flex items-center space-x-4">
        <NavLink to="/">
          <h1>Re-store</h1>
        </NavLink>
        <div className="flex space-x-3 align-top">
          <ModeToggle />
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="flex space-x-4">
          {midLinks.map(({ title, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                clsx(
                  isActive ? "text-purple-500" : "",
                  "hover:text-gray-500 transition-all capitalize"
                )
              }
            >
              {title}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="relative">
          <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs absolute top-[-12px] right-[-12px]">
            3
          </span>
          <ShoppingBasket className="button button-icon" size={30} />
        </div>
        {rightLinks.map(({ title, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              clsx(
                isActive ? "text-gray-500" : "",
                "hover:text-gray-500 transition-all capitalize"
              )
            }
          >
            {title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
