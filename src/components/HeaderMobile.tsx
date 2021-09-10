import { MenuIcon } from "@heroicons/react/outline";
type Props = { openSidebar: () => void };

const HeaderMobile: React.FC<Props> = ({ openSidebar }) => {
  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
        <div className="flex items-center">
          <img
            className="h-8 w-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Tomboy_logo.svg/64px-Tomboy_logo.svg.png"
            alt="Notes App"
          />
          <span className="font-bold ml-2 self-end">Notes App</span>
        </div>
        <div>
          <button
            type="button"
            className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
            onClick={openSidebar}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
