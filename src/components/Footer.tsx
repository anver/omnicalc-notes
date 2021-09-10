import { useStateContext } from "../context/appContext";

const Footer = () => {
  const { notes } = useStateContext();
  return (
    <div className="border-t fixed w-full bottom-0 mt-auto border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
      <div className="px-6 py-5 text-sm font-medium text-center lg:text-left">
        <span className="text-gray-600">Total Notes : {notes.length}</span>
      </div>
    </div>
  );
};

export default Footer;
