import ThemeToggle from "./ThemeToggle";
import ExternalLinkButton from "./ExternalLinkButton";
import GitHubIcon from "./Icons/GitHubIcon";
import { useEffect, useState } from "react";

export default function NavBar({
  scrollToProjects,
  scrollToHome,
  scrollToAbout,
  scrollToContact,
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {!isMobile && (
        <nav className="bg-gray-50s border-gray-200 dark:bg-gray-900 shadow-lg fixed w-full top-0 z-50">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <button onClick={scrollToHome}>
              <div className="flex items-center space-x-reverse">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Joe Winter
                </span>
              </div>
            </button>
            <div className="block w-auto">
              <ul className="font-medium flex p-0 flex-row space-x-8 mt-0 bg-white dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <button onClick={scrollToAbout}>
                    <div className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 dark:hover:bg-transparent">
                      About
                    </div>
                  </button>
                </li>
                <li>
                  <button onClick={scrollToProjects}>
                    <div className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 dark:hover:bg-transparent">
                      Projects
                    </div>
                  </button>
                </li>
                <li>
                  <button onClick={scrollToContact}>
                    <div className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 dark:hover:bg-transparent">
                      Contact
                    </div>
                  </button>
                </li>
                <li>
                  <ExternalLinkButton
                    url={"https://github.com/joe-winter"}
                    content={<GitHubIcon />}
                  />
                </li>
                <li>
                  <ThemeToggle />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
      {isMobile && (
        <nav className="bg-gray-50s border-gray-200 dark:bg-gray-900 shadow-lg fixed w-full top-0 z-50">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <button onClick={scrollToHome}>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Joe Winter
                </span>
              </div>
            </button>
            <ul className="font-medium flex p-0 flex-row space-x-8 mt-0 bg-white dark:bg-gray-900 dark:border-gray-700 items-center">
              <li>
                <ExternalLinkButton
                  url={"https://github.com/joe-winter"}
                  content={<GitHubIcon />}
                />
              </li>
              <li>
                <ThemeToggle />
              </li>
              <li>
                <button onClick={() => setIsOpen(!isOpen)}>
                <svg
                  className="w-5 h-5 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
                </button>
              </li>
            </ul>
            <div className="w-full md:block md:w-auto">
              {isOpen && (
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <button onClick={scrollToAbout}>
                      <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        About
                      </div>
                    </button>
                  </li>
                  <li>
                    <button onClick={scrollToProjects}>
                      <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Projects
                      </div>
                    </button>
                  </li>
                  <li>
                    <button onClick={scrollToContact}>
                      <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Contact
                      </div>
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
