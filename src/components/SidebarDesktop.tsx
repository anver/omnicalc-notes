import { HomeIcon } from "@heroicons/react/outline";
import GithubSourceButton from "./GithubSourceButton";
import NavLink from "./NavLink";

const SidebarDesktop = () => {
  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img
                className="h-8 w-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Tomboy_logo.svg/64px-Tomboy_logo.svg.png"
                alt="notes app logo"
              />
              <span className="font-bold ml-2 self-end">Notes App</span>
            </div>
            <nav className="mt-5 flex-1" aria-label="Sidebar">
              <div className="px-2 space-y-1">
                <NavLink
                  to="/"
                  Icon={HomeIcon}
                  title="Dashboard"
                  selected={true}
                />
              </div>
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <button
              className="flex-shrink-0 w-full group block"
              onClick={e => {
                e.preventDefault();
                window.open("https://github.com/anver", "_blank");
              }}
            >
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block h-9 w-9 rounded-full"
                    src="https://avatars.githubusercontent.com/u/506491?v=4"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    Anver Sadutt
                  </p>
                  <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                    View profile
                  </p>
                </div>
              </div>
            </button>
          </div>
          <div className="flex">
            <GithubSourceButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarDesktop;
