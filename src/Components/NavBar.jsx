import { useNavigate } from "react-router-dom";
import PageLink from "./PageLink";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button onClick={() => navigate("/")}>
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Joe Winter
            </span>
          </div>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <PageLink path={"/about"} text={"About"} />
            </li>
            <li>
              <PageLink path={"/projects"} text={"Projects"} />
            </li>
            <li>
              <PageLink path={"/contact"} text={"Contact"} />
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
