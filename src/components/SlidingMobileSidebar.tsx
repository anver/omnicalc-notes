import { Dialog, Transition } from "@headlessui/react";
import { CalendarIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import GithubSourceButton from "./GithubSourceButton";
import NavLink from "./NavLink";
type Props = { show: boolean; onClose: () => void };

const SlidingMobileSidebar: React.FC<Props> = ({ show, onClose }) => {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 flex z-40 lg:hidden"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={onClose}
                >
                  <span className="sr-only">Close sidebar</span>
                  <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </Transition.Child>
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Tomboy_logo.svg/64px-Tomboy_logo.svg.png"
                  alt="Notes App"
                />
                <span className="font-bold ml-2 self-end">Notes App</span>
              </div>
              <nav aria-label="Sidebar" className="mt-5">
                <div className="px-2 space-y-1">
                  <NavLink
                    to="/"
                    Icon={CalendarIcon}
                    title="Dashboard"
                    selected={true}
                  />
                </div>
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <button
                className="flex-shrink-0 group block"
                onClick={() => {
                  window.open("https://github.com/anver", "_blank");
                }}
              >
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-10 w-10 rounded-full"
                      src="https://avatars.githubusercontent.com/u/506491?v=4"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                      Anver Sadutt
                    </p>
                    <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                      View profile
                    </p>
                  </div>
                </div>
              </button>
            </div>
            <GithubSourceButton />
          </div>
        </Transition.Child>
        <div className="flex-shrink-0 w-14" aria-hidden="true">
          {/* Force sidebar to shrink to fit close icon */}
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SlidingMobileSidebar;
